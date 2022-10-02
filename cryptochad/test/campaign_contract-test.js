const { ethers } = require("hardhat");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Campaign_contract", function () {
    let Campaign_contract, campaign_contract;

    before(async function () {
        Campaign_contract = await ethers.getContractFactory(
            "Campaign_contract"
        );
        campaign_contract = await Campaign_contract.deploy();
        await campaign_contract.deployed();
    });

    it("should create campaign", async function(){
        await Campaign_contract.Campaign("1");
        let macampagne = await campaign_contract.
    })

});
