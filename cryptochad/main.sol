// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.15;



contract Campaign_contract {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount; //votes yes
        mapping(address => bool) approvals;
    }

    uint numRequests; //
    mapping (uint => Request) requests;

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
   mapping(address => bool) public approvers;

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

        approvers[msg.sender] = true; //ajoute une nouvelle key 
    }

    function createRequest(string calldata description, uint value, address recipient) public restricted {
        require(approvers[msg.sender]);
        Request storage r = requests[numRequests++]; //modifié car mapping dans struct n'est plus possible
        r.description = description;
        r.value = value;
        r.recipient = recipient;
        r.complete = false;
        r.approvalCount = 0;
        
    }

    function approveRequest(uint index) public{
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]); //si la personne a déjà voté et que son addresse est dans le mapping = false

        requests[index].approvals[msg.sender] = true;
        requests[index].approvalCount++;
    }

}
