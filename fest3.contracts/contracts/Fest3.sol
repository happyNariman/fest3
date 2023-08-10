// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@worldcoin/world-id-contracts/src/libraries/ByteHasher.sol";
import "@worldcoin/world-id-contracts/src/interfaces/IWorldID.sol";
import "./interfaces/IProfile.sol";

contract Fest3 {
    using ByteHasher for bytes;

    /// Errors
    /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();

    /// Events
    /// @notice Emitted when a profile is minted
    /// @param profileId The ID of the profile minted
    event ProfileMinted(uint256 indexed profileId);

    /// @dev The ProfileNFT instance that will be used for mint profiles
    IProfile internal immutable profile;

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal immutable worldId;

    /// @dev The contract's external nullifier hash
    uint256 internal immutable externalNullifier;

    /// @dev The World ID group ID (always 1)
    uint256 internal immutable groupId = 1;

    /// @dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person
    mapping(uint256 => bool) internal nullifierHashes;

    /// @param _worldId The WorldID instance that will verify the proofs
    /// @param _profile The WorldID instance that will verify the proofs
    /// @param _appId The World ID app ID
    /// @param _actionId The World ID action ID
    constructor(
        IWorldID _worldId,
        IProfile _profile,
        string memory _appId,
        string memory _actionId
    ) {
        worldId = _worldId;
        profile = _profile;
        externalNullifier = abi
            .encodePacked(abi.encodePacked(_appId).hashToField(), _actionId)
            .hashToField();
    }

    /// @notice Verifying worldId proof and creating profile with +3 Reputation points
    /// @param root The root of the Merkle tree (returned by the JS widget).
    /// @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
    /// @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).
    function verifyAndCreateProfile(
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) public payable {
        // First, we make sure this person hasn't done this before
        if (nullifierHashes[nullifierHash]) revert InvalidNullifier();

        // We now verify the provided proof is valid and the user is verified by World ID
        worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(msg.sender).hashToField(),
            nullifierHash,
            externalNullifier,
            proof
        );

        // We now record the user has done this, so they can't do it again (proof of uniqueness)
        nullifierHashes[nullifierHash] = true;

        // Minting profile with +3 Reputation points
        uint256 tokenId = profile.mint{value: msg.value}(msg.sender, 1, 3);

        // Emiting Event
        emit ProfileMinted(tokenId);
    }

    /// @notice Creating profile with +1 Reputation points
    function createProfile() public payable {
        
        // Minting profile with +3 Reputation points
        uint256 tokenId = profile.mint{value: msg.value}(msg.sender, 1, 3);

        // Emiting Event
        emit ProfileMinted(tokenId);
    }
}