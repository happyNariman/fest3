// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@worldcoin/world-id-contracts/src/libraries/ByteHasher.sol";
import "@worldcoin/world-id-contracts/src/interfaces/IWorldID.sol";
import "./interfaces/IProfile.sol";
import "./assets/EventTicket.sol";

contract Fest3 {
    using ByteHasher for bytes;

    /// Errors
    /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();

    /// Events
    /// @notice Emitted when a profile is minted
    /// @param profileId The ID of the profile minted
    event ProfileMinted(uint256 indexed profileId);

    /// @notice Emitted when a new event is created
    /// @param eventAddress The Event Contract
    event EventCreated(EventTicket indexed eventAddress);

    /// @notice Emitted when a ticket is bought
    /// @param ticketId The ID of the profile minted
    event TicketBought(uint256 indexed ticketId);

    /// Variables
    /// @dev The ProfileNFT instance that will be used for mint profiles
    IProfile internal immutable profile;

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal immutable worldId;

    /// @dev The contract's external nullifier hash
    uint256 internal immutable externalNullifier;

    /// @dev The World ID group ID (always 1)
    uint256 internal immutable groupId = 1;

    /// @dev The Array of all Upcoming Events 
    EventTicket[] private _events;

    /// @dev Whether an event is active or not
    mapping(EventTicket => bool) internal isEventActive;

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
    ) public payable returns (uint256) {

        // Checking if user already have a fest3 profile
        require(profile.balanceOf(msg.sender) == 0, "User already have a profle");

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

        // Minting profile with +4 Reputation points
        uint256 tokenId = profile.mint{value: msg.value}(msg.sender, 1, 4);

        // Emiting Event
        emit ProfileMinted(tokenId);

        return tokenId;
    }

    /// @notice Creating profile with +1 Reputation points
    function createProfile() public payable returns (uint256) {

        // Checking if user already have a fest3 profile
        require(profile.balanceOf(msg.sender) == 0, "User already have a profle");
        
        // Minting profile with +1 Reputation points
        uint256 tokenId = profile.mint{value: msg.value}(msg.sender, 1, 1);

        // Emiting Event
        emit ProfileMinted(tokenId);

        return tokenId;
    }

    /// @notice Creating new Fest3 Event. Will be allowed for only Moderator
    /// @param eventMetadata The Metadata of the event.
    /// @param totalNumberOfTickets The total number of tickets available for the event.
    /// @param ticketPrice The Ticket Price.
    /// @param ticketMetadata The Ticket Metadata.
    function createEvent(
        string memory eventMetadata,
        uint256 totalNumberOfTickets,
        uint256 ticketPrice,
        string memory ticketMetadata
    ) public returns (EventTicket) {
        // Creating new Event
        EventTicket eventTicket = new EventTicket(
            eventMetadata, 
            totalNumberOfTickets,
            address(0),
            0,
            ticketMetadata,
            ticketPrice);

        _events.push(eventTicket);

        // Mapping event as active
        isEventActive[eventTicket] = true;

        // Emiting Event
        emit EventCreated(eventTicket);

        return eventTicket;
    }

    /// @notice View all Events
    function getAllEvents() public view returns (EventTicket[] memory) {
        return _events;
    }

    /// @notice Buy Tickets of the event.
    function buyTicket(EventTicket _eventAddress, uint256 profileTokenId) public payable returns (uint256) {

        // Checking if user already have a fest3 profile
        require(profile.balanceOf(msg.sender) > 0, "User must have a fest3 profile.");

        // Checking if event is active
        require(isEventActive[_eventAddress], "Event must be active");
        
        // Minting event ticket
        uint256 tokenId = _eventAddress.nestMint{value: msg.value}(address(profile), 1, profileTokenId);

        // Emiting Event
        emit TicketBought(tokenId);

        return tokenId;
    }

}