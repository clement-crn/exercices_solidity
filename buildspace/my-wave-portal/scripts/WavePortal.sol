// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves = 20;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function manger() public {
        totalWaves += 1;
        console.log("%s waved!", msg.sender);
    
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("total waves %d ", totalWaves);
        return totalWaves;
    }
}
