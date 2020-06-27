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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "p5");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sketch */ "./src/sketch.ts");


const sketch = new _sketch__WEBPACK_IMPORTED_MODULE_1__["Sketch"]();
new p5__WEBPACK_IMPORTED_MODULE_0___default.a((p) => sketch.run(p));


/***/ }),

/***/ "./src/notes.ts":
/*!**********************!*\
  !*** ./src/notes.ts ***!
  \**********************/
/*! exports provided: freqToNote, noteToFreq, diff, noteName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freqToNote", function() { return freqToNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteToFreq", function() { return noteToFreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteName", function() { return noteName; });
const freqToNote = (freq) => 69 + 12 * Math.log2(freq / 440);
const noteToFreq = (note) => 440 * Math.pow(2, (note - 69) / 12);
const diff = (a, b) => 1200 * Math.log2(b / a);
const notes = [
    "A",
    "B♭",
    "B",
    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯",
];
const noteName = (note) => notes[(note - 21) % 12];



/***/ }),

/***/ "./src/sketch.ts":
/*!***********************!*\
  !*** ./src/sketch.ts ***!
  \***********************/
/*! exports provided: Sketch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sketch", function() { return Sketch; });
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "p5");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p5/lib/addons/p5.sound */ "p5/lib/addons/p5.sound");
/* harmony import */ var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ml5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ml5 */ "ml5");
/* harmony import */ var ml5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ml5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notes */ "./src/notes.ts");




const MODEL_URL = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
const bandWidth = 100;
class Sketch {
    constructor() {
        this.currentPitch = 440;
    }
    setup() {
        if (this.p == undefined) {
            throw "This can't be run without p set up";
        }
        // Prepare Canvas. Chrome needs user action before it's able to start the context.
        // TODO: Size needs to be parameterized. How can p5 change based on the screen size?
        let canvas = this.p.createCanvas(710, 4096);
        canvas.mouseClicked(() => {
            // Enable the AudioContext to bypass the Chrome security.
            let ctx = this.getAudioContext();
            ctx.resume();
        });
        this.p.noFill();
        const mic = new p5__WEBPACK_IMPORTED_MODULE_0___default.a.AudioIn();
        mic.start(async (args) => {
            this.pitch = await ml5.pitchDetection(MODEL_URL, this.getAudioContext(), mic.stream);
        });
    }
    async draw() {
        var _a;
        const baseFreq = 27.5; // Initial frequency of 21
        const intercept = Math.pow(baseFreq, 2);
        if (this.p == undefined) {
            throw "This can't be run without p set up";
        }
        if (!((_a = this.pitch) === null || _a === void 0 ? void 0 : _a.running)) {
            return;
        }
        this.p.fill(0);
        this.p.stroke(0);
        const rp = await this.pitch.getPitch();
        const freq = rp !== null && rp !== void 0 ? rp : this.currentPitch;
        this.p.background(255);
        const note = notes__WEBPACK_IMPORTED_MODULE_3__["freqToNote"](freq);
        const midiNote = Math.round(note);
        const name = notes__WEBPACK_IMPORTED_MODULE_3__["noteName"](midiNote);
        const refFreq = notes__WEBPACK_IMPORTED_MODULE_3__["noteToFreq"](midiNote); // Herz value of the given note
        const d = notes__WEBPACK_IMPORTED_MODULE_3__["diff"](freq, refFreq);
        console.log(note, note - 21, (note - 21) * bandWidth);
        this.p.stroke(100);
        this.p.line(0, (note - 21) * bandWidth, this.p.width, (note - 21) * bandWidth);
        // this.p.line(0, 100, this.p.width, 100);
        this.scale(this.p);
        // // Draw reference line.
        // this.p.stroke(0, 0, 255);
        // this.p.line(0, refFreq, this.p.width, refFreq);
        this.currentPitch = freq;
        this.p.textSize(20);
        this.p.text(`${freq.toFixed(2)} ${name} ${d.toFixed(2)}`, 10, (note - 21) * bandWidth - 5);
    }
    scale(p) {
        p.stroke(200);
        for (let i = 21; i <= 108; i++) {
            const y = (i - 21) * bandWidth;
            p.line(50, y, p.width, y);
            p.text(`${notes__WEBPACK_IMPORTED_MODULE_3__["noteName"](i)}`, 0, y + 5);
        }
    }
    run(p) {
        this.p = p;
        p.setup = () => this.setup();
        p.draw = () => this.draw();
    }
    getAudioContext() {
        var _a;
        // getAudioContext is not defined in p5 types.
        // @ts-ignore
        return (_a = this.p) === null || _a === void 0 ? void 0 : _a.getAudioContext();
    }
}



