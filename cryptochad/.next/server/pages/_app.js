"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _myABI_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myABI.json */ \"./pages/myABI.json\");\n\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n-affiche la balance du compte metamask\r\n\r\n\r\n*/ /*dans le projet de Gridder, ce fichier remplace :\r\n    -Web3.js (qui fournissait un provider)\r\n    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)\r\nethers.js remplace web3.js\r\ndoc :\r\n\"   JSON-RPC API provides:\r\n    -A connection to the Ethereum network (a Provider)\r\n    -Holds your private key and can sign things (a Signer) \"\r\n*/ \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //fait un provider qui interragit avec le smart contract\n    // If you don't specify a //url//, Ethers connects to the default \n    // (i.e. ``http:/\\/localhost:8545``)\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.JsonRpcProvider();\n    // The provider also allows signing transactions to\n    // send ether and pay to change state within the blockchain.\n    // For this, we need the account signer...\n    const signer = provider.getSigner();\n    //fait une nouvelle instance du contrat factory \n    const myInstance = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(\"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\", _myABI_json__WEBPACK_IMPORTED_MODULE_3__, provider);\n    let blockn;\n    async function test() {\n        blockn = await provider.getBlockNumber();\n        console.log(blockn);\n    }\n    /*async function requestAccount() {\r\n        console.log(\"Demande du compte...\");\r\n\r\n        // vérifie si metamask existe sur le browser\r\n        if (window.ethereum) {\r\n            console.log(\"détecté\");\r\n\r\n            try {\r\n                const accounts = await window.ethereum.request({\r\n                    method: \"eth_requestAccounts\",\r\n                });\r\n                setWalletAddress(accounts[0]);\r\n\r\n            } catch (error) {\r\n                console.log(\"Error connecting...\");\r\n            }\r\n        } else{\r\n            alert(\"Meta Mask not detected\");\r\n        }\r\n    }*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: test,\n                children: \"block\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: blockn\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDTztBQUNEO0FBR2hDO0FBb0JBLGVBQWUsS0FBTTtJQUNqQixNQUFNLEtBQUNJLGFBQWEsTUFBRUM7SUFDdEIsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVU7OztJQUt6QixvQ0FBb0M7SUFDcEMsTUFBTUMsUUFBUSxHQUFHLElBQUlOLE1BQU0sQ0FBQ08sU0FBUyxDQUFDQztJQUV0QyxtREFBbUQ7SUFDbkQ7SUFDQTtJQUNBLE1BQU1DLE1BQU0sR0FBR0gsUUFBUTtJQUl4QixnREFBZ0Q7SUFDaEQsTUFBTUssVUFBVSxHQUFHLElBQUlYLE1BQU0sQ0FBQ1ksUUFBUSxDQUFDO0dBRTdCO2lFQUNWLEdBQWVFO1FBQ1hELE1BQU0sR0FBRyxNQUFNUCxRQUFRLENBQUNTLGNBQWMsRUFBRSxDQUFDO1FBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs2RkEyQlc7MEJBQUM7Ozs7O29CQUE2Qzs7Z0JBRXpDUSxPQUFPLEVBQUVQOzBCQUFNLE9BQUs7Ozs7OzswQkFDNUIsUUFBQ1EsSUFBRTswQkFBRVQ7Ozs7O29CQUFZOzs7Ozs7WUFFZixDQUNUO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0b2NoYWQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcblxyXG5cclxuLyogQ2V0dGUgcGFnZTpcclxuLXNlIGNvbm5lY3RlIMOgIG1ldGFtYXNrXHJcbi1hZmZpY2hlIGxlIGNvbXB0ZSBjb25jZXJuw6kgdmlhIGV0aGVycy5qc1xyXG4tYWZmaWNoZSBsYSBiYWxhbmNlIGR1IGNvbXB0ZSBtZXRhbWFza1xyXG5cclxuXHJcbiovXHJcblxyXG4vKmRhbnMgbGUgcHJvamV0IGRlIEdyaWRkZXIsIGNlIGZpY2hpZXIgcmVtcGxhY2UgOlxyXG4gICAgLVdlYjMuanMgKHF1aSBmb3Vybmlzc2FpdCB1biBwcm92aWRlcilcclxuICAgIC1GYWN0b3J5LmpzIChxdWkgZMOpcGxveWFpdCB1bmUgbm91dmVsbGUgaW5zdGFuY2UgZGUgQ2FtcGFpZ25GYWN0b3J5KVxyXG5ldGhlcnMuanMgcmVtcGxhY2Ugd2ViMy5qc1xyXG5kb2MgOlxyXG5cIiAgIEpTT04tUlBDIEFQSSBwcm92aWRlczpcclxuICAgIC1BIGNvbm5lY3Rpb24gdG8gdGhlIEV0aGVyZXVtIG5ldHdvcmsgKGEgUHJvdmlkZXIpXHJcbiAgICAtSG9sZHMgeW91ciBwcml2YXRlIGtleSBhbmQgY2FuIHNpZ24gdGhpbmdzIChhIFNpZ25lcikgXCJcclxuKi9cclxuXHJcbmltcG9ydCBteUFCSSBmcm9tIFwiLi9teUFCSS5qc29uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgIC8vZmFpdCB1biBwcm92aWRlciBxdWkgaW50ZXJyYWdpdCBhdmVjIGxlIHNtYXJ0IGNvbnRyYWN0XHJcbiAgICAgXHJcbiAgICAgLy8gSWYgeW91IGRvbid0IHNwZWNpZnkgYSAvL3VybC8vLCBFdGhlcnMgY29ubmVjdHMgdG8gdGhlIGRlZmF1bHQgXHJcbiAgICAgLy8gKGkuZS4gYGBodHRwOi9cXC9sb2NhbGhvc3Q6ODU0NWBgKVxyXG4gICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKCk7XHJcbiAgICAgXHJcbiAgICAgLy8gVGhlIHByb3ZpZGVyIGFsc28gYWxsb3dzIHNpZ25pbmcgdHJhbnNhY3Rpb25zIHRvXHJcbiAgICAgLy8gc2VuZCBldGhlciBhbmQgcGF5IHRvIGNoYW5nZSBzdGF0ZSB3aXRoaW4gdGhlIGJsb2NrY2hhaW4uXHJcbiAgICAgLy8gRm9yIHRoaXMsIHdlIG5lZWQgdGhlIGFjY291bnQgc2lnbmVyLi4uXHJcbiAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcclxuICAgICBcclxuICAgICBcclxuICAgIFxyXG4gICAgLy9mYWl0IHVuZSBub3V2ZWxsZSBpbnN0YW5jZSBkdSBjb250cmF0IGZhY3RvcnkgXHJcbiAgICBjb25zdCBteUluc3RhbmNlID0gbmV3IGV0aGVycy5Db250cmFjdChcIjB4ZTdmMTcyNUU3NzM0Q0UyODhGODM2N2UxQmIxNDNFOTBiYjNGMDUxMlwiLCBteUFCSSwgcHJvdmlkZXIpO1xyXG4gICAgXHJcbiAgICBsZXQgYmxvY2tuO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gdGVzdCgpe1xyXG4gICAgICAgIGJsb2NrbiA9IGF3YWl0IHByb3ZpZGVyLmdldEJsb2NrTnVtYmVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYmxvY2tuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVtYW5kZSBkdSBjb21wdGUuLi5cIik7XHJcblxyXG4gICAgICAgIC8vIHbDqXJpZmllIHNpIG1ldGFtYXNrIGV4aXN0ZSBzdXIgbGUgYnJvd3NlclxyXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkw6l0ZWN0w6lcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIk1ldGEgTWFzayBub3QgZGV0ZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbiAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+UGFnZSBkZSBsYSBub3V2ZWxsZSBjYW1wYWduZSBraWNrc3RhcnRlcjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Rlc3R9PmJsb2NrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMz57YmxvY2tufTwvaDM+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIm15QUJJIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwibXlJbnN0YW5jZSIsIkNvbnRyYWN0IiwiYmxvY2tuIiwidGVzdCIsImdldEJsb2NrTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./pages/myABI.json":
/*!**************************!*\
  !*** ./pages/myABI.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"minimum","type":"uint256"},{"internalType":"address","name":"creator","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"approveRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approvers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"approversCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"createRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"finalizeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();