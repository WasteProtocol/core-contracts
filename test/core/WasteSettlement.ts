import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  SocialNodeRegistry,
  USDC,
  WasteDataProvider,
  WastePriceProvider,
  WasteSettlement,
  WasteToken,
} from '../../typechain-types';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('WasteSettlement', function () {
  let wasteSettlement: WasteSettlement;
  let wasteToken: WasteToken;
  let usdc: USDC;
  let wastePriceProvider: WastePriceProvider;
  let wasteDataProvider: WasteDataProvider;
  let socialNodeRegistry: SocialNodeRegistry;

  let owner: SignerWithAddress;
  let user: SignerWithAddress;
  let socialNode: SignerWithAddress;
  /*before(async function () {
    const [deployer, userAccount, socialNodeAccount, relayer] = await ethers.getSigners();
    owner = deployer;
    user = userAccount;
    socialNode = socialNodeAccount.address;
  })*/

  beforeEach(async function () {
    const [deployer, userAccount, socialNodeAccount, relayer] = await ethers.getSigners();
    owner = deployer;
    user = userAccount;
    socialNode = socialNodeAccount;

    // Deploy WasteToken, USDC, WastePriceProvider, WasteDataProvider, and SocialNodeRegistry for testing
    const WasteToken = await ethers.getContractFactory('WasteToken');
    wasteToken = (await WasteToken.deploy()) as WasteToken;
    await wasteToken.deployed();

    const USDC = await ethers.getContractFactory('USDC');
    usdc = (await USDC.deploy()) as USDC;
    await usdc.deployed();

    // Deploy WastePriceProvider with constructor arguments
    const WastePriceProvider = await ethers.getContractFactory('WastePriceProvider');
    wastePriceProvider = (await WastePriceProvider.deploy(1, relayer.address)) as WastePriceProvider;
    await wastePriceProvider.deployed();

    const WasteDataProvider = await ethers.getContractFactory('WasteDataProvider');
    wasteDataProvider = (await WasteDataProvider.deploy()) as WasteDataProvider;
    await wasteDataProvider.deployed();

    const SocialNodeRegistry = await ethers.getContractFactory('SocialNodeRegistry');
    socialNodeRegistry = (await SocialNodeRegistry.deploy()) as SocialNodeRegistry;
    await socialNodeRegistry.deployed();

    // Grant social node role to the socialNode account
    await socialNodeRegistry.addSocialNode(socialNode.address);

    // Deploy WasteSettlement contract
    const WasteSettlement = await ethers.getContractFactory('WasteSettlement');
    wasteSettlement = (await WasteSettlement.deploy(
      usdc.address,
      wasteToken.address,
      wastePriceProvider.address,
      wasteDataProvider.address,
      socialNodeRegistry.address,
    )) as WasteSettlement;
    await wasteSettlement.deployed();

    // Set up initial USDC balance for testing
    //await usdc.mint(user.address, ethers.utils.parseEther('1000')); // Mint 1000 USDC to user for testing
    await usdc.mint(wasteSettlement.address, ethers.utils.parseEther('1000')); // Mint 1000 USDC to user for testing
    await wasteToken.grantRole(ethers.utils.id('MINTER_ROLE'), wasteSettlement.address);

    await wasteDataProvider.addOrUpdateCategory(1, 'plastic', 91234);
    await wasteDataProvider.addOrUpdateCategory(2, 'paper', 10987);
    await wasteDataProvider.addWasteTypeToCategory(1, 1, 'bottle');
    await wasteDataProvider.addWasteTypeToCategory(2, 2, 'newspaper');
  });

  it('Should allow user to submit a trade', async function () {
    const wasteTypeIds = [1, 2]; // Example waste types
    const amounts = [100, 200]; // 100g and 200g respectively

    await wasteSettlement.connect(user).submitWasteTrade(wasteTypeIds, amounts);

    const trade = await wasteSettlement.trades(0); // Check the first trade
    expect(trade.user).to.equal(user.address);
    expect(trade.approved).to.equal(false);
    expect(trade.rejected).to.equal(false);
    expect(trade.settled).to.equal(false);
  });

  it('Should allow Social Node to approve a trade and settle it', async function () {
    const wasteTypeIds = [1, 2];
    const amounts = [100, 200];

    // User submits the trade
    await wasteSettlement.connect(user).submitWasteTrade(wasteTypeIds, amounts);

    // Mock the waste price and carbon emission rates using owner
    await wastePriceProvider.connect(owner).setWastePrice(1, ethers.utils.parseEther('2')); // Waste type 1 price = 2 USDC/g
    await wastePriceProvider.connect(owner).setWastePrice(2, ethers.utils.parseEther('3')); // Waste type 2 price = 3 USDC/g
    //await wasteDataProvider.connect(owner).setCarbonEmissionRate(1, ethers.utils.parseEther('0.5')); // Emission rate for type 1
    //await wasteDataProvider.connect(owner).setCarbonEmissionRate(2, ethers.utils.parseEther('1.0')); // Emission rate for type 2

    // Social Node approves the trade
    await wasteSettlement.connect(socialNode).approveTrade(0);

    // Check the trade status
    const trade = await wasteSettlement.trades(0);
    expect(trade.approved).to.equal(true);
    expect(trade.settled).to.equal(true);

    // Check WasteToken and USDC balances
    const userWasteTokenBalance = await wasteToken.balanceOf(user.address);
    const userUSDCBalance = await usdc.balanceOf(user.address);
    // Expected amounts:
    // WasteToken: (100g * 0.5) + (200g * 1.0) = 50 + 200 = 250 WasteToken
    // USDC: (100g * 2) + (200g * 3) = 200 + 600 = 800 USDC
    // 100*9.1234 + (200 * 10987) =
    expect(userWasteTokenBalance).to.equal(ethers.utils.parseEther('1132.08'));
    expect(userUSDCBalance).to.equal(ethers.utils.parseEther('800'));
  });

  it('Should allow Social Node to reject a trade', async function () {
    const wasteTypeIds = [1, 2];
    const amounts = [100, 200];

    // User submits the trade
    await wasteSettlement.connect(user).submitWasteTrade(wasteTypeIds, amounts);

    // Social Node rejects the trade
    await wasteSettlement.connect(socialNode).rejectTrade(0);

    const trade = await wasteSettlement.trades(0);
    expect(trade.rejected).to.equal(true);
    expect(trade.approved).to.equal(false);
    expect(trade.settled).to.equal(false);
  });

  it('Should return a paginated list of trades', async function () {
    const wasteTypeIds = [1, 2];
    const amounts = [100, 200];

    // User submits multiple trades
    for (let i = 0; i < 10; i++) {
      await wasteSettlement.connect(user).submitWasteTrade(wasteTypeIds, amounts);
    }

    // Retrieve paginated trades (page 1, limit 5)
    const tradesPage1 = await wasteSettlement.getTradeList(1, 5);
    expect(tradesPage1.length).to.equal(5);

    // Retrieve paginated trades (page 2, limit 5)
    const tradesPage2 = await wasteSettlement.getTradeList(2, 5);
    expect(tradesPage2.length).to.equal(5);
  });

  it('Should revert when a non-SocialNode tries to approve or reject a trade', async function () {
    const [_, userAccount, a, b, c, nonSocialNode] = await ethers.getSigners();
    const wasteTypeIds = [1, 2];
    const amounts = [100, 200];

    // User submits a trade
    await wasteSettlement.connect(user).submitWasteTrade(wasteTypeIds, amounts);

    // Non-social node tries to approve
    await expect(wasteSettlement.connect(nonSocialNode).approveTrade(0)).to.be.revertedWith(
      'Only SocialNode can approve',
    );

    // Non-social node tries to reject
    await expect(wasteSettlement.connect(nonSocialNode).rejectTrade(0)).to.be.revertedWith(
      'Only SocialNode can reject',
    );
  });
});
