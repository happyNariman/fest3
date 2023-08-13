import { ethers, run, network } from 'hardhat';
import { BigNumber } from 'ethers';
import { Profile, Fest3 } from '../typechain-types';

async function main() {
  await deployContracts();
}

async function deployContracts(): Promise<void> {
  console.log(`Deploying Profile to ${network.name} blockchain...`);

  const contractFactoryProfile = await ethers.getContractFactory("Profile");

  const collectionMetadata = {
    "name": "Fest3 Profile",
    "description": "Default metadata for Fest3 Profile collection.",
  }; //Upload and set a ipfs url here
  const tokenURI = "https://ipfs.io/ipfs/QmYC2bKEqvZ51s84HjYHqhq1oin6HWUw1RVqb3b1xdUBXX?filename=metadata.json"
  const argsProfile = [
    String(collectionMetadata),
    BigNumber.from(1000000),
    (await ethers.getSigners())[0].address,
    0,
    tokenURI,
    ethers.utils.parseUnits("0", 18)
    ] as const;
  const contractProfile: Profile = await contractFactoryProfile.deploy(...argsProfile);
  await contractProfile.deployed();
  console.log(`Profile deployed to ${contractProfile.address}.`);

  
  console.log(`Deploying Fest3 to ${network.name} blockchain...`);

  const contractFactoryFest3 = await ethers.getContractFactory("Fest3");
  const worldIdAddress = "0x515f06B36E6D3b707eAecBdeD18d8B384944c87f"; // Optimism Goerli
  const argsFest3 = [
    worldIdAddress,
    contractProfile.address,
    "Fest3 Application",
    "Verifying User's Identity by WorldId"
    ] as const;
    const contractFest3: Fest3 = await contractFactoryFest3.deploy(...argsFest3);
    await contractFest3.deployed();
    console.log(`Fest3 deployed to ${contractFest3.address}.`);

  const chainId = (await ethers.provider.getNetwork()).chainId;
  if (chainId === 31337) {
    console.log('Skipping verify on local chain');
    return;
  }

  await run('verify:verify', {
    address: contractProfile.address,
    constructorArguments: argsProfile,
  });

  await run('verify:verify', {
    address: contractFest3.address,
    constructorArguments: argsFest3,
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
