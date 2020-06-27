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
const freqToNote = (freq) => Math.round(69 + 12 * Math.log2(freq / 440));
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
        let canvas = this.p.createCanvas(710, 1024);
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
        if (this.p == undefined) {
            throw "This can't be run without p set up";
        }
        if (!((_a = this.pitch) === null || _a === void 0 ? void 0 : _a.running)) {
            return;
        }
        this.p.fill(0);
        this.p.stroke(0);
        const rp = await this.pitch.getPitch();
        const freq = rp || this.currentPitch;
        this.p.background(255);
        const note = notes__WEBPACK_IMPORTED_MODULE_3__["freqToNote"](freq);
        const name = notes__WEBPACK_IMPORTED_MODULE_3__["noteName"](note);
        const refFreq = notes__WEBPACK_IMPORTED_MODULE_3__["noteToFreq"](note); // Herz value of the given note
        const d = notes__WEBPACK_IMPORTED_MODULE_3__["diff"](freq, refFreq);
        this.p.stroke(0, 0, 255);
        this.p.line(0, this.currentPitch, this.p.width, this.currentPitch);
        this.scale(this.p);
        // Draw reference line.
        this.p.stroke(0, 0, 255);
        this.p.line(0, refFreq, this.p.width, refFreq);
        this.currentPitch = freq;
        this.p.textSize(20);
        this.p.text(`${freq.toFixed(2)} ${name} ${d.toFixed(2)}`, 10, this.currentPitch - 5);
    }
    scale(p) {
        p.stroke(200);
        const multiplier = Math.pow(2, 1 / 12);
        let freq = 27.5;
        for (let i = 21; i <= 108; i++) {
            p.line(0, freq, p.width, freq);
            freq *= multiplier;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ub3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1sNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInA1XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5kZWZpbmVkXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUNjO0FBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksOENBQU0sRUFBRSxDQUFDO0FBQzVCLElBQUkseUNBQUUsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMs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LENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV2RixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQUs7UUFDVCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksSUFBSSxVQUFVLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUs7UUFDUCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxlQUFlOztRQUNyQiw4Q0FBOEM7UUFDOUMsYUFBYTtRQUNiLGFBQU8sSUFBSSxDQUFDLENBQUMsMENBQUUsZUFBZSxHQUFHO0lBQ25DLENBQUM7Q0FDRjtBQUVpQjs7Ozs7Ozs7Ozs7O0FDdEdsQixxQjs7Ozs7Ozs7Ozs7QUNBQSxvQjs7Ozs7Ozs7Ozs7QUNBQSwyQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgcDUgZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBTa2V0Y2ggfSBmcm9tIFwiLi9za2V0Y2hcIjtcblxuY29uc3Qgc2tldGNoID0gbmV3IFNrZXRjaCgpO1xubmV3IHA1KChwOiBwNSkgPT4gc2tldGNoLnJ1bihwKSk7XG4iLCJjb25zdCBmcmVxVG9Ob3RlID0gKGZyZXE6IG51bWJlcik6IG51bWJlciA9PlxuICBNYXRoLnJvdW5kKDY5ICsgMTIgKiBNYXRoLmxvZzIoZnJlcSAvIDQ0MCkpO1xuXG5jb25zdCBub3RlVG9GcmVxID0gKG5vdGU6IG51bWJlcik6IG51bWJlciA9PlxuICA0NDAgKiBNYXRoLnBvdygyLCAobm90ZSAtIDY5KSAvIDEyKTtcblxuY29uc3QgZGlmZiA9IChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciA9PiAxMjAwICogTWF0aC5sb2cyKGIgLyBhKTtcblxuY29uc3Qgbm90ZXM6IHN0cmluZ1tdID0gW1xuICBcIkFcIiwgLy8gMjFcbiAgXCJC4pmtXCIsIC8vIDIyXG4gIFwiQlwiLCAvLyAyM1xuICBcIkNcIiwgLy8gMjRcbiAgXCJD4pmvXCIsIC8vIDI1XG4gIFwiRFwiLCAvLyAyNlxuICBcIkTima9cIiwgLy8gMjdcbiAgXCJFXCIsIC8vIDI4XG4gIFwiRlwiLCAvLyAyOVxuICBcIkbima9cIiwgLy8gMzBcbiAgXCJHXCIsIC8vIDMxXG4gIFwiR+KZr1wiLCAvLyAzMlxuXTtcbmNvbnN0IG5vdGVOYW1lID0gKG5vdGU6IG51bWJlcik6IHN0cmluZyA9PiBub3Rlc1sobm90ZSAtIDIxKSAlIDEyXTtcblxuZXhwb3J0IHsgZnJlcVRvTm90ZSwgbm90ZVRvRnJlcSwgZGlmZiwgbm90ZU5hbWUgfTtcbiIsImltcG9ydCBwNSwgeyBBdWRpb0luIH0gZnJvbSBcInA1XCI7XG5pbXBvcnQgXCJwNS9saWIvYWRkb25zL3A1LnNvdW5kXCI7XG5pbXBvcnQgXCJtbDVcIjtcblxuaW1wb3J0ICogYXMgbm90ZXMgZnJvbSBcIm5vdGVzXCI7XG5cbmNvbnN0IE1PREVMX1VSTCA9XG4gIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL21sNWpzL21sNS1kYXRhLWFuZC1tb2RlbHMvbW9kZWxzL3BpdGNoLWRldGVjdGlvbi9jcmVwZS9cIjtcblxuY2xhc3MgU2tldGNoIHtcbiAgcHJpdmF0ZSBwPzogcDU7XG4gIHByaXZhdGUgcGl0Y2g6IGFueTtcbiAgcHJpdmF0ZSBjdXJyZW50UGl0Y2g6IG51bWJlciA9IDQ0MDtcblxuICBzZXR1cCgpIHtcbiAgICBpZiAodGhpcy5wID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgXCJUaGlzIGNhbid0IGJlIHJ1biB3aXRob3V0IHAgc2V0IHVwXCI7XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSBDYW52YXMuIENocm9tZSBuZWVkcyB1c2VyIGFjdGlvbiBiZWZvcmUgaXQncyBhYmxlIHRvIHN0YXJ0IHRoZSBjb250ZXh0LlxuICAgIC8vIFRPRE86IFNpemUgbmVlZHMgdG8gYmUgcGFyYW1ldGVyaXplZC4gSG93IGNhbiBwNSBjaGFuZ2UgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplP1xuICAgIGxldCBjYW52YXMgPSB0aGlzLnAuY3JlYXRlQ2FudmFzKDcxMCwgMTAyNCk7XG4gICAgY2FudmFzLm1vdXNlQ2xpY2tlZCgoKSA9PiB7XG4gICAgICAvLyBFbmFibGUgdGhlIEF1ZGlvQ29udGV4dCB0byBieXBhc3MgdGhlIENocm9tZSBzZWN1cml0eS5cbiAgICAgIGxldCBjdHg6IEF1ZGlvQ29udGV4dCA9IHRoaXMuZ2V0QXVkaW9Db250ZXh0KCk7XG4gICAgICBjdHgucmVzdW1lKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnAubm9GaWxsKCk7XG5cbiAgICBjb25zdCBtaWMgPSBuZXcgcDUuQXVkaW9JbigpO1xuICAgIG1pYy5zdGFydChhc3luYyAoYXJnczogYW55W10pID0+IHtcbiAgICAgIHRoaXMucGl0Y2ggPSBhd2FpdCBtbDUucGl0Y2hEZXRlY3Rpb24oXG4gICAgICAgIE1PREVMX1VSTCxcbiAgICAgICAgdGhpcy5nZXRBdWRpb0NvbnRleHQoKSxcbiAgICAgICAgbWljLnN0cmVhbVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMucCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IFwiVGhpcyBjYW4ndCBiZSBydW4gd2l0aG91dCBwIHNldCB1cFwiO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5waXRjaD8ucnVubmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnAuZmlsbCgwKTtcbiAgICB0aGlzLnAuc3Ryb2tlKDApO1xuXG4gICAgY29uc3QgcnAgPSBhd2FpdCB0aGlzLnBpdGNoLmdldFBpdGNoKCk7XG4gICAgY29uc3QgZnJlcTogbnVtYmVyID0gcnAgfHwgdGhpcy5jdXJyZW50UGl0Y2g7XG5cbiAgICB0aGlzLnAuYmFja2dyb3VuZCgyNTUpO1xuXG4gICAgY29uc3Qgbm90ZTogbnVtYmVyID0gbm90ZXMuZnJlcVRvTm90ZShmcmVxKTtcbiAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBub3Rlcy5ub3RlTmFtZShub3RlKTtcbiAgICBjb25zdCByZWZGcmVxID0gbm90ZXMubm90ZVRvRnJlcShub3RlKTsgLy8gSGVyeiB2YWx1ZSBvZiB0aGUgZ2l2ZW4gbm90ZVxuICAgIGNvbnN0IGQ6IG51bWJlciA9IG5vdGVzLmRpZmYoZnJlcSwgcmVmRnJlcSk7XG5cblxuICAgIHRoaXMucC5zdHJva2UoMCwgMCwgMjU1KTtcbiAgICB0aGlzLnAubGluZSgwLCB0aGlzLmN1cnJlbnRQaXRjaCwgdGhpcy5wLndpZHRoLCB0aGlzLmN1cnJlbnRQaXRjaCk7XG5cbiAgICB0aGlzLnNjYWxlKHRoaXMucCk7XG5cbiAgICAvLyBEcmF3IHJlZmVyZW5jZSBsaW5lLlxuICAgIHRoaXMucC5zdHJva2UoMCwgMCwgMjU1KTtcbiAgICB0aGlzLnAubGluZSgwLCByZWZGcmVxLCB0aGlzLnAud2lkdGgsIHJlZkZyZXEpO1xuICAgIHRoaXMuY3VycmVudFBpdGNoID0gZnJlcTtcblxuICAgIHRoaXMucC50ZXh0U2l6ZSgyMCk7XG4gICAgdGhpcy5wLnRleHQoYCR7ZnJlcS50b0ZpeGVkKDIpfSAke25hbWV9ICR7ZC50b0ZpeGVkKDIpfWAsIDEwLCB0aGlzLmN1cnJlbnRQaXRjaCAtIDUpO1xuXG4gIH1cblxuICBzY2FsZShwOiBwNSkge1xuICAgIHAuc3Ryb2tlKDIwMCk7XG5cbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMiwgMSAvIDEyKTtcbiAgICBsZXQgZnJlcSA9IDI3LjU7XG5cbiAgICBmb3IgKGxldCBpID0gMjE7IGkgPD0gMTA4OyBpKyspIHtcbiAgICAgIHAubGluZSgwLCBmcmVxLCBwLndpZHRoLCBmcmVxKTtcbiAgICAgIGZyZXEgKj0gbXVsdGlwbGllcjtcbiAgICB9XG4gIH1cblxuICBydW4ocDogcDUpIHtcbiAgICB0aGlzLnAgPSBwO1xuICAgIHAuc2V0dXAgPSAoKSA9PiB0aGlzLnNldHVwKCk7XG4gICAgcC5kcmF3ID0gKCkgPT4gdGhpcy5kcmF3KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1ZGlvQ29udGV4dCgpOiBBdWRpb0NvbnRleHQge1xuICAgIC8vIGdldEF1ZGlvQ29udGV4dCBpcyBub3QgZGVmaW5lZCBpbiBwNSB0eXBlcy5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHRoaXMucD8uZ2V0QXVkaW9Db250ZXh0KCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2tldGNoIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1sNTsiLCJtb2R1bGUuZXhwb3J0cyA9IHA1OyIsIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkOyJdLCJzb3VyY2VSb290IjoiIn0=