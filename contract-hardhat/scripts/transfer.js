const { ethers } = require("hardhat");
const teixosoJSON = require("../artifacts/contracts/TeixosoToken.sol/TeixosoToken.json")

function convertFromTexas(amount) { return amount * (10 ** 18) }
function convertToTexas(amount) { return amount / (10 ** 18) }

async function main() {
  const abi = teixosoJSON.abi
  const provider = new ethers.InfuraProvider("sepolia", process.env.INFURA_API_KEY)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  const texas = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)

  const address = "0xfdC691630589F0694d5cf406B3CB5f8728ab743F"
  const amountInTexas = 1.5;
  const amount = convertFromTexas(amountInTexas).toString();

  texas.transfer(address, amount);
  console.log(`Transfered ${amountInTexas} TEXAS to ${address}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
