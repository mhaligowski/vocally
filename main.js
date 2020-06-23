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
/* harmony import */ var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p5/lib/addons/p5.sound */ "p5/lib/addons/p5.sound");
/* harmony import */ var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ml5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ml5 */ "ml5");
/* harmony import */ var ml5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ml5__WEBPACK_IMPORTED_MODULE_2__);



const MODEL_URL = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
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
const sketch = (p) => {
    let pitch;
    let mic;
    let currentPitch = 440;
    const getAudioContext = (p) => {
        // getAudioContext is not defined in p5 types.
        // @ts-ignore
        return p.getAudioContext();
    };
    p.setup = async () => {
        let canvas = p.createCanvas(710, 1024);
        canvas.mouseClicked(() => {
            // Enable the AudioContext to bypass the Chrome security.
            let ctx = getAudioContext(p);
            ctx.resume();
        });
        p.noFill();
        mic = new p5__WEBPACK_IMPORTED_MODULE_0___default.a.AudioIn();
        mic.start(async (args) => {
            pitch = await ml5.pitchDetection(MODEL_URL, getAudioContext(p), mic.stream);
        });
    };
    p.draw = async () => {
        if (!(pitch === null || pitch === void 0 ? void 0 : pitch.running)) {
            return;
        }
        p.fill(0);
        p.stroke(0);
        const rp = await pitch.getPitch();
        const freq = rp || currentPitch;
        if (currentPitch) {
            p.background(255);
            const note = freqToNote(freq);
            const name = noteName(note);
            const refFreq = noteToFreq(note); // Herz value of the given note
            const d = diff(freq, refFreq);
            p.textSize(20);
            p.text(`${freq.toFixed(2)} ${name} ${d.toFixed(2)}`, 10, 30);
            // Draw reference line.
            p.color(0, 0, 255);
            p.line(0, currentPitch, p.width, currentPitch);
            p.stroke(196);
            p.line(0, refFreq, p.width, refFreq);
            currentPitch = freq;
        }
    };
};
new p5__WEBPACK_IMPORTED_MODULE_0___default.a(sketch);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1sNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInA1XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5kZWZpbmVkXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNEO0FBQ25CO0FBRWIsTUFBTSxTQUFTLEdBQ2IscUZBQXFGLENBQUM7QUFFeEYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQVUsRUFBRSxDQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxD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QUFDLENBQUM7WUFFdEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTdELHVCQUF1QjtZQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFL0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixJQUFJLHlDQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQy9GZixxQjs7Ozs7Ozs7Ozs7QUNBQSxvQjs7Ozs7Ozs7Ozs7QUNBQSwyQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgcDUsIHsgQXVkaW9JbiB9IGZyb20gXCJwNVwiO1xuaW1wb3J0IFwicDUvbGliL2FkZG9ucy9wNS5zb3VuZFwiO1xuaW1wb3J0IFwibWw1XCI7XG5cbmNvbnN0IE1PREVMX1VSTCA9XG4gIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL21sNWpzL21sNS1kYXRhLWFuZC1tb2RlbHMvbW9kZWxzL3BpdGNoLWRldGVjdGlvbi9jcmVwZS9cIjtcblxuY29uc3QgZnJlcVRvTm90ZSA9IChmcmVxOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5yb3VuZCg2OSArIDEyICogTWF0aC5sb2cyKGZyZXEgLyA0NDApKTtcblxuY29uc3Qgbm90ZVRvRnJlcSA9IChub3RlOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgNDQwICogTWF0aC5wb3coMiwgKG5vdGUgLSA2OSkgLyAxMik7XG5cbmNvbnN0IGRpZmYgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIgPT4gMTIwMCAqIE1hdGgubG9nMihiIC8gYSk7XG5cbmNvbnN0IG5vdGVzOiBzdHJpbmdbXSA9IFtcbiAgXCJBXCIsIC8vIDIxXG4gIFwiQuKZrVwiLCAvLyAyMlxuICBcIkJcIiwgLy8gMjNcbiAgXCJDXCIsIC8vIDI0XG4gIFwiQ+KZr1wiLCAvLyAyNVxuICBcIkRcIiwgLy8gMjZcbiAgXCJE4pmvXCIsIC8vIDI3XG4gIFwiRVwiLCAvLyAyOFxuICBcIkZcIiwgLy8gMjlcbiAgXCJG4pmvXCIsIC8vIDMwXG4gIFwiR1wiLCAvLyAzMVxuICBcIkfima9cIiwgLy8gMzJcbl07XG5jb25zdCBub3RlTmFtZSA9IChub3RlOiBudW1iZXIpOiBzdHJpbmcgPT4gbm90ZXNbKG5vdGUgLSAyMSkgJSAxMl07XG5cbmNvbnN0IHNrZXRjaCA9IChwOiBwNSkgPT4ge1xuICBsZXQgcGl0Y2g6IGFueTtcbiAgbGV0IG1pYzogcDUuQXVkaW9JbjtcblxuICBsZXQgY3VycmVudFBpdGNoOiBudW1iZXIgPSA0NDA7XG5cbiAgY29uc3QgZ2V0QXVkaW9Db250ZXh0ID0gKHA6IHA1KTogQXVkaW9Db250ZXh0ID0+IHtcbiAgICAvLyBnZXRBdWRpb0NvbnRleHQgaXMgbm90IGRlZmluZWQgaW4gcDUgdHlwZXMuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBwLmdldEF1ZGlvQ29udGV4dCgpO1xuICB9O1xuXG4gIHAuc2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKDcxMCwgMTAyNCk7XG4gICAgY2FudmFzLm1vdXNlQ2xpY2tlZCgoKSA9PiB7XG4gICAgICAvLyBFbmFibGUgdGhlIEF1ZGlvQ29udGV4dCB0byBieXBhc3MgdGhlIENocm9tZSBzZWN1cml0eS5cbiAgICAgIGxldCBjdHg6IEF1ZGlvQ29udGV4dCA9IGdldEF1ZGlvQ29udGV4dChwKTtcbiAgICAgIGN0eC5yZXN1bWUoKTtcbiAgICB9KTtcblxuICAgIHAubm9GaWxsKCk7XG5cbiAgICBtaWMgPSBuZXcgcDUuQXVkaW9JbigpO1xuICAgIG1pYy5zdGFydChhc3luYyAoYXJnczogYW55W10pID0+IHtcbiAgICAgIHBpdGNoID0gYXdhaXQgbWw1LnBpdGNoRGV0ZWN0aW9uKFxuICAgICAgICBNT0RFTF9VUkwsXG4gICAgICAgIGdldEF1ZGlvQ29udGV4dChwKSxcbiAgICAgICAgbWljLnN0cmVhbVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBwLmRyYXcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFwaXRjaD8ucnVubmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwLmZpbGwoMCk7XG4gICAgcC5zdHJva2UoMCk7XG5cbiAgICBjb25zdCBycCA9IGF3YWl0IHBpdGNoLmdldFBpdGNoKCk7XG4gICAgY29uc3QgZnJlcTogbnVtYmVyID0gcnAgfHwgY3VycmVudFBpdGNoO1xuXG4gICAgaWYgKGN1cnJlbnRQaXRjaCkge1xuICAgICAgcC5iYWNrZ3JvdW5kKDI1NSk7XG5cbiAgICAgIGNvbnN0IG5vdGU6IG51bWJlciA9IGZyZXFUb05vdGUoZnJlcSk7XG4gICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBub3RlTmFtZShub3RlKTtcbiAgICAgIGNvbnN0IHJlZkZyZXEgPSBub3RlVG9GcmVxKG5vdGUpOyAvLyBIZXJ6IHZhbHVlIG9mIHRoZSBnaXZlbiBub3RlXG4gICAgICBjb25zdCBkOiBudW1iZXIgPSBkaWZmKGZyZXEsIHJlZkZyZXEpO1xuXG4gICAgICBwLnRleHRTaXplKDIwKTtcbiAgICAgIHAudGV4dChgJHtmcmVxLnRvRml4ZWQoMil9ICR7bmFtZX0gJHtkLnRvRml4ZWQoMil9YCwgMTAsIDMwKTtcblxuICAgICAgLy8gRHJhdyByZWZlcmVuY2UgbGluZS5cbiAgICAgIHAuY29sb3IoMCwgMCwgMjU1KTtcbiAgICAgIHAubGluZSgwLCBjdXJyZW50UGl0Y2gsIHAud2lkdGgsIGN1cnJlbnRQaXRjaCk7XG5cbiAgICAgIHAuc3Ryb2tlKDE5Nik7XG4gICAgICBwLmxpbmUoMCwgcmVmRnJlcSwgcC53aWR0aCwgcmVmRnJlcSk7XG4gICAgICBjdXJyZW50UGl0Y2ggPSBmcmVxO1xuICAgIH1cbiAgfTtcbn07XG5cbm5ldyBwNShza2V0Y2gpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBtbDU7IiwibW9kdWxlLmV4cG9ydHMgPSBwNTsiLCJtb2R1bGUuZXhwb3J0cyA9IHVuZGVmaW5lZDsiXSwic291cmNlUm9vdCI6IiJ9