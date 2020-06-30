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
/*! exports provided: name, octave, note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "octave", function() { return octave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "note", function() { return note; });
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
const name = (note) => notes[(note - 21) % 12];
const octave = (note) => Math.floor(note / 12 - 1);
const noteToFreq = (note) => 440 * Math.pow(2, (note - 69) / 12);
const freqToNote = (freq) => 69 + 12 * Math.log2(freq / 440);
const diff = (a, b) => 1200 * Math.log2(b / a);
class Note {
    constructor(_freq) {
        this._freq = _freq;
        this.note = Math.round(freqToNote(_freq));
        this.frequency = noteToFreq(this.note);
        this.name = name(this.note);
        this.octave = octave(this.note);
    }
}
const note = (freq) => {
    const n = new Note(freq);
    return {
        frequency: freq,
        target: n,
        note: freqToNote(freq),
        diff: diff(n.frequency, freq),
    };
};



/***/ }),

/***/ "./src/pitch.ts":
/*!**********************!*\
  !*** ./src/pitch.ts ***!
  \**********************/
/*! exports provided: pitchDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pitchDetection", function() { return pitchDetection; });
/* harmony import */ var ml5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml5 */ "ml5");
/* harmony import */ var ml5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ml5__WEBPACK_IMPORTED_MODULE_0__);

const MODEL_URL = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
function* pitchDetection(ctx, stream) {
    let pitchDetection = ml5.pitchDetection(MODEL_URL, ctx, stream);
    let result = 0;
    while (true) {
        if (!pitchDetection)
            continue;
        pitchDetection.getPitch().then((p) => (result = p));
        yield result;
    }
}



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
/* harmony import */ var notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notes */ "./src/notes.ts");
/* harmony import */ var _pitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pitch */ "./src/pitch.ts");




const bandWidth = 80;
const range = 3; // ± halfsteps
class Sketch {
    constructor() {
        this.currentPitch = 440;
        this.center = 48;
    }
    setup() {
        if (this.p == undefined) {
            throw "This can't be run without p set up";
        }
        // Prepare Canvas. Chrome needs user action before it's able to start the context.
        // TODO: Size needs to be parameterized. How can p5 change based on the screen size?
        let canvas = this.p.createCanvas(800, (2 * range + 1) * bandWidth);
        canvas.mouseClicked(() => {
            // Enable the AudioContext to bypass the Chrome security.
            let ctx = this.getAudioContext();
            ctx.resume();
        });
        this.p.noFill();
        const mic = new p5__WEBPACK_IMPORTED_MODULE_0___default.a.AudioIn();
        mic.start((args) => {
            this.pitchGenerator = Object(_pitch__WEBPACK_IMPORTED_MODULE_3__["pitchDetection"])(this.getAudioContext(), mic.stream);
        });
    }
    async draw() {
        var _a, _b;
        if (this.p == undefined) {
            throw "This can't be run without p set up";
        }
        const rp = (_a = this.pitchGenerator) === null || _a === void 0 ? void 0 : _a.next();
        if (!rp) {
            return;
        }
        const freq = (_b = rp.value) !== null && _b !== void 0 ? _b : this.currentPitch;
        const newNote = Object(notes__WEBPACK_IMPORTED_MODULE_2__["note"])(freq);
        console.log(newNote);
        // Update the center
        if (rp.value && Math.abs(newNote.target.note - this.center) >= range) {
            this.center = newNote.target.note;
        }
        this.p.fill(0);
        this.p.background(255);
        this.p.translate(0, -(this.center - range - 21) * bandWidth + bandWidth * 0.5);
        this.scale(this.p, this.center - range, this.center + range);
        // Draw the pitch line.
        this.p.stroke(255, 0, 0);
        const lineY = (newNote.note - 21) * bandWidth;
        this.p.line(0, lineY, this.p.width, lineY);
        // Write the note.
        this.p.stroke(0);
        this.p.fill(0);
        this.p.textSize(10);
        this.p.text(`${freq.toFixed(2)} ${newNote.target.name}${newNote.target.octave} ${newNote.diff.toFixed(2)}`, 10, (newNote.note - 21) * bandWidth - 5);
        this.currentPitch = freq;
    }
    scale(p, from, to) {
        p.textSize(10);
        p.stroke(220);
        for (let i = from; i <= to; i++) {
            const y = (i - 21) * bandWidth;
            p.line(80, y, p.width, y);
            p.text(`${Object(notes__WEBPACK_IMPORTED_MODULE_2__["name"])(i)}${Object(notes__WEBPACK_IMPORTED_MODULE_2__["octave"])(i)}`, 0, y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ub3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGl0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NrZXRjaC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtbDVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVmaW5lZFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb0I7QUFDYztBQUVsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLDhDQUFNLEVBQUUsQ0FBQztBQUM1QixJQUFJLHlDQUFFLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLE1B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U0FBUyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxrREFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLG9EQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUs7UUFDUCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxlQUFlOztRQUNyQiw4Q0FBOEM7UUFDOUMsYUFBYTtRQUNiLGFBQU8sSUFBSSxDQUFDLENBQUMsMENBQUUsZUFBZSxHQUFHO0lBQ25DLENBQUM7Q0FDRjtBQUVpQjs7Ozs7Ozs7Ozs7O0FDN0dsQixxQjs7Ozs7Ozs7Ozs7QUNBQSxvQjs7Ozs7Ozs7Ozs7QUNBQSwyQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgcDUgZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBTa2V0Y2ggfSBmcm9tIFwiLi9za2V0Y2hcIjtcblxuY29uc3Qgc2tldGNoID0gbmV3IFNrZXRjaCgpO1xubmV3IHA1KChwOiBwNSkgPT4gc2tldGNoLnJ1bihwKSk7XG4iLCJjb25zdCBub3Rlczogc3RyaW5nW10gPSBbXG4gIFwiQVwiLCAvLyAyMVxuICBcIkLima1cIiwgLy8gMjJcbiAgXCJCXCIsIC8vIDIzXG4gIFwiQ1wiLCAvLyAyNFxuICBcIkPima9cIiwgLy8gMjVcbiAgXCJEXCIsIC8vIDI2XG4gIFwiROKZr1wiLCAvLyAyN1xuICBcIkVcIiwgLy8gMjhcbiAgXCJGXCIsIC8vIDI5XG4gIFwiRuKZr1wiLCAvLyAzMFxuICBcIkdcIiwgLy8gMzFcbiAgXCJH4pmvXCIsIC8vIDMyXG5dO1xuY29uc3QgbmFtZSA9IChub3RlOiBudW1iZXIpOiBzdHJpbmcgPT4gbm90ZXNbKG5vdGUgLSAyMSkgJSAxMl07XG5jb25zdCBvY3RhdmUgPSAobm90ZTogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguZmxvb3Iobm90ZSAvIDEyIC0gMSk7XG5cbmNvbnN0IG5vdGVUb0ZyZXEgPSAobm90ZTogbnVtYmVyKTogbnVtYmVyID0+XG4gIDQ0MCAqIE1hdGgucG93KDIsIChub3RlIC0gNjkpIC8gMTIpO1xuXG5jb25zdCBmcmVxVG9Ob3RlID0gKGZyZXE6IG51bWJlcik6IG51bWJlciA9PiA2OSArIDEyICogTWF0aC5sb2cyKGZyZXEgLyA0NDApO1xuXG5jb25zdCBkaWZmID0gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IDEyMDAgKiBNYXRoLmxvZzIoYiAvIGEpO1xuXG5jbGFzcyBOb3RlIHtcbiAgcmVhZG9ubHkgZnJlcXVlbmN5OiBudW1iZXI7XG4gIHJlYWRvbmx5IG5vdGU6IG51bWJlcjtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBvY3RhdmU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9mcmVxOiBudW1iZXIpIHtcbiAgICB0aGlzLm5vdGUgPSBNYXRoLnJvdW5kKGZyZXFUb05vdGUoX2ZyZXEpKTtcblxuICAgIHRoaXMuZnJlcXVlbmN5ID0gbm90ZVRvRnJlcSh0aGlzLm5vdGUpO1xuICAgIHRoaXMubmFtZSA9IG5hbWUodGhpcy5ub3RlKTtcbiAgICB0aGlzLm9jdGF2ZSA9IG9jdGF2ZSh0aGlzLm5vdGUpO1xuICB9XG59XG5cbnR5cGUgUmVzdWx0ID0ge1xuICB0YXJnZXQ6IE5vdGU7XG4gIG5vdGU6IG51bWJlcjtcbiAgZnJlcXVlbmN5OiBudW1iZXI7XG4gIGRpZmY6IG51bWJlcjtcbn07XG5cbmNvbnN0IG5vdGUgPSAoZnJlcTogbnVtYmVyKTogUmVzdWx0ID0+IHtcbiAgY29uc3QgbiA9IG5ldyBOb3RlKGZyZXEpO1xuICByZXR1cm4ge1xuICAgIGZyZXF1ZW5jeTogZnJlcSxcbiAgICB0YXJnZXQ6IG4sXG4gICAgbm90ZTogZnJlcVRvTm90ZShmcmVxKSxcbiAgICBkaWZmOiBkaWZmKG4uZnJlcXVlbmN5LCBmcmVxKSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG5hbWUsIG9jdGF2ZSwgbm90ZSB9O1xuIiwiaW1wb3J0IFwibWw1XCI7XG5cbmNvbnN0IE1PREVMX1VSTCA9XG4gIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL21sNWpzL21sNS1kYXRhLWFuZC1tb2RlbHMvbW9kZWxzL3BpdGNoLWRldGVjdGlvbi9jcmVwZS9cIjtcblxuZnVuY3Rpb24qIHBpdGNoRGV0ZWN0aW9uKFxuICBjdHg6IEF1ZGlvQ29udGV4dCxcbiAgc3RyZWFtOiBNZWRpYVN0cmVhbSB8IG51bGxcbik6IEdlbmVyYXRvcjxudW1iZXIsIGFueSwgbnVtYmVyPiB7XG4gIGxldCBwaXRjaERldGVjdGlvbjogYW55ID0gbWw1LnBpdGNoRGV0ZWN0aW9uKE1PREVMX1VSTCwgY3R4LCBzdHJlYW0pO1xuXG4gIGxldCByZXN1bHQ6IG51bWJlciA9IDA7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKCFwaXRjaERldGVjdGlvbikgY29udGludWU7XG4gICAgcGl0Y2hEZXRlY3Rpb24uZ2V0UGl0Y2goKS50aGVuKChwOiBudW1iZXIpID0+IChyZXN1bHQgPSBwKSk7XG4gICAgeWllbGQgcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB7IHBpdGNoRGV0ZWN0aW9uIH07XG4iLCJpbXBvcnQgcDUsIHsgQXVkaW9JbiB9IGZyb20gXCJwNVwiO1xuaW1wb3J0IFwicDUvbGliL2FkZG9ucy9wNS5zb3VuZFwiO1xuXG5pbXBvcnQgeyBub3RlLCBuYW1lLCBvY3RhdmUgfSBmcm9tIFwibm90ZXNcIjtcbmltcG9ydCB7IHBpdGNoRGV0ZWN0aW9uIH0gZnJvbSBcIi4vcGl0Y2hcIjtcblxuY29uc3QgYmFuZFdpZHRoOiBudW1iZXIgPSA4MDtcbmNvbnN0IHJhbmdlOiBudW1iZXIgPSAzOyAvLyDCsSBoYWxmc3RlcHNcblxuY2xhc3MgU2tldGNoIHtcbiAgcHJpdmF0ZSBwPzogcDU7XG4gIHByaXZhdGUgY3VycmVudFBpdGNoOiBudW1iZXIgPSA0NDA7XG4gIHByaXZhdGUgY2VudGVyOiBudW1iZXIgPSA0ODtcbiAgcHJpdmF0ZSBwaXRjaEdlbmVyYXRvcj86IEdlbmVyYXRvcjxudW1iZXIsIGFueSwgbnVtYmVyPjtcblxuICBzZXR1cCgpIHtcbiAgICBpZiAodGhpcy5wID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgXCJUaGlzIGNhbid0IGJlIHJ1biB3aXRob3V0IHAgc2V0IHVwXCI7XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSBDYW52YXMuIENocm9tZSBuZWVkcyB1c2VyIGFjdGlvbiBiZWZvcmUgaXQncyBhYmxlIHRvIHN0YXJ0IHRoZSBjb250ZXh0LlxuICAgIC8vIFRPRE86IFNpemUgbmVlZHMgdG8gYmUgcGFyYW1ldGVyaXplZC4gSG93IGNhbiBwNSBjaGFuZ2UgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplP1xuICAgIGxldCBjYW52YXMgPSB0aGlzLnAuY3JlYXRlQ2FudmFzKDgwMCwgKDIgKiByYW5nZSArIDEpICogYmFuZFdpZHRoKTtcbiAgICBjYW52YXMubW91c2VDbGlja2VkKCgpID0+IHtcbiAgICAgIC8vIEVuYWJsZSB0aGUgQXVkaW9Db250ZXh0IHRvIGJ5cGFzcyB0aGUgQ2hyb21lIHNlY3VyaXR5LlxuICAgICAgbGV0IGN0eDogQXVkaW9Db250ZXh0ID0gdGhpcy5nZXRBdWRpb0NvbnRleHQoKTtcbiAgICAgIGN0eC5yZXN1bWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucC5ub0ZpbGwoKTtcblxuICAgIGNvbnN0IG1pYyA9IG5ldyBwNS5BdWRpb0luKCk7XG4gICAgbWljLnN0YXJ0KChhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgdGhpcy5waXRjaEdlbmVyYXRvciA9IHBpdGNoRGV0ZWN0aW9uKHRoaXMuZ2V0QXVkaW9Db250ZXh0KCksIG1pYy5zdHJlYW0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZHJhdygpIHtcbiAgICBpZiAodGhpcy5wID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgXCJUaGlzIGNhbid0IGJlIHJ1biB3aXRob3V0IHAgc2V0IHVwXCI7XG4gICAgfVxuXG4gICAgY29uc3QgcnAgPSB0aGlzLnBpdGNoR2VuZXJhdG9yPy5uZXh0KCk7XG4gICAgaWYgKCFycCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZyZXE6IG51bWJlciA9IHJwLnZhbHVlID8/IHRoaXMuY3VycmVudFBpdGNoO1xuICAgIGNvbnN0IG5ld05vdGUgPSBub3RlKGZyZXEpO1xuICAgIGNvbnNvbGUubG9nKG5ld05vdGUpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSB0aGUgY2VudGVyXG4gICAgaWYgKHJwLnZhbHVlICYmIE1hdGguYWJzKG5ld05vdGUudGFyZ2V0Lm5vdGUgLSB0aGlzLmNlbnRlcikgPj0gcmFuZ2UpIHtcbiAgICAgIHRoaXMuY2VudGVyID0gbmV3Tm90ZS50YXJnZXQubm90ZTtcbiAgICB9XG5cbiAgICB0aGlzLnAuZmlsbCgwKTtcbiAgICB0aGlzLnAuYmFja2dyb3VuZCgyNTUpO1xuICAgIHRoaXMucC50cmFuc2xhdGUoXG4gICAgICAwLFxuICAgICAgLSh0aGlzLmNlbnRlciAtIHJhbmdlIC0gMjEpICogYmFuZFdpZHRoICsgYmFuZFdpZHRoICogMC41XG4gICAgKTtcblxuICAgIHRoaXMuc2NhbGUodGhpcy5wLCB0aGlzLmNlbnRlciAtIHJhbmdlLCB0aGlzLmNlbnRlciArIHJhbmdlKTtcblxuICAgIC8vIERyYXcgdGhlIHBpdGNoIGxpbmUuXG4gICAgdGhpcy5wLnN0cm9rZSgyNTUsIDAsIDApO1xuICAgIGNvbnN0IGxpbmVZID0gKG5ld05vdGUubm90ZSAtIDIxKSAqIGJhbmRXaWR0aDtcbiAgICB0aGlzLnAubGluZSgwLCBsaW5lWSwgdGhpcy5wLndpZHRoLCBsaW5lWSk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbm90ZS5cbiAgICB0aGlzLnAuc3Ryb2tlKDApO1xuICAgIHRoaXMucC5maWxsKDApO1xuICAgIHRoaXMucC50ZXh0U2l6ZSgxMCk7XG4gICAgdGhpcy5wLnRleHQoXG4gICAgICBgJHtmcmVxLnRvRml4ZWQoMil9ICR7bmV3Tm90ZS50YXJnZXQubmFtZX0ke1xuICAgICAgICBuZXdOb3RlLnRhcmdldC5vY3RhdmVcbiAgICAgIH0gJHtuZXdOb3RlLmRpZmYudG9GaXhlZCgyKX1gLFxuICAgICAgMTAsXG4gICAgICAobmV3Tm90ZS5ub3RlIC0gMjEpICogYmFuZFdpZHRoIC0gNVxuICAgICk7XG5cbiAgICB0aGlzLmN1cnJlbnRQaXRjaCA9IGZyZXE7XG4gIH1cblxuICBzY2FsZShwOiBwNSwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XG4gICAgcC50ZXh0U2l6ZSgxMCk7XG4gICAgcC5zdHJva2UoMjIwKTtcblxuICAgIGZvciAobGV0IGkgPSBmcm9tOyBpIDw9IHRvOyBpKyspIHtcbiAgICAgIGNvbnN0IHkgPSAoaSAtIDIxKSAqIGJhbmRXaWR0aDtcbiAgICAgIHAubGluZSg4MCwgeSwgcC53aWR0aCwgeSk7XG4gICAgICBwLnRleHQoYCR7bmFtZShpKX0ke29jdGF2ZShpKX1gLCAwLCB5KTtcbiAgICB9XG4gIH1cblxuICBydW4ocDogcDUpIHtcbiAgICB0aGlzLnAgPSBwO1xuICAgIHAuc2V0dXAgPSAoKSA9PiB0aGlzLnNldHVwKCk7XG4gICAgcC5kcmF3ID0gKCkgPT4gdGhpcy5kcmF3KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1ZGlvQ29udGV4dCgpOiBBdWRpb0NvbnRleHQge1xuICAgIC8vIGdldEF1ZGlvQ29udGV4dCBpcyBub3QgZGVmaW5lZCBpbiBwNSB0eXBlcy5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHRoaXMucD8uZ2V0QXVkaW9Db250ZXh0KCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2tldGNoIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1sNTsiLCJtb2R1bGUuZXhwb3J0cyA9IHA1OyIsIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkOyJdLCJzb3VyY2VSb290IjoiIn0=