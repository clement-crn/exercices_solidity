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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_thefuckingrocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/thefuckingrocket */ \"./scripts/thefuckingrocket.js\");\n\n\n\n\n\n/* Cette page:\r\n-se connecte à metamask\r\n-affiche le compte concerné via ethers.js\r\n-affiche la balance du compte metamask\r\n\r\n\r\n*/ \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    async function f_balance() {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.JsonRpcProvider();\n        const signer = provider.getSigner();\n        balance = await provider.getBalance(\"ethers.eth\");\n        console.log(balance);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: f_balance\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 27,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"balance\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\solidity\\\\exercices_solidity\\\\cryptochad\\\\pages\\\\_app.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNPO0FBQ0Q7QUFDWDtBQUVyQjtBQVVBLGVBQWUsS0FBTTtJQUVqQixlQUFlSSxTQUFTLEdBQUU7UUFDdEIsTUFBTUMsUUFBUSxHQUFHLElBQUlILE1BQU0sQ0FBQ0k7OztHQUdQO2lFQUN4QjtJQUVELHFCQUNJOzswQkFDRyxRQUFDUyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVaLFNBQVM7Ozs7O29CQUFXOzBCQUNwQyxRQUFDYTswQkFBRzs7Ozs7b0JBQVk7Ozs7OztZQUNkLENBQ1I7QUFDTixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9jaGFkLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcclxuXHJcbi8qIENldHRlIHBhZ2U6XHJcbi1zZSBjb25uZWN0ZSDDoCBtZXRhbWFza1xyXG4tYWZmaWNoZSBsZSBjb21wdGUgY29uY2VybsOpIHZpYSBldGhlcnMuanNcclxuLWFmZmljaGUgbGEgYmFsYW5jZSBkdSBjb21wdGUgbWV0YW1hc2tcclxuXHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IFJvY2tldCBmcm9tIFwiLi4vc2NyaXB0cy90aGVmdWNraW5ncm9ja2V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZfYmFsYW5jZSgpe1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKCk7XHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcclxuICAgICAgICBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShcImV0aGVycy5ldGhcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZfYmFsYW5jZX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMz5iYWxhbmNlPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiUm9ja2V0IiwiZl9iYWxhbmNlIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJKc29uUnBjUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./scripts/thefuckingrocket.js":
/*!*************************************!*\
  !*** ./scripts/thefuckingrocket.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n/*dans le projet de Gridder, ce fichier remplace :\r\n    -Web3.js (qui fournissait un provider)\r\n    -Factory.js (qui déployait une nouvelle instance de CampaignFactory)\r\n\r\nethers.js remplace web3.js\r\n\r\n\r\n\r\ndoc :\r\n\"   JSON-RPC API provides:\r\n    -A connection to the Ethereum network (a Provider)\r\n    -Holds your private key and can sign things (a Signer) \"\r\n*/ \nfunction Rocket() {\n    //le provider permet seulement de lire sur la blockchain \n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.JsonRpcProvider();\n    const signer = provider.getSigner();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rocket);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3RoZWZ1Y2tpbmdyb2NrZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFnQkEsU0FBU0MsTUFBTSxHQUFFO0lBQ2IseURBQXlEOztJQUV6RCxNQUFNSSxNQUFNLEdBQUdILFFBQVE7QUFFM0IsQ0FBQztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvY2hhZC8uL3NjcmlwdHMvdGhlZnVja2luZ3JvY2tldC5qcz8zM2RjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qZGFucyBsZSBwcm9qZXQgZGUgR3JpZGRlciwgY2UgZmljaGllciByZW1wbGFjZSA6XHJcbiAgICAtV2ViMy5qcyAocXVpIGZvdXJuaXNzYWl0IHVuIHByb3ZpZGVyKVxyXG4gICAgLUZhY3RvcnkuanMgKHF1aSBkw6lwbG95YWl0IHVuZSBub3V2ZWxsZSBpbnN0YW5jZSBkZSBDYW1wYWlnbkZhY3RvcnkpXHJcblxyXG5ldGhlcnMuanMgcmVtcGxhY2Ugd2ViMy5qc1xyXG5cclxuXHJcblxyXG5kb2MgOlxyXG5cIiAgIEpTT04tUlBDIEFQSSBwcm92aWRlczpcclxuICAgIC1BIGNvbm5lY3Rpb24gdG8gdGhlIEV0aGVyZXVtIG5ldHdvcmsgKGEgUHJvdmlkZXIpXHJcbiAgICAtSG9sZHMgeW91ciBwcml2YXRlIGtleSBhbmQgY2FuIHNpZ24gdGhpbmdzIChhIFNpZ25lcikgXCJcclxuKi9cclxuXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuXHJcbmZ1bmN0aW9uIFJvY2tldCgpe1xyXG4gICAgLy9sZSBwcm92aWRlciBwZXJtZXQgc2V1bGVtZW50IGRlIGxpcmUgc3VyIGxhIGJsb2NrY2hhaW4gXHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2NrZXQ7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImV0aGVycyIsIlJvY2tldCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scripts/thefuckingrocket.js\n");

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