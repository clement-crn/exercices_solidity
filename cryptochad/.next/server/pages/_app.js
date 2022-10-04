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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n-affiche la balance du compte metamask\r\n\r\n\r\n*/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function requestAccount() {\n        console.log(\"Demande du compte...\");\n        // vérifie si metamask existe sur le browser\n        if (window.ethereum) {\n            console.log(\"d\\xe9tect\\xe9\");\n            try {\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                setWalletAddress(accounts[0]);\n            } catch (error) {\n                console.log(\"Error connecting...\");\n            }\n        } else {\n            alert(\"Meta Mask not detected\");\n        }\n    }\n    // créée un provider qui interragit avec le smart contract\n    async function connectWallet() {\n        if (typeof window.ethereum !== \"undefined\") {\n            await requestAccount();\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n        }\n    }\n    const getBalance = async (address)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n        const balance = await provider.getBalance(walletAddress);\n        const balanceInEth = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(balance);\n        console.log(balanceInEth);\n        setBalance(balanceInEth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: requestAccount,\n                children: \"Connecter le wallet \\xe0 Metamask\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Adresse du wallet: \",\n                    walletAddress\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getBalance,\n                children: \"Balance\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Balance: \",\n                    balance\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ087QUFDRDtBQUNYO0FBRXJCO0lBU0ksTUFBTSxLQUFDRztJQUNQLE1BQU0sS0FBQ0UsT0FBTyxNQUFFQyxVQUFVO0lBTTFCLGVBQWVDLGNBQWMsR0FBRzs7O29FQUlqQkk7WUFDUEgsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBUyxDQUFDLENBQUM7WUFFdkIsSUFBSTtnQkFDQSxNQUFNRyxRQUFRLEdBQUc7b0JBQ2JFLE1BQU0sRUFBRTtpQkFDWCxDQUFDO2dCQUNGVjtZQUVKLEVBQUUsT0FBT1csS0FBSyxFQUFFO2dCQUNaUDtZQUNKLENBQUM7UUFDTCxPQUFPO1lBQ0hRLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBQ0Q7SUFDQTtRQUNJLElBQUk7WUFDQSxNQUFNVCxjQUFjLEVBQUUsQ0FBQzs7O0lBSS9CLENBQUM7SUFFRCxNQUFNYyxVQUFVLEdBQUcsT0FBT0M7UUFDdEIsTUFBTUosUUFBUSxHQUFHLElBQUloQixNQUFNLENBQUNpQixTQUFTLENBQUNDO1FBQ3RDLE1BQU1mLE9BQU8sR0FBRyxNQUFNYTtRQUN0QixNQUFNSyxZQUFZLEdBQUdyQixJQUFBQSxpRUFBaUM7UUFDdERNOztJQUVKLENBQUM7SUFFRCxxQkFDSSxxRUFBSTs7MEJBQ0EsK0RBQUc7MEJBQUM7Ozs7O29CQUE2QzswQkFDakQsUUFBQ29CLFFBQU07Z0JBQUNDLE9BQU8sRUFBRXRCOzBCQUFnQixtQ0FFakM7Ozs7O29CQUFTOzBCQUNULFFBQUN1QixJQUFFOztvQkFBQyxxQkFBbUI7b0JBQUMzQjs7Ozs7O29CQUFtQjs7Z0JBR25DMEIsT0FBTyxFQUFFUjswQkFBWSxTQUFPOzs7OztvQkFBUzswQkFDN0MsUUFBQ1M7O29CQUFHLFdBQVM7b0JBQUN6QixPQUFPOzs7Ozs7b0JBQU07Ozs7OztZQUd6QixDQUNSO0FBQ04sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvY2hhZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXHJcblxyXG4vKiBDZXR0ZSBwYWdlOlxyXG4tc2UgY29ubmVjdGUgw6AgbWV0YW1hc2tcclxuLWFmZmljaGUgbGUgY29tcHRlIGNvbmNlcm7DqSB2aWEgZXRoZXJzLmpzXHJcbi1hZmZpY2hlIGxhIGJhbGFuY2UgZHUgY29tcHRlIG1ldGFtYXNrXHJcblxyXG5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEFjY291bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZW1hbmRlIGR1IGNvbXB0ZS4uLlwiKTtcclxuXHJcbiAgICAgICAgLy8gdsOpcmlmaWUgc2kgbWV0YW1hc2sgZXhpc3RlIHN1ciBsZSBicm93c2VyXHJcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImTDqXRlY3TDqVwiKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcuLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIk1ldGEgTWFzayBub3QgZGV0ZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY3LDqcOpZSB1biBwcm92aWRlciBxdWkgaW50ZXJyYWdpdCBhdmVjIGxlIHNtYXJ0IGNvbnRyYWN0XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHJlcXVlc3RBY2NvdW50KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKHdhbGxldEFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VJbkV0aCA9IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiYWxhbmNlSW5FdGgpO1xyXG4gICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZUluRXRoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5QYWdlIGRlIGxhIG5vdXZlbGxlIGNhbXBhZ25lIGtpY2tzdGFydGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXF1ZXN0QWNjb3VudH0+XHJcbiAgICAgICAgICAgICAgICBDb25uZWN0ZXIgbGUgd2FsbGV0IMOgIE1ldGFtYXNrXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDM+QWRyZXNzZSBkdSB3YWxsZXQ6IHt3YWxsZXRBZGRyZXNzfTwvaDM+XHJcblxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRCYWxhbmNlfT5CYWxhbmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMz5CYWxhbmNlOiB7YmFsYW5jZX08L2gzPlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJyZXF1ZXN0QWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImVycm9yIiwiYWxlcnQiLCJjb25uZWN0V2FsbGV0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRCYWxhbmNlIiwiYWRkcmVzcyIsImJhbGFuY2VJbkV0aCIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

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