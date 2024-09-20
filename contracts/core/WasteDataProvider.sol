// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WasteDataProvider {
    // Struct for waste types under each category
    struct WasteType {
        uint256 id;
        string name;
    }

    // Struct for waste categories
    struct WasteCategory {
        uint256 id;
        string name;
        uint256 emissionRate; // Emission rate for the category
        WasteType[] wasteTypes; // Array of waste types in this category
    }

    // Mapping from category ID to WasteCategory
    mapping(uint256 => WasteCategory) public wasteCategories;

    // Mapping from waste type ID to the category it belongs to
    mapping(uint256 => uint256) public wasteTypeToCategory;

    // Address of the contract owner (officer)
    address public owner;

    // Event emitted when a category is added or updated
    event CategoryAddedOrUpdated(uint256 indexed categoryId, string name, uint256 emissionRate);

    // Event emitted when a waste type is added to a category
    event WasteTypeAdded(uint256 indexed categoryId, uint256 wasteTypeId, string name);

    // Event emitted when a waste type is updated
    event WasteTypeUpdated(uint256 indexed categoryId, uint256 wasteTypeId, string newName);

    // Event emitted when a category is removed
    event CategoryRemoved(uint256 indexed categoryId);

    // Event emitted when a waste type is removed
    event WasteTypeRemoved(uint256 indexed categoryId, uint256 wasteTypeId);

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
    function addOrUpdateCategory(uint256 categoryId, string memory name, uint256 emissionRate) external onlyOwner {
        WasteCategory storage category = wasteCategories[categoryId];
        category.id = categoryId;
        category.name = name;
        category.emissionRate = emissionRate;
        emit CategoryAddedOrUpdated(categoryId, name, emissionRate);
    }

    // Function to add a waste type to a category (onlyOwner)
    function addWasteTypeToCategory(uint256 categoryId, uint256 wasteTypeId, string memory name) external onlyOwner {
        WasteCategory storage category = wasteCategories[categoryId];
        require(category.id != 0, "Category does not exist");

        WasteType memory newWasteType = WasteType({
            id: wasteTypeId,
            name: name
        });

        category.wasteTypes.push(newWasteType);
        wasteTypeToCategory[wasteTypeId] = categoryId; // Map waste type ID to its category
        emit WasteTypeAdded(categoryId, wasteTypeId, name);
    }

    // Function to update an existing waste type (onlyOwner)
    function updateWasteType(uint256 wasteTypeId, string memory newName) external onlyOwner {
        uint256 categoryId = wasteTypeToCategory[wasteTypeId];
        require(categoryId != 0, "WasteType not associated with any category");

        WasteCategory storage category = wasteCategories[categoryId];

        // Find and update the waste type within the category
        bool updated = false;
        for (uint256 i = 0; i < category.wasteTypes.length; i++) {
            if (category.wasteTypes[i].id == wasteTypeId) {
                category.wasteTypes[i].name = newName;
                updated = true;
                emit WasteTypeUpdated(categoryId, wasteTypeId, newName);
                break;
            }
        }

        require(updated, "WasteType not found");
    }

    // Function to remove a waste category and all its waste types (onlyOwner)
    function removeCategory(uint256 categoryId) external onlyOwner {
        WasteCategory storage category = wasteCategories[categoryId];
        require(category.id != 0, "Category does not exist");

        // Remove all waste types from the category
        for (uint256 i = 0; i < category.wasteTypes.length; i++) {
            uint256 wasteTypeId = category.wasteTypes[i].id;
            delete wasteTypeToCategory[wasteTypeId]; // Remove mapping of each waste type
        }

        // Delete the category itself
        delete wasteCategories[categoryId];

        emit CategoryRemoved(categoryId);
    }

    // Function to remove a waste type from a category (onlyOwner)
    function removeWasteType(uint256 wasteTypeId) external onlyOwner {
        uint256 categoryId = wasteTypeToCategory[wasteTypeId];
        require(categoryId != 0, "WasteType not associated with any category");

        WasteCategory storage category = wasteCategories[categoryId];

        // Find and remove the waste type within the category
        bool removed = false;
        for (uint256 i = 0; i < category.wasteTypes.length; i++) {
            if (category.wasteTypes[i].id == wasteTypeId) {
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
    function getWasteTypes(uint256 categoryId) external view returns (WasteType[] memory) {
        WasteCategory storage category = wasteCategories[categoryId];
        require(category.id != 0, "Category does not exist");
        return category.wasteTypes;
    }

    // Function to get the waste category by waste type ID
    function getCategoryByWasteType(uint256 wasteTypeId) external view returns (WasteCategory memory) {
        uint256 categoryId = wasteTypeToCategory[wasteTypeId];
        require(categoryId != 0, "WasteType not associated with any category");
        return wasteCategories[categoryId];
    }

    // Function to transfer ownership
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid address");
        owner = newOwner;
    }
}
