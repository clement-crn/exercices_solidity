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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _myABI_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myABI.json */ \"./pages/myABI.json\");\n\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n-affiche la balance du compte metamask\r\n*/ /*dans le projet de Gridder, ce fichier remplace :\r\n    -Web3.js (qui fournissait un provider)\r\n    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)\r\nethers.js remplace web3.js\r\ndoc :\r\n\"   JSON-RPC API provides:\r\n    -A connection to the Ethereum network (a Provider)\r\n    -Holds your private key and can sign things (a Signer) \"\r\n*/ //pour le moment, l'ABI est directement générée par Remix \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //fait un provider qui interragit avec le smart contract\n    // If you don't specify a //url//, Ethers connects to the default \n    // (i.e. ``http:/\\/localhost:8545``)\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.JsonRpcProvider();\n    // The provider also allows signing transactions to\n    // send ether and pay to change state within the blockchain.\n    // For this, we need the account signer...\n    const signer = provider.getSigner();\n    //fait une nouvelle instance du contrat factory \n    const myInstance = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(\"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\", _myABI_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n    var blockn;\n    async function block() {\n        blockn = await provider.getBlockNumber();\n        console.log(blockn);\n        await myInstance.createRequest(\"lol\", 0, \"0x70997970C51812dc3A010C7d01b50e0d17dc79C8\");\n    }\n    /* async function requestAccount() {\r\n        console.log(\"Demande du compte...\");\r\n        // vérifie si metamask existe sur le browser\r\n        if (window.ethereum) {\r\n            console.log(\"détecté\");\r\n            try {\r\n                const accounts = await window.ethereum.request({\r\n                    method: \"eth_requestAccounts\",\r\n                });\r\n                setWalletAddress(accounts[0]);\r\n            } catch (error) {\r\n                console.log(\"Error connecting...\");\r\n            }\r\n        } else{\r\n            alert(\"Meta Mask not detected\");\r\n        }\r\n    }*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: block,\n                children: \"block\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDTztBQUNEO0FBR2hDO0FBaUJBLE9BQU9HLEtBQUssTUFBTTtBQUVsQixlQUFlLEtBQU07SUFDakIsTUFBTSxLQUFDQyxhQUFhLE1BQUVDO0lBQ3RCLE1BQU0sS0FBQ0MsT0FBTyxNQUFFQyxVQUFVLE1BQUlOLFFBQVEsQ0FBQztJQUV0QztJQUVBLGtFQUFrRTtJQUNsRTtJQUNBO0lBRUE7SUFDQTtJQUNBLDBDQUEwQztJQUMxQyxNQUFNVSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksU0FBUyxFQUFFO0FBSXBDO2lFQUNNQyxJQUFVO0lBR2hCLElBQUlFLE1BQU07SUFDVixlQUFlQyxLQUFLLEdBQUU7UUFDbEJELE1BQU0sR0FBRyxNQUFNUCxRQUFRLENBQUNTLGNBQWMsRUFBRSxDQUFDO1FBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDLENBQUM7UUFFbkIsTUFBTUYsVUFBVSxDQUFDTyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUlEOzswQkF3QlEsUUFBQ0UsSUFBRTswQkFBQzs7Ozs7b0JBQTZDOzBCQUVqRDtnQkFBUUUsT0FBTyxFQUFFUixLQUFLOzs7Ozs7b0JBQWdCOzs7Ozs7WUFLcEMsQ0FDVDtBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9jaGFkLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuXHJcbi8qIENldHRlIHBhZ2U6XHJcbi1zZSBjb25uZWN0ZSDDoCBtZXRhbWFza1xyXG4tYWZmaWNoZSBsZSBjb21wdGUgY29uY2VybsOpIHZpYSBldGhlcnMuanNcclxuLWFmZmljaGUgbGEgYmFsYW5jZSBkdSBjb21wdGUgbWV0YW1hc2tcclxuKi9cclxuXHJcbi8qZGFucyBsZSBwcm9qZXQgZGUgR3JpZGRlciwgY2UgZmljaGllciByZW1wbGFjZSA6XHJcbiAgICAtV2ViMy5qcyAocXVpIGZvdXJuaXNzYWl0IHVuIHByb3ZpZGVyKVxyXG4gICAgLUZhY3RvcnkuanMgKHF1aSBkw6lwbG95YWl0IHVuZSBub3V2ZWxsZSBpbnN0YW5jZSBkZSBDYW1wYWlnbkZhY3RvcnkpXHJcbmV0aGVycy5qcyByZW1wbGFjZSB3ZWIzLmpzXHJcbmRvYyA6XHJcblwiICAgSlNPTi1SUEMgQVBJIHByb3ZpZGVzOlxyXG4gICAgLUEgY29ubmVjdGlvbiB0byB0aGUgRXRoZXJldW0gbmV0d29yayAoYSBQcm92aWRlcilcclxuICAgIC1Ib2xkcyB5b3VyIHByaXZhdGUga2V5IGFuZCBjYW4gc2lnbiB0aGluZ3MgKGEgU2lnbmVyKSBcIlxyXG4qL1xyXG5cclxuLy9wb3VyIGxlIG1vbWVudCwgbCdBQkkgZXN0IGRpcmVjdGVtZW50IGfDqW7DqXLDqWUgcGFyIFJlbWl4IFxyXG5pbXBvcnQgbXlBQkkgZnJvbSBcIi4vbXlBQkkuanNvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgICAvL2ZhaXQgdW4gcHJvdmlkZXIgcXVpIGludGVycmFnaXQgYXZlYyBsZSBzbWFydCBjb250cmFjdFxyXG4gICAgIFxyXG4gICAgIC8vIElmIHlvdSBkb24ndCBzcGVjaWZ5IGEgLy91cmwvLywgRXRoZXJzIGNvbm5lY3RzIHRvIHRoZSBkZWZhdWx0IFxyXG4gICAgIC8vIChpLmUuIGBgaHR0cDovXFwvbG9jYWxob3N0Ojg1NDVgYClcclxuICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpO1xyXG4gICAgIFxyXG4gICAgIC8vIFRoZSBwcm92aWRlciBhbHNvIGFsbG93cyBzaWduaW5nIHRyYW5zYWN0aW9ucyB0b1xyXG4gICAgIC8vIHNlbmQgZXRoZXIgYW5kIHBheSB0byBjaGFuZ2Ugc3RhdGUgd2l0aGluIHRoZSBibG9ja2NoYWluLlxyXG4gICAgIC8vIEZvciB0aGlzLCB3ZSBuZWVkIHRoZSBhY2NvdW50IHNpZ25lci4uLlxyXG4gICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICBcclxuICAgIC8vZmFpdCB1bmUgbm91dmVsbGUgaW5zdGFuY2UgZHUgY29udHJhdCBmYWN0b3J5IFxyXG4gICAgY29uc3QgbXlJbnN0YW5jZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXCIweGU3ZjE3MjVFNzczNENFMjg4RjgzNjdlMUJiMTQzRTkwYmIzRjA1MTJcIiwgbXlBQkksIHNpZ25lcik7XHJcbiAgICBcclxuXHJcbiAgICB2YXIgYmxvY2tuO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gYmxvY2soKXtcclxuICAgICAgICBibG9ja24gPSBhd2FpdCBwcm92aWRlci5nZXRCbG9ja051bWJlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJsb2Nrbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIGF3YWl0IG15SW5zdGFuY2UuY3JlYXRlUmVxdWVzdChcImxvbFwiLDAsXCIweDcwOTk3OTcwQzUxODEyZGMzQTAxMEM3ZDAxYjUwZTBkMTdkYzc5QzhcIik7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcblxyXG4gICAgLyogYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEFjY291bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZW1hbmRlIGR1IGNvbXB0ZS4uLlwiKTtcclxuICAgICAgICAvLyB2w6lyaWZpZSBzaSBtZXRhbWFzayBleGlzdGUgc3VyIGxlIGJyb3dzZXJcclxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZMOpdGVjdMOpXCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcuLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTWV0YSBNYXNrIG5vdCBkZXRlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuICAgXHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5QYWdlIGRlIGxhIG5vdXZlbGxlIGNhbXBhZ25lIGtpY2tzdGFydGVyPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YmxvY2t9PmJsb2NrPC9idXR0b24+XHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIm15QUJJIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwibXlJbnN0YW5jZSIsIkNvbnRyYWN0IiwiYmxvY2tuIiwiYmxvY2siLCJnZXRCbG9ja051bWJlciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVSZXF1ZXN0IiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

module.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"approveRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"createRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"finalizeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimum","type":"uint256"},{"internalType":"address","name":"creator","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approvers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"approversCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

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