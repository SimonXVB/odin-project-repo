/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    background-color:#fff49b;
}

/*Header start*/
#header-div {
    padding: 5px 20px;
    background-color: whitesmoke;
    width: 100%;
    border-bottom: 5px solid black;
}

#header {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    letter-spacing: 0.3rem;
    text-align: center;
}
/*Header end*/

/*Player input start*/
#player-input{
    text-align: center;
    margin-top: 1rem;
}

#player-input input {
    text-align: center;
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid black;
}

#player-input input:focus {
    outline: 2px solid black; 
}

#player-input input::placeholder{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
}

#start {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

#start button {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid black;
    letter-spacing: 0.1rem;
}

#start :hover {
    cursor: pointer;
}

#start :disabled {
    cursor: unset;
}
/*Player input end*/

/*Placement grid start*/
#wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
}

#ship-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    width: 70%;
    margin: auto;
}

#grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 3px;
    grid-row-gap: 3px; 
    width: 70%;
    height: fit-content;
}

.grid-square {
    border-radius: 0;
    border: 2px solid black;
    width: 60px;
    height: 60px;
    cursor: pointer;
}

.square {
    border: 4px solid black;
}

.square div{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}

.square button{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    box-shadow: 0;
    border: 0;
    border-top: 4px solid black;
    cursor: pointer;
    margin-top: 0.5rem;
}

#controls-container1 {
    grid-row: 6/7;
    grid-column: 1/1;
    text-align: center;
    align-content: center;
    margin-top: 10px;
}

#currentP {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0;
    border: 2px solid black;
    background-color: white;
}

#controls-container2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    grid-row: 7/7;
    text-align: center;
    align-content: center;
    border: 2px solid black;
}

#controls-container2 button {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    box-shadow: 0;
    border: 0;
    width: 50%;
    height: 100%;
    cursor: pointer;

}

#log {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-align: center;
    align-content: center;
    border: 2px solid black;
    padding: 0.5rem 0;
    background-color: white;
}
/*Placement grid end*/

/*Hit grid start*/
#current-player {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-align: center;
    align-content: center;
    border: 5px solid black;
    background-color: white;
    padding: 20px 0;
    margin-top: 10px;
}

#switch {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-align: center;
    align-content: center;
    border: 5px solid black;
    cursor: pointer;
    padding: 20px 0;
    margin-top: 10px;
}

#win {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
}

