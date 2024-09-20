import { ethers } from 'hardhat';
import { expect } from 'chai';
import { SocialNodeRegistry } from '../../typechain-types';

describe('SocialNodeRegistry', function () {
  let socialNodeRegistry: SocialNodeRegistry;
  let owner: string;
  let addr1: string;
  let addr2: string;

  beforeEach(async function () {
    const [deployer, user1, user2] = await ethers.getSigners();
    owner = deployer.address;
    addr1 = user1.address;
    addr2 = user2.address;

    const SocialNodeRegistry = await ethers.getContractFactory('SocialNodeRegistry');
    socialNodeRegistry = (await SocialNodeRegistry.deploy()) as SocialNodeRegistry;
    await socialNodeRegistry.deployed();
  });

  it('Should set the correct owner on deployment', async function () {
    expect(await socialNodeRegistry.owner()).to.equal(owner);
  });

  it('Should allow the owner to add a SocialNode', async function () {
    await socialNodeRegistry.addSocialNode(addr1);
    expect(await socialNodeRegistry.isSocialNode(addr1)).to.be.true;
  });

  it('Should emit an event when adding a SocialNode', async function () {
    await expect(socialNodeRegistry.addSocialNode(addr1))
      .to.emit(socialNodeRegistry, 'SocialNodeAdded')
      .withArgs(addr1);
  });

  it('Should not allow adding the same SocialNode twice', async function () {
    await socialNodeRegistry.addSocialNode(addr1);
    await expect(socialNodeRegistry.addSocialNode(addr1)).to.be.revertedWith('Node is already registered');
  });

  it('Should allow the owner to remove a SocialNode', async function () {
    await socialNodeRegistry.addSocialNode(addr1);
    await socialNodeRegistry.removeSocialNode(addr1);
    expect(await socialNodeRegistry.isSocialNode(addr1)).to.be.false;
  });

  it('Should emit an event when removing a SocialNode', async function () {
    await socialNodeRegistry.addSocialNode(addr1);
    await expect(socialNodeRegistry.removeSocialNode(addr1))
      .to.emit(socialNodeRegistry, 'SocialNodeRemoved')
      .withArgs(addr1);
  });

  it('Should not allow a non-owner to add a SocialNode', async function () {
    const [_, user1] = await ethers.getSigners();
    await expect(socialNodeRegistry.connect(user1).addSocialNode(addr2)).to.be.revertedWith('Not authorized');
  });

  it('Should not allow a non-owner to remove a SocialNode', async function () {
    await socialNodeRegistry.addSocialNode(addr1);
    const [_, user1] = await ethers.getSigners();
    await expect(socialNodeRegistry.connect(user1).removeSocialNode(addr1)).to.be.revertedWith('Not authorized');
  });

  it('Should allow the owner to transfer ownership', async function () {
    const [_, newOwner] = await ethers.getSigners();
    await socialNodeRegistry.transferOwnership(newOwner.address);
    expect(await socialNodeRegistry.owner()).to.equal(newOwner.address);
  });

  it('Should not allow non-owner to transfer ownership', async function () {
    const [_, newOwner, attacker] = await ethers.getSigners();
    await expect(socialNodeRegistry.connect(attacker).transferOwnership(newOwner.address)).to.be.revertedWith(
      'Not authorized',
    );
  });
});
