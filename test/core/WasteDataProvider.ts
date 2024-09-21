import { ethers } from 'hardhat';
import { expect } from 'chai';
import { WasteDataProvider } from '../../typechain-types';

describe('WasteDataProvider', function () {
  let wasteDataProvider: WasteDataProvider;
  let owner: string;
  let newOwner: string;
  let otherUser: string;

  beforeEach(async function () {
    const [deployer, newOwnerAccount, otherUserAccount] = await ethers.getSigners();
    owner = deployer.address;
    newOwner = newOwnerAccount.address;
    otherUser = otherUserAccount.address;

    // Deploy the WasteDataProvider contract
    const WasteDataProvider = await ethers.getContractFactory('WasteDataProvider');
    wasteDataProvider = (await WasteDataProvider.deploy()) as WasteDataProvider;
    await wasteDataProvider.deployed();
  });

  it('Should allow the owner to add or update a waste category', async function () {
    await wasteDataProvider.addOrUpdateCategory('1', 'Plastic', ethers.utils.parseUnits('0.5', 18));
    const category = await wasteDataProvider.wasteCategories('1');
    expect(category.name).to.equal('Plastic');
    expect(category.emissionRate.toString()).to.equal(ethers.utils.parseUnits('0.5', 18).toString());
  });

  it('Should allow the owner to add a waste type to a category', async function () {
    await wasteDataProvider.addOrUpdateCategory('1', 'Plastic', ethers.utils.parseUnits('0.5', 18));
    await wasteDataProvider.addWasteTypeToCategory('1', 'PET', 'Polyethylene Terephthalate');

    const wasteTypes = await wasteDataProvider.getWasteTypes('1');
    expect(wasteTypes[0].name).to.equal('Polyethylene Terephthalate');
  });

  it('Should allow the owner to update a waste type', async function () {
    await wasteDataProvider.addOrUpdateCategory('1', 'Plastic', ethers.utils.parseUnits('0.5', 18));
    await wasteDataProvider.addWasteTypeToCategory('1', 'PET', 'Polyethylene Terephthalate');

    await wasteDataProvider.updateWasteType('PET', 'Updated PET');
    const wasteTypes = await wasteDataProvider.getWasteTypes('1');
    expect(wasteTypes[0].name).to.equal('Updated PET');
  });

  it('Should allow the owner to remove a waste category and its waste types', async function () {
    await wasteDataProvider.addOrUpdateCategory('1', 'Plastic', ethers.utils.parseUnits('0.5', 18));
    await wasteDataProvider.addWasteTypeToCategory('1', 'PET', 'Polyethylene Terephthalate');

    await wasteDataProvider.removeCategory('1');
    const category = await wasteDataProvider.wasteCategories('1');
    expect(category.name).to.equal('');
    const wasteTypes = await wasteDataProvider.getWasteTypes('1');
    expect(wasteTypes.length).to.equal(0);
  });

  it('Should allow the owner to remove a waste type', async function () {
    await wasteDataProvider.addOrUpdateCategory('1', 'Plastic', ethers.utils.parseUnits('0.5', 18));
    await wasteDataProvider.addWasteTypeToCategory('1', 'PET', 'Polyethylene Terephthalate');

    await wasteDataProvider.removeWasteType('PET');
    const wasteTypes = await wasteDataProvider.getWasteTypes('1');
    expect(wasteTypes.length).to.equal(0);
  });

  it('Should allow the owner to set and retrieve the carbon emission rate', async function () {
    await wasteDataProvider.addOrUpdateCategory('1', 'Plastic', ethers.utils.parseUnits('0.5', 18));
    await wasteDataProvider.setCarbonEmissionRate('1', ethers.utils.parseUnits('1.0', 18));
    await wasteDataProvider.addWasteTypeToCategory('1', 'PET', 'Polyethylene Terephthalate');

    const emissionRate = await wasteDataProvider.getCarbonEmissionRate('PET');
    expect(emissionRate.toString()).to.equal(ethers.utils.parseUnits('1.0', 18).toString());
  });

  it('Should allow the owner to transfer ownership', async function () {
    await wasteDataProvider.transferOwnership(newOwner);
    expect(await wasteDataProvider.owner()).to.equal(newOwner);
  });

  it('Should revert if a non-owner tries to add a category', async function () {
    await expect(
      wasteDataProvider
        .connect(ethers.provider.getSigner(otherUser))
        .addOrUpdateCategory('1', 'Plastic', ethers.utils.parseUnits('0.5', 18)),
    ).to.be.revertedWith('Not authorized');
  });

  it('Should revert if a non-owner tries to add a waste type', async function () {
    await expect(
      wasteDataProvider
        .connect(ethers.provider.getSigner(otherUser))
        .addWasteTypeToCategory('1', 'PET', 'Polyethylene Terephthalate'),
    ).to.be.revertedWith('Not authorized');
  });

  it('Should revert if a non-owner tries to update a waste type', async function () {
    await expect(
      wasteDataProvider.connect(ethers.provider.getSigner(otherUser)).updateWasteType('PET', 'Updated PET'),
    ).to.be.revertedWith('Not authorized');
  });

  it('Should revert if a non-owner tries to remove a category', async function () {
    await expect(
      wasteDataProvider.connect(ethers.provider.getSigner(otherUser)).removeCategory('1'),
    ).to.be.revertedWith('Not authorized');
  });

  it('Should revert if a non-owner tries to remove a waste type', async function () {
    await expect(
      wasteDataProvider.connect(ethers.provider.getSigner(otherUser)).removeWasteType('PET'),
    ).to.be.revertedWith('Not authorized');
  });
});
