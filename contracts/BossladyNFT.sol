// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BossladyNFT is ERC721, Ownable {
   
     string BASEURL;
    constructor(address to,string memory url)ERC721("BossladyNFT", "BNFT"){
        _mint (to, 1);
         BASEURL = url;
    }

    function _baseURI() internal view override returns (string memory) {
        return BASEURL;
    }
    }











