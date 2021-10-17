// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

import './ERC20.sol';
contract ITToken is ERC20 {
   constructor() ERC20("ITToken", "ITTKN") {
       _mint(msg.sender, 10000 * 10 ** 18);
   }
}