import { ethers } from 'hardhat';
import { expect } from 'chai';
import { WasteDataProvider } from '../../typechain-types';

describe('WasteDataProvider', function () {
  let wasteDataProvider: WasteDataProvider;
  let owner: string;
  let addr1: string;

  beforeEach(async function () {
    const [deployer, user1] = await ethers.getSigners();
    owner = deployer.address;
    addr1 = user1.address;

    const WasteDataProvider = await ethers.getContractFactory('WasteDataProvider');
    wasteDataProvider = (await WasteDataProvider.deploy()) as WasteDataProvider;
    await wasteDataProvider.deployed();
  });

  it('Should allow the owner to add a waste category', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    const category = await wasteDataProvider.wasteCategories(1);
    expect(category.id).to.equal(1);
    expect(category.name).to.equal('Plastic');
    expect(category.emissionRate).to.equal(100);
  });

  it('Should allow the owner to add a waste type to a category', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    await wasteDataProvider.addWasteTypeToCategory(1, 101, 'Bottle');
    const wasteTypes = await wasteDataProvider.getWasteTypes(1);
    expect(wasteTypes.length).to.equal(1);
    expect(wasteTypes[0].id).to.equal(101);
    expect(wasteTypes[0].name).to.equal('Bottle');
  });

  it('Should allow the owner to update a waste type', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    await wasteDataProvider.addWasteTypeToCategory(1, 101, 'Bottle');

    // Update the waste type
    await wasteDataProvider.updateWasteType(101, 'Plastic Bottle');
    const wasteTypes = await wasteDataProvider.getWasteTypes(1);
    expect(wasteTypes[0].name).to.equal('Plastic Bottle');
  });

  it('Should allow the owner to remove a waste type from a category', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    await wasteDataProvider.addWasteTypeToCategory(1, 101, 'Bottle');
    await wasteDataProvider.addWasteTypeToCategory(1, 102, 'Bag');

    // Remove waste type 101 (Bottle)
    await wasteDataProvider.removeWasteType(101);
    const wasteTypes = await wasteDataProvider.getWasteTypes(1);
    expect(wasteTypes.length).to.equal(1);
    expect(wasteTypes[0].id).to.equal(102); // Bag remains
  });

  it('Should emit an event when removing a waste type', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    await wasteDataProvider.addWasteTypeToCategory(1, 101, 'Bottle');

    await expect(wasteDataProvider.removeWasteType(101))
      .to.emit(wasteDataProvider, 'WasteTypeRemoved')
      .withArgs(1, 101);
  });

  it('Should allow the owner to remove a waste category', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    await wasteDataProvider.addWasteTypeToCategory(1, 101, 'Bottle');
    await wasteDataProvider.addWasteTypeToCategory(1, 102, 'Bag');

    // Remove the category and its waste types
    await wasteDataProvider.removeCategory(1);
    const category = await wasteDataProvider.wasteCategories(1);
    expect(category.id).to.equal(0); // Category should be deleted

    // Verify that waste type mappings are also removed
    const wasteTypeCategory1 = await wasteDataProvider.wasteTypeToCategory(101);
    const wasteTypeCategory2 = await wasteDataProvider.wasteTypeToCategory(102);
    expect(wasteTypeCategory1).to.equal(0); // Waste type 101 should no longer map to a category
    expect(wasteTypeCategory2).to.equal(0); // Waste type 102 should no longer map to a category
  });

  it('Should emit an event when removing a waste category', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    await wasteDataProvider.addWasteTypeToCategory(1, 101, 'Bottle');

    await expect(wasteDataProvider.removeCategory(1)).to.emit(wasteDataProvider, 'CategoryRemoved').withArgs(1);
  });

  it('Should revert when removing a non-existent waste category', async function () {
    await expect(wasteDataProvider.removeCategory(1)).to.be.revertedWith('Category does not exist');
  });

  it('Should revert when removing a non-existent waste type', async function () {
    await wasteDataProvider.addOrUpdateCategory(1, 'Plastic', 100);
    await expect(wasteDataProvider.removeWasteType(101)).to.be.revertedWith(
      'WasteType not associated with any category',
    );
  });

  it('Should revert when adding a waste type to a non-existent category', async function () {
    await expect(wasteDataProvider.addWasteTypeToCategory(999, 101, 'Non-existent Category')).to.be.revertedWith(
      'Category does not exist',
    );
  });

  it('Should allow the owner to transfer ownership', async function () {
    const [_, newOwner] = await ethers.getSigners();
    await wasteDataProvider.transferOwnership(newOwner.address);
    expect(await wasteDataProvider.owner()).to.equal(newOwner.address);
  });

  it('Should not allow non-owners to add or remove waste types or categories', async function () {
    const [_, nonOwner] = await ethers.getSigners();
    await expect(wasteDataProvider.connect(nonOwner).addOrUpdateCategory(1, 'Plastic', 100)).to.be.revertedWith(
      'Not authorized',
    );
    await expect(wasteDataProvider.connect(nonOwner).removeCategory(1)).to.be.revertedWith('Not authorized');
  });
});