#info {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    padding: 5px 0;
}
/*Hit grid end*/`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,wBAAwB;AAC5B;;AAEA,eAAe;AACf;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,2DAA2D;IAC3D,cAAc;IACd,sBAAsB;IACtB,kBAAkB;AACtB;AACA,aAAa;;AAEb,qBAAqB;AACrB;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2DAA2D;IAC3D,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,2DAA2D;IAC3D,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;AACA,mBAAmB;;AAEnB,uBAAuB;AACvB;IACI,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,oBAAoB;IACpB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,oBAAoB;IACpB,iBAAiB;IACjB,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,kBAAkB;AACtB;;AAEA;IACI,4DAA4D;IAC5D,WAAW;IACX,aAAa;IACb,SAAS;IACT,2BAA2B;IAC3B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,4DAA4D;IAC5D,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,UAAU;IACV,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA,qBAAqB;;AAErB,iBAAiB;AACjB;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;AACA,eAAe","sourcesContent":["body {\r\n    margin: 0;\r\n    background-color:#fff49b;\r\n}\r\n\r\n/*Header start*/\r\n#header-div {\r\n    padding: 5px 20px;\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    border-bottom: 5px solid black;\r\n}\r\n\r\n#header {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    margin: 0 auto;\r\n    letter-spacing: 0.3rem;\r\n    text-align: center;\r\n}\r\n/*Header end*/\r\n\r\n/*Player input start*/\r\n#player-input{\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#player-input input {\r\n    text-align: center;\r\n    width: 200px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: 2px solid black;\r\n}\r\n\r\n#player-input input:focus {\r\n    outline: 2px solid black; \r\n}\r\n\r\n#player-input input::placeholder{\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n#start {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#start button {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    width: 200px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: 2px solid black;\r\n    letter-spacing: 0.1rem;\r\n}\r\n\r\n#start :hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#start :disabled {\r\n    cursor: unset;\r\n}\r\n/*Player input end*/\r\n\r\n/*Placement grid start*/\r\n#wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    height: 100%;\r\n}\r\n\r\n#ship-grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: repeat(5, 1fr);\r\n    width: 70%;\r\n    margin: auto;\r\n}\r\n\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-column-gap: 3px;\r\n    grid-row-gap: 3px; \r\n    width: 70%;\r\n    height: fit-content;\r\n}\r\n\r\n.grid-square {\r\n    border-radius: 0;\r\n    border: 2px solid black;\r\n    width: 60px;\r\n    height: 60px;\r\n    cursor: pointer;\r\n}\r\n\r\n.square {\r\n    border: 4px solid black;\r\n}\r\n\r\n.square div{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.square button{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    width: 100%;\r\n    box-shadow: 0;\r\n    border: 0;\r\n    border-top: 4px solid black;\r\n    cursor: pointer;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#controls-container1 {\r\n    grid-row: 6/7;\r\n    grid-column: 1/1;\r\n    text-align: center;\r\n    align-content: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n#currentP {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    padding: 0.5rem 0;\r\n    border: 2px solid black;\r\n    background-color: white;\r\n}\r\n\r\n#controls-container2 {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    grid-row: 7/7;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 2px solid black;\r\n}\r\n\r\n#controls-container2 button {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    box-shadow: 0;\r\n    border: 0;\r\n    width: 50%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n#log {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 2px solid black;\r\n    padding: 0.5rem 0;\r\n    background-color: white;\r\n}\r\n/*Placement grid end*/\r\n\r\n/*Hit grid start*/\r\n#current-player {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 5px solid black;\r\n    background-color: white;\r\n    padding: 20px 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n#switch {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 5px solid black;\r\n    cursor: pointer;\r\n    padding: 20px 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n#win {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n#info {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n}\r\n/*Hit grid end*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePlayer: () => (/* binding */ CreatePlayer),
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   Play: () => (/* binding */ Play),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


class Ship {
    constructor (name, length, marking){
        this.name = name;
        this.length = length;
        this.marking = marking;

        this.sunk = false;
        this.placed = false;
    };
};

class Game {
    constructor() {
        this.board =   [[0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]];
        
        this.carrier1 = new Ship("Carrier", 5, "C1");
        
        this.battleship1 = new Ship("Battleship", 4, "B1");
        
        this.destroyer1 = new Ship("Destroyer", 3, "D1");
        
        this.submarine1 = new Ship("Submarine", 3, "S1");
        
        this.patrol_boat1 = new Ship("Patrol Boat", 2, "P1");
        
        this.currentShip = this.carrier1;
        this.missed = 0;
        this.totalSunk = 0;
        this.totalPlaced = 0;
        this.direction = "vertical";
        this.winner = false;
        this.log = "";
    };

    placeVer(ship, hor, ver) {
        if(ship.placed === true) {
            this.log = "Ship already placed";
            return;
        }
        
        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i] === undefined) {
                this.log = "Out of Bounds ver";
                return
            }
        }

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i][hor] !== 0){
                this.log = "Not possible ver";
                return
            } else {
                this.board[ver + i][hor] = ship.marking;
            }
        }

        ship.placed = true;
        this.totalPlaced++;
    };

    placeHor(ship, hor, ver) {
        if(ship.placed === true) {
            this.log = "Ship already placed";
            return;
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] === undefined) {
                this.log = "Out of Bounds hor";
                return
            }
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] !== 0) {
                this.log = "Not possible hor";
                return
            } else {
                this.board[ver][hor + i] = ship.marking;
            }
        };

        ship.placed = true;
        this.totalPlaced++;
    };

    hit(hor, ver) {
        if(this.board[ver][hor] !== 0) {
            switch(this.board[ver][hor]) {
                case "C1":
                    this.carrier1.length--;
                    this.log = "Carrier has been hit";
                    break;
                    //
                case "B1":
                    this.battleship1.length--;
                    this.log = "Battleship has been hit";
                    break;
                    //
                case "D1":
                    this.destroyer1.length--;
                    this.log = "Destroyer has been hit";
                    break;
                    //
                case "S1":
                    this.submarine1.length--
                    this.log = "Submarine has been hit";
                    break;
                    //
                case "P1":
                    this.patrol_boat1.length--;
                    this.log = "Patrol Boat has been hit";
                    break;
            }
        } else {
            this.log = "Miss";
            this.missed++;
        }
        this.board[ver][hor] = "H";

        this.checkSunk();
        this.checkWin();
    };

    checkSunk() {
        for(const entry in this) {
            if(this[entry].name){
                if(this[entry].sunk !== true) {
                    if(this[entry].length === 0) {
                        this.totalSunk++;
                        this[entry].sunk = true;
                        this.log = `${this[entry].name} has been sunk!`;
                    }
                }
            }
        }
    };

    checkWin() {
        if(this.totalSunk === 5) {
            this.winner = true;
            return
        }
    };

    setSunk() {
        this.totalSunk = 5;
    };

    setPlaced() {
        for(const entry in this) {
            if(this[entry].name) {
                this[entry].placed = true;
            }
        }
    }

    pick(ship)   {
        this.currentShip = ship;
        console.log(this.currentShip);
    };
};

class CreatePlayer {
    constructor(pName, pMark) {
            this.pName = pName;
            this.pMark = pMark;
            this.pBoard = new Game();
            this.ready = false;
    };
};

class Play {
    constructor (p1Name, p2Name) {
        this.p1 = new CreatePlayer(p1Name, "P1");
        this.p2 = new CreatePlayer(p2Name, "P2");
        this.current = this.p1;
        this.curr;
        this.attacker;
    }

    checkReady() {
        if(this.current.pBoard.totalPlaced === 5) {
            this.current.ready = true;
        }
    };

    switch() {
        this.checkReady();

        if(this.current.pMark === "P1") {
            this.attacker = this.p1.pName;
            this.curr = this.p2.pName;
        } else {
            this.attacker = this.p2.pName;
            this.curr = this.p1.pName;
        }

        if(this.p1.ready === true) {
            this.current === this.p1 ? this.current = this.p2 : this.current = this.p1;
        }
    };

    changePlayer() {
        this.checkReady();

        if(this.p1.ready === true) {
            this.current = this.p2;
        }
    }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const shipGrid = document.getElementById("ship-grid");
const p1Input = document.getElementById("p1-input");
const p2Input = document.getElementById("p2-input");
const start = document.getElementById("start-btn");
const grid = document.getElementById("grid");
const content = document.getElementById("content");
const info = document.getElementById("info");

let game;

function startGame () {
    if(p1Input.value === "" || p2Input.value === "") {
        alert("Enter name");
        return;
    }

    game = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Play(p1Input.value, p2Input.value);
    
    start.disabled = true;
    p1Input.disabled = true;
    p2Input.disabled = true;
    
    info.innerHTML = `${game.current.pName} place your ships!`;

    updateUIPre();
};

function renderShips() {
    let count = 0;
    for(const entry in game.current.pBoard) {
        
        if(game.current.pBoard[entry].name) {
            count++;
            
            const top = document.createElement("div");
            top.classList.add("square");
            shipGrid.appendChild(top);
            
            const name = document.createElement("div");
            name.innerHTML = `${game.current.pBoard[entry].name}`;
            top.appendChild(name);
            
            const length = document.createElement("div");
            length.innerHTML = `Length: ${game.current.pBoard[entry].length}`;
            top.appendChild(length);
            
            const placed = document.createElement("div");
            placed.classList.add("place");
            placed.innerHTML = `Placed?: ${game.current.pBoard[entry].placed}`;
            top.appendChild(placed);

            const pickBtn = document.createElement("button");
            pickBtn.classList.add("button");
            pickBtn.innerHTML = "Pick";
            pickBtn.addEventListener("click", () => { 
                                                        game.current.pBoard.pick(game.current.pBoard[entry]);
                                                        updateUIPre();
                                                    });
            top.appendChild(pickBtn);

        }
        
        if(count === 5) {
            return
        }
    };
};

function renderControls() {
    const controlsContainer1 = document.createElement("div");
    controlsContainer1.id = "controls-container1";
    shipGrid.appendChild(controlsContainer1);

    const currentP = document.createElement("div");
    currentP.id = "currentP";
    currentP.innerHTML = `Current Ship: ${game.current.pBoard.currentShip.name} --- Current Player Board: ${game.current.pName}`;
    controlsContainer1.appendChild(currentP);

    const controlsContainer2 = document.createElement("div");
    controlsContainer2.id = "controls-container2";
    shipGrid.appendChild(controlsContainer2);

    const placeHor = document.createElement("button");
    placeHor.innerHTML = "Place Horizontally";
    placeHor.addEventListener("click", () => setDirection("horizontal"));
    controlsContainer2.appendChild(placeHor);

    const placeVer = document.createElement("button");
    placeVer.innerHTML = "Place Vertically";
    placeVer.addEventListener("click", () => setDirection("vertical"));
    controlsContainer2.appendChild(placeVer);

    const log = document.createElement("p");
    log.id = "log";
    log.innerHTML = `Log: ${game.current.pBoard.log}`;
    controlsContainer2.appendChild(log);
};

function renderGrid() {
    let ver = 0;
    let hor = -1;
    
    for(let i = 0; i < 100; i++) {
        hor++
        
        if(hor === 10) {
            hor = 0;
            ver++;
        }
        
        const squareGrid = document.createElement("div");
        squareGrid.id = `${ver}-${hor}`;
        squareGrid.classList.add("grid-square");
        squareGrid.addEventListener("mouseenter", gridHoverIn.bind(null, hor, ver));
        squareGrid.addEventListener("mouseleave", gridHoverOut.bind(null, hor, ver));
        squareGrid.addEventListener("click", place.bind(null, hor, ver));
        grid.appendChild(squareGrid);
    }
};

function updateUIPre() {
    shipGrid.innerHTML = "";
    grid.innerHTML = "";
    renderShips();
    renderControls();
    renderGrid();
    checkGrid();

    if(game.p1.ready === true && game.p2.ready === true) {
        game.switch();
        info.innerHTML = `${game.attacker} attack ${game.curr}'s board!`;
        updateUIPost();
    }
};

function updateUIPost() {
    shipGrid.innerHTML = "";
    grid.innerHTML = "";
    renderShips();
    renderControlsHit();
    renderHitGrid();
};

function renderHitGrid() {
    let ver = 0;
    let hor = -1;
    
    for(let i = 0; i < 100; i++) {
        hor++
        
        if(hor === 10) {
            hor = 0;
            ver++;
        }
        
        const squareGrid = document.createElement("div");
        squareGrid.id = `${ver}-${hor}`;
        squareGrid.addEventListener("click", hit.bind(null, hor, ver));
        squareGrid.classList.add("grid-square");
        grid.appendChild(squareGrid);
    };

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            if(game.current.pBoard.board[i][j] === "H") {
                const square = document.getElementById(`${i}-${j}`);
                let color = "blue";
                if(game.current.pMark === "P1") {
                    color = "blue";
                } else {
                    color = "red"
                }
                square.style.backgroundColor = color;
            }
        }
    }

    const shipGrid = document.querySelectorAll(".button");
    shipGrid.forEach((ship) => {
        ship.parentNode.removeChild(ship);
    });
};

function renderControlsHit() {
    const currentPlayer = document.createElement("div");
    currentPlayer.id = "current-player";
    currentPlayer.innerHTML = `Current Player Board: ${game.current.pName}`;
    shipGrid.appendChild(currentPlayer);

    const switchPlayer = document.createElement("button");
    switchPlayer.id = "switch";
    switchPlayer.innerHTML = `Switch`;
    switchPlayer.addEventListener("click", () => { game.switch(); info.innerHTML = `${game.attacker} attack ${game.curr}'s board!`; updateUIPost(); });
    shipGrid.appendChild(switchPlayer);

    const log = document.createElement("p");
    log.id = "log";
    log.innerHTML = `Log: ${game.current.pBoard.log}`;
    shipGrid.appendChild(log);
};

function hit(hor, ver) {
    game.current.pBoard.hit(hor, ver);

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            document.getElementById(`${i}-${j}`).style.pointerEvents = "none";
            if(game.current.pBoard.board[i][j] === "H") {
                const square = document.getElementById(`${i}-${j}`);
                let color = "blue";
                if(game.current.pMark === "P1") {
                    color = "blue";
                } else {
                    color = "red"
                }
                square.style.backgroundColor = color;
            }
        }
    }
    console.log(game.current.pBoard);

    document.getElementById("log").innerHTML = `Log: ${game.current.pBoard.log}`
    checkWin();
};

function checkGrid() {
    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            if(game.current.pBoard.board[i][j] !== 0) {
                let currSquare = document.getElementById(`${i}-${j}`);
                currSquare.style.backgroundColor = "white";
            }
        }
    };
};

function setDirection(direction) {
    game.current.pBoard.direction = direction;
};

function place(hor, ver) {
    if(game.current.pBoard.direction === "vertical") {
        game.current.pBoard.placeVer(game.current.pBoard.currentShip, hor, ver);
    } else if (game.current.pBoard.direction === "horizontal"){
        game.current.pBoard.placeHor(game.current.pBoard.currentShip, hor, ver);
    };
    
    console.log(game.current.pBoard);
    
    checkGrid();
    game.changePlayer();
    info.innerHTML = `${game.current.pName} place your ships!`;
    updateUIPre();
};

function gridHoverIn(hor, ver) {
    for(let i = 0; i < game.current.pBoard.currentShip.length; i++) {
        if(game.current.pBoard.direction === "vertical") {
            let currentSquare = document.getElementById(`${ver + i}-${hor}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "black";
            }
        } else {
            let currentSquare = document.getElementById(`${ver}-${hor + i}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "black";
            }
        }
    };
};

function gridHoverOut(hor, ver) {
    for(let i = 0; i < game.current.pBoard.currentShip.length; i++) {
        if(game.current.pBoard.direction === "vertical") {
            let currentSquare = document.getElementById(`${ver + i}-${hor}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "#fff49b";
            }
        } else {
            let currentSquare = document.getElementById(`${ver}-${hor + i}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "#fff49b";
            }
        }
    }
};

function checkWin() {
    const win = document.createElement("p");
    win.id = "win";

    if(game.p1.pBoard.winner === true) {
        wrapper.innerHTML = "";
        win.innerHTML = `${game.p2.pName} has won! Reload the page to play again.`;
        content.appendChild(win);
        info.innerHTML = "";
    }

    if(game.p2.pBoard.winner === true) {
        wrapper.innerHTML = "";
        win.innerHTML = `${game.p1.pName} has won! Reload the page to play again.`;
        content.appendChild(win);
        info.innerHTML = "";
    }

};

