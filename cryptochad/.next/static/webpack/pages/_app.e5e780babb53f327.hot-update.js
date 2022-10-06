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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _myABI_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myABI.json */ \"./pages/myABI.json\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n-affiche la balance du compte metamask\r\n*/ /*dans le projet de Gridder, ce fichier remplace :\r\n    -Web3.js (qui fournissait un provider)\r\n    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)\r\nethers.js remplace web3.js\r\ndoc :\r\n\"   JSON-RPC API provides:\r\n    -A connection to the Ethereum network (a Provider)\r\n    -Holds your private key and can sign things (a Signer) \"\r\n*/ //pour le moment, l'ABI est directement générée par Remix \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), walletAddress = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), balance = ref1[0], setBalance = ref1[1];\n    //fait un provider qui interragit avec le smart contract\n    // If you don't specify a //url//, Ethers connects to the default \n    // (i.e. ``http:/\\/localhost:8545``)\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.JsonRpcProvider();\n    // The provider also allows signing transactions to\n    // send ether and pay to change state within the blockchain.\n    // For this, we need the account signer...\n    var signer = provider.getSigner();\n    //fait une nouvelle instance du contrat factory \n    var myInstance = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(\"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\", _myABI_json__WEBPACK_IMPORTED_MODULE_2__, signer);\n    var blockn;\n    function block() {\n        return _block.apply(this, arguments);\n    }\n    function _block() {\n        _block = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            provider.getBlockNumber()\n                        ];\n                    case 1:\n                        blockn = _state.sent();\n                        console.log(blockn);\n                        return [\n                            4,\n                            myInstance.createRequest(\"lol\", 0, \"0x70997970C51812dc3A010C7d01b50e0d17dc79C8\")\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _block.apply(this, arguments);\n    }\n    /* async function requestAccount() {\r\n        console.log(\"Demande du compte...\");\r\n        // vérifie si metamask existe sur le browser\r\n        if (window.ethereum) {\r\n            console.log(\"détecté\");\r\n            try {\r\n                const accounts = await window.ethereum.request({\r\n                    method: \"eth_requestAccounts\",\r\n                });\r\n                setWalletAddress(accounts[0]);\r\n            } catch (error) {\r\n                console.log(\"Error connecting...\");\r\n            }\r\n        } else{\r\n            alert(\"Meta Mask not detected\");\r\n        }\r\n    }*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: block,\n                children: \"block\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, _this);\n}, \"RbrO7EvaECjsVDQyExqmmCjcan0=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUEwQjtBQUNPO0FBQ0Q7QUFHaEM7QUFpQkEsT0FBT0csS0FBSyxNQUFNO0FBRWxCLGtCQUFlLFdBQU07O0lBQ2pCLElBQTBDRixHQUFZLEdBQVpBLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0NHLGFBQWEsR0FBc0JILEdBQVksR0FBbEMsRUFBRUk7SUFDdEIsSUFBOEJKLElBQVksR0FBWkEsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFuQ0ssT0FBTyxHQUFnQkwsSUFBWTtJQUV6Qyx3REFBd0Q7SUFFeEQ7SUFDQTtJQUNBLElBQU1PLFFBQVEsR0FBRyxJQUFJTjtJQUVyQixtREFBbUQ7SUFDbkQ7SUFDQSwwQ0FBMEM7QUFDbEJVOytEQUl6QjtJQUNBLElBQU1DO0lBR04sSUFBSUUsTUFBTTthQUNLQyxFQUFBQSwrQ0FBSztlQUFMQSxNQUFLOzthQUFMQSxNQUFLO1FBQUxBLE1BQUssR0FBcEIsMEVBQXNCOzs7O3dCQUNUOzs0RUFBZUMsV0FBYyxFQUFFOzs7d0JBQXhDRixNQUFNLEdBQUc7Ozs7Z0dBR0ZGLE1BQVUsQ0FBQ08sYUFBYSxDQUFDOzBCQUFxRDs7d0JBQXBGOzs7Ozs7UUFDTCxDQUFDO2VBTGNKLE1BQUs7O0lBU3BCOzswQkF3QlE7MEJBQUk7Ozs7Ozs7Z0JBRUlRLE9BQU8sRUFBRVIsS0FBSzs7Ozs7O3FCQUFnQjs7Ozs7O2FBS3BDLENBQ1Q7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuXHJcblxyXG4vKiBDZXR0ZSBwYWdlOlxyXG4tc2UgY29ubmVjdGUgw6AgbWV0YW1hc2tcclxuLWFmZmljaGUgbGUgY29tcHRlIGNvbmNlcm7DqSB2aWEgZXRoZXJzLmpzXHJcbi1hZmZpY2hlIGxhIGJhbGFuY2UgZHUgY29tcHRlIG1ldGFtYXNrXHJcbiovXHJcblxyXG4vKmRhbnMgbGUgcHJvamV0IGRlIEdyaWRkZXIsIGNlIGZpY2hpZXIgcmVtcGxhY2UgOlxyXG4gICAgLVdlYjMuanMgKHF1aSBmb3Vybmlzc2FpdCB1biBwcm92aWRlcilcclxuICAgIC1GYWN0b3J5LmpzIChxdWkgZMOpcGxveWFpdCB1bmUgbm91dmVsbGUgaW5zdGFuY2UgZGUgQ2FtcGFpZ25GYWN0b3J5KVxyXG5ldGhlcnMuanMgcmVtcGxhY2Ugd2ViMy5qc1xyXG5kb2MgOlxyXG5cIiAgIEpTT04tUlBDIEFQSSBwcm92aWRlczpcclxuICAgIC1BIGNvbm5lY3Rpb24gdG8gdGhlIEV0aGVyZXVtIG5ldHdvcmsgKGEgUHJvdmlkZXIpXHJcbiAgICAtSG9sZHMgeW91ciBwcml2YXRlIGtleSBhbmQgY2FuIHNpZ24gdGhpbmdzIChhIFNpZ25lcikgXCJcclxuKi9cclxuXHJcbi8vcG91ciBsZSBtb21lbnQsIGwnQUJJIGVzdCBkaXJlY3RlbWVudCBnw6luw6lyw6llIHBhciBSZW1peCBcclxuaW1wb3J0IG15QUJJIGZyb20gXCIuL215QUJJLmpzb25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICAgLy9mYWl0IHVuIHByb3ZpZGVyIHF1aSBpbnRlcnJhZ2l0IGF2ZWMgbGUgc21hcnQgY29udHJhY3RcclxuICAgICBcclxuICAgICAvLyBJZiB5b3UgZG9uJ3Qgc3BlY2lmeSBhIC8vdXJsLy8sIEV0aGVycyBjb25uZWN0cyB0byB0aGUgZGVmYXVsdCBcclxuICAgICAvLyAoaS5lLiBgYGh0dHA6L1xcL2xvY2FsaG9zdDo4NTQ1YGApXHJcbiAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoKTtcclxuICAgICBcclxuICAgICAvLyBUaGUgcHJvdmlkZXIgYWxzbyBhbGxvd3Mgc2lnbmluZyB0cmFuc2FjdGlvbnMgdG9cclxuICAgICAvLyBzZW5kIGV0aGVyIGFuZCBwYXkgdG8gY2hhbmdlIHN0YXRlIHdpdGhpbiB0aGUgYmxvY2tjaGFpbi5cclxuICAgICAvLyBGb3IgdGhpcywgd2UgbmVlZCB0aGUgYWNjb3VudCBzaWduZXIuLi5cclxuICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICAvL2ZhaXQgdW5lIG5vdXZlbGxlIGluc3RhbmNlIGR1IGNvbnRyYXQgZmFjdG9yeSBcclxuICAgIGNvbnN0IG15SW5zdGFuY2UgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFwiMHhlN2YxNzI1RTc3MzRDRTI4OEY4MzY3ZTFCYjE0M0U5MGJiM0YwNTEyXCIsIG15QUJJLCBzaWduZXIpO1xyXG4gICAgXHJcblxyXG4gICAgdmFyIGJsb2NrbjtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGJsb2NrKCl7XHJcbiAgICAgICAgYmxvY2tuID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmxvY2tOdW1iZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhibG9ja24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICBhd2FpdCBteUluc3RhbmNlLmNyZWF0ZVJlcXVlc3QoXCJsb2xcIiwwLFwiMHg3MDk5Nzk3MEM1MTgxMmRjM0EwMTBDN2QwMWI1MGUwZDE3ZGM3OUM4XCIpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIC8qIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVtYW5kZSBkdSBjb21wdGUuLi5cIik7XHJcbiAgICAgICAgLy8gdsOpcmlmaWUgc2kgbWV0YW1hc2sgZXhpc3RlIHN1ciBsZSBicm93c2VyXHJcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImTDqXRlY3TDqVwiKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIk1ldGEgTWFzayBub3QgZGV0ZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbiAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+UGFnZSBkZSBsYSBub3V2ZWxsZSBjYW1wYWduZSBraWNrc3RhcnRlcjwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Jsb2NrfT5ibG9jazwvYnV0dG9uPlxyXG4gICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJteUFCSSIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkpzb25ScGNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsIm15SW5zdGFuY2UiLCJDb250cmFjdCIsImJsb2NrbiIsImJsb2NrIiwiZ2V0QmxvY2tOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlUmVxdWVzdCIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});