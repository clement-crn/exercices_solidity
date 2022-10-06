import React from "react";
import { useState } from "react";
import { ethers } from "ethers";


/* Cette page:
-se connecte à metamask
-affiche le compte concerné via ethers.js
-affiche la balance du compte metamask


*/

/*dans le projet de Gridder, ce fichier remplace :
    -Web3.js (qui fournissait un provider)
    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)
ethers.js remplace web3.js
doc :
"   JSON-RPC API provides:
    -A connection to the Ethereum network (a Provider)
    -Holds your private key and can sign things (a Signer) "
*/

import myABI from "./myABI.json"

export default () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [balance, setBalance] = useState("");

     //fait un provider qui interragit avec le smart contract
     
     // If you don't specify a //url//, Ethers connects to the default 
     // (i.e. ``http:/\/localhost:8545``)
     const provider = new ethers.providers.JsonRpcProvider();
     
     // The provider also allows signing transactions to
     // send ether and pay to change state within the blockchain.
     // For this, we need the account signer...
     const signer = provider.getSigner()
     
     
    
    //fait une nouvelle instance du contrat factory 
    const myInstance = new ethers.Contract("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", myABI, provider);
    
    var blockn;
    async function block(){
        blockn = await provider.getBlockNumber();
        console.log(blockn);
    }
   
    

    /*async function requestAccount() {
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
        } else{
            alert("Meta Mask not detected");
        }
    }*/
   

    

    
    return (
        <div>
            <h1>Page de la nouvelle campagne kickstarter</h1>
            
            <button onClick={block}>block</button>
           


           
        </div>
    )
    }
