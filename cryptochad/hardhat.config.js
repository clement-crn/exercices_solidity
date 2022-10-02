require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.15",
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/8c72e5a5391e442ca0bf5acfc037ce60",
            accounts: [
                "48d545c41fe22dace929726a658a72dfa1f88d7691c2f652faa3125d91b0b694",
            ],
        },
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        hardhat: {
            // See its defaults
        },
    },
};
