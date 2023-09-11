import { ethers } from "hardhat";

async function main() {


    const bossladyNFT = await ethers.deployContract('BossladyNFT', []) 
    await bossladyNFT.waitForDeployment()
    
    console.log(`This contract has been deployed to ${bossladyNFT.target}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  // 0x32cf266B0fD85478deFfA92148047FeF9E39A424