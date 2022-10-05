import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import './styles.css'

/* Cette page:
-se connecte à metamask
-affiche le compte concerné via ethers.js
-affiche la balance du compte metamask


*/

import Rocket from "../scripts/thefuckingrocket";

export default () => {
    
    async function f_balance(){
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner()
        balance = await provider.getBalance("ethers.eth");
        console.log(balance);
    }
    
    return (
        <div>
           <button onClick={f_balance}></button>
            <h3>balance</h3>
        </div>
    );
};
