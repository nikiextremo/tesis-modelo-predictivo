"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_cube_cube_jsx"],{

/***/ "./resources/js/Pages/cube/cube.jsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/cube/cube.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Cube = function Cube() {
  var iframeStyles = {
    width: "100%",
    // El iframe ocupará el 100% del ancho del contenedor
    height: "100%",
    // El iframe ocupará el 100% de la altura del contenedor
    border: "none" // Quitamos el borde del iframe para que se vea mejor
  };

  var containerStyles = {
    width: "100vw",
    // 100% del ancho de la ventana del navegador
    height: "100vh",
    // 100% de la altura de la ventana del navegador
    padding: "10px" // Ajusta el padding según necesites
  };

  {/* <iframe title="PB_TEST" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=5fd608d2-16fb-4d69-91d3-26e0511bd10f&autoAuth=true&ctid=a6ba6586-401b-47f1-93af-d681c2ad04e7" frameborder="0" allowFullScreen="true"></iframe> */}
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    style: containerStyles,
    className: "custom-padding-top-left-right",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container-white",
      style: {
        width: "100%",
        height: "100%"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
        title: "PB_TEST",
        src: "https://app.powerbi.com/reportEmbed?reportId=5fd608d2-16fb-4d69-91d3-26e0511bd10f&autoAuth=true&ctid=a6ba6586-401b-47f1-93af-d681c2ad04e7",
        frameBorder: "0",
        allowFullScreen: "true",
        style: iframeStyles
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cube);

/***/ })

}]);