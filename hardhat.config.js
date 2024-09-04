/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
require('dotenv').config();
module.exports = {
  defaultNetwork:"infurahol",
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545/"
    },
    infurahol:{
      url:"https://sepolia.infura.io/v3/2527beb8cae74b6e888a8d112217dd1a",
      accounts: [process.env.PRIVATE_KEY]

    }
  },
  solidity: "0.8.20",
};
