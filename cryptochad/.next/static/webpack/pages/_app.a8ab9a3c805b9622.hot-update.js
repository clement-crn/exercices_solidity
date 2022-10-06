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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_main_sol_Factory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artifacts/contracts/main.sol/Factory.json */ \"./artifacts/contracts/main.sol/Factory.json\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n-affiche la balance du compte metamask\r\n\r\n\r\n*/ /*dans le projet de Gridder, ce fichier remplace :\r\n    -Web3.js (qui fournissait un provider)\r\n    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)\r\nethers.js remplace web3.js\r\ndoc :\r\n\"   JSON-RPC API provides:\r\n    -A connection to the Ethereum network (a Provider)\r\n    -Holds your private key and can sign things (a Signer) \"\r\n*/ \n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), walletAddress = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), balance = ref1[0], setBalance = ref1[1];\n    //fait un provider qui interragit avec le smart contract\n    // If you don't specify a //url//, Ethers connects to the default \n    // (i.e. ``http:/\\/localhost:8545``)\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.JsonRpcProvider();\n    // The provider also allows signing transactions to\n    // send ether and pay to change state within the blockchain.\n    // For this, we need the account signer...\n    var signer = provider.getSigner();\n    //fait une nouvelle instance du contrat factory \n    var myInstance = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(\"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\", _artifacts_contracts_main_sol_Factory_json__WEBPACK_IMPORTED_MODULE_2__, provider);\n    /*async function requestAccount() {\r\n        console.log(\"Demande du compte...\");\r\n\r\n        // vérifie si metamask existe sur le browser\r\n        if (window.ethereum) {\r\n            console.log(\"détecté\");\r\n\r\n            try {\r\n                const accounts = await window.ethereum.request({\r\n                    method: \"eth_requestAccounts\",\r\n                });\r\n                setWalletAddress(accounts[0]);\r\n\r\n            } catch (error) {\r\n                console.log(\"Error connecting...\");\r\n            }\r\n        } else{\r\n            alert(\"Meta Mask not detected\");\r\n        }\r\n    }*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: requestAccount,\n                children: \"Connecter le wallet \\xe0 Metamask\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Adresse du wallet: \",\n                    walletAddress\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getBalance,\n                children: \"Balance\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Balance: \",\n                    balance\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, _this);\n}, \"RbrO7EvaECjsVDQyExqmmCjcan0=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQ087QUFDRDtBQUdoQztBQW9CQSxrQkFBZTs7SUFDWCxJQUEwQ0MsR0FBWSxHQUFaQSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9DRzs7O0lBS047SUFDQSxvQ0FBb0M7SUFDcEMsSUFBTUksUUFBUSxHQUFHLElBQUlOLE1BQU0sQ0FBQ08sU0FBUyxDQUFDQyxlQUFlLEVBQUU7SUFFdkQ7SUFDQTtJQUNBO0lBQ0EsSUFBTUMsTUFBTSxHQUFHSCxRQUFRLENBQUNJLFNBQVMsRUFBRTtJQUlwQyxnREFBZ0Q7R0FDVDsrREFJdkM7O2lFQTJCUSxRQUFDSSxJQUFFO2lFQUFDLDBDQUF3Qzs7Ozs7cUJBQUs7MEJBQ2pELFFBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRUMsY0FBYzswQkFBRTs7Ozs7OzBCQUdqQyxRQUFDQyxJQUFFOztvQkFBQzs7Ozs7Ozs7MEJBR0o7Z0JBQVFGLE9BQU8sRUFBRUcsVUFBVTs7Ozs7OzswQkFDM0IsOERBQUNELElBQUU7O29CQUFDLFdBQVM7b0JBQUNkLE9BQU87Ozs7OztxQkFBTTs7Ozs7O2FBR3pCLENBQ1Q7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuXHJcblxyXG4vKiBDZXR0ZSBwYWdlOlxyXG4tc2UgY29ubmVjdGUgw6AgbWV0YW1hc2tcclxuLWFmZmljaGUgbGUgY29tcHRlIGNvbmNlcm7DqSB2aWEgZXRoZXJzLmpzXHJcbi1hZmZpY2hlIGxhIGJhbGFuY2UgZHUgY29tcHRlIG1ldGFtYXNrXHJcblxyXG5cclxuKi9cclxuXHJcbi8qZGFucyBsZSBwcm9qZXQgZGUgR3JpZGRlciwgY2UgZmljaGllciByZW1wbGFjZSA6XHJcbiAgICAtV2ViMy5qcyAocXVpIGZvdXJuaXNzYWl0IHVuIHByb3ZpZGVyKVxyXG4gICAgLUZhY3RvcnkuanMgKHF1aSBkw6lwbG95YWl0IHVuZSBub3V2ZWxsZSBpbnN0YW5jZSBkZSBDYW1wYWlnbkZhY3RvcnkpXHJcbmV0aGVycy5qcyByZW1wbGFjZSB3ZWIzLmpzXHJcbmRvYyA6XHJcblwiICAgSlNPTi1SUEMgQVBJIHByb3ZpZGVzOlxyXG4gICAgLUEgY29ubmVjdGlvbiB0byB0aGUgRXRoZXJldW0gbmV0d29yayAoYSBQcm92aWRlcilcclxuICAgIC1Ib2xkcyB5b3VyIHByaXZhdGUga2V5IGFuZCBjYW4gc2lnbiB0aGluZ3MgKGEgU2lnbmVyKSBcIlxyXG4qL1xyXG5cclxuaW1wb3J0IG15QUJJIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL21haW4uc29sL0ZhY3RvcnkuanNvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgICAvL2ZhaXQgdW4gcHJvdmlkZXIgcXVpIGludGVycmFnaXQgYXZlYyBsZSBzbWFydCBjb250cmFjdFxyXG4gICAgIFxyXG4gICAgIC8vIElmIHlvdSBkb24ndCBzcGVjaWZ5IGEgLy91cmwvLywgRXRoZXJzIGNvbm5lY3RzIHRvIHRoZSBkZWZhdWx0IFxyXG4gICAgIC8vIChpLmUuIGBgaHR0cDovXFwvbG9jYWxob3N0Ojg1NDVgYClcclxuICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpO1xyXG4gICAgIFxyXG4gICAgIC8vIFRoZSBwcm92aWRlciBhbHNvIGFsbG93cyBzaWduaW5nIHRyYW5zYWN0aW9ucyB0b1xyXG4gICAgIC8vIHNlbmQgZXRoZXIgYW5kIHBheSB0byBjaGFuZ2Ugc3RhdGUgd2l0aGluIHRoZSBibG9ja2NoYWluLlxyXG4gICAgIC8vIEZvciB0aGlzLCB3ZSBuZWVkIHRoZSBhY2NvdW50IHNpZ25lci4uLlxyXG4gICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICBcclxuICAgIC8vZmFpdCB1bmUgbm91dmVsbGUgaW5zdGFuY2UgZHUgY29udHJhdCBmYWN0b3J5IFxyXG4gICAgY29uc3QgbXlJbnN0YW5jZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXCIweGU3ZjE3MjVFNzczNENFMjg4RjgzNjdlMUJiMTQzRTkwYmIzRjA1MTJcIiwgbXlBQkksIHByb3ZpZGVyKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICAvKmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVtYW5kZSBkdSBjb21wdGUuLi5cIik7XHJcblxyXG4gICAgICAgIC8vIHbDqXJpZmllIHNpIG1ldGFtYXNrIGV4aXN0ZSBzdXIgbGUgYnJvd3NlclxyXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkw6l0ZWN0w6lcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIk1ldGEgTWFzayBub3QgZGV0ZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbiAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+UGFnZSBkZSBsYSBub3V2ZWxsZSBjYW1wYWduZSBraWNrc3RhcnRlcjwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVxdWVzdEFjY291bnR9PlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGVyIGxlIHdhbGxldCDDoCBNZXRhbWFza1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgzPkFkcmVzc2UgZHUgd2FsbGV0OiB7d2FsbGV0QWRkcmVzc308L2gzPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QmFsYW5jZX0+QmFsYW5jZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDM+QmFsYW5jZToge2JhbGFuY2V9PC9oMz5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIm15QUJJIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwibXlJbnN0YW5jZSIsIkNvbnRyYWN0IiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicmVxdWVzdEFjY291bnQiLCJoMyIsImdldEJhbGFuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});