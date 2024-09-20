// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract WasteToken is ERC20, AccessControl {
    // Define the MINTER role
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /**
     * @dev Constructor for WasteToken
     * Grants the contract deployer the default admin role
     */
    constructor() ERC20("WasteToken", "WST") {
        // Grant the contract deployer the admin role
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev Mints tokens to the specified address
     * Can only be called by an account with the MINTER_ROLE
     * @param to The address to mint tokens to
     * @param amount The amount of tokens to mint
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    /**
     * @dev Grants the MINTER_ROLE to a new address
     * Can only be called by an account with the DEFAULT_ADMIN_ROLE (owner)
     * @param account The address to be granted the MINTER_ROLE
     */
    function addMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(MINTER_ROLE, account);
    }

    /**
     * @dev Revokes the MINTER_ROLE from an address
     * Can only be called by an account with the DEFAULT_ADMIN_ROLE (owner)
     * @param account The address to revoke the MINTER_ROLE from
     */
    function removeMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(MINTER_ROLE, account);
    }
}
