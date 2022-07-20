pragma solidity ^0.5.0;

import './RWD.sol';
import './Tether.sol';

contract DecentralBank {
    string name = 'Dencentral Bank';
    address public owner;
    Tether public tether;
    RWD public rwd;

    constructor(RWD _rwd, Tether _tether) public {
        tether = _tether;
        rwd = _rwd;
    }
}