// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IWasteToken {
    function mint(address to, uint256 amount) external;
}

interface IWastePriceProvider {
    function getWastePrice(uint256 wasteTypeId) external view returns (uint256);
}

interface IWasteDataProvider {
    function getCarbonEmissionRate(uint256 wasteTypeId) external view returns (uint256);
}

interface ISocialNodeRegistry {
    function isSocialNode(address node) external view returns (bool);
}

contract WasteSettlement is Ownable {
    struct WasteTrade {
        address user;
        uint256[] wasteTypeIds;
        uint256[] amounts; // Amounts in grams
        bool approved;
        bool rejected;
        bool settled;
    }

    // Address of the USDC token contract
    IERC20 public usdc;

    // Address of the WasteToken contract
    IWasteToken public wasteToken;

    // Address of the WastePriceProvider contract
    IWastePriceProvider public wastePriceProvider;

    // Address of the WasteDataProvider contract
    IWasteDataProvider public wasteDataProvider;

    // Address of the SocialNodeRegistry contract
    ISocialNodeRegistry public socialNodeRegistry;

    // Track all trades by their ID
    uint256 public tradeCounter;
    mapping(uint256 => WasteTrade) public trades;

    // Events
    event TradeSubmitted(uint256 tradeId, address indexed user);
    event TradeApproved(uint256 tradeId, address indexed socialNode);
    event TradeRejected(uint256 tradeId, address indexed socialNode);
    event TradeSettled(uint256 tradeId, address indexed user, uint256 wasteTokenAmount, uint256 usdcAmount);

    constructor(
        address _usdc,
        address _wasteToken,
        address _wastePriceProvider,
        address _wasteDataProvider,
        address _socialNodeRegistry
    ) {
        usdc = IERC20(_usdc);
        wasteToken = IWasteToken(_wasteToken);
        wastePriceProvider = IWastePriceProvider(_wastePriceProvider);
        wasteDataProvider = IWasteDataProvider(_wasteDataProvider);
        socialNodeRegistry = ISocialNodeRegistry(_socialNodeRegistry);
    }

    // Submit a trade for waste processing
    function submitWasteTrade(uint256[] calldata wasteTypeIds, uint256[] calldata amounts) external {
        require(wasteTypeIds.length == amounts.length, "Mismatched inputs");
        require(wasteTypeIds.length > 0, "No waste submitted");

        trades[tradeCounter] = WasteTrade({
            user: msg.sender,
            wasteTypeIds: wasteTypeIds,
            amounts: amounts,
            approved: false,
            rejected: false,
            settled: false
        });

        emit TradeSubmitted(tradeCounter, msg.sender);
        tradeCounter++;
    }

    // Approve a pending trade
    function approveTrade(uint256 tradeId) external {
        require(socialNodeRegistry.isSocialNode(msg.sender), "Only SocialNode can approve");
        WasteTrade storage trade = trades[tradeId];
        require(!trade.approved && !trade.rejected, "Trade already processed");

        trade.approved = true;
        emit TradeApproved(tradeId, msg.sender);

        // Calculate and settle the trade
        settleTrade(tradeId);
    }

    // Reject a pending trade
    function rejectTrade(uint256 tradeId) external {
        require(socialNodeRegistry.isSocialNode(msg.sender), "Only SocialNode can reject");
        WasteTrade storage trade = trades[tradeId];
        require(!trade.approved && !trade.rejected, "Trade already processed");

        trade.rejected = true;
        emit TradeRejected(tradeId, msg.sender);
    }

    // Calculate and settle a trade
    function settleTrade(uint256 tradeId) internal {
        WasteTrade storage trade = trades[tradeId];
        require(trade.approved, "Trade not approved");
        require(!trade.settled, "Trade already settled");

        uint256 totalWasteTokenAmount = 0;
        uint256 totalUSDCAmount = 0;

        for (uint256 i = 0; i < trade.wasteTypeIds.length; i++) {
            uint256 wasteTypeId = trade.wasteTypeIds[i];
            uint256 amount = trade.amounts[i]; // in grams

            // Fetch the waste price and carbon emission rate
            uint256 price = wastePriceProvider.getWastePrice(wasteTypeId);
            uint256 carbonEmissionRate = wasteDataProvider.getCarbonEmissionRate(wasteTypeId);

            // Calculate the total WasteToken and USDC amounts
            totalWasteTokenAmount += (amount * carbonEmissionRate * 1e18) / 1e4; // Adjust for decimals
            totalUSDCAmount += (amount * price); // Adjust for decimals
        }

        // Mint WasteToken and transfer USDC to user
        wasteToken.mint(trade.user, totalWasteTokenAmount);
        require(usdc.transfer(trade.user, totalUSDCAmount), "USDC transfer failed");

        trade.settled = true;
        emit TradeSettled(tradeId, trade.user, totalWasteTokenAmount, totalUSDCAmount);
    }

    // Utility function to view pending trades
    function getPendingTrades() external view returns (WasteTrade[] memory) {
        WasteTrade[] memory pendingTrades = new WasteTrade[](tradeCounter);
        uint256 count = 0;
        for (uint256 i = 0; i < tradeCounter; i++) {
            if (!trades[i].approved && !trades[i].rejected) {
                pendingTrades[count] = trades[i];
                count++;
            }
        }
        return pendingTrades;
    }

    // Pagination function to get a list of trades
    function getTradeList(uint256 page, uint256 limit) external view returns (WasteTrade[] memory) {
        require(page > 0 && limit > 0, "Page and limit must be greater than 0");

        uint256 cursor = (page - 1) * limit;
        if (cursor >= tradeCounter) {
            return new WasteTrade[](0) ;
        }

        uint256 tempLength = limit;
        if (tempLength > tradeCounter - cursor) {
            tempLength = tradeCounter - cursor;
        }

        WasteTrade[] memory paginatedTrades = new WasteTrade[](tempLength);
        for (uint256 i = 0; i < tempLength; i++) {
            paginatedTrades[i] = trades[cursor + i];
        }

        return paginatedTrades;
    }

    // Get the total number of trades
    function getTotalTrades() external view returns (uint256) {
        return tradeCounter;
    }

    // Update contract addresses
    function updateWastePriceProvider(address _wastePriceProvider) external onlyOwner {
        wastePriceProvider = IWastePriceProvider(_wastePriceProvider);
    }

    function updateWasteDataProvider(address _wasteDataProvider) external onlyOwner {
        wasteDataProvider = IWasteDataProvider(_wasteDataProvider);
    }

    function updateSocialNodeRegistry(address _socialNodeRegistry) external onlyOwner {
        socialNodeRegistry = ISocialNodeRegistry(_socialNodeRegistry);
    }
}
