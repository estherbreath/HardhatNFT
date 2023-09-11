import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const myNFT = await ethers.getContractAt(
    "IBossladyNFT",
    "0x32cf266B0fD85478deFfA92148047FeF9E39A424"
  );

  await myNFT.mint(
    signer.address,
    "ipfs://bafkreif6nvy7sqs6wc3qgnbqds4v35ahl72srnrbkkqfeflfopwhmqfh3y/"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});