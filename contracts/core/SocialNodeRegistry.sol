// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialNodeRegistry {
    // Mapping to store authorized SocialNodes
    mapping(address => bool) private socialNodes;

    // Address of the contract owner (officer)
    address public owner;

    // Event emitted when a new SocialNode is added
    event SocialNodeAdded(address indexed node);

    // Event emitted when a SocialNode is removed
    event SocialNodeRemoved(address indexed node);

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    // Constructor to set the owner
    constructor() {
        owner = msg.sender;
    }

    // Function to add a SocialNode (onlyOwner)
    function addSocialNode(address node) external onlyOwner {
        require(!socialNodes[node], "Node is already registered");
        socialNodes[node] = true;
        emit SocialNodeAdded(node);
    }

    // Function to remove a SocialNode (onlyOwner)
    function removeSocialNode(address node) external onlyOwner {
        require(socialNodes[node], "Node is not registered");
        socialNodes[node] = false;
        emit SocialNodeRemoved(node);
    }

    // Function to check if an address is a SocialNode
    function isSocialNode(address node) external view returns (bool) {
        return socialNodes[node];
    }

    // Function to transfer ownership
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid address");
        owner = newOwner;
    }
}
