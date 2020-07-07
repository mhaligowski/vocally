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
var __await = (undefined && undefined.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (undefined && undefined.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

const MODEL_URL = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
function pitchDetection(ctx, stream) {
    return __asyncGenerator(this, arguments, function* pitchDetection_1() {
        const pitchDetection = ml5.pitchDetection(MODEL_URL, ctx, stream);
        console.log("Created pitch detection.", pitchDetection);
        yield __await(pitchDetection.ready);
        console.log("Initialized the model.");
        let result = 0;
        while (true) {
            yield yield __await(pitchDetection.getPitch());
        }
    });
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
/* harmony import */ var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5/lib/addons/p5.sound */ "p5/lib/addons/p5.sound");
/* harmony import */ var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notes */ "./src/notes.ts");
/* harmony import */ var _pitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pitch */ "./src/pitch.ts");



const bandWidth = 80;
const range = 3; // ± halfsteps
class Sketch {
    constructor() {
        this.currentPitch = 440;
        this.center = 48;
        this.ctx = new AudioContext();
    }
    async setup() {
        if (this.p == undefined) {
            throw "This can't be run without p set up";
        }
        // Prepare Canvas. Chrome needs user action before it's able to start the context.
        // TODO: Size needs to be parameterized. How can p5 change based on the screen size?
        let canvas = this.p.createCanvas(800, (2 * range + 1) * bandWidth);
        canvas.mouseClicked(() => {
            // Enable the AudioContext to bypass the Chrome security.
            if (this.ctx.state == "suspended") {
                console.log("Resuming audio context");
                this.ctx.resume();
            }
        });
        this.p.noFill();
        console.log("Creating microphone");
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
        });
        this.ctx.createMediaStreamSource(stream);
        this.pitchGenerator = Object(_pitch__WEBPACK_IMPORTED_MODULE_2__["pitchDetection"])(this.ctx, stream);
    }
    async draw() {
        var _a, _b;
        if (this.p == undefined) {
            throw "This can't be run without p set up";
        }
        if (this.ctx.state != "running") {
            return;
        }
        const rp = await ((_a = this.pitchGenerator) === null || _a === void 0 ? void 0 : _a.next());
        if (!rp) {
            return;
        }
        const freq = (_b = rp.value) !== null && _b !== void 0 ? _b : this.currentPitch;
        const newNote = Object(notes__WEBPACK_IMPORTED_MODULE_1__["note"])(freq);
        // Update the center
        if (rp.value && Math.abs(newNote.target.note - this.center) >= range) {
            this.center = newNote.target.note;
        }
        this.p.fill(0);
        this.p.background(255);
        this.p.translate(0, -(this.center - range - 21) * bandWidth + bandWidth * 0.5);
        this.scale(this.p, this.center - range, this.center + range);
        // Draw the pitch line.
        this.p.fill(0);
        this.p.stroke(255, 0, 0);
        this.p.strokeWeight(1);
        const lineY = (newNote.note - 21) * bandWidth;
        this.p.line(0, lineY, this.p.width, lineY);
        // Write the note.
        this.p.stroke(0);
        this.p.strokeWeight(0);
        this.p.fill(0);
        this.p.textSize(10);
        this.p.text(`${freq.toFixed(2)} ${newNote.target.name}${newNote.target.octave} ${newNote.diff.toFixed(2)}`, 80, (newNote.note - 21) * bandWidth - 5);
        this.p.resetMatrix();
        this.debug(this.p);
        this.currentPitch = freq;
    }
    scale(p, from, to) {
        p.textSize(10);
        p.fill(0);
        for (let i = from; i <= to; i++) {
            const y = (i - 21) * bandWidth;
            p.strokeWeight(1);
            p.stroke(220);
            p.line(80, y, p.width, y);
            p.strokeWeight(0);
            p.stroke(0);
            p.text(`${Object(notes__WEBPACK_IMPORTED_MODULE_1__["name"])(i)}${Object(notes__WEBPACK_IMPORTED_MODULE_1__["octave"])(i)}`, 0, y);
        }
    }
    debug(p) {
        p.textSize(10);
        p.strokeWeight(1);
        p.fill(255);
        p.color(0);
        p.rect(p.width * 0.5, 20, p.width * 0.5, 55);
        p.fill(0);
        p.strokeWeight(0);
        p.text("debug info", p.width * 0.5 + 10, 45);
    }
    run(p) {
        this.p = p;
        p.setup = () => this.setup();
        p.draw = () => this.draw();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ub3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGl0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NrZXRjaC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtbDVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVmaW5lZFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb0I7QUFDYztBQUVsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLDhDQUFNLEVBQUUsQ0FBQztBQUM1QixJQUFJLHlDQUFFLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLE1B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QyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUs7UUFDUCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQUVpQjs7Ozs7Ozs7Ozs7O0FDdElsQixxQjs7Ozs7Ozs7Ozs7QUNBQSxvQjs7Ozs7Ozs7Ozs7QUNBQSwyQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgcDUgZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBTa2V0Y2ggfSBmcm9tIFwiLi9za2V0Y2hcIjtcblxuY29uc3Qgc2tldGNoID0gbmV3IFNrZXRjaCgpO1xubmV3IHA1KChwOiBwNSkgPT4gc2tldGNoLnJ1bihwKSk7XG4iLCJjb25zdCBub3Rlczogc3RyaW5nW10gPSBbXG4gIFwiQVwiLCAvLyAyMVxuICBcIkLima1cIiwgLy8gMjJcbiAgXCJCXCIsIC8vIDIzXG4gIFwiQ1wiLCAvLyAyNFxuICBcIkPima9cIiwgLy8gMjVcbiAgXCJEXCIsIC8vIDI2XG4gIFwiROKZr1wiLCAvLyAyN1xuICBcIkVcIiwgLy8gMjhcbiAgXCJGXCIsIC8vIDI5XG4gIFwiRuKZr1wiLCAvLyAzMFxuICBcIkdcIiwgLy8gMzFcbiAgXCJH4pmvXCIsIC8vIDMyXG5dO1xuY29uc3QgbmFtZSA9IChub3RlOiBudW1iZXIpOiBzdHJpbmcgPT4gbm90ZXNbKG5vdGUgLSAyMSkgJSAxMl07XG5jb25zdCBvY3RhdmUgPSAobm90ZTogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguZmxvb3Iobm90ZSAvIDEyIC0gMSk7XG5cbmNvbnN0IG5vdGVUb0ZyZXEgPSAobm90ZTogbnVtYmVyKTogbnVtYmVyID0+XG4gIDQ0MCAqIE1hdGgucG93KDIsIChub3RlIC0gNjkpIC8gMTIpO1xuXG5jb25zdCBmcmVxVG9Ob3RlID0gKGZyZXE6IG51bWJlcik6IG51bWJlciA9PiA2OSArIDEyICogTWF0aC5sb2cyKGZyZXEgLyA0NDApO1xuXG5jb25zdCBkaWZmID0gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IDEyMDAgKiBNYXRoLmxvZzIoYiAvIGEpO1xuXG5jbGFzcyBOb3RlIHtcbiAgcmVhZG9ubHkgZnJlcXVlbmN5OiBudW1iZXI7XG4gIHJlYWRvbmx5IG5vdGU6IG51bWJlcjtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBvY3RhdmU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9mcmVxOiBudW1iZXIpIHtcbiAgICB0aGlzLm5vdGUgPSBNYXRoLnJvdW5kKGZyZXFUb05vdGUoX2ZyZXEpKTtcblxuICAgIHRoaXMuZnJlcXVlbmN5ID0gbm90ZVRvRnJlcSh0aGlzLm5vdGUpO1xuICAgIHRoaXMubmFtZSA9IG5hbWUodGhpcy5ub3RlKTtcbiAgICB0aGlzLm9jdGF2ZSA9IG9jdGF2ZSh0aGlzLm5vdGUpO1xuICB9XG59XG5cbnR5cGUgUmVzdWx0ID0ge1xuICB0YXJnZXQ6IE5vdGU7XG4gIG5vdGU6IG51bWJlcjtcbiAgZnJlcXVlbmN5OiBudW1iZXI7XG4gIGRpZmY6IG51bWJlcjtcbn07XG5cbmNvbnN0IG5vdGUgPSAoZnJlcTogbnVtYmVyKTogUmVzdWx0ID0+IHtcbiAgY29uc3QgbiA9IG5ldyBOb3RlKGZyZXEpO1xuICByZXR1cm4ge1xuICAgIGZyZXF1ZW5jeTogZnJlcSxcbiAgICB0YXJnZXQ6IG4sXG4gICAgbm90ZTogZnJlcVRvTm90ZShmcmVxKSxcbiAgICBkaWZmOiBkaWZmKG4uZnJlcXVlbmN5LCBmcmVxKSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG5hbWUsIG9jdGF2ZSwgbm90ZSB9O1xuIiwiaW1wb3J0IFwibWw1XCI7XG5cbmNvbnN0IE1PREVMX1VSTCA9XG4gIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL21sNWpzL21sNS1kYXRhLWFuZC1tb2RlbHMvbW9kZWxzL3BpdGNoLWRldGVjdGlvbi9jcmVwZS9cIjtcblxuYXN5bmMgZnVuY3Rpb24qIHBpdGNoRGV0ZWN0aW9uKFxuICBjdHg6IEF1ZGlvQ29udGV4dCxcbiAgc3RyZWFtOiBNZWRpYVN0cmVhbVxuKTogQXN5bmNHZW5lcmF0b3I8bnVtYmVyLCBhbnksIG51bWJlcj4ge1xuICBjb25zdCBwaXRjaERldGVjdGlvbjogYW55ID0gbWw1LnBpdGNoRGV0ZWN0aW9uKE1PREVMX1VSTCwgY3R4LCBzdHJlYW0pO1xuICBjb25zb2xlLmxvZyhcIkNyZWF0ZWQgcGl0Y2ggZGV0ZWN0aW9uLlwiLCBwaXRjaERldGVjdGlvbik7XG5cbiAgYXdhaXQgcGl0Y2hEZXRlY3Rpb24ucmVhZHk7XG4gIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6ZWQgdGhlIG1vZGVsLlwiKTtcblxuICBsZXQgcmVzdWx0OiBudW1iZXIgPSAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIHBpdGNoRGV0ZWN0aW9uLmdldFBpdGNoKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcGl0Y2hEZXRlY3Rpb24gfTtcbiIsImltcG9ydCBwNSwgeyBBdWRpb0luIH0gZnJvbSBcInA1XCI7XG5pbXBvcnQgXCJwNS9saWIvYWRkb25zL3A1LnNvdW5kXCI7XG5cbmltcG9ydCB7IG5vdGUsIG5hbWUsIG9jdGF2ZSB9IGZyb20gXCJub3Rlc1wiO1xuaW1wb3J0IHsgcGl0Y2hEZXRlY3Rpb24gfSBmcm9tIFwiLi9waXRjaFwiO1xuXG5jb25zdCBiYW5kV2lkdGg6IG51bWJlciA9IDgwO1xuY29uc3QgcmFuZ2U6IG51bWJlciA9IDM7IC8vIMKxIGhhbGZzdGVwc1xuXG5jbGFzcyBTa2V0Y2gge1xuICBwcml2YXRlIHA/OiBwNTtcbiAgcHJpdmF0ZSBjdXJyZW50UGl0Y2g6IG51bWJlciA9IDQ0MDtcbiAgcHJpdmF0ZSBjZW50ZXI6IG51bWJlciA9IDQ4O1xuICBwcml2YXRlIHBpdGNoR2VuZXJhdG9yPzogQXN5bmNHZW5lcmF0b3I8bnVtYmVyLCBhbnksIG51bWJlcj47XG4gIHByaXZhdGUgY3R4OiBBdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgYXN5bmMgc2V0dXAoKSB7XG4gICAgaWYgKHRoaXMucCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IFwiVGhpcyBjYW4ndCBiZSBydW4gd2l0aG91dCBwIHNldCB1cFwiO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgQ2FudmFzLiBDaHJvbWUgbmVlZHMgdXNlciBhY3Rpb24gYmVmb3JlIGl0J3MgYWJsZSB0byBzdGFydCB0aGUgY29udGV4dC5cbiAgICAvLyBUT0RPOiBTaXplIG5lZWRzIHRvIGJlIHBhcmFtZXRlcml6ZWQuIEhvdyBjYW4gcDUgY2hhbmdlIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZT9cbiAgICBsZXQgY2FudmFzID0gdGhpcy5wLmNyZWF0ZUNhbnZhcyg4MDAsICgyICogcmFuZ2UgKyAxKSAqIGJhbmRXaWR0aCk7XG4gICAgY2FudmFzLm1vdXNlQ2xpY2tlZCgoKSA9PiB7XG4gICAgICAvLyBFbmFibGUgdGhlIEF1ZGlvQ29udGV4dCB0byBieXBhc3MgdGhlIENocm9tZSBzZWN1cml0eS5cbiAgICAgIGlmICh0aGlzLmN0eC5zdGF0ZSA9PSBcInN1c3BlbmRlZFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdW1pbmcgYXVkaW8gY29udGV4dFwiKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnAubm9GaWxsKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIG1pY3JvcGhvbmVcIik7XG4gICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgYXVkaW86IHRydWUsXG4gICAgICB2aWRlbzogZmFsc2UsXG4gICAgfSk7XG4gICAgdGhpcy5jdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcbiAgICB0aGlzLnBpdGNoR2VuZXJhdG9yID0gcGl0Y2hEZXRlY3Rpb24odGhpcy5jdHgsIHN0cmVhbSk7XG4gIH1cblxuICBhc3luYyBkcmF3KCkge1xuICAgIGlmICh0aGlzLnAgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBcIlRoaXMgY2FuJ3QgYmUgcnVuIHdpdGhvdXQgcCBzZXQgdXBcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdHguc3RhdGUgIT0gXCJydW5uaW5nXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBycCA9IGF3YWl0IHRoaXMucGl0Y2hHZW5lcmF0b3I/Lm5leHQoKTtcbiAgICBpZiAoIXJwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnJlcTogbnVtYmVyID0gcnAudmFsdWUgPz8gdGhpcy5jdXJyZW50UGl0Y2g7XG4gICAgY29uc3QgbmV3Tm90ZSA9IG5vdGUoZnJlcSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNlbnRlclxuICAgIGlmIChycC52YWx1ZSAmJiBNYXRoLmFicyhuZXdOb3RlLnRhcmdldC5ub3RlIC0gdGhpcy5jZW50ZXIpID49IHJhbmdlKSB7XG4gICAgICB0aGlzLmNlbnRlciA9IG5ld05vdGUudGFyZ2V0Lm5vdGU7XG4gICAgfVxuXG4gICAgdGhpcy5wLmZpbGwoMCk7XG4gICAgdGhpcy5wLmJhY2tncm91bmQoMjU1KTtcbiAgICB0aGlzLnAudHJhbnNsYXRlKFxuICAgICAgMCxcbiAgICAgIC0odGhpcy5jZW50ZXIgLSByYW5nZSAtIDIxKSAqIGJhbmRXaWR0aCArIGJhbmRXaWR0aCAqIDAuNVxuICAgICk7XG5cbiAgICB0aGlzLnNjYWxlKHRoaXMucCwgdGhpcy5jZW50ZXIgLSByYW5nZSwgdGhpcy5jZW50ZXIgKyByYW5nZSk7XG5cbiAgICAvLyBEcmF3IHRoZSBwaXRjaCBsaW5lLlxuICAgIHRoaXMucC5maWxsKDApO1xuICAgIHRoaXMucC5zdHJva2UoMjU1LCAwLCAwKTtcbiAgICB0aGlzLnAuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgIGNvbnN0IGxpbmVZID0gKG5ld05vdGUubm90ZSAtIDIxKSAqIGJhbmRXaWR0aDtcbiAgICB0aGlzLnAubGluZSgwLCBsaW5lWSwgdGhpcy5wLndpZHRoLCBsaW5lWSk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbm90ZS5cbiAgICB0aGlzLnAuc3Ryb2tlKDApO1xuICAgIHRoaXMucC5zdHJva2VXZWlnaHQoMCk7XG4gICAgdGhpcy5wLmZpbGwoMCk7XG4gICAgdGhpcy5wLnRleHRTaXplKDEwKTtcbiAgICB0aGlzLnAudGV4dChcbiAgICAgIGAke2ZyZXEudG9GaXhlZCgyKX0gJHtuZXdOb3RlLnRhcmdldC5uYW1lfSR7XG4gICAgICAgIG5ld05vdGUudGFyZ2V0Lm9jdGF2ZVxuICAgICAgfSAke25ld05vdGUuZGlmZi50b0ZpeGVkKDIpfWAsXG4gICAgICA4MCxcbiAgICAgIChuZXdOb3RlLm5vdGUgLSAyMSkgKiBiYW5kV2lkdGggLSA1XG4gICAgKTtcblxuICAgIHRoaXMucC5yZXNldE1hdHJpeCgpO1xuICAgIHRoaXMuZGVidWcodGhpcy5wKTtcbiAgICB0aGlzLmN1cnJlbnRQaXRjaCA9IGZyZXE7XG4gIH1cblxuICBzY2FsZShwOiBwNSwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XG4gICAgcC50ZXh0U2l6ZSgxMCk7XG4gICAgcC5maWxsKDApO1xuXG4gICAgZm9yIChsZXQgaSA9IGZyb207IGkgPD0gdG87IGkrKykge1xuICAgICAgY29uc3QgeSA9IChpIC0gMjEpICogYmFuZFdpZHRoO1xuICAgICAgcC5zdHJva2VXZWlnaHQoMSk7XG4gICAgICBwLnN0cm9rZSgyMjApO1xuICAgICAgcC5saW5lKDgwLCB5LCBwLndpZHRoLCB5KTtcblxuICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICBwLnN0cm9rZSgwKTtcbiAgICAgIHAudGV4dChgJHtuYW1lKGkpfSR7b2N0YXZlKGkpfWAsIDAsIHkpO1xuICAgIH1cbiAgfVxuXG4gIGRlYnVnKHA6IHA1KSB7XG4gICAgcC50ZXh0U2l6ZSgxMCk7XG4gICAgcC5zdHJva2VXZWlnaHQoMSk7XG4gICAgcC5maWxsKDI1NSk7XG4gICAgcC5jb2xvcigwKTtcbiAgICBwLnJlY3QocC53aWR0aCAqIDAuNSwgMjAsIHAud2lkdGggKiAwLjUsIDU1KTtcblxuICAgIHAuZmlsbCgwKTtcbiAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICBwLnRleHQoXCJkZWJ1ZyBpbmZvXCIsIHAud2lkdGggKiAwLjUgKyAxMCwgNDUpO1xuICB9XG5cbiAgcnVuKHA6IHA1KSB7XG4gICAgdGhpcy5wID0gcDtcbiAgICBwLnNldHVwID0gKCkgPT4gdGhpcy5zZXR1cCgpO1xuICAgIHAuZHJhdyA9ICgpID0+IHRoaXMuZHJhdygpO1xuICB9XG59XG5cbmV4cG9ydCB7IFNrZXRjaCB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBtbDU7IiwibW9kdWxlLmV4cG9ydHMgPSBwNTsiLCJtb2R1bGUuZXhwb3J0cyA9IHVuZGVmaW5lZDsiXSwic291cmNlUm9vdCI6IiJ9