import { ethers } from "hardhat";

async function main() {
const to = "0x77aC3a62c12333DD9604f8D5cD6E350Cd33D04b4"
const metadataURL = "ipfs://QmSWx9NCABaiqsGZp1DvM4EghqbAAhQtCwKZ6PxVrJomPF"

    const bossladyNFT = await ethers.deployContract('BossladyNFT', [to, metadataURL]) 
    await bossladyNFT.waitForDeployment()
    
    console.log(`This contract has been deployed to ${bossladyNFT.target}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  