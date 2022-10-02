// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.15;

//le paiement sera fait par l'user qui demande le déploiement d'un nouveau contrat
//campaignFacotry permet aussi de sécuriser le contrat en évitant de le modifier
<<<<<<< HEAD
contract CampaignFactory {
    Campaign[] public deployedCampaigns;

    function createCampaign(uint256 minimum) public {
=======
contract CampaignFactory{
    Campaign[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
>>>>>>> 8818debee866762147b89bdd2667c0855c8e835f
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    } 

<<<<<<< HEAD
    function getDeployedCampaigns() public view returns (Campaign[] memory) {
=======
    function getDeployedCampaigns() public view returns(Campaign[] memory) {
>>>>>>> 8818debee866762147b89bdd2667c0855c8e835f
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address payable recipient;
        bool complete;
        uint256 approvalCount; //votes yes
        mapping(address => bool) approvals;
    }



    uint256 numRequests; //
    mapping(uint256 => Request) requests;

    address public manager;
    uint256 public minimumContribution;
    uint256 public approversCount;
    mapping(address => bool) public approvers;

    //permet d'executer la fonction que si l'addresse est celle du manager
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

<<<<<<< HEAD
    constructor(uint256 minimum, address creator) public {
=======
    constructor(uint minimum, address creator) public{
>>>>>>> 8818debee866762147b89bdd2667c0855c8e835f
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true; //ajoute une nouvelle key
        approversCount++;
    }

    function createRequest(
        string calldata description,
        uint256 value,
        address payable recipient
    ) public restricted {
        require(approvers[msg.sender]);
        Request storage r = requests[numRequests++]; //modifié car nvelle instance avec mapping n'est plus possible
        r.description = description;
        r.value = value;
        r.recipient = recipient;
        r.complete = false;
        r.approvalCount = 0;
    }

    function approveRequest(uint256 index) public {
        Request storage r = requests[index];

        require(approvers[msg.sender]);
        require(!r.approvals[msg.sender]); //si la pefrsonne a déjà voté et que son addresse est dans le mapping = false

        r.approvals[msg.sender] = true; //requests[index] est remplacé par r (voir ligne 63)
        r.approvalCount++;
    }

    //permet de payer le vendeur fictif si les contributeurs sont OK
    function finalizeRequest(uint256 index) public restricted {
        Request storage r = requests[index];

        //au moins + de la moitié des votants
        require(r.approvalCount > (approversCount / 2));
        require(!r.complete);

        r.recipient.transfer(r.value);
        r.complete = true;
    }
}
