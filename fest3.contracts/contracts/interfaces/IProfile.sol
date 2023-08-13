// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.21;

interface IProfile {
    /**
     * @notice Used to mint the desired number of tokens to the specified address.
     * @dev The "data" value of the "_safeMint" method is set to an empty value.
     * @dev Can only be called while the open sale is open.
     * @param to Address to which to mint the token
     * @param numToMint Number of tokens to mint
     * @return The ID of the first token to be minted in the current minting cycle
     */
    function mint(
        address to,
        uint256 numToMint,
        uint256 initialReputationPoints
    ) external payable returns (uint256);

    /**
     * @notice Used to retrieve the price per mint.
     * @return The price per mint of a single token expressed in the lowest denomination of a native currency
     */
    function pricePerMint() external view returns (uint256);

    /**
     * @notice Used to retrieve the profile NFT balance for and address.
     * @param owner Address for which the balance is requied
     * @return Balance
     */
    function balanceOf(address owner) external view returns (uint256);
}