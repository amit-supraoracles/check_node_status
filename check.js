require('dotenv').config();
const Web3 = require('web3');

const ethereumPublic = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_PUBLIC));
const arbitrumPublic = new Web3(new Web3.providers.HttpProvider(process.env.ARBITRUM_PUBLIC));

const ethereum = new Web3(new Web3.providers.HttpProvider(process.env.PRIVATE_ETHREUM_1));
const ethereum2 = new Web3(new Web3.providers.HttpProvider(process.env.PRIVATE_ETHEREUM_2));

const arbitrum = new Web3(new Web3.providers.HttpProvider(process.env.PRIVATE_ARBITRUM_1));
const arbitrum2 = new Web3(new Web3.providers.HttpProvider(process.env.PRIVATE_ARBITRUM_2));

console.log("\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
console.log("::::::::::::::::::::::::::::::::: CURRENT BLOCK NUMBER :::::::::::::::::::::::::::::::::\n")

ethereumPublic.eth.getBlockNumber()
  .then(blockNumber => {
    console.log(`==============================>  ETHEREUM PUBLIC ::::  ${blockNumber}`);
  })
  .catch(error => {
    console.error(error);
  });



arbitrumPublic.eth.getBlockNumber()
  .then(blockNumber => {
    console.log(`==============================>  ARBITRUM PUBLIC ::::  ${blockNumber}`);
  })
  .catch(error => {
    console.error(error);
  });


ethereum.eth.getBlockNumber()
  .then(blockNumber => {
    console.log(`=====> ETHEREUM-1 ::: ${blockNumber}`);
  })
  .catch(error => {
    console.error(error);
  });

ethereum2.eth.getBlockNumber()
  .then(blockNumber => {
    console.log(`=====> ETHEREUM-2 ::: ${blockNumber}`);
  })
  .catch(error => {
    console.error(error);
  });

arbitrum.eth.getBlockNumber()
  .then(blockNumber => {
    console.log(`=====> ARBITRUM-1 ::: ${blockNumber}`);
  })
  .catch(error => {
    console.error(error);
  });

arbitrum2.eth.getBlockNumber()
  .then(blockNumber => {
    console.log(`=====> ARBITRUM-2 ::: ${blockNumber}`);
  })
  .catch(error => {
    console.error(error);
  });
