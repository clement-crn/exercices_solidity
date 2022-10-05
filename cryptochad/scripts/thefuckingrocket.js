/*dans le projet de Gridder, ce fichier remplace :
    -Web3.js (qui fournissait un provider)
    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)

ethers.js remplace web3.js



doc :
"   JSON-RPC API provides:
    -A connection to the Ethereum network (a Provider)
    -Holds your private key and can sign things (a Signer) "
*/

import { ethers } from "ethers";

function Rocket(){
    //le provider permet seulement de lire sur la blockchain 
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();

}

export default Rocket;


