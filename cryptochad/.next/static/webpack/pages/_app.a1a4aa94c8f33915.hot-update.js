"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_main_sol_Factory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artifacts/contracts/main.sol/Factory.json */ \"./artifacts/contracts/main.sol/Factory.json\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n-affiche la balance du compte metamask\r\n\r\n\r\n*/ /*dans le projet de Gridder, ce fichier remplace :\r\n    -Web3.js (qui fournissait un provider)\r\n    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)\r\nethers.js remplace web3.js\r\ndoc :\r\n\"   JSON-RPC API provides:\r\n    -A connection to the Ethereum network (a Provider)\r\n    -Holds your private key and can sign things (a Signer) \"\r\n*/ \n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), walletAddress = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), balance = ref1[0], setBalance = ref1[1];\n    //fait un provider qui interragit avec le smart contract\n    // If you don't specify a //url//, Ethers connects to the default \n    // (i.e. ``http:/\\/localhost:8545``)\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.JsonRpcProvider();\n    // The provider also allows signing transactions to\n    // send ether and pay to change state within the blockchain.\n    // For this, we need the account signer...\n    var signer = provider.getSigner();\n    //fait une nouvelle instance du contrat factory \n    var myInstance = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(\"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\", [\n        {\n            \"inputs\": [\n                {\n                    \"internalType\": \"uint256\",\n                    \"name\": \"minimum\",\n                    \"type\": \"uint256\"\n                },\n                {\n                    \"internalType\": \"address\",\n                    \"name\": \"creator\",\n                    \"type\": \"address\"\n                }\n            ],\n            \"stateMutability\": \"nonpayable\",\n            \"type\": \"constructor\"\n        },\n        {\n            \"inputs\": [\n                {\n                    \"internalType\": \"uint256\",\n                    \"name\": \"index\",\n                    \"type\": \"uint256\"\n                }\n            ],\n            \"name\": \"approveRequest\",\n            \"outputs\": [],\n            \"stateMutability\": \"nonpayable\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [\n                {\n                    \"internalType\": \"address\",\n                    \"name\": \"\",\n                    \"type\": \"address\"\n                }\n            ],\n            \"name\": \"approvers\",\n            \"outputs\": [\n                {\n                    \"internalType\": \"bool\",\n                    \"name\": \"\",\n                    \"type\": \"bool\"\n                }\n            ],\n            \"stateMutability\": \"view\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [],\n            \"name\": \"approversCount\",\n            \"outputs\": [\n                {\n                    \"internalType\": \"uint256\",\n                    \"name\": \"\",\n                    \"type\": \"uint256\"\n                }\n            ],\n            \"stateMutability\": \"view\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [],\n            \"name\": \"contribute\",\n            \"outputs\": [],\n            \"stateMutability\": \"payable\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [\n                {\n                    \"internalType\": \"string\",\n                    \"name\": \"description\",\n                    \"type\": \"string\"\n                },\n                {\n                    \"internalType\": \"uint256\",\n                    \"name\": \"value\",\n                    \"type\": \"uint256\"\n                },\n                {\n                    \"internalType\": \"address payable\",\n                    \"name\": \"recipient\",\n                    \"type\": \"address\"\n                }\n            ],\n            \"name\": \"createRequest\",\n            \"outputs\": [],\n            \"stateMutability\": \"nonpayable\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [\n                {\n                    \"internalType\": \"uint256\",\n                    \"name\": \"index\",\n                    \"type\": \"uint256\"\n                }\n            ],\n            \"name\": \"finalizeRequest\",\n            \"outputs\": [],\n            \"stateMutability\": \"nonpayable\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [],\n            \"name\": \"manager\",\n            \"outputs\": [\n                {\n                    \"internalType\": \"address\",\n                    \"name\": \"\",\n                    \"type\": \"address\"\n                }\n            ],\n            \"stateMutability\": \"view\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [],\n            \"name\": \"minimumContribution\",\n            \"outputs\": [\n                {\n                    \"internalType\": \"uint256\",\n                    \"name\": \"\",\n                    \"type\": \"uint256\"\n                }\n            ],\n            \"stateMutability\": \"view\",\n            \"type\": \"function\"\n        }\n    ], provider);\n    /*async function requestAccount() {\r\n        console.log(\"Demande du compte...\");\r\n\r\n        // vérifie si metamask existe sur le browser\r\n        if (window.ethereum) {\r\n            console.log(\"détecté\");\r\n\r\n            try {\r\n                const accounts = await window.ethereum.request({\r\n                    method: \"eth_requestAccounts\",\r\n                });\r\n                setWalletAddress(accounts[0]);\r\n\r\n            } catch (error) {\r\n                console.log(\"Error connecting...\");\r\n            }\r\n        } else{\r\n            alert(\"Meta Mask not detected\");\r\n        }\r\n    }*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 206,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: requestAccount,\n                children: \"Connecter le wallet \\xe0 Metamask\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 207,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Adresse du wallet: \",\n                    walletAddress\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 210,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getBalance,\n                children: \"Balance\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 213,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Balance: \",\n                    balance\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 214,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 205,\n        columnNumber: 9\n    }, _this);\n}, \"RbrO7EvaECjsVDQyExqmmCjcan0=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQ087QUFDRDtBQUdoQztBQW9CQSxrQkFBZTs7SUFDWCxJQUEwQ0MsR0FBWSxHQUFaQSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9DRzs7O0lBS047SUFDQSxvQ0FBb0M7SUFDcEMsSUFBTUksUUFBUSxHQUFHLElBQUlOLE1BQU0sQ0FBQ08sU0FBUyxDQUFDQyxlQUFlLEVBQUU7SUFFdkQ7SUFDQTtJQUNBO0lBQ0EsSUFBTUMsTUFBTSxHQUFHSCxRQUFRLENBQUNJLFNBQVMsRUFBRTtJQUlwQyxnREFBZ0Q7R0FDVDsrREFDbkM7OzZEQUVROzhEQUNJLFdBQWMsRUFBRSxTQUFTO29CQUN6QixNQUFNLEVBQUUsU0FBUztvQkFDakIsTUFBTSxFQUFFLFNBQVM7aUJBQ3BCO2dCQUNEO29CQUNJLGNBQWMsRUFBRSxTQUFTO29CQUN6QixNQUFNLEVBQUUsU0FBUztvQkFDakIsTUFBTSxFQUFFLFNBQVM7aUJBQ3BCO2FBQ0o7WUFDRCxnRUFBbUIsR0FBWTs7U0FFbEM7UUFDRDtZQUNJLFFBQVEsRUFBRTtnQkFDTjtvQkFDSSxjQUFjLEVBQUU7OztpQkFHbkI7YUFDSjtZQUNELE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEI7WUFDQTtZQUNBLE1BQU0sRUFBRSxVQUFVO1NBQ3JCO1FBQ0Q7O2dCQUVROztvQkFFSSxNQUFNLEVBQUUsRUFBRTtvQkFDVixNQUFNLEVBQUU7aUJBQ1g7YUFDSjtZQUNEO1lBQ0EsU0FBUyxFQUFFO2dCQUNQO29CQUNJLGNBQWMsRUFBRSxNQUFNO29CQUN0QixNQUFNLEVBQUUsRUFBRTs7O2FBR2pCO1lBQ0Q7WUFDQSxNQUFNLEVBQUUsVUFBVTtTQUNyQjtRQUNEO1lBQ0k7WUFDQTtZQUNBLFNBQVMsRUFBRTtnQkFDUDs7b0JBRUksTUFBTSxFQUFFLEVBQUU7b0JBQ1YsTUFBTSxFQUFFO2lCQUNYO2FBQ0o7WUFDRDtZQUNBLE1BQU0sRUFBRSxVQUFVO1NBQ3JCO1FBQ0Q7O1lBRUksTUFBTSxFQUFFO1lBQ1IsU0FBUyxFQUFFLEVBQUU7WUFDYjtZQUNBO1NBQ0g7UUFDRDtZQUNJLFFBQVEsRUFBRTtnQkFDTjs7b0JBRUksTUFBTSxFQUFFO29CQUNSLE1BQU0sRUFBRTs7O29CQUdSO29CQUNBLE1BQU0sRUFBRTtvQkFDUixNQUFNO2lCQUNUO2dCQUNEOzs7b0JBR0k7aUJBQ0g7YUFDSjtZQUNELE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLFNBQVMsRUFBRSxFQUFFO1lBQ2I7WUFDQTtTQUNIO1FBQ0Q7WUFDSSxRQUFRLEVBQUU7Z0JBQ047O29CQUVJLE1BQU0sRUFBRSxPQUFPO29CQUNmLE1BQU0sRUFBRSxTQUFTO2lCQUNwQjthQUNKO1lBQ0Q7WUFDQSxTQUFTLEVBQUUsRUFBRTtZQUNiO1lBQ0EsTUFBTSxFQUFFLFVBQVU7U0FDckI7UUFDRDs7WUFFSSxNQUFNLEVBQUU7WUFDUjtnQkFDSTtvQkFDSSxjQUFjLEVBQUU7b0JBQ2hCLE1BQU0sRUFBRSxFQUFFOzs7YUFHakI7WUFDRDtZQUNBLE1BQU0sRUFBRSxVQUFVO1NBQ3JCO1FBQ0Q7O1lBRUksTUFBTSxFQUFFO1lBQ1IsU0FBUyxFQUFFO2dCQUNQOztvQkFFSSxNQUFNLEVBQUUsRUFBRTtvQkFDVixNQUFNLEVBQUU7aUJBQ1g7YUFDSjtZQUNEO1lBQ0EsTUFBTSxFQUFFLFVBQVU7U0FDckI7S0FDSixFQUFFSjtJQUlIOzswQkEyQlEsUUFBQ1EsSUFBRTs7Ozs7Ozs7Z0JBQ0tFLE9BQU8sRUFBRUM7MEJBQWdCOzs7Ozs7MEJBR2pDLFFBQUNDLElBQUU7O29CQUFDOzs7Ozs7OzswQkFHSjtnQkFBUUYsT0FBTyxFQUFFRyxVQUFVOzs7Ozs7OzBCQUMzQiw4REFBQ0QsSUFBRTs7b0JBQUMsV0FBUztvQkFBQ2QsT0FBTzs7Ozs7O3FCQUFNOzs7Ozs7YUFHekIsQ0FDVDtBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuXHJcbi8qIENldHRlIHBhZ2U6XHJcbi1zZSBjb25uZWN0ZSDDoCBtZXRhbWFza1xyXG4tYWZmaWNoZSBsZSBjb21wdGUgY29uY2VybsOpIHZpYSBldGhlcnMuanNcclxuLWFmZmljaGUgbGEgYmFsYW5jZSBkdSBjb21wdGUgbWV0YW1hc2tcclxuXHJcblxyXG4qL1xyXG5cclxuLypkYW5zIGxlIHByb2pldCBkZSBHcmlkZGVyLCBjZSBmaWNoaWVyIHJlbXBsYWNlIDpcclxuICAgIC1XZWIzLmpzIChxdWkgZm91cm5pc3NhaXQgdW4gcHJvdmlkZXIpXHJcbiAgICAtRmFjdG9yeS5qcyAocXVpIGTDqXBsb3lhaXQgdW5lIG5vdXZlbGxlIGluc3RhbmNlIGRlIENhbXBhaWduRmFjdG9yeSlcclxuZXRoZXJzLmpzIHJlbXBsYWNlIHdlYjMuanNcclxuZG9jIDpcclxuXCIgICBKU09OLVJQQyBBUEkgcHJvdmlkZXM6XHJcbiAgICAtQSBjb25uZWN0aW9uIHRvIHRoZSBFdGhlcmV1bSBuZXR3b3JrIChhIFByb3ZpZGVyKVxyXG4gICAgLUhvbGRzIHlvdXIgcHJpdmF0ZSBrZXkgYW5kIGNhbiBzaWduIHRoaW5ncyAoYSBTaWduZXIpIFwiXHJcbiovXHJcblxyXG5pbXBvcnQgbXlBQkkgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvbWFpbi5zb2wvRmFjdG9yeS5qc29uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgIC8vZmFpdCB1biBwcm92aWRlciBxdWkgaW50ZXJyYWdpdCBhdmVjIGxlIHNtYXJ0IGNvbnRyYWN0XHJcbiAgICAgXHJcbiAgICAgLy8gSWYgeW91IGRvbid0IHNwZWNpZnkgYSAvL3VybC8vLCBFdGhlcnMgY29ubmVjdHMgdG8gdGhlIGRlZmF1bHQgXHJcbiAgICAgLy8gKGkuZS4gYGBodHRwOi9cXC9sb2NhbGhvc3Q6ODU0NWBgKVxyXG4gICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKCk7XHJcbiAgICAgXHJcbiAgICAgLy8gVGhlIHByb3ZpZGVyIGFsc28gYWxsb3dzIHNpZ25pbmcgdHJhbnNhY3Rpb25zIHRvXHJcbiAgICAgLy8gc2VuZCBldGhlciBhbmQgcGF5IHRvIGNoYW5nZSBzdGF0ZSB3aXRoaW4gdGhlIGJsb2NrY2hhaW4uXHJcbiAgICAgLy8gRm9yIHRoaXMsIHdlIG5lZWQgdGhlIGFjY291bnQgc2lnbmVyLi4uXHJcbiAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcclxuICAgICBcclxuICAgICBcclxuICAgIFxyXG4gICAgLy9mYWl0IHVuZSBub3V2ZWxsZSBpbnN0YW5jZSBkdSBjb250cmF0IGZhY3RvcnkgXHJcbiAgICBjb25zdCBteUluc3RhbmNlID0gbmV3IGV0aGVycy5Db250cmFjdChcIjB4ZTdmMTcyNUU3NzM0Q0UyODhGODM2N2UxQmIxNDNFOTBiYjNGMDUxMlwiLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWluaW11bVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjcmVhdG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJjb25zdHJ1Y3RvclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW5wdXRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhcHByb3ZlUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICBcIm91dHB1dHNcIjogW10sXHJcbiAgICAgICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW5wdXRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXBwcm92ZXJzXCIsXHJcbiAgICAgICAgICAgIFwib3V0cHV0c1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW5wdXRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhcHByb3ZlcnNDb3VudFwiLFxyXG4gICAgICAgICAgICBcIm91dHB1dHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29udHJpYnV0ZVwiLFxyXG4gICAgICAgICAgICBcIm91dHB1dHNcIjogW10sXHJcbiAgICAgICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwicGF5YWJsZVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW5wdXRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzIHBheWFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyZWNpcGllbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3JlYXRlUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICBcIm91dHB1dHNcIjogW10sXHJcbiAgICAgICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW5wdXRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmaW5hbGl6ZVJlcXVlc3RcIixcclxuICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwibWFuYWdlclwiLFxyXG4gICAgICAgICAgICBcIm91dHB1dHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwibWluaW11bUNvbnRyaWJ1dGlvblwiLFxyXG4gICAgICAgICAgICBcIm91dHB1dHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgIH1cclxuICAgIF0sIHByb3ZpZGVyKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICAvKmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVtYW5kZSBkdSBjb21wdGUuLi5cIik7XHJcblxyXG4gICAgICAgIC8vIHbDqXJpZmllIHNpIG1ldGFtYXNrIGV4aXN0ZSBzdXIgbGUgYnJvd3NlclxyXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkw6l0ZWN0w6lcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIk1ldGEgTWFzayBub3QgZGV0ZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbiAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+UGFnZSBkZSBsYSBub3V2ZWxsZSBjYW1wYWduZSBraWNrc3RhcnRlcjwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVxdWVzdEFjY291bnR9PlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGVyIGxlIHdhbGxldCDDoCBNZXRhbWFza1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgzPkFkcmVzc2UgZHUgd2FsbGV0OiB7d2FsbGV0QWRkcmVzc308L2gzPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QmFsYW5jZX0+QmFsYW5jZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDM+QmFsYW5jZToge2JhbGFuY2V9PC9oMz5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIm15QUJJIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwibXlJbnN0YW5jZSIsIkNvbnRyYWN0IiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicmVxdWVzdEFjY291bnQiLCJoMyIsImdldEJhbGFuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});