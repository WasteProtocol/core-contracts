// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract WastePriceProvider is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    address router = 0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0;
    bytes32 donID = 0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000;
    uint32 gasLimit = 300000;
    uint64 subscriptionId;

    address public relayer;
    mapping(uint256 => uint256) public wastePrices;
    mapping(bytes32 => uint256) public requestWasteType;

    string source = "const wasteType = args[0];"
    "const apiResponse = await Functions.makeHttpRequest({"
    "url: `https://api.wastepricing.com/${wasteType}`"
    "});"
    "if (apiResponse.error) {"
    "throw Error(`Request failed`);"
    "}"
    "const { data } = apiResponse;"
    "const price = Math.floor(data.price * Math.pow(10,18));"
    "return Functions.encodeUint256(price);";

    event PriceUpdated(uint256 wasteType, uint256 price);
    event Response(bytes32 indexed requestId, uint256 wasteType, bytes response, bytes err);

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

    function requestWastePrice(uint256 wasteTypeId) external onlyRelayer {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source);

        string[] memory args = new string[](1);
        args[0] = Strings.toString(wasteTypeId);
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
        require(requestWasteType[requestId] != 0, "Invalid requestId");

        uint256 wasteTypeId = requestWasteType[requestId];
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

    function getWastePrice(uint256 wasteTypeId) external view returns (uint256) {
        return wastePrices[wasteTypeId];
    }
}

