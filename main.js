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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ub3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGl0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NrZXRjaC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtbDVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVmaW5lZFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb0I7QUFDYztBQUVsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLDhDQUFNLEVBQUUsQ0FBQztBQUM1QixJQUFJLHlDQUFFLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLE1B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RUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsa0RBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxvREFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFLO1FBQ1AsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sZUFBZTs7UUFDckIsOENBQThDO1FBQzlDLGFBQWE7UUFDYixhQUFPLElBQUksQ0FBQyxDQUFDLDBDQUFFLGVBQWUsR0FBRztJQUNuQyxDQUFDO0NBQ0Y7QUFFaUI7Ozs7Ozs7Ozs7OztBQzVHbEIscUI7Ozs7Ozs7Ozs7O0FDQUEsb0I7Ozs7Ozs7Ozs7O0FDQUEsMkIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xuaW1wb3J0IHsgU2tldGNoIH0gZnJvbSBcIi4vc2tldGNoXCI7XG5cbmNvbnN0IHNrZXRjaCA9IG5ldyBTa2V0Y2goKTtcbm5ldyBwNSgocDogcDUpID0+IHNrZXRjaC5ydW4ocCkpO1xuIiwiY29uc3Qgbm90ZXM6IHN0cmluZ1tdID0gW1xuICBcIkFcIiwgLy8gMjFcbiAgXCJC4pmtXCIsIC8vIDIyXG4gIFwiQlwiLCAvLyAyM1xuICBcIkNcIiwgLy8gMjRcbiAgXCJD4pmvXCIsIC8vIDI1XG4gIFwiRFwiLCAvLyAyNlxuICBcIkTima9cIiwgLy8gMjdcbiAgXCJFXCIsIC8vIDI4XG4gIFwiRlwiLCAvLyAyOVxuICBcIkbima9cIiwgLy8gMzBcbiAgXCJHXCIsIC8vIDMxXG4gIFwiR+KZr1wiLCAvLyAzMlxuXTtcbmNvbnN0IG5hbWUgPSAobm90ZTogbnVtYmVyKTogc3RyaW5nID0+IG5vdGVzWyhub3RlIC0gMjEpICUgMTJdO1xuY29uc3Qgb2N0YXZlID0gKG5vdGU6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKG5vdGUgLyAxMiAtIDEpO1xuXG5jb25zdCBub3RlVG9GcmVxID0gKG5vdGU6IG51bWJlcik6IG51bWJlciA9PlxuICA0NDAgKiBNYXRoLnBvdygyLCAobm90ZSAtIDY5KSAvIDEyKTtcblxuY29uc3QgZnJlcVRvTm90ZSA9IChmcmVxOiBudW1iZXIpOiBudW1iZXIgPT4gNjkgKyAxMiAqIE1hdGgubG9nMihmcmVxIC8gNDQwKTtcblxuY29uc3QgZGlmZiA9IChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciA9PiAxMjAwICogTWF0aC5sb2cyKGIgLyBhKTtcblxuY2xhc3MgTm90ZSB7XG4gIHJlYWRvbmx5IGZyZXF1ZW5jeTogbnVtYmVyO1xuICByZWFkb25seSBub3RlOiBudW1iZXI7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgb2N0YXZlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZnJlcTogbnVtYmVyKSB7XG4gICAgdGhpcy5ub3RlID0gTWF0aC5yb3VuZChmcmVxVG9Ob3RlKF9mcmVxKSk7XG5cbiAgICB0aGlzLmZyZXF1ZW5jeSA9IG5vdGVUb0ZyZXEodGhpcy5ub3RlKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lKHRoaXMubm90ZSk7XG4gICAgdGhpcy5vY3RhdmUgPSBvY3RhdmUodGhpcy5ub3RlKTtcbiAgfVxufVxuXG50eXBlIFJlc3VsdCA9IHtcbiAgdGFyZ2V0OiBOb3RlO1xuICBub3RlOiBudW1iZXI7XG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xuICBkaWZmOiBudW1iZXI7XG59O1xuXG5jb25zdCBub3RlID0gKGZyZXE6IG51bWJlcik6IFJlc3VsdCA9PiB7XG4gIGNvbnN0IG4gPSBuZXcgTm90ZShmcmVxKTtcbiAgcmV0dXJuIHtcbiAgICBmcmVxdWVuY3k6IGZyZXEsXG4gICAgdGFyZ2V0OiBuLFxuICAgIG5vdGU6IGZyZXFUb05vdGUoZnJlcSksXG4gICAgZGlmZjogZGlmZihuLmZyZXF1ZW5jeSwgZnJlcSksXG4gIH07XG59O1xuXG5leHBvcnQgeyBuYW1lLCBvY3RhdmUsIG5vdGUgfTtcbiIsImltcG9ydCBcIm1sNVwiO1xuXG5jb25zdCBNT0RFTF9VUkwgPVxuICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9tbDVqcy9tbDUtZGF0YS1hbmQtbW9kZWxzL21vZGVscy9waXRjaC1kZXRlY3Rpb24vY3JlcGUvXCI7XG5cbmZ1bmN0aW9uKiBwaXRjaERldGVjdGlvbihcbiAgY3R4OiBBdWRpb0NvbnRleHQsXG4gIHN0cmVhbTogTWVkaWFTdHJlYW0gfCBudWxsXG4pOiBHZW5lcmF0b3I8bnVtYmVyLCBhbnksIG51bWJlcj4ge1xuICBsZXQgcGl0Y2hEZXRlY3Rpb246IGFueSA9IG1sNS5waXRjaERldGVjdGlvbihNT0RFTF9VUkwsIGN0eCwgc3RyZWFtKTtcblxuICBsZXQgcmVzdWx0OiBudW1iZXIgPSAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmICghcGl0Y2hEZXRlY3Rpb24pIGNvbnRpbnVlO1xuICAgIHBpdGNoRGV0ZWN0aW9uLmdldFBpdGNoKCkudGhlbigocDogbnVtYmVyKSA9PiAocmVzdWx0ID0gcCkpO1xuICAgIHlpZWxkIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgeyBwaXRjaERldGVjdGlvbiB9O1xuIiwiaW1wb3J0IHA1LCB7IEF1ZGlvSW4gfSBmcm9tIFwicDVcIjtcbmltcG9ydCBcInA1L2xpYi9hZGRvbnMvcDUuc291bmRcIjtcblxuaW1wb3J0IHsgbm90ZSwgbmFtZSwgb2N0YXZlIH0gZnJvbSBcIm5vdGVzXCI7XG5pbXBvcnQgeyBwaXRjaERldGVjdGlvbiB9IGZyb20gXCIuL3BpdGNoXCI7XG5cbmNvbnN0IGJhbmRXaWR0aDogbnVtYmVyID0gODA7XG5jb25zdCByYW5nZTogbnVtYmVyID0gMzsgLy8gwrEgaGFsZnN0ZXBzXG5cbmNsYXNzIFNrZXRjaCB7XG4gIHByaXZhdGUgcD86IHA1O1xuICBwcml2YXRlIGN1cnJlbnRQaXRjaDogbnVtYmVyID0gNDQwO1xuICBwcml2YXRlIGNlbnRlcjogbnVtYmVyID0gNDg7XG4gIHByaXZhdGUgcGl0Y2hHZW5lcmF0b3I/OiBHZW5lcmF0b3I8bnVtYmVyLCBhbnksIG51bWJlcj47XG5cbiAgc2V0dXAoKSB7XG4gICAgaWYgKHRoaXMucCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IFwiVGhpcyBjYW4ndCBiZSBydW4gd2l0aG91dCBwIHNldCB1cFwiO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgQ2FudmFzLiBDaHJvbWUgbmVlZHMgdXNlciBhY3Rpb24gYmVmb3JlIGl0J3MgYWJsZSB0byBzdGFydCB0aGUgY29udGV4dC5cbiAgICAvLyBUT0RPOiBTaXplIG5lZWRzIHRvIGJlIHBhcmFtZXRlcml6ZWQuIEhvdyBjYW4gcDUgY2hhbmdlIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZT9cbiAgICBsZXQgY2FudmFzID0gdGhpcy5wLmNyZWF0ZUNhbnZhcyg4MDAsICgyICogcmFuZ2UgKyAxKSAqIGJhbmRXaWR0aCk7XG4gICAgY2FudmFzLm1vdXNlQ2xpY2tlZCgoKSA9PiB7XG4gICAgICAvLyBFbmFibGUgdGhlIEF1ZGlvQ29udGV4dCB0byBieXBhc3MgdGhlIENocm9tZSBzZWN1cml0eS5cbiAgICAgIGxldCBjdHg6IEF1ZGlvQ29udGV4dCA9IHRoaXMuZ2V0QXVkaW9Db250ZXh0KCk7XG4gICAgICBjdHgucmVzdW1lKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnAubm9GaWxsKCk7XG5cbiAgICBjb25zdCBtaWMgPSBuZXcgcDUuQXVkaW9JbigpO1xuICAgIG1pYy5zdGFydCgoYXJnczogYW55W10pID0+IHtcbiAgICAgIHRoaXMucGl0Y2hHZW5lcmF0b3IgPSBwaXRjaERldGVjdGlvbih0aGlzLmdldEF1ZGlvQ29udGV4dCgpLCBtaWMuc3RyZWFtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMucCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IFwiVGhpcyBjYW4ndCBiZSBydW4gd2l0aG91dCBwIHNldCB1cFwiO1xuICAgIH1cblxuICAgIGNvbnN0IHJwID0gdGhpcy5waXRjaEdlbmVyYXRvcj8ubmV4dCgpO1xuICAgIGlmICghcnApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmcmVxOiBudW1iZXIgPSBycC52YWx1ZSA/PyB0aGlzLmN1cnJlbnRQaXRjaDtcbiAgICBjb25zdCBuZXdOb3RlID0gbm90ZShmcmVxKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY2VudGVyXG4gICAgaWYgKHJwLnZhbHVlICYmIE1hdGguYWJzKG5ld05vdGUudGFyZ2V0Lm5vdGUgLSB0aGlzLmNlbnRlcikgPj0gcmFuZ2UpIHtcbiAgICAgIHRoaXMuY2VudGVyID0gbmV3Tm90ZS50YXJnZXQubm90ZTtcbiAgICB9XG5cbiAgICB0aGlzLnAuZmlsbCgwKTtcbiAgICB0aGlzLnAuYmFja2dyb3VuZCgyNTUpO1xuICAgIHRoaXMucC50cmFuc2xhdGUoXG4gICAgICAwLFxuICAgICAgLSh0aGlzLmNlbnRlciAtIHJhbmdlIC0gMjEpICogYmFuZFdpZHRoICsgYmFuZFdpZHRoICogMC41XG4gICAgKTtcblxuICAgIHRoaXMuc2NhbGUodGhpcy5wLCB0aGlzLmNlbnRlciAtIHJhbmdlLCB0aGlzLmNlbnRlciArIHJhbmdlKTtcblxuICAgIC8vIERyYXcgdGhlIHBpdGNoIGxpbmUuXG4gICAgdGhpcy5wLnN0cm9rZSgyNTUsIDAsIDApO1xuICAgIGNvbnN0IGxpbmVZID0gKG5ld05vdGUubm90ZSAtIDIxKSAqIGJhbmRXaWR0aDtcbiAgICB0aGlzLnAubGluZSgwLCBsaW5lWSwgdGhpcy5wLndpZHRoLCBsaW5lWSk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbm90ZS5cbiAgICB0aGlzLnAuc3Ryb2tlKDApO1xuICAgIHRoaXMucC5maWxsKDApO1xuICAgIHRoaXMucC50ZXh0U2l6ZSgxMCk7XG4gICAgdGhpcy5wLnRleHQoXG4gICAgICBgJHtmcmVxLnRvRml4ZWQoMil9ICR7bmV3Tm90ZS50YXJnZXQubmFtZX0ke1xuICAgICAgICBuZXdOb3RlLnRhcmdldC5vY3RhdmVcbiAgICAgIH0gJHtuZXdOb3RlLmRpZmYudG9GaXhlZCgyKX1gLFxuICAgICAgMTAsXG4gICAgICAobmV3Tm90ZS5ub3RlIC0gMjEpICogYmFuZFdpZHRoIC0gNVxuICAgICk7XG5cbiAgICB0aGlzLmN1cnJlbnRQaXRjaCA9IGZyZXE7XG4gIH1cblxuICBzY2FsZShwOiBwNSwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XG4gICAgcC50ZXh0U2l6ZSgxMCk7XG4gICAgcC5zdHJva2UoMjIwKTtcblxuICAgIGZvciAobGV0IGkgPSBmcm9tOyBpIDw9IHRvOyBpKyspIHtcbiAgICAgIGNvbnN0IHkgPSAoaSAtIDIxKSAqIGJhbmRXaWR0aDtcbiAgICAgIHAubGluZSg4MCwgeSwgcC53aWR0aCwgeSk7XG4gICAgICBwLnRleHQoYCR7bmFtZShpKX0ke29jdGF2ZShpKX1gLCAwLCB5KTtcbiAgICB9XG4gIH1cblxuICBydW4ocDogcDUpIHtcbiAgICB0aGlzLnAgPSBwO1xuICAgIHAuc2V0dXAgPSAoKSA9PiB0aGlzLnNldHVwKCk7XG4gICAgcC5kcmF3ID0gKCkgPT4gdGhpcy5kcmF3KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1ZGlvQ29udGV4dCgpOiBBdWRpb0NvbnRleHQge1xuICAgIC8vIGdldEF1ZGlvQ29udGV4dCBpcyBub3QgZGVmaW5lZCBpbiBwNSB0eXBlcy5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHRoaXMucD8uZ2V0QXVkaW9Db250ZXh0KCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2tldGNoIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1sNTsiLCJtb2R1bGUuZXhwb3J0cyA9IHA1OyIsIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkOyJdLCJzb3VyY2VSb290IjoiIn0=