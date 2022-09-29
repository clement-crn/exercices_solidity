// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.15;



contract Campaign_contract {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    address[] public approvers;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum) public{
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers.push(msg.sender);
    }

}
