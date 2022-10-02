const { ethers } = require("hardhat");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const assert = require("assert");
const ganache = require("ganache-cli");

describe("Campaign_contract", function () {
    let Campaign_contract, campaign_contract;
    const compiledFactory = require("../ethereum/build/CampaignFactory.json");
    const compiledCampaign = require("../ethereum/build/Campaign.json");

    let accounts; 
    let factory;
    let campaignAddress;
    let campaign;





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

//version web3

const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

/*const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign; */

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000",
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
});
