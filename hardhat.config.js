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
require('hardhat-abi-exporter');

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
    bkc: {
      accounts,
      url: 'https://rpc.bitkubchain.io',
      chainId: 96,
    },
    bkc_testnet: {
      accounts,
      url: 'https://rpc-testnet.bitkubchain.io',
      chainId: 25925,
    },
    taiko: {
      url: 'https://rpc.test.taiko.xyz',
      accounts: accounts,
      chainId: 167005,
    },
  },
  etherscan: {
    apiKey: {
      goerli: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
      sepolia: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
    },
    customChains: [
      {
        network: 'bkc_testnet',
        chainId: 25925,
        urls: {
          apiURL: 'https://testnet.bkcscan.com/api',
          browserURL: 'https://testnet.bkcscan.com/',
        },
      },
      {
        network: 'bkc',
        chainId: 96,
        urls: {
          apiURL: 'https://www.bkcscan.com/api',
          browserURL: 'https:///www.bkcscan.com/',
        },
      },
      {
        network: 'taiko',
        chainId: 167005,
        urls: {
          apiURL: 'https://explorer.test.taiko.xyz/api',
          browserURL: 'https://explorer.test.taiko.xyz',
        },
      },
    ],
  },
};
