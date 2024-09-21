// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract WastePriceProvider is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    using Strings for string;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    address public router = 0xb83E47C2bC239B3bf370bc41e1459A34b41238D0;
    bytes32 public donID = 0x66756e2d657468657265756d2d7365706f6c69612d3100000000000000000000;
    uint32 public gasLimit = 300000;
    uint64 public subscriptionId;

    address public relayer;
    mapping(string => uint256) public wastePrices;
    mapping(bytes32 => string) public requestWasteType;

    string source = "const wasteType = args[0];"
    "const apiResponse = await Functions.makeHttpRequest({url:`https://"
    "asia-southeast1-waste-protocol.cloudfunctions.net/api/public/waste-items/${wasteType}`});"
    "if (apiResponse.error) {"
    "throw Error(`Request failed`);"
    "}"
    "const { data } = apiResponse;"
    "const _price = data.price;"
    "const price = Math.floor(_price * Math.pow(10,18));"
    "return Functions.encodeUint256(price);";

    event PriceUpdated(string wasteType, uint256 price);
    event Response(bytes32 indexed requestId, string wasteType, bytes response, bytes err);

    constructor(uint64 subscriptionId_, address relayer_) FunctionsClient(router) ConfirmedOwner(msg.sender) {
        subscriptionId = subscriptionId_;
        relayer = relayer_;
    }

    modifier onlyRelayer() {
        require(msg.sender == relayer, "Caller is not the RELAYER");
        _;
    }

    function setRelayer(address newRelayer) external onlyOwner {
        require(newRelayer != address(0), "Invalid RELAYER address");
        relayer = newRelayer;
    }

    function requestWastePrice(string memory wasteTypeId) external onlyRelayer {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source);

        string[] memory args = new string[](1);
        args[0] = wasteTypeId;
        req.setArgs(args);

        s_lastRequestId = _sendRequest(req.encodeCBOR(), subscriptionId, gasLimit, donID);
        requestWasteType[s_lastRequestId] = wasteTypeId;
    }

    // Internal fulfillRequest (called by Chainlink)
    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        require(checkStringHasValue(requestWasteType[requestId]), "Invalid requestId");

        string memory wasteTypeId = requestWasteType[requestId];
        uint256 price = uint256(bytes32(response));
        wastePrices[wasteTypeId] = price;

        emit Response(requestId, wasteTypeId, response, err);
        emit PriceUpdated(wasteTypeId, price);
    }

    // Public test helper function (for testing only, remove in production)
    function testFulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) public {
        fulfillRequest(requestId, response, err);
    }

    /**
     * @dev Sets the price of a specific waste type (only for testing purposes)
     * @param wasteTypeId The ID of the waste type
     * @param price The price in USDC per gram, scaled by 1e18
     */
    function setWastePrice(string memory wasteTypeId, uint256 price) external onlyOwner {
        wastePrices[wasteTypeId] = price;
        emit PriceUpdated(wasteTypeId, price);
    }

    function getWastePrice(string memory wasteTypeId) external view returns (uint256) {
        return wastePrices[wasteTypeId];
    }

    function isStringEmpty(string memory str) public pure returns (bool) {
        // Convert string to bytes and check if the length is 0
        return bytes(str).length == 0;
    }

    function checkStringHasValue(string memory str) public pure returns (bool) {
        // If bytes length is greater than 0, the string has a value
        return bytes(str).length > 0;
    }
}

