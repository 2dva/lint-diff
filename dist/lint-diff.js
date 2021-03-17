#!/usr/bin/env node
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var meow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! meow */ "meow");
/* harmony import */ var meow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(meow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lint_diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lint-diff */ "./lint-diff.js");


var cli = meow__WEBPACK_IMPORTED_MODULE_0___default()("\n  Usage\n    $ lint-diff [<diff-input>]\n\n  Examples\n    $ lint-diff\n    $ lint-diff HEAD~1..HEAD\n    $ lint-diff master..my-branch\n");
Object(_lint_diff__WEBPACK_IMPORTED_MODULE_1__["default"])(cli.input[0]);

/***/ }),

/***/ "./lib/functional.js":
/*!***************************!*\
  !*** ./lib/functional.js ***!
  \***************************/
/*! exports provided: mapIndexed, reduceIndexed, firstItemStartsWith, doesNotStartWith, splitEveryTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed", function() { return mapIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceIndexed", function() { return reduceIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstItemStartsWith", function() { return firstItemStartsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesNotStartWith", function() { return doesNotStartWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitEveryTime", function() { return splitEveryTime; });
/* harmony import */ var ramda_src_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda/src/isEmpty */ "ramda/src/isEmpty");
/* harmony import */ var ramda_src_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda_src_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda_src_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda/src/filter */ "ramda/src/filter");
/* harmony import */ var ramda_src_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda_src_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda_src_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda/src/slice */ "ramda/src/slice");
/* harmony import */ var ramda_src_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda_src_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda_src_defaultTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda/src/defaultTo */ "ramda/src/defaultTo");
/* harmony import */ var ramda_src_defaultTo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ramda_src_defaultTo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda_src_insert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda/src/insert */ "ramda/src/insert");
/* harmony import */ var ramda_src_insert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ramda_src_insert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda/src/pipe */ "ramda/src/pipe");
/* harmony import */ var ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ramda_src_complement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda/src/complement */ "ramda/src/complement");
/* harmony import */ var ramda_src_complement__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ramda_src_complement__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ramda/src/startsWith */ "ramda/src/startsWith");
/* harmony import */ var ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ramda/src/curry */ "ramda/src/curry");
/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ramda_src_curry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ramda_src_reduce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ramda/src/reduce */ "ramda/src/reduce");
/* harmony import */ var ramda_src_reduce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ramda_src_reduce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ramda/src/map */ "ramda/src/map");
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ramda_src_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ramda_src_addIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ramda/src/addIndex */ "ramda/src/addIndex");
/* harmony import */ var ramda_src_addIndex__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ramda_src_addIndex__WEBPACK_IMPORTED_MODULE_11__);













function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mapIndexed = ramda_src_addIndex__WEBPACK_IMPORTED_MODULE_11___default()(ramda_src_map__WEBPACK_IMPORTED_MODULE_10___default.a);
var reduceIndexed = ramda_src_addIndex__WEBPACK_IMPORTED_MODULE_11___default()(ramda_src_reduce__WEBPACK_IMPORTED_MODULE_9___default.a);
var firstItemStartsWith = ramda_src_curry__WEBPACK_IMPORTED_MODULE_8___default()(function (prefix, list) {
  return ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_7___default()(prefix, list[0]);
});
var doesNotStartWith = ramda_src_complement__WEBPACK_IMPORTED_MODULE_6___default()(ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_7___default.a);
var splitEveryTime = ramda_src_curry__WEBPACK_IMPORTED_MODULE_8___default()(function (predicate, list) {
  var splitIndexes = ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5___default()(reduceIndexed(function (acc, item, index) {
    if (predicate(item)) {
      return [].concat(_toConsumableArray(acc), [index]);
    }

    return acc;
  }, []), ramda_src_insert__WEBPACK_IMPORTED_MODULE_4___default()(list.length - 1, list.length))(list);

  var split = mapIndexed(function (splitIndex, i, splitIndexList) {
    var previousIndex = ramda_src_defaultTo__WEBPACK_IMPORTED_MODULE_3___default()(0, splitIndexList[i - 1]);

    var currentIndex = splitIndexList[i];
    return ramda_src_slice__WEBPACK_IMPORTED_MODULE_2___default()(previousIndex, currentIndex, list);
  });
  return ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5___default()(split, ramda_src_filter__WEBPACK_IMPORTED_MODULE_1___default()(ramda_src_complement__WEBPACK_IMPORTED_MODULE_6___default()(ramda_src_isEmpty__WEBPACK_IMPORTED_MODULE_0___default.a)))(splitIndexes);
});

/***/ }),

/***/ "./lib/git.js":
/*!********************!*\
  !*** ./lib/git.js ***!
  \********************/
/*! exports provided: getChangedLinesFromHunk, getHunksFromDiff, getChangedLinesFromDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangedLinesFromHunk", function() { return getChangedLinesFromHunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHunksFromDiff", function() { return getHunksFromDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangedLinesFromDiff", function() { return getChangedLinesFromDiff; });
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda/src/map */ "ramda/src/map");
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda_src_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda_src_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda/src/uniq */ "ramda/src/uniq");
/* harmony import */ var ramda_src_uniq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda_src_uniq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda_src_flatten__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda/src/flatten */ "ramda/src/flatten");
/* harmony import */ var ramda_src_flatten__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda_src_flatten__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda_src_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda/src/filter */ "ramda/src/filter");
/* harmony import */ var ramda_src_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ramda_src_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda_src_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda/src/split */ "ramda/src/split");
/* harmony import */ var ramda_src_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ramda_src_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda/src/pipe */ "ramda/src/pipe");
/* harmony import */ var ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda/src/startsWith */ "ramda/src/startsWith");
/* harmony import */ var ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functional__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functional */ "./lib/functional.js");








function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var getChangedLinesFromHunk = function getChangedLinesFromHunk(hunk) {
  var lineNumber = 0;
  return hunk.reduce(function (changedLines, line) {
    if (ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_6___default()('@@', line)) {
      lineNumber = Number(line.match(/\+([0-9]+)/)[1]) - 1;
      return changedLines;
    }

    if (Object(_functional__WEBPACK_IMPORTED_MODULE_7__["doesNotStartWith"])('-', line)) {
      lineNumber += 1;

      if (ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_6___default()('+', line)) {
        return [].concat(_toConsumableArray(changedLines), [lineNumber]);
      }
    }

    return changedLines;
  }, []);
};
var getHunksFromDiff = ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5___default()(ramda_src_split__WEBPACK_IMPORTED_MODULE_4___default()('\n'), Object(_functional__WEBPACK_IMPORTED_MODULE_7__["splitEveryTime"])(ramda_src_startsWith__WEBPACK_IMPORTED_MODULE_6___default()('@@')), ramda_src_filter__WEBPACK_IMPORTED_MODULE_3___default()(Object(_functional__WEBPACK_IMPORTED_MODULE_7__["firstItemStartsWith"])('@@')));
var getChangedLinesFromDiff = ramda_src_pipe__WEBPACK_IMPORTED_MODULE_5___default()(getHunksFromDiff, ramda_src_map__WEBPACK_IMPORTED_MODULE_0___default()(getChangedLinesFromHunk), ramda_src_flatten__WEBPACK_IMPORTED_MODULE_2___default.a, ramda_src_uniq__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./lint-diff.js":
/*!**********************!*\
  !*** ./lint-diff.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda_src_T__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda/src/T */ "ramda/src/T");
/* harmony import */ var ramda_src_T__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda_src_T__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda_src_equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda/src/equals */ "ramda/src/equals");
/* harmony import */ var ramda_src_equals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda_src_equals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda_src_cond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda/src/cond */ "ramda/src/cond");
/* harmony import */ var ramda_src_cond__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda_src_cond__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda_src_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda/src/tap */ "ramda/src/tap");
/* harmony import */ var ramda_src_tap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ramda_src_tap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda_src_curryN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda/src/curryN */ "ramda/src/curryN");
/* harmony import */ var ramda_src_curryN__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ramda_src_curryN__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ramda_src_pluck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda/src/pluck */ "ramda/src/pluck");
/* harmony import */ var ramda_src_pluck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda_src_pluck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ramda_src_sum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda/src/sum */ "ramda/src/sum");
/* harmony import */ var ramda_src_sum__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ramda_src_sum__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ramda_src_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ramda/src/merge */ "ramda/src/merge");
/* harmony import */ var ramda_src_merge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ramda_src_merge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ramda_src_length__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ramda/src/length */ "ramda/src/length");
/* harmony import */ var ramda_src_length__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ramda_src_length__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ramda_src_evolve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ramda/src/evolve */ "ramda/src/evolve");
/* harmony import */ var ramda_src_evolve__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ramda_src_evolve__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ramda_src_propEq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ramda/src/propEq */ "ramda/src/propEq");
/* harmony import */ var ramda_src_propEq__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ramda_src_propEq__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ramda_src_find__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ramda/src/find */ "ramda/src/find");
/* harmony import */ var ramda_src_find__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ramda_src_find__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ramda/src/pipe */ "ramda/src/pipe");
/* harmony import */ var ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ramda_src_assoc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ramda/src/assoc */ "ramda/src/assoc");
/* harmony import */ var ramda_src_assoc__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ramda_src_assoc__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ramda_src_objOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ramda/src/objOf */ "ramda/src/objOf");
/* harmony import */ var ramda_src_objOf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ramda_src_objOf__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ramda/src/curry */ "ramda/src/curry");
/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ramda_src_curry__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ramda/src/map */ "ramda/src/map");
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ramda_src_map__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ramda_src_endsWith__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ramda/src/endsWith */ "ramda/src/endsWith");
/* harmony import */ var ramda_src_endsWith__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ramda_src_endsWith__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ramda_src_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ramda/src/filter */ "ramda/src/filter");
/* harmony import */ var ramda_src_filter__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ramda_src_filter__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ramda_src_split__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ramda/src/split */ "ramda/src/split");
/* harmony import */ var ramda_src_split__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ramda_src_split__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ramda_src_prop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ramda/src/prop */ "ramda/src/prop");
/* harmony import */ var ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ramda_src_prop__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ramda_src_pipeP__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ramda/src/pipeP */ "ramda/src/pipeP");
/* harmony import */ var ramda_src_pipeP__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ramda_src_pipeP__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! bluebird */ "bluebird");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var execa__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! execa */ "execa");
/* harmony import */ var execa__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(execa__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var eslint__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! eslint */ "eslint");
/* harmony import */ var eslint__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(eslint__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _lib_git__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/git */ "./lib/git.js");



























var linter = new eslint__WEBPACK_IMPORTED_MODULE_25__["CLIEngine"]();
var formatter = linter.getFormatter();

var getChangedFiles = ramda_src_pipeP__WEBPACK_IMPORTED_MODULE_21___default()(function (commitRange) {
  return execa__WEBPACK_IMPORTED_MODULE_23___default()('git', ['diff', commitRange, '--name-only', '--diff-filter=ACMR']);
}, ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default()('stdout'), ramda_src_split__WEBPACK_IMPORTED_MODULE_19___default()('\n'), ramda_src_filter__WEBPACK_IMPORTED_MODULE_18___default()(ramda_src_endsWith__WEBPACK_IMPORTED_MODULE_17___default()('.js')), ramda_src_map__WEBPACK_IMPORTED_MODULE_16___default()(path__WEBPACK_IMPORTED_MODULE_24___default.a.resolve));

var getDiff = ramda_src_curry__WEBPACK_IMPORTED_MODULE_15___default()(function (commitRange, filename) {
  return execa__WEBPACK_IMPORTED_MODULE_23___default()('git', ['diff', commitRange, filename]).then(ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default()('stdout'));
});

var getChangedFileLineMap = ramda_src_curry__WEBPACK_IMPORTED_MODULE_15___default()(function (commitRange, filePath) {
  return ramda_src_pipeP__WEBPACK_IMPORTED_MODULE_21___default()(getDiff(commitRange), _lib_git__WEBPACK_IMPORTED_MODULE_26__["getChangedLinesFromDiff"], ramda_src_objOf__WEBPACK_IMPORTED_MODULE_14___default()('changedLines'), ramda_src_assoc__WEBPACK_IMPORTED_MODULE_13___default()('filePath', filePath))(filePath);
});

var lintChangedLines = ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(ramda_src_map__WEBPACK_IMPORTED_MODULE_16___default()(ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default()('filePath')), linter.executeOnFiles.bind(linter));

var filterLinterMessages = function filterLinterMessages(changedFileLineMap) {
  return function (linterOutput) {
    var filterMessagesByFile = function filterMessagesByFile(result) {
      var fileLineMap = ramda_src_find__WEBPACK_IMPORTED_MODULE_11___default()(ramda_src_propEq__WEBPACK_IMPORTED_MODULE_10___default()('filePath', result.filePath), changedFileLineMap);

      var changedLines = ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default()('changedLines', fileLineMap);

      var filterMessages = ramda_src_evolve__WEBPACK_IMPORTED_MODULE_9___default()({
        messages: ramda_src_filter__WEBPACK_IMPORTED_MODULE_18___default()(function (message) {
          return changedLines.includes(message.line);
        })
      });

      return filterMessages(result);
    };

    var countBySeverity = function countBySeverity(severity) {
      return ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(ramda_src_filter__WEBPACK_IMPORTED_MODULE_18___default()(ramda_src_propEq__WEBPACK_IMPORTED_MODULE_10___default()('severity', severity)), ramda_src_length__WEBPACK_IMPORTED_MODULE_8___default.a);
    };

    var countWarningMessages = countBySeverity(1);
    var countErrorMessages = countBySeverity(2);

    var warningCount = function warningCount(result) {
      var transform = {
        warningCount: countWarningMessages(result.messages)
      };
      return ramda_src_merge__WEBPACK_IMPORTED_MODULE_7___default()(result, transform);
    };

    var errorCount = function errorCount(result) {
      var transform = {
        errorCount: countErrorMessages(result.messages)
      };
      return ramda_src_merge__WEBPACK_IMPORTED_MODULE_7___default()(result, transform);
    };

    return ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default()('results'), ramda_src_map__WEBPACK_IMPORTED_MODULE_16___default()(ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(filterMessagesByFile, warningCount, errorCount)), ramda_src_objOf__WEBPACK_IMPORTED_MODULE_14___default()('results'))(linterOutput);
  };
};

var applyLinter = function applyLinter(changedFileLineMap) {
  return ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(lintChangedLines, filterLinterMessages(changedFileLineMap))(changedFileLineMap);
};

var logResults = ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default()('results'), formatter, console.log);

var getErrorCountFromReport = ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(ramda_src_prop__WEBPACK_IMPORTED_MODULE_20___default()('results'), ramda_src_pluck__WEBPACK_IMPORTED_MODULE_5___default()('errorCount'), ramda_src_sum__WEBPACK_IMPORTED_MODULE_6___default.a);

var exitProcess = ramda_src_curryN__WEBPACK_IMPORTED_MODULE_4___default()(2, function (n) {
  return process.exit(n);
});

var reportResults = ramda_src_pipe__WEBPACK_IMPORTED_MODULE_12___default()(ramda_src_tap__WEBPACK_IMPORTED_MODULE_3___default()(logResults), getErrorCountFromReport, ramda_src_cond__WEBPACK_IMPORTED_MODULE_2___default()([[ramda_src_equals__WEBPACK_IMPORTED_MODULE_1___default()(0), exitProcess(0)], [ramda_src_T__WEBPACK_IMPORTED_MODULE_0___default.a, exitProcess(1)]]));

var run = function run() {
  var commitRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'HEAD';
  return bluebird__WEBPACK_IMPORTED_MODULE_22___default.a.resolve(commitRange).then(getChangedFiles).map(getChangedFileLineMap(commitRange)).then(applyLinter).then(reportResults);
};

/* harmony default export */ __webpack_exports__["default"] = (run);

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "eslint":
/*!*************************!*\
  !*** external "eslint" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("eslint");

/***/ }),

/***/ "execa":
/*!************************!*\
  !*** external "execa" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("execa");

/***/ }),

/***/ "meow":
/*!***********************!*\
  !*** external "meow" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("meow");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "ramda/src/T":
/*!******************************!*\
  !*** external "ramda/src/T" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/T");

/***/ }),

/***/ "ramda/src/addIndex":
/*!*************************************!*\
  !*** external "ramda/src/addIndex" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/addIndex");

/***/ }),

/***/ "ramda/src/assoc":
/*!**********************************!*\
  !*** external "ramda/src/assoc" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/assoc");

/***/ }),

/***/ "ramda/src/complement":
/*!***************************************!*\
  !*** external "ramda/src/complement" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/complement");

/***/ }),

/***/ "ramda/src/cond":
/*!*********************************!*\
  !*** external "ramda/src/cond" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/cond");

/***/ }),

/***/ "ramda/src/curry":
/*!**********************************!*\
  !*** external "ramda/src/curry" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/curry");

/***/ }),

/***/ "ramda/src/curryN":
/*!***********************************!*\
  !*** external "ramda/src/curryN" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/curryN");

/***/ }),

/***/ "ramda/src/defaultTo":
/*!**************************************!*\
  !*** external "ramda/src/defaultTo" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/defaultTo");

/***/ }),

/***/ "ramda/src/endsWith":
/*!*************************************!*\
  !*** external "ramda/src/endsWith" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/endsWith");

/***/ }),

/***/ "ramda/src/equals":
/*!***********************************!*\
  !*** external "ramda/src/equals" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/equals");

/***/ }),

/***/ "ramda/src/evolve":
/*!***********************************!*\
  !*** external "ramda/src/evolve" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/evolve");

/***/ }),

/***/ "ramda/src/filter":
/*!***********************************!*\
  !*** external "ramda/src/filter" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/filter");

/***/ }),

/***/ "ramda/src/find":
/*!*********************************!*\
  !*** external "ramda/src/find" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/find");

/***/ }),

/***/ "ramda/src/flatten":
/*!************************************!*\
  !*** external "ramda/src/flatten" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/flatten");

/***/ }),

/***/ "ramda/src/insert":
/*!***********************************!*\
  !*** external "ramda/src/insert" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/insert");

/***/ }),

/***/ "ramda/src/isEmpty":
/*!************************************!*\
  !*** external "ramda/src/isEmpty" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/isEmpty");

/***/ }),

/***/ "ramda/src/length":
/*!***********************************!*\
  !*** external "ramda/src/length" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/length");

/***/ }),

/***/ "ramda/src/map":
/*!********************************!*\
  !*** external "ramda/src/map" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/map");

/***/ }),

/***/ "ramda/src/merge":
/*!**********************************!*\
  !*** external "ramda/src/merge" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/merge");

/***/ }),

/***/ "ramda/src/objOf":
/*!**********************************!*\
  !*** external "ramda/src/objOf" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/objOf");

/***/ }),

/***/ "ramda/src/pipe":
/*!*********************************!*\
  !*** external "ramda/src/pipe" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/pipe");

/***/ }),

/***/ "ramda/src/pipeP":
/*!**********************************!*\
  !*** external "ramda/src/pipeP" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/pipeP");

/***/ }),

/***/ "ramda/src/pluck":
/*!**********************************!*\
  !*** external "ramda/src/pluck" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/pluck");

/***/ }),

/***/ "ramda/src/prop":
/*!*********************************!*\
  !*** external "ramda/src/prop" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/prop");

/***/ }),

/***/ "ramda/src/propEq":
/*!***********************************!*\
  !*** external "ramda/src/propEq" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/propEq");

/***/ }),

/***/ "ramda/src/reduce":
/*!***********************************!*\
  !*** external "ramda/src/reduce" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/reduce");

/***/ }),

/***/ "ramda/src/slice":
/*!**********************************!*\
  !*** external "ramda/src/slice" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/slice");

/***/ }),

/***/ "ramda/src/split":
/*!**********************************!*\
  !*** external "ramda/src/split" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/split");

/***/ }),

/***/ "ramda/src/startsWith":
/*!***************************************!*\
  !*** external "ramda/src/startsWith" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/startsWith");

/***/ }),

/***/ "ramda/src/sum":
/*!********************************!*\
  !*** external "ramda/src/sum" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/sum");

/***/ }),

/***/ "ramda/src/tap":
/*!********************************!*\
  !*** external "ramda/src/tap" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/tap");

/***/ }),

/***/ "ramda/src/uniq":
/*!*********************************!*\
  !*** external "ramda/src/uniq" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/uniq");

/***/ })

/******/ });
//# sourceMappingURL=lint-diff.js.map