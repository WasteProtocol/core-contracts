require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('@nomiclabs/hardhat-web3');
require('./tasks/faucet');
require('./tasks/accounts');
require('dotenv/config');
require('@openzeppelin/hardhat-upgrades');
require('@primitivefi/hardhat-dodoc');
require('hardhat-deploy');
require('hardhat-deploy-ethers');

const accounts = {
  mnemonic: process.env.MNEMONIC || 'test test test test test test test test test test test junk',
};

module.exports = {
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      default: 1,
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: true,
    excludeContracts: [],
    src: './contracts',
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  dodoc: {
    runOnCompile: false,
    include: [], // default
    exclude: ['contracts/tests', 'contracts/shared', 'console'],
    outputDir: 'docs', // default
    templatePath: 'doc-template.sqrl',
    debugMode: false, // default
    keepFileStructure: true, // default
    freshOutput: true, // default
  },
  solidity: {
    compilers: [
      {
        version: '0.8.14',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {},
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts,
    },
    localhost: {
      accounts,
    },
    goerli: {
      accounts,
      url: 'https://eth-goerli.public.blastapi.io',
      chainId: 5,
    },
    sepolia: {
      accounts,
      url: 'https://rpc-sepolia.rockx.com',
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: {
      goerli: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
      sepolia: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
    },
    customChains: []
  },
};
