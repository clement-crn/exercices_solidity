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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/* Cette page:\n-se connecte à metamask\n-affiche le compte concerné via ethers.js\n\n\n*/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function requestAccount() {\n        console.log(\"Requesting account...\");\n        // ❌ Check if Meta Mask Extension exists\n        if (window.ethereum) {\n            console.log(\"detected\");\n            try {\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                setWalletAddress(accounts[0]);\n            } catch (error) {\n                console.log(\"Error connecting...\");\n            }\n        } else {\n            alert(\"Meta Mask not detected\");\n        }\n    }\n    // créée un provider qui interragit avec le smart contract\n    async function connectWallet() {\n        if (typeof window.ethereum !== \"undefined\") {\n            await requestAccount();\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: requestAccount,\n                children: \"Connecter le wallet \\xe0 Metamask\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Adresse du wallet: \",\n                    walletAddress\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDTztBQUNEO0FBRWhDOzs7OztBQUtBLEdBRUEsaUVBQWUsSUFBTTtJQUNqQixNQUFNLEtBQUNHLGFBQWEsTUFBRUMsZ0JBQWdCLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RELGVBQWVJLGNBQWMsR0FBRztRQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVyQyx3Q0FBd0M7UUFDeEMsSUFBSUMsTUFBTSxDQUFDQyxRQUFRLEVBQUU7WUFDakJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXhCLElBQUk7Z0JBQ0EsTUFBTUcsUUFBUSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRSxPQUFPLENBQUM7b0JBQzNDQyxNQUFNLEVBQUUscUJBQXFCO2lCQUNoQyxDQUFDO2dCQUNGUixnQkFBZ0IsQ0FBQ00sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsRUFBRSxPQUFPRyxLQUFLLEVBQUU7Z0JBQ1pQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNMLE9BQU87WUFDSE8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFDRCwwREFBMEQ7SUFDMUQsZUFBZUMsYUFBYSxHQUFHO1FBQzNCLElBQUksT0FBT1AsTUFBTSxDQUFDQyxRQUFRLEtBQUssV0FBVyxFQUFFO1lBQ3hDLE1BQU1KLGNBQWMsRUFBRSxDQUFDO1lBRXZCLE1BQU1XLFFBQVEsR0FBRyxJQUFJZCxpRUFBNkIsQ0FBQ00sTUFBTSxDQUFDQyxRQUFRLENBQUM7UUFDdkUsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFDSSw4REFBQ1UsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsMENBQXdDOzs7Ozt5QkFBSzswQkFDakQsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRWpCLGNBQWM7MEJBQUUsbUNBRWpDOzs7Ozt5QkFBUzswQkFFVCw4REFBQ2tCLElBQUU7O29CQUFDLHFCQUFtQjtvQkFBQ3BCLGFBQWE7Ozs7Ozt5QkFBTTs7Ozs7O2lCQUN6QyxDQUNSO0FBQ04sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvY2hhZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuLyogQ2V0dGUgcGFnZTpcbi1zZSBjb25uZWN0ZSDDoCBtZXRhbWFza1xuLWFmZmljaGUgbGUgY29tcHRlIGNvbmNlcm7DqSB2aWEgZXRoZXJzLmpzXG5cblxuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3RpbmcgYWNjb3VudC4uLlwiKTtcblxuICAgICAgICAvLyDinYwgQ2hlY2sgaWYgTWV0YSBNYXNrIEV4dGVuc2lvbiBleGlzdHNcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZXRlY3RlZFwiKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJNZXRhIE1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNyw6nDqWUgdW4gcHJvdmlkZXIgcXVpIGludGVycmFnaXQgYXZlYyBsZSBzbWFydCBjb250cmFjdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBhd2FpdCByZXF1ZXN0QWNjb3VudCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5QYWdlIGRlIGxhIG5vdXZlbGxlIGNhbXBhZ25lIGtpY2tzdGFydGVyPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVxdWVzdEFjY291bnR9PlxuICAgICAgICAgICAgICAgIENvbm5lY3RlciBsZSB3YWxsZXQgw6AgTWV0YW1hc2tcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8aDM+QWRyZXNzZSBkdSB3YWxsZXQ6IHt3YWxsZXRBZGRyZXNzfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsInJlcXVlc3RBY2NvdW50IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyb3IiLCJhbGVydCIsImNvbm5lY3RXYWxsZXQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();