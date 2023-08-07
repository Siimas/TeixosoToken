const { ethers } = require("hardhat");

async function main() {

  const teixosoFactory = await ethers.getContractFactory("TeixosoToken");
  const texas = await teixosoFactory.deploy("5000000000000000000");

  const deploymentReceipt = await texas.deploymentTransaction().wait(2);
  console.log(`Contract successfully deployed to ${deploymentReceipt.contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
