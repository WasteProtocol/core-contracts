// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Strings.sol";

contract WasteDataProvider {

    using Strings for string;

    // Struct for waste types under each category
    struct WasteType {
        string id;
        string name;
    }

    // Struct for waste categories
    struct WasteCategory {
        string id;
        string name;
        uint256 emissionRate; // Emission rate for the category
        WasteType[] wasteTypes; // Array of waste types in this category
    }

    // Mapping from category ID to WasteCategory
    mapping(string => WasteCategory) public wasteCategories;

    // Mapping from waste type ID to the category it belongs to
    mapping(string => string) public wasteTypeToCategory;

    // Address of the contract owner (officer)
    address public owner;

    // Event emitted when a category is added or updated
    event CategoryAddedOrUpdated(string indexed categoryId, string name, uint256 emissionRate);

    // Event emitted when a waste type is added to a category
    event WasteTypeAdded(string indexed categoryId, string wasteTypeId, string name);

    // Event emitted when a waste type is updated
    event WasteTypeUpdated(string indexed categoryId, string wasteTypeId, string newName);

    // Event emitted when a category is removed
    event CategoryRemoved(string indexed categoryId);

    // Event emitted when a waste type is removed
    event WasteTypeRemoved(string indexed categoryId, string wasteTypeId);

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    // Constructor to set the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to add or update a waste category (onlyOwner)
    function addOrUpdateCategory(string memory categoryId, string memory name, uint256 emissionRate) external onlyOwner {
        WasteCategory storage category = wasteCategories[categoryId];
        category.id = categoryId;
        category.name = name;
        category.emissionRate = emissionRate;
        emit CategoryAddedOrUpdated(categoryId, name, emissionRate);
    }

    // Function to add a waste type to a category (onlyOwner)
    function addWasteTypeToCategory(string memory categoryId, string memory wasteTypeId, string memory name) external onlyOwner {
        WasteCategory storage category = wasteCategories[categoryId];
        require(checkStringHasValue(category.id), "Category does not exist");

        WasteType memory newWasteType = WasteType({
            id: wasteTypeId,
            name: name
        });

        category.wasteTypes.push(newWasteType);
        wasteTypeToCategory[wasteTypeId] = categoryId; // Map waste type ID to its category
        emit WasteTypeAdded(categoryId, wasteTypeId, name);
    }

    // Function to update an existing waste type (onlyOwner)
    function updateWasteType(string memory wasteTypeId, string memory newName) external onlyOwner {
        string memory categoryId = wasteTypeToCategory[wasteTypeId];
        require(checkStringHasValue(categoryId), "WasteType not associated with any category");

        WasteCategory storage category = wasteCategories[categoryId];

        // Find and update the waste type within the category
        bool updated = false;
        for (uint256 i = 0; i < category.wasteTypes.length; i++) {
            if (category.wasteTypes[i].id.equal(wasteTypeId)) {
                category.wasteTypes[i].name = newName;
                updated = true;
                emit WasteTypeUpdated(categoryId, wasteTypeId, newName);
                break;
            }
        }

        require(updated, "WasteType not found");
    }

    // Function to remove a waste category and all its waste types (onlyOwner)
    function removeCategory(string memory categoryId) external onlyOwner {
        WasteCategory storage category = wasteCategories[categoryId];
        require(checkStringHasValue(category.id), "Category does not exist");

        // Remove all waste types from the category
        for (uint256 i = 0; i < category.wasteTypes.length; i++) {
            string memory wasteTypeId = category.wasteTypes[i].id;
            delete wasteTypeToCategory[wasteTypeId]; // Remove mapping of each waste type
        }

        // Delete the category itself
        delete wasteCategories[categoryId];

        emit CategoryRemoved(categoryId);
    }

    // Function to remove a waste type from a category (onlyOwner)
    function removeWasteType(string memory wasteTypeId) external onlyOwner {
        string memory categoryId = wasteTypeToCategory[wasteTypeId];
        require(checkStringHasValue(categoryId), "WasteType not associated with any category");

        WasteCategory storage category = wasteCategories[categoryId];

        // Find and remove the waste type within the category
        bool removed = false;
        for (uint256 i = 0; i < category.wasteTypes.length; i++) {
            if (category.wasteTypes[i].id.equal(wasteTypeId)) {
                // Remove the waste type by swapping it with the last element and popping the array
                category.wasteTypes[i] = category.wasteTypes[category.wasteTypes.length - 1];
                category.wasteTypes.pop();
                removed = true;
                break;
            }
        }

        require(removed, "WasteType not found");
        delete wasteTypeToCategory[wasteTypeId]; // Remove mapping

        emit WasteTypeRemoved(categoryId, wasteTypeId);
    }

    // Function to get waste types for a given category
    function getWasteTypes(string memory categoryId) external view returns (WasteType[] memory) {
        WasteCategory storage category = wasteCategories[categoryId];
        return category.wasteTypes;
    }

    // Function to get the waste category by waste type ID
    function getCategoryByWasteType(string memory wasteTypeId) external view returns (WasteCategory memory) {
        string memory categoryId = wasteTypeToCategory[wasteTypeId];
        require(checkStringHasValue(categoryId), "WasteType not associated with any category");
        return wasteCategories[categoryId];
    }

    // Function to transfer ownership
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid address");
        owner = newOwner;
    }

    function getCarbonEmissionRate(string memory wasteTypeId) public view returns (uint256) {
        string memory categoryId = wasteTypeToCategory[wasteTypeId];
        WasteCategory storage category = wasteCategories[categoryId];
        return category.emissionRate;
    }

    /**
     * @dev Sets the carbon emission rate of a specific waste type (for testing purposes)
     * @param categoryId The ID of the waste category
     * @param rate The carbon emission rate in g of CO2 per g of waste, scaled by 1e18
     */
    function setCarbonEmissionRate(string memory categoryId, uint256 rate) external onlyOwner {
        WasteCategory storage category = wasteCategories[categoryId];
        category.emissionRate = rate;
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
