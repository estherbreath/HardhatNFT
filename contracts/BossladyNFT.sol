// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BossladyNFT is ERC721URIStorage, Ownable {
   
     uint _tokenId;
    constructor()ERC721("BossladyNFT", "BNFT"){
    }

    function mint(address _to ,string calldata _uri) external onlyOwner{
            _tokenId++;
            _mint(_to,_tokenId);
            _setTokenURI(_tokenId, _uri);
        }
    }











