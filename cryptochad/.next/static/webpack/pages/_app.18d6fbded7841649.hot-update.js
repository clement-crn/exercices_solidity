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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n\r\n\r\n*/ /* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), walletAddress = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), balance = ref1[0], setBalance = ref1[1];\n    function requestAccount() {\n        return _requestAccount.apply(this, arguments);\n    }\n    function _requestAccount() {\n        _requestAccount = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var accounts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"Demande du compte...\");\n                        if (!window.ethereum) return [\n                            3,\n                            5\n                        ];\n                        console.log(\"d\\xe9tect\\xe9\");\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            })\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        setWalletAddress(accounts[0]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(\"Error connecting...\");\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        alert(\"Meta Mask not detected\");\n                        _state.label = 6;\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _requestAccount.apply(this, arguments);\n    }\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = // créée un provider qui interragit avec le smart contract\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var provider;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            requestAccount()\n                        ];\n                    case 1:\n                        _state.sent();\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n                        _state.label = 2;\n                    case 2:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _connectWallet.apply(this, arguments);\n    }\n    var getBalance = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(address) {\n            var provider, balance, balanceInEth;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n                        return [\n                            4,\n                            provider.getBalance(walletAddress)\n                        ];\n                    case 1:\n                        balance = _state.sent();\n                        balanceInEth = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(balance);\n                        console.log(balanceInEth);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getBalance(address) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: requestAccount,\n                children: \"Connecter le wallet \\xe0 Metamask\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Adresse du wallet: \",\n                    walletAddress\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, _this);\n}, \"RbrO7EvaECjsVDQyExqmmCjcan0=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBMEI7QUFDTztBQUNEO0FBQ1g7QUFFckI7O0lBUUksSUFBMENDLEdBQVksR0FBWkEsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQ0UsYUFBYTs7O2tFQU1MSSxZQUFjOzthQUFkQSxDQUFBQSwrQ0FBQUEsTUFBYztRQUFkQSxPQUFBQSwrQ0FBYyxHQUE3QiwrQkFBZ0M7Z0JBUWRDLFFBQVEsRUFLVEMsS0FBSzs7Ozt3QkFabEJDLEVBQUFBLG1GQUFZLGFBQXNCOzZCQUc5QkU7OzswQkFBZTt3QkFDZkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBUyxDQUFDLENBQUM7Ozs7Ozs7Ozt3QkFHRjs7NEJBQU1DOzs7MEJBRXJCOzt3QkFGSUosUUFBUSxHQUFHLGFBRWY7d0JBQ0ZKLGdCQUFnQixDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O3dCQUV6QkMsS0FBSzt3QkFDVkM7Ozs7Ozs7Ozs7O3dCQUdKTSxLQUFLLENBQUM7Ozs7Ozs7O1FBRWQsQ0FBQztlQW5CY1Q7O2FBcUJBVTtlQUFBQTs7YUFBQUEsY0FBYTs7UUFBNUI7Z0JBSWNDLFFBQVE7Ozs7NkZBSGQsUUFBT047OzswQkFBK0I7d0JBQ3RDOzs0QkFBTUw7MEJBQWdCOzt3QkFBdEI7d0JBRU1XOzs7Ozs7OztRQUVkLENBQUM7ZUFOY0QsY0FBYTs7SUFRNUIsSUFBTUk7Ozs7OztzR0FDZSxDQUFJbkIsTUFBTSxDQUFDaUIsU0FBUyxDQUFDQzt3QkFDdEI7OzRCQUFNRixRQUFRLENBQUNHOzBCQUF5Qjs7d0JBQWxEaEIsT0FBTzt3QkFDUGtCO3dCQUNOYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksWUFBWSxDQUFDLENBQUM7Ozs7OztRQUM5QixDQUFDO3dCQUxLRjs7O09BS0w7SUFFRDs7MEJBRVEsUUFBQ00sSUFBRTs7Ozs7O3FCQUE4QzswQkFDakQ7Z0JBQVFFLE9BQU8sRUFBRXRCLGNBQWM7MEJBQUU7Ozs7O3FCQUV4QjswQkFFVDs7b0JBQUk7b0JBQW9CSjs7Ozs7Ozs7Ozs7OztBQUdwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXHJcblxyXG4vKiBDZXR0ZSBwYWdlOlxyXG4tc2UgY29ubmVjdGUgw6AgbWV0YW1hc2tcclxuLWFmZmljaGUgbGUgY29tcHRlIGNvbmNlcm7DqSB2aWEgZXRoZXJzLmpzXHJcblxyXG5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVtYW5kZSBkdSBjb21wdGUuLi5cIik7XHJcblxyXG4gICAgICAgIC8vIOKdjCBDaGVjayBpZiBNZXRhIE1hc2sgRXh0ZW5zaW9uIGV4aXN0c1xyXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkw6l0ZWN0w6lcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJNZXRhIE1hc2sgbm90IGRldGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNyw6nDqWUgdW4gcHJvdmlkZXIgcXVpIGludGVycmFnaXQgYXZlYyBsZSBzbWFydCBjb250cmFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFdhbGxldCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBhd2FpdCByZXF1ZXN0QWNjb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZSh3YWxsZXRBZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBiYWxhbmNlSW5FdGggPSBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYmFsYW5jZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZUluRXRoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5QYWdlIGRlIGxhIG5vdXZlbGxlIGNhbXBhZ25lIGtpY2tzdGFydGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXF1ZXN0QWNjb3VudH0+XHJcbiAgICAgICAgICAgICAgICBDb25uZWN0ZXIgbGUgd2FsbGV0IMOgIE1ldGFtYXNrXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGgzPkFkcmVzc2UgZHUgd2FsbGV0OiB7d2FsbGV0QWRkcmVzc308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwicmVxdWVzdEFjY291bnQiLCJhY2NvdW50cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFsZXJ0IiwiY29ubmVjdFdhbGxldCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0QmFsYW5jZSIsImFkZHJlc3MiLCJiYWxhbmNlSW5FdGgiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});