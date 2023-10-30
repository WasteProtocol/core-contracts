// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Storage  {

    string public version = "1.0.0";
    string private _name;

    constructor(string memory __name){
        setName(__name);
    }

    function getName() public view returns(string memory name){
        name = _name;
    }

    function setName(string memory __name) public {
        _name = __name;
    }

}
