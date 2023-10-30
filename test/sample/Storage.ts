import { Storage } from '../../types/ethers-contracts/Storage';

const { expect } = require('chai');
const { ethers } = require('hardhat');
const { BigNumber } = require('ethers');

describe('Storage', function () {
  let owner;
  let minter;
  let alice;
  let bob;
  let addrs;

  let factory: Storage;
  let storage: Storage;

  before(async function () {
    [owner, minter, alice, bob, ...addrs] = await ethers.getSigners();
    factory = (await ethers.getContractFactory('Storage')) as unknown as Storage;
    storage = await factory.deploy('test');
  });

  describe('Deployed', function () {
    it('Should storage return name correctly', async function () {
      expect(await storage.getName()).equals('test');
    });

    it('Should change name in storage correctly', async function () {
      await storage.setName('123');
      expect(await storage.getName()).equals('123');
    });
  });
});
