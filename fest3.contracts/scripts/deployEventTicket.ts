import { ethers, run, network } from 'hardhat';
import { BigNumber } from 'ethers';
import { EventTicket } from '../typechain-types';

async function main() {
  await deployContracts();
}

async function deployContracts(): Promise<void> {
  console.log(`Deploying EventTicket to ${network.name} blockchain...`);

  const contractFactory = await ethers.getContractFactory("EventTicket");
  const args = [
    "",
    BigNumber.from(100),
    (await ethers.getSigners())[0].address,
    300,
    "",
    ethers.utils.parseUnits("0.1", 18)
    ] as const;
  const contract: EventTicket = await contractFactory.deploy(...args);
  await contract.deployed();
  console.log(`EventTicket deployed to ${contract.address}.`);

  const chainId = (await ethers.provider.getNetwork()).chainId;
  if (chainId === 31337) {
    console.log('Skipping verify on local chain');
    return;
  }

  await run('verify:verify', {
    address: contract.address,
    constructorArguments: args,
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