/***/ }),

/***/ "ml5":
/*!**********************!*\
  !*** external "ml5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ml5;

/***/ }),

/***/ "p5":
/*!*********************!*\
  !*** external "p5" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = p5;

/***/ }),

/***/ "p5/lib/addons/p5.sound":
/*!****************************!*\
  !*** external "undefined" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ub3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1sNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInA1XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5kZWZpbmVkXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUNjO0FBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksOENBQU0sRUFBRSxDQUFDO0FBQzVCLElBQUkseUNBQUUsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMs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QThDO1FBQzlDLGFBQWE7UUFDYixhQUFPLElBQUksQ0FBQyxDQUFDLDBDQUFFLGVBQWUsR0FBRztJQUNuQyxDQUFDO0NBQ0Y7QUFFaUI7Ozs7Ozs7Ozs7OztBQ25IbEIscUI7Ozs7Ozs7Ozs7O0FDQUEsb0I7Ozs7Ozs7Ozs7O0FDQUEsMkIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xuaW1wb3J0IHsgU2tldGNoIH0gZnJvbSBcIi4vc2tldGNoXCI7XG5cbmNvbnN0IHNrZXRjaCA9IG5ldyBTa2V0Y2goKTtcbm5ldyBwNSgocDogcDUpID0+IHNrZXRjaC5ydW4ocCkpO1xuIiwiY29uc3QgZnJlcVRvTm90ZSA9IChmcmVxOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgNjkgKyAxMiAqIE1hdGgubG9nMihmcmVxIC8gNDQwKTtcblxuY29uc3Qgbm90ZVRvRnJlcSA9IChub3RlOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgNDQwICogTWF0aC5wb3coMiwgKG5vdGUgLSA2OSkgLyAxMik7XG5cbmNvbnN0IGRpZmYgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIgPT4gMTIwMCAqIE1hdGgubG9nMihiIC8gYSk7XG5cbmNvbnN0IG5vdGVzOiBzdHJpbmdbXSA9IFtcbiAgXCJBXCIsIC8vIDIxXG4gIFwiQuKZrVwiLCAvLyAyMlxuICBcIkJcIiwgLy8gMjNcbiAgXCJDXCIsIC8vIDI0XG4gIFwiQ+KZr1wiLCAvLyAyNVxuICBcIkRcIiwgLy8gMjZcbiAgXCJE4pmvXCIsIC8vIDI3XG4gIFwiRVwiLCAvLyAyOFxuICBcIkZcIiwgLy8gMjlcbiAgXCJG4pmvXCIsIC8vIDMwXG4gIFwiR1wiLCAvLyAzMVxuICBcIkfima9cIiwgLy8gMzJcbl07XG5jb25zdCBub3RlTmFtZSA9IChub3RlOiBudW1iZXIpOiBzdHJpbmcgPT4gbm90ZXNbKG5vdGUgLSAyMSkgJSAxMl07XG5cbmV4cG9ydCB7IGZyZXFUb05vdGUsIG5vdGVUb0ZyZXEsIGRpZmYsIG5vdGVOYW1lIH07XG4iLCJpbXBvcnQgcDUsIHsgQXVkaW9JbiB9IGZyb20gXCJwNVwiO1xuaW1wb3J0IFwicDUvbGliL2FkZG9ucy9wNS5zb3VuZFwiO1xuaW1wb3J0IFwibWw1XCI7XG5cbmltcG9ydCAqIGFzIG5vdGVzIGZyb20gXCJub3Rlc1wiO1xuXG5jb25zdCBNT0RFTF9VUkwgPVxuICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9tbDVqcy9tbDUtZGF0YS1hbmQtbW9kZWxzL21vZGVscy9waXRjaC1kZXRlY3Rpb24vY3JlcGUvXCI7XG5cbmNvbnN0IGJhbmRXaWR0aDogbnVtYmVyID0gMTAwO1xuXG5jbGFzcyBTa2V0Y2gge1xuICBwcml2YXRlIHA/OiBwNTtcbiAgcHJpdmF0ZSBwaXRjaDogYW55O1xuICBwcml2YXRlIGN1cnJlbnRQaXRjaDogbnVtYmVyID0gNDQwO1xuXG4gIHNldHVwKCkge1xuICAgIGlmICh0aGlzLnAgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBcIlRoaXMgY2FuJ3QgYmUgcnVuIHdpdGhvdXQgcCBzZXQgdXBcIjtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIENhbnZhcy4gQ2hyb21lIG5lZWRzIHVzZXIgYWN0aW9uIGJlZm9yZSBpdCdzIGFibGUgdG8gc3RhcnQgdGhlIGNvbnRleHQuXG4gICAgLy8gVE9ETzogU2l6ZSBuZWVkcyB0byBiZSBwYXJhbWV0ZXJpemVkLiBIb3cgY2FuIHA1IGNoYW5nZSBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemU/XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMucC5jcmVhdGVDYW52YXMoNzEwLCA0MDk2KTtcbiAgICBjYW52YXMubW91c2VDbGlja2VkKCgpID0+IHtcbiAgICAgIC8vIEVuYWJsZSB0aGUgQXVkaW9Db250ZXh0IHRvIGJ5cGFzcyB0aGUgQ2hyb21lIHNlY3VyaXR5LlxuICAgICAgbGV0IGN0eDogQXVkaW9Db250ZXh0ID0gdGhpcy5nZXRBdWRpb0NvbnRleHQoKTtcbiAgICAgIGN0eC5yZXN1bWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucC5ub0ZpbGwoKTtcblxuICAgIGNvbnN0IG1pYyA9IG5ldyBwNS5BdWRpb0luKCk7XG4gICAgbWljLnN0YXJ0KGFzeW5jIChhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgdGhpcy5waXRjaCA9IGF3YWl0IG1sNS5waXRjaERldGVjdGlvbihcbiAgICAgICAgTU9ERUxfVVJMLFxuICAgICAgICB0aGlzLmdldEF1ZGlvQ29udGV4dCgpLFxuICAgICAgICBtaWMuc3RyZWFtXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZHJhdygpIHtcbiAgICBjb25zdCBiYXNlRnJlcSA9IDI3LjU7IC8vIEluaXRpYWwgZnJlcXVlbmN5IG9mIDIxXG4gICAgY29uc3QgaW50ZXJjZXB0ID0gTWF0aC5wb3coYmFzZUZyZXEsIDIpO1xuXG4gICAgaWYgKHRoaXMucCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IFwiVGhpcyBjYW4ndCBiZSBydW4gd2l0aG91dCBwIHNldCB1cFwiO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5waXRjaD8ucnVubmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnAuZmlsbCgwKTtcbiAgICB0aGlzLnAuc3Ryb2tlKDApO1xuXG4gICAgY29uc3QgcnAgPSBhd2FpdCB0aGlzLnBpdGNoLmdldFBpdGNoKCk7XG4gICAgY29uc3QgZnJlcTogbnVtYmVyID0gcnAgPz8gdGhpcy5jdXJyZW50UGl0Y2g7XG5cbiAgICB0aGlzLnAuYmFja2dyb3VuZCgyNTUpO1xuXG4gICAgY29uc3Qgbm90ZTogbnVtYmVyID0gbm90ZXMuZnJlcVRvTm90ZShmcmVxKTtcbiAgICBjb25zdCBtaWRpTm90ZTogbnVtYmVyID0gTWF0aC5yb3VuZChub3RlKTtcbiAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBub3Rlcy5ub3RlTmFtZShtaWRpTm90ZSk7XG4gICAgY29uc3QgcmVmRnJlcSA9IG5vdGVzLm5vdGVUb0ZyZXEobWlkaU5vdGUpOyAvLyBIZXJ6IHZhbHVlIG9mIHRoZSBnaXZlbiBub3RlXG4gICAgY29uc3QgZDogbnVtYmVyID0gbm90ZXMuZGlmZihmcmVxLCByZWZGcmVxKTtcblxuICAgIGNvbnNvbGUubG9nKG5vdGUsIG5vdGUgLSAyMSwgKG5vdGUgLSAyMSkgKiBiYW5kV2lkdGgpO1xuICAgIHRoaXMucC5zdHJva2UoMTAwKTtcbiAgICB0aGlzLnAubGluZShcbiAgICAgIDAsXG4gICAgICAobm90ZSAtIDIxKSAqIGJhbmRXaWR0aCxcbiAgICAgIHRoaXMucC53aWR0aCxcbiAgICAgIChub3RlIC0gMjEpICogYmFuZFdpZHRoXG4gICAgKTtcblxuICAgIC8vIHRoaXMucC5saW5lKDAsIDEwMCwgdGhpcy5wLndpZHRoLCAxMDApO1xuICAgIHRoaXMuc2NhbGUodGhpcy5wKTtcblxuICAgIC8vIC8vIERyYXcgcmVmZXJlbmNlIGxpbmUuXG4gICAgLy8gdGhpcy5wLnN0cm9rZSgwLCAwLCAyNTUpO1xuICAgIC8vIHRoaXMucC5saW5lKDAsIHJlZkZyZXEsIHRoaXMucC53aWR0aCwgcmVmRnJlcSk7XG4gICAgdGhpcy5jdXJyZW50UGl0Y2ggPSBmcmVxO1xuXG4gICAgdGhpcy5wLnRleHRTaXplKDIwKTtcbiAgICB0aGlzLnAudGV4dChcbiAgICAgIGAke2ZyZXEudG9GaXhlZCgyKX0gJHtuYW1lfSAke2QudG9GaXhlZCgyKX1gLFxuICAgICAgMTAsXG4gICAgICAobm90ZSAtIDIxKSAqIGJhbmRXaWR0aCAtIDVcbiAgICApO1xuICB9XG5cbiAgc2NhbGUocDogcDUpIHtcbiAgICBwLnN0cm9rZSgyMDApO1xuXG4gICAgZm9yIChsZXQgaSA9IDIxOyBpIDw9IDEwODsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gKGkgLSAyMSkgKiBiYW5kV2lkdGg7XG4gICAgICBwLmxpbmUoNTAsIHksIHAud2lkdGgsIHkpO1xuICAgICAgcC50ZXh0KGAke25vdGVzLm5vdGVOYW1lKGkpfWAsIDAsIHkgKyA1KTtcbiAgICB9XG4gIH1cblxuICBydW4ocDogcDUpIHtcbiAgICB0aGlzLnAgPSBwO1xuICAgIHAuc2V0dXAgPSAoKSA9PiB0aGlzLnNldHVwKCk7XG4gICAgcC5kcmF3ID0gKCkgPT4gdGhpcy5kcmF3KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1ZGlvQ29udGV4dCgpOiBBdWRpb0NvbnRleHQge1xuICAgIC8vIGdldEF1ZGlvQ29udGV4dCBpcyBub3QgZGVmaW5lZCBpbiBwNSB0eXBlcy5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHRoaXMucD8uZ2V0QXVkaW9Db250ZXh0KCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2tldGNoIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1sNTsiLCJtb2R1bGUuZXhwb3J0cyA9IHA1OyIsIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkOyJdLCJzb3VyY2VSb290IjoiIn0=