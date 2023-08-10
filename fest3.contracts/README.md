# Instructions

1. Install packages with `yarn` or `npm i`
2. Test contracts compile: `yarn hardhat compile`
3. Check contract size: `yarn hardhat size-contracts`
4. Run prettier: `yarn prettier`
5. Copy .env.example into .env and set your variables
6. Use `contracts/`, `tests/` and `scripts/` to build your code.
7. Deploy on testnet: `yarn hardhat run scripts/deploy.ts --network sepolia`
8. Verify contracts, using the contract address and arguments from previous step:
   ```
      yarn hardhat verify 0x.... --network sepolia --contract contracts/Fest3.sol:Fest3 --arguments ...
   ```
