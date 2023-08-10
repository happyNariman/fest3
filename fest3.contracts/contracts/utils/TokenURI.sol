// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.21;

import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title TokenURI
 * @author FEST3 team
 * @notice Implementation of token URI.
 */
contract TokenURI {
    using Strings for uint256;

    string private _assetURI;

    constructor(string memory assetURI) {
        _assetURI = assetURI;
    }

    /**
     * @notice Used to retrieve the metadata URI of a token.
     * @return Metadata URI of the specified token
     */
    function tokenURI() public view virtual returns (string memory) {
        return _assetURI;
    }
}