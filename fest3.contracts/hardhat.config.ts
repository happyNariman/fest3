import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-contract-sizer';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.21',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'paris',
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL || '',
      chainId: 11155111,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    goerli: {
      url: process.env.GOERLI_URL || '',
      chainId: 5,
      accounts: {
        mnemonic: process.env.MNEMONIC !== undefined ? process.env.MNEMONIC : "",
      },
    },
    optimisticGoerli: {
      url: process.env.OPTIMISM_GOERLI_URL || '',
      chainId: 420,
      gasPrice: 1000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC !== undefined ? process.env.MNEMONIC : "",
      },
    },
    polygonMumbai: {
      url: process.env.MUMBAI_URL || '',
      chainId: 80001,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 135000000000,
    },
    mainnet: {
      url: process.env.ETHEREUM_URL || '',
      chainId: 1,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 12000000000,
    },
    polygon: {
      url: process.env.POLYGON_URL || '',
      chainId: 137,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 120000000000,
    },
  },
  etherscan: {
    apiKey: {
      moonriver: process.env.MOONRIVER_MOONSCAN_APIKEY || '', // Moonriver Moonscan API Key
      moonbaseAlpha: process.env.MOONBEAM_MOONSCAN_APIKEY || '', // Moonbeam Moonscan API Key
      moonbeam: process.env.MOONBEAM_MOONSCAN_APIKEY || '', // Moonbeam Moonscan API Key
      sepolia: process.env.ETHERSCAN_API_KEY || '', // Sepolia Etherscan API Key
      goerli: process.env.ETHERSCAN_API_KEY || '', // Goerli Etherscan API Key
      optimisticGoerli: process.env.OP_ETHERSCAN_API_KEY || '', // Optimism Goerli Etherscan API Key
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || '', // Polygon Mumbai Etherscan API Key
      mainnet: process.env.ETHERSCAN_API_KEY || '', // Ethereum Etherscan API Key
      polygon: process.env.POLYGONSCAN_API_KEY || '', // Polygon Etherscan API Key
    },
  },
};

export default config;
