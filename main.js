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
        this.p.textSize(20);
        this.p.text(`${freq.toFixed(2)} ${name} ${d.toFixed(2)}`, 10, 30);
        // Draw reference line.
        this.p.color(0, 0, 255);
        this.p.line(0, this.currentPitch, this.p.width, this.currentPitch);
        this.p.stroke(196);
        this.p.line(0, refFreq, this.p.width, refFreq);
        this.currentPitch = freq;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ub3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1sNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInA1XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5kZWZpbmVkXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUNjO0FBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksOENBQU0sRUFBRSxDQUFDO0FBQzVCLElBQUkseUNBQUUsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMs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LENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBSztRQUNQLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLGVBQWU7O1FBQ3JCLDhDQUE4QztRQUM5QyxhQUFhO1FBQ2IsYUFBTyxJQUFJLENBQUMsQ0FBQywwQ0FBRSxlQUFlLEdBQUc7SUFDbkMsQ0FBQztDQUNGO0FBRWlCOzs7Ozs7Ozs7Ozs7QUN0RmxCLHFCOzs7Ozs7Ozs7OztBQ0FBLG9COzs7Ozs7Ozs7OztBQ0FBLDJCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBwNSBmcm9tIFwicDVcIjtcbmltcG9ydCB7IFNrZXRjaCB9IGZyb20gXCIuL3NrZXRjaFwiO1xuXG5jb25zdCBza2V0Y2ggPSBuZXcgU2tldGNoKCk7XG5uZXcgcDUoKHA6IHA1KSA9PiBza2V0Y2gucnVuKHApKTtcbiIsImNvbnN0IGZyZXFUb05vdGUgPSAoZnJlcTogbnVtYmVyKTogbnVtYmVyID0+XG4gIE1hdGgucm91bmQoNjkgKyAxMiAqIE1hdGgubG9nMihmcmVxIC8gNDQwKSk7XG5cbmNvbnN0IG5vdGVUb0ZyZXEgPSAobm90ZTogbnVtYmVyKTogbnVtYmVyID0+XG4gIDQ0MCAqIE1hdGgucG93KDIsIChub3RlIC0gNjkpIC8gMTIpO1xuXG5jb25zdCBkaWZmID0gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IDEyMDAgKiBNYXRoLmxvZzIoYiAvIGEpO1xuXG5jb25zdCBub3Rlczogc3RyaW5nW10gPSBbXG4gIFwiQVwiLCAvLyAyMVxuICBcIkLima1cIiwgLy8gMjJcbiAgXCJCXCIsIC8vIDIzXG4gIFwiQ1wiLCAvLyAyNFxuICBcIkPima9cIiwgLy8gMjVcbiAgXCJEXCIsIC8vIDI2XG4gIFwiROKZr1wiLCAvLyAyN1xuICBcIkVcIiwgLy8gMjhcbiAgXCJGXCIsIC8vIDI5XG4gIFwiRuKZr1wiLCAvLyAzMFxuICBcIkdcIiwgLy8gMzFcbiAgXCJH4pmvXCIsIC8vIDMyXG5dO1xuY29uc3Qgbm90ZU5hbWUgPSAobm90ZTogbnVtYmVyKTogc3RyaW5nID0+IG5vdGVzWyhub3RlIC0gMjEpICUgMTJdO1xuXG5leHBvcnQgeyBmcmVxVG9Ob3RlLCBub3RlVG9GcmVxLCBkaWZmLCBub3RlTmFtZSB9O1xuIiwiaW1wb3J0IHA1LCB7IEF1ZGlvSW4gfSBmcm9tIFwicDVcIjtcbmltcG9ydCBcInA1L2xpYi9hZGRvbnMvcDUuc291bmRcIjtcbmltcG9ydCBcIm1sNVwiO1xuXG5pbXBvcnQgKiBhcyBub3RlcyBmcm9tIFwibm90ZXNcIjtcblxuY29uc3QgTU9ERUxfVVJMID1cbiAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbWw1anMvbWw1LWRhdGEtYW5kLW1vZGVscy9tb2RlbHMvcGl0Y2gtZGV0ZWN0aW9uL2NyZXBlL1wiO1xuXG5jbGFzcyBTa2V0Y2gge1xuICBwcml2YXRlIHA/OiBwNTtcbiAgcHJpdmF0ZSBwaXRjaDogYW55O1xuICBwcml2YXRlIGN1cnJlbnRQaXRjaDogbnVtYmVyID0gNDQwO1xuXG4gIHNldHVwKCkge1xuICAgIGlmICh0aGlzLnAgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBcIlRoaXMgY2FuJ3QgYmUgcnVuIHdpdGhvdXQgcCBzZXQgdXBcIjtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIENhbnZhcy4gQ2hyb21lIG5lZWRzIHVzZXIgYWN0aW9uIGJlZm9yZSBpdCdzIGFibGUgdG8gc3RhcnQgdGhlIGNvbnRleHQuXG4gICAgLy8gVE9ETzogU2l6ZSBuZWVkcyB0byBiZSBwYXJhbWV0ZXJpemVkLiBIb3cgY2FuIHA1IGNoYW5nZSBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemU/XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMucC5jcmVhdGVDYW52YXMoNzEwLCAxMDI0KTtcbiAgICBjYW52YXMubW91c2VDbGlja2VkKCgpID0+IHtcbiAgICAgIC8vIEVuYWJsZSB0aGUgQXVkaW9Db250ZXh0IHRvIGJ5cGFzcyB0aGUgQ2hyb21lIHNlY3VyaXR5LlxuICAgICAgbGV0IGN0eDogQXVkaW9Db250ZXh0ID0gdGhpcy5nZXRBdWRpb0NvbnRleHQoKTtcbiAgICAgIGN0eC5yZXN1bWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucC5ub0ZpbGwoKTtcblxuICAgIGNvbnN0IG1pYyA9IG5ldyBwNS5BdWRpb0luKCk7XG4gICAgbWljLnN0YXJ0KGFzeW5jIChhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgdGhpcy5waXRjaCA9IGF3YWl0IG1sNS5waXRjaERldGVjdGlvbihcbiAgICAgICAgTU9ERUxfVVJMLFxuICAgICAgICB0aGlzLmdldEF1ZGlvQ29udGV4dCgpLFxuICAgICAgICBtaWMuc3RyZWFtXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZHJhdygpIHtcbiAgICBpZiAodGhpcy5wID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgXCJUaGlzIGNhbid0IGJlIHJ1biB3aXRob3V0IHAgc2V0IHVwXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnBpdGNoPy5ydW5uaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucC5maWxsKDApO1xuICAgIHRoaXMucC5zdHJva2UoMCk7XG5cbiAgICBjb25zdCBycCA9IGF3YWl0IHRoaXMucGl0Y2guZ2V0UGl0Y2goKTtcbiAgICBjb25zdCBmcmVxOiBudW1iZXIgPSBycCB8fCB0aGlzLmN1cnJlbnRQaXRjaDtcblxuICAgIHRoaXMucC5iYWNrZ3JvdW5kKDI1NSk7XG5cbiAgICBjb25zdCBub3RlOiBudW1iZXIgPSBub3Rlcy5mcmVxVG9Ob3RlKGZyZXEpO1xuICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IG5vdGVzLm5vdGVOYW1lKG5vdGUpO1xuICAgIGNvbnN0IHJlZkZyZXEgPSBub3Rlcy5ub3RlVG9GcmVxKG5vdGUpOyAvLyBIZXJ6IHZhbHVlIG9mIHRoZSBnaXZlbiBub3RlXG4gICAgY29uc3QgZDogbnVtYmVyID0gbm90ZXMuZGlmZihmcmVxLCByZWZGcmVxKTtcblxuICAgIHRoaXMucC50ZXh0U2l6ZSgyMCk7XG4gICAgdGhpcy5wLnRleHQoYCR7ZnJlcS50b0ZpeGVkKDIpfSAke25hbWV9ICR7ZC50b0ZpeGVkKDIpfWAsIDEwLCAzMCk7XG5cbiAgICAvLyBEcmF3IHJlZmVyZW5jZSBsaW5lLlxuICAgIHRoaXMucC5jb2xvcigwLCAwLCAyNTUpO1xuICAgIHRoaXMucC5saW5lKDAsIHRoaXMuY3VycmVudFBpdGNoLCB0aGlzLnAud2lkdGgsIHRoaXMuY3VycmVudFBpdGNoKTtcblxuICAgIHRoaXMucC5zdHJva2UoMTk2KTtcbiAgICB0aGlzLnAubGluZSgwLCByZWZGcmVxLCB0aGlzLnAud2lkdGgsIHJlZkZyZXEpO1xuICAgIHRoaXMuY3VycmVudFBpdGNoID0gZnJlcTtcbiAgfVxuXG4gIHJ1bihwOiBwNSkge1xuICAgIHRoaXMucCA9IHA7XG4gICAgcC5zZXR1cCA9ICgpID0+IHRoaXMuc2V0dXAoKTtcbiAgICBwLmRyYXcgPSAoKSA9PiB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXVkaW9Db250ZXh0KCk6IEF1ZGlvQ29udGV4dCB7XG4gICAgLy8gZ2V0QXVkaW9Db250ZXh0IGlzIG5vdCBkZWZpbmVkIGluIHA1IHR5cGVzLlxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gdGhpcy5wPy5nZXRBdWRpb0NvbnRleHQoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTa2V0Y2ggfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbWw1OyIsIm1vZHVsZS5leHBvcnRzID0gcDU7IiwibW9kdWxlLmV4cG9ydHMgPSB1bmRlZmluZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==