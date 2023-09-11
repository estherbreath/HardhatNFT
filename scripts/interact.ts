import {ethers} from "hardhat"

async function main() {
  const [signer] = await ethers.getSigners();
  const myNFT = await ethers.getContractAt(
    "IMint",
    "0x77aC3a62c12333DD9604f8D5cD6E350Cd33D04b4"
  );

  await myNFT.mint(
    signer.address,
    "ipfs://QmPXjXLePXBSZDH8GWRL9ywHqkFDHKq6SY1JSBk8ZxHndZ"
  );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

