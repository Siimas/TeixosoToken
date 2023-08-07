const { ethers } = require("hardhat");
const teixosoJSON = require("../artifacts/contracts/TeixosoToken.sol/TeixosoToken.json")

async function main() {
  const abi = teixosoJSON.abi
  const provider = new ethers.InfuraProvider("sepolia", process.env.INFURA_API_KEY)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  const texas = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  const totalSupply = Number( await texas.totalSupply() );
  console.log(`Total Supply: ${totalSupply / ( 10 ** 18)} TEXAS`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
