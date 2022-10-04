import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import './styles.css'

/* Cette page:
-se connecte à metamask
-affiche le compte concerné via ethers.js
-affiche la balance du compte metamask


*/

export default () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [balance, setBalance] = useState("");
    

    


    async function requestAccount() {
        console.log("Demande du compte...");

        // vérifie si metamask existe sur le browser
        if (window.ethereum) {
            console.log("détecté");

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);

            } catch (error) {
                console.log("Error connecting...");
            }
        } else {
            alert("Meta Mask not detected");
        }
    }
    // créée un provider qui interragit avec le smart contract
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
    }

    const getBalance = async (address) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(walletAddress);
        const balanceInEth = ethers.utils.formatEther(balance);
        console.log(balanceInEth);
        setBalance(balanceInEth);
    }

    return (
        <div>
            <h1>Page de la nouvelle campagne kickstarter</h1>
            <button onClick={requestAccount}>
                Connecter le wallet à Metamask
            </button>
            <h3>Adresse du wallet: {walletAddress}</h3>


            <button onClick={getBalance}>Balance</button>
            <h3>Balance: {balance}</h3>


        </div>
    );
};