start.addEventListener("click", startGame);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRkFBaUYsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxXQUFXLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxh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LEdBQUcsUUFBUTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBLDJEQUEyRCxRQUFRLEdBQUcsSUFBSTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsMkRBQTJELElBQUksR0FBRyxRQUFRO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY0OWI7XHJcbn1cclxuXHJcbi8qSGVhZGVyIHN0YXJ0Ki9cclxuI2hlYWRlci1kaXYge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLypIZWFkZXIgZW5kKi9cclxuXHJcbi8qUGxheWVyIGlucHV0IHN0YXJ0Ki9cclxuI3BsYXllci1pbnB1dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbiNwbGF5ZXItaW5wdXQgaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNwbGF5ZXItaW5wdXQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrOyBcclxufVxyXG5cclxuI3BsYXllci1pbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jc3RhcnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNzdGFydCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuI3N0YXJ0IDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdGFydCA6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiB1bnNldDtcclxufVxyXG4vKlBsYXllciBpbnB1dCBlbmQqL1xyXG5cclxuLypQbGFjZW1lbnQgZ3JpZCBzdGFydCovXHJcbiN3cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcclxuICAgIGdyaWQtcm93LWdhcDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jc2hpcC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogM3B4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAzcHg7IFxyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5ncmlkLXNxdWFyZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNxdWFyZSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnNxdWFyZSBkaXZ7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcXVhcmUgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4jY29udHJvbHMtY29udGFpbmVyMSB7XHJcbiAgICBncmlkLXJvdzogNi83O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNjdXJyZW50UCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NvbnRyb2xzLWNvbnRhaW5lcjIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZ3JpZC1yb3c6IDcvNztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jY29udHJvbHMtY29udGFpbmVyMiBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuI2xvZyB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKlBsYWNlbWVudCBncmlkIGVuZCovXHJcblxyXG4vKkhpdCBncmlkIHN0YXJ0Ki9cclxuI2N1cnJlbnQtcGxheWVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNzd2l0Y2gge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiN3aW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG4vKkhpdCBncmlkIGVuZCovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkRBQTJEO0lBQzNELGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0EsYUFBYTs7QUFFYixxQkFBcUI7QUFDckI7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJEQUEyRDtJQUMzRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJEQUEyRDtJQUMzRCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsbUJBQW1COztBQUVuQix1QkFBdUI7QUFDdkI7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQSxxQkFBcUI7O0FBRXJCLGlCQUFpQjtBQUNqQjtJQUNJLDREQUE0RDtJQUM1RCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQSxlQUFlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjQ5YjtcXHJcXG59XFxyXFxuXFxyXFxuLypIZWFkZXIgc3RhcnQqL1xcclxcbiNoZWFkZXItZGl2IHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLypIZWFkZXIgZW5kKi9cXHJcXG5cXHJcXG4vKlBsYXllciBpbnB1dCBzdGFydCovXFxyXFxuI3BsYXllci1pbnB1dHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWlucHV0IGlucHV0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pbnB1dCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjazsgXFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVye1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNzdGFydCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0IGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbiNzdGFydCA6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdGFydCA6ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IHVuc2V0O1xcclxcbn1cXHJcXG4vKlBsYXllciBpbnB1dCBlbmQqL1xcclxcblxcclxcbi8qUGxhY2VtZW50IGdyaWQgc3RhcnQqL1xcclxcbiN3cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xcclxcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtY29sdW1uLWdhcDogM3B4O1xcclxcbiAgICBncmlkLXJvdy1nYXA6IDNweDsgXFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXNxdWFyZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZSBkaXZ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIGJ1dHRvbntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udHJvbHMtY29udGFpbmVyMSB7XFxyXFxuICAgIGdyaWQtcm93OiA2Lzc7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudFAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNjb250cm9scy1jb250YWluZXIyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBncmlkLXJvdzogNy83O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNjb250cm9scy1jb250YWluZXIyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbG9nIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi8qUGxhY2VtZW50IGdyaWQgZW5kKi9cXHJcXG5cXHJcXG4vKkhpdCBncmlkIHN0YXJ0Ki9cXHJcXG4jY3VycmVudC1wbGF5ZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2gge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2luIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNpbmZvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcbi8qSGl0IGdyaWQgZW5kKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5jbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBsZW5ndGgsIG1hcmtpbmcpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5tYXJraW5nID0gbWFya2luZztcclxuXHJcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGFjZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbn07XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSAgIFtbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF1dO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FycmllcjEgPSBuZXcgU2hpcChcIkNhcnJpZXJcIiwgNSwgXCJDMVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJhdHRsZXNoaXAxID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIFwiQjFcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kZXN0cm95ZXIxID0gbmV3IFNoaXAoXCJEZXN0cm95ZXJcIiwgMywgXCJEMVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1hcmluZTEgPSBuZXcgU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBcIlMxXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGF0cm9sX2JvYXQxID0gbmV3IFNoaXAoXCJQYXRyb2wgQm9hdFwiLCAyLCBcIlAxXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSB0aGlzLmNhcnJpZXIxO1xyXG4gICAgICAgIHRoaXMubWlzc2VkID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsU3VuayA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFBsYWNlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgdGhpcy53aW5uZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvZyA9IFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHBsYWNlVmVyKHNoaXAsIGhvciwgdmVyKSB7XHJcbiAgICAgICAgaWYoc2hpcC5wbGFjZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2cgPSBcIlNoaXAgYWxyZWFkeSBwbGFjZWRcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW3ZlciArIGldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJPdXQgb2YgQm91bmRzIHZlclwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbdmVyICsgaV1baG9yXSAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiTm90IHBvc3NpYmxlIHZlclwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ZlciArIGldW2hvcl0gPSBzaGlwLm1hcmtpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNoaXAucGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRvdGFsUGxhY2VkKys7XHJcbiAgICB9O1xyXG5cclxuICAgIHBsYWNlSG9yKHNoaXAsIGhvciwgdmVyKSB7XHJcbiAgICAgICAgaWYoc2hpcC5wbGFjZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2cgPSBcIlNoaXAgYWxyZWFkeSBwbGFjZWRcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbdmVyXVtob3IgKyBpXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiT3V0IG9mIEJvdW5kcyBob3JcIjtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFt2ZXJdW2hvciArIGldICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiTm90IHBvc3NpYmxlIGhvclwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Zlcl1baG9yICsgaV0gPSBzaGlwLm1hcmtpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3RhbFBsYWNlZCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICBoaXQoaG9yLCB2ZXIpIHtcclxuICAgICAgICBpZih0aGlzLmJvYXJkW3Zlcl1baG9yXSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFt2ZXJdW2hvcl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FycmllcjEubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2cgPSBcIkNhcnJpZXIgaGFzIGJlZW4gaGl0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmF0dGxlc2hpcDEubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2cgPSBcIkJhdHRsZXNoaXAgaGFzIGJlZW4gaGl0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJEMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveWVyMS5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiRGVzdHJveWVyIGhhcyBiZWVuIGhpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUzFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1hcmluZTEubGVuZ3RoLS1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiU3VibWFyaW5lIGhhcyBiZWVuIGhpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUDFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdHJvbF9ib2F0MS5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiUGF0cm9sIEJvYXQgaGFzIGJlZW4gaGl0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyA9IFwiTWlzc1wiO1xyXG4gICAgICAgICAgICB0aGlzLm1pc3NlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvYXJkW3Zlcl1baG9yXSA9IFwiSFwiO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrU3VuaygpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tXaW4oKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tTdW5rKCkge1xyXG4gICAgICAgIGZvcihjb25zdCBlbnRyeSBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXNbZW50cnldLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpc1tlbnRyeV0uc3VuayAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXNbZW50cnldLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsU3VuaysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2VudHJ5XS5zdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2cgPSBgJHt0aGlzW2VudHJ5XS5uYW1lfSBoYXMgYmVlbiBzdW5rIWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja1dpbigpIHtcclxuICAgICAgICBpZih0aGlzLnRvdGFsU3VuayA9PT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLndpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2V0U3VuaygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsU3VuayA9IDU7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFBsYWNlZCgpIHtcclxuICAgICAgICBmb3IoY29uc3QgZW50cnkgaW4gdGhpcykge1xyXG4gICAgICAgICAgICBpZih0aGlzW2VudHJ5XS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2VudHJ5XS5wbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2soc2hpcCkgICB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IHNoaXA7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50U2hpcCk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY2xhc3MgQ3JlYXRlUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBOYW1lLCBwTWFyaykge1xyXG4gICAgICAgICAgICB0aGlzLnBOYW1lID0gcE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucE1hcmsgPSBwTWFyaztcclxuICAgICAgICAgICAgdGhpcy5wQm9hcmQgPSBuZXcgR2FtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY2xhc3MgUGxheSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocDFOYW1lLCBwMk5hbWUpIHtcclxuICAgICAgICB0aGlzLnAxID0gbmV3IENyZWF0ZVBsYXllcihwMU5hbWUsIFwiUDFcIik7XHJcbiAgICAgICAgdGhpcy5wMiA9IG5ldyBDcmVhdGVQbGF5ZXIocDJOYW1lLCBcIlAyXCIpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucDE7XHJcbiAgICAgICAgdGhpcy5jdXJyO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tSZWFkeSgpIHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnQucEJvYXJkLnRvdGFsUGxhY2VkID09PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5yZWFkeSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzd2l0Y2goKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1JlYWR5KCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudC5wTWFyayA9PT0gXCJQMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrZXIgPSB0aGlzLnAxLnBOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnIgPSB0aGlzLnAyLnBOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrZXIgPSB0aGlzLnAyLnBOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnIgPSB0aGlzLnAxLnBOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5wMS5yZWFkeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPT09IHRoaXMucDEgPyB0aGlzLmN1cnJlbnQgPSB0aGlzLnAyIDogdGhpcy5jdXJyZW50ID0gdGhpcy5wMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoYW5nZVBsYXllcigpIHtcclxuICAgICAgICB0aGlzLmNoZWNrUmVhZHkoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wMS5yZWFkeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IFNoaXAsIEdhbWUsIENyZWF0ZVBsYXllciwgUGxheX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBHYW1lLCBDcmVhdGVQbGF5ZXIsIFBsYXkgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuY29uc3Qgc2hpcEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtZ3JpZFwiKTtcclxuY29uc3QgcDFJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDEtaW5wdXRcIik7XHJcbmNvbnN0IHAySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAyLWlucHV0XCIpO1xyXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnRuXCIpO1xyXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkXCIpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5jb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xyXG5cclxubGV0IGdhbWU7XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUgKCkge1xyXG4gICAgaWYocDFJbnB1dC52YWx1ZSA9PT0gXCJcIiB8fCBwMklucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFbnRlciBuYW1lXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lID0gbmV3IFBsYXkocDFJbnB1dC52YWx1ZSwgcDJJbnB1dC52YWx1ZSk7XHJcbiAgICBcclxuICAgIHN0YXJ0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHAxSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcDJJbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIGluZm8uaW5uZXJIVE1MID0gYCR7Z2FtZS5jdXJyZW50LnBOYW1lfSBwbGFjZSB5b3VyIHNoaXBzIWA7XHJcblxyXG4gICAgdXBkYXRlVUlQcmUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNoaXBzKCkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGZvcihjb25zdCBlbnRyeSBpbiBnYW1lLmN1cnJlbnQucEJvYXJkKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZ2FtZS5jdXJyZW50LnBCb2FyZFtlbnRyeV0ubmFtZSkge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9wLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XHJcbiAgICAgICAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHRvcCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBgJHtnYW1lLmN1cnJlbnQucEJvYXJkW2VudHJ5XS5uYW1lfWA7XHJcbiAgICAgICAgICAgIHRvcC5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxlbmd0aC5pbm5lckhUTUwgPSBgTGVuZ3RoOiAke2dhbWUuY3VycmVudC5wQm9hcmRbZW50cnldLmxlbmd0aH1gO1xyXG4gICAgICAgICAgICB0b3AuYXBwZW5kQ2hpbGQobGVuZ3RoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHBsYWNlZC5jbGFzc0xpc3QuYWRkKFwicGxhY2VcIik7XHJcbiAgICAgICAgICAgIHBsYWNlZC5pbm5lckhUTUwgPSBgUGxhY2VkPzogJHtnYW1lLmN1cnJlbnQucEJvYXJkW2VudHJ5XS5wbGFjZWR9YDtcclxuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKHBsYWNlZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwaWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgcGlja0J0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBwaWNrQnRuLmlubmVySFRNTCA9IFwiUGlja1wiO1xyXG4gICAgICAgICAgICBwaWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuY3VycmVudC5wQm9hcmQucGljayhnYW1lLmN1cnJlbnQucEJvYXJkW2VudHJ5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVUlQcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0b3AuYXBwZW5kQ2hpbGQocGlja0J0bik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihjb3VudCA9PT0gNSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29udHJvbHMoKSB7XHJcbiAgICBjb25zdCBjb250cm9sc0NvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udHJvbHNDb250YWluZXIxLmlkID0gXCJjb250cm9scy1jb250YWluZXIxXCI7XHJcbiAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcjEpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGN1cnJlbnRQLmlkID0gXCJjdXJyZW50UFwiO1xyXG4gICAgY3VycmVudFAuaW5uZXJIVE1MID0gYEN1cnJlbnQgU2hpcDogJHtnYW1lLmN1cnJlbnQucEJvYXJkLmN1cnJlbnRTaGlwLm5hbWV9IC0tLSBDdXJyZW50IFBsYXllciBCb2FyZDogJHtnYW1lLmN1cnJlbnQucE5hbWV9YDtcclxuICAgIGNvbnRyb2xzQ29udGFpbmVyMS5hcHBlbmRDaGlsZChjdXJyZW50UCk7XHJcblxyXG4gICAgY29uc3QgY29udHJvbHNDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRyb2xzQ29udGFpbmVyMi5pZCA9IFwiY29udHJvbHMtY29udGFpbmVyMlwiO1xyXG4gICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY29udHJvbHNDb250YWluZXIyKTtcclxuXHJcbiAgICBjb25zdCBwbGFjZUhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwbGFjZUhvci5pbm5lckhUTUwgPSBcIlBsYWNlIEhvcml6b250YWxseVwiO1xyXG4gICAgcGxhY2VIb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNldERpcmVjdGlvbihcImhvcml6b250YWxcIikpO1xyXG4gICAgY29udHJvbHNDb250YWluZXIyLmFwcGVuZENoaWxkKHBsYWNlSG9yKTtcclxuXHJcbiAgICBjb25zdCBwbGFjZVZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwbGFjZVZlci5pbm5lckhUTUwgPSBcIlBsYWNlIFZlcnRpY2FsbHlcIjtcclxuICAgIHBsYWNlVmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZXREaXJlY3Rpb24oXCJ2ZXJ0aWNhbFwiKSk7XHJcbiAgICBjb250cm9sc0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQocGxhY2VWZXIpO1xyXG5cclxuICAgIGNvbnN0IGxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbG9nLmlkID0gXCJsb2dcIjtcclxuICAgIGxvZy5pbm5lckhUTUwgPSBgTG9nOiAke2dhbWUuY3VycmVudC5wQm9hcmQubG9nfWA7XHJcbiAgICBjb250cm9sc0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQobG9nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckdyaWQoKSB7XHJcbiAgICBsZXQgdmVyID0gMDtcclxuICAgIGxldCBob3IgPSAtMTtcclxuICAgIFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgaG9yKytcclxuICAgICAgICBcclxuICAgICAgICBpZihob3IgPT09IDEwKSB7XHJcbiAgICAgICAgICAgIGhvciA9IDA7XHJcbiAgICAgICAgICAgIHZlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzcXVhcmVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcXVhcmVHcmlkLmlkID0gYCR7dmVyfS0ke2hvcn1gO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWQtc3F1YXJlXCIpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZ3JpZEhvdmVySW4uYmluZChudWxsLCBob3IsIHZlcikpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZ3JpZEhvdmVyT3V0LmJpbmQobnVsbCwgaG9yLCB2ZXIpKTtcclxuICAgICAgICBzcXVhcmVHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZS5iaW5kKG51bGwsIGhvciwgdmVyKSk7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzcXVhcmVHcmlkKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVVJUHJlKCkge1xyXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHJlbmRlclNoaXBzKCk7XHJcbiAgICByZW5kZXJDb250cm9scygpO1xyXG4gICAgcmVuZGVyR3JpZCgpO1xyXG4gICAgY2hlY2tHcmlkKCk7XHJcblxyXG4gICAgaWYoZ2FtZS5wMS5yZWFkeSA9PT0gdHJ1ZSAmJiBnYW1lLnAyLnJlYWR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgZ2FtZS5zd2l0Y2goKTtcclxuICAgICAgICBpbmZvLmlubmVySFRNTCA9IGAke2dhbWUuYXR0YWNrZXJ9IGF0dGFjayAke2dhbWUuY3Vycn0ncyBib2FyZCFgO1xyXG4gICAgICAgIHVwZGF0ZVVJUG9zdCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlVUlQb3N0KCkge1xyXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHJlbmRlclNoaXBzKCk7XHJcbiAgICByZW5kZXJDb250cm9sc0hpdCgpO1xyXG4gICAgcmVuZGVySGl0R3JpZCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySGl0R3JpZCgpIHtcclxuICAgIGxldCB2ZXIgPSAwO1xyXG4gICAgbGV0IGhvciA9IC0xO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICBob3IrK1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGhvciA9PT0gMTApIHtcclxuICAgICAgICAgICAgaG9yID0gMDtcclxuICAgICAgICAgICAgdmVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNxdWFyZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuaWQgPSBgJHt2ZXJ9LSR7aG9yfWA7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGl0LmJpbmQobnVsbCwgaG9yLCB2ZXIpKTtcclxuICAgICAgICBzcXVhcmVHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZUdyaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiSFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfS0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgICAgIGlmKGdhbWUuY3VycmVudC5wTWFyayA9PT0gXCJQMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcInJlZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hpcEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKTtcclxuICAgIHNoaXBHcmlkLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgICBzaGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2hpcCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbnRyb2xzSGl0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjdXJyZW50UGxheWVyLmlkID0gXCJjdXJyZW50LXBsYXllclwiO1xyXG4gICAgY3VycmVudFBsYXllci5pbm5lckhUTUwgPSBgQ3VycmVudCBQbGF5ZXIgQm9hcmQ6ICR7Z2FtZS5jdXJyZW50LnBOYW1lfWA7XHJcbiAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChjdXJyZW50UGxheWVyKTtcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3dpdGNoUGxheWVyLmlkID0gXCJzd2l0Y2hcIjtcclxuICAgIHN3aXRjaFBsYXllci5pbm5lckhUTUwgPSBgU3dpdGNoYDtcclxuICAgIHN3aXRjaFBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBnYW1lLnN3aXRjaCgpOyBpbmZvLmlubmVySFRNTCA9IGAke2dhbWUuYXR0YWNrZXJ9IGF0dGFjayAke2dhbWUuY3Vycn0ncyBib2FyZCFgOyB1cGRhdGVVSVBvc3QoKTsgfSk7XHJcbiAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChzd2l0Y2hQbGF5ZXIpO1xyXG5cclxuICAgIGNvbnN0IGxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbG9nLmlkID0gXCJsb2dcIjtcclxuICAgIGxvZy5pbm5lckhUTUwgPSBgTG9nOiAke2dhbWUuY3VycmVudC5wQm9hcmQubG9nfWA7XHJcbiAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChsb2cpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaGl0KGhvciwgdmVyKSB7XHJcbiAgICBnYW1lLmN1cnJlbnQucEJvYXJkLmhpdChob3IsIHZlcik7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfS0ke2p9YCkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldW2pdID09PSBcIkhcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0tJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucE1hcmsgPT09IFwiUDFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZ2FtZS5jdXJyZW50LnBCb2FyZCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIikuaW5uZXJIVE1MID0gYExvZzogJHtnYW1lLmN1cnJlbnQucEJvYXJkLmxvZ31gXHJcbiAgICBjaGVja1dpbigpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tHcmlkKCkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldW2pdICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyclNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9LSR7an1gKTtcclxuICAgICAgICAgICAgICAgIGN1cnJTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldERpcmVjdGlvbihkaXJlY3Rpb24pIHtcclxuICAgIGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcGxhY2UoaG9yLCB2ZXIpIHtcclxuICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICBnYW1lLmN1cnJlbnQucEJvYXJkLnBsYWNlVmVyKGdhbWUuY3VycmVudC5wQm9hcmQuY3VycmVudFNoaXAsIGhvciwgdmVyKTtcclxuICAgIH0gZWxzZSBpZiAoZ2FtZS5jdXJyZW50LnBCb2FyZC5kaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKXtcclxuICAgICAgICBnYW1lLmN1cnJlbnQucEJvYXJkLnBsYWNlSG9yKGdhbWUuY3VycmVudC5wQm9hcmQuY3VycmVudFNoaXAsIGhvciwgdmVyKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGdhbWUuY3VycmVudC5wQm9hcmQpO1xyXG4gICAgXHJcbiAgICBjaGVja0dyaWQoKTtcclxuICAgIGdhbWUuY2hhbmdlUGxheWVyKCk7XHJcbiAgICBpbmZvLmlubmVySFRNTCA9IGAke2dhbWUuY3VycmVudC5wTmFtZX0gcGxhY2UgeW91ciBzaGlwcyFgO1xyXG4gICAgdXBkYXRlVUlQcmUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdyaWRIb3ZlckluKGhvciwgdmVyKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5jdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt2ZXIgKyBpfS0ke2hvcn1gKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFNxdWFyZSAhPT0gbnVsbCAmJiBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dmVyfS0ke2hvciArIGl9YCk7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRTcXVhcmUgIT09IG51bGwgJiYgY3VycmVudFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT09IFwid2hpdGVcIikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ3JpZEhvdmVyT3V0KGhvciwgdmVyKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5jdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt2ZXIgKyBpfS0ke2hvcn1gKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFNxdWFyZSAhPT0gbnVsbCAmJiBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjQ5YlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt2ZXJ9LSR7aG9yICsgaX1gKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFNxdWFyZSAhPT0gbnVsbCAmJiBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjQ5YlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tXaW4oKSB7XHJcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHdpbi5pZCA9IFwid2luXCI7XHJcblxyXG4gICAgaWYoZ2FtZS5wMS5wQm9hcmQud2lubmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHdpbi5pbm5lckhUTUwgPSBgJHtnYW1lLnAyLnBOYW1lfSBoYXMgd29uISBSZWxvYWQgdGhlIHBhZ2UgdG8gcGxheSBhZ2Fpbi5gO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2luKTtcclxuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZ2FtZS5wMi5wQm9hcmQud2lubmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHdpbi5pbm5lckhUTUwgPSBgJHtnYW1lLnAxLnBOYW1lfSBoYXMgd29uISBSZWxvYWQgdGhlIHBhZ2UgdG8gcGxheSBhZ2Fpbi5gO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2luKTtcclxuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9