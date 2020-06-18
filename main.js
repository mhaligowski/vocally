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
const sketch = (p) => {
    let pitch;
    let fft;
    let mic;
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
        fft = new p5__WEBPACK_IMPORTED_MODULE_0___default.a.FFT();
        fft.setInput(mic);
    };
    p.draw = async () => {
        if (!pitch) {
            return;
        }
        p.background(255);
        const rp = await pitch.getPitch();
        if (rp) {
            p.stroke(0);
            p.line(0, rp, p.width, rp);
        }
        let spectrum = fft.analyze();
        p.beginShape();
        p.stroke(200);
        for (let i = 0; i < spectrum.length; i++) {
            p.vertex(p.map(spectrum[i], 0, 255, 0, p.width), i);
        }
        p.endShape();
    };
};
// p
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1sNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInA1XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5kZWZpbmVkXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNEO0FBQ25CO0FBRWIsTUFBTSxTQUFTLEdBQ2IscUZBQXFGLENBQUM7QUFFeEYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFLLEVBQUUsRUFBRTtJQUN2QixJQUFJLEtBQVUsQ0FBQztJQUNmLElBQUksR0FBVyxDQUFDO0lBQ2hCLElBQUksR0FBZSxDQUFDO0lBRXBCLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBSyxFQUFnQixFQUFFO1FBQzlDLDhDQUE4QztRQUM5QyxhQUFhO1FBQ2IsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBRUYsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRTtRQUNuQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUN2Qix5REFBeUQ7WUFDekQsSUFBSSxHQUFHLEdBQWlCLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVYLEdBQUcsR0FBRyxJQUFJLHlDQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBVyxFQUFFLEVBQUU7WUFDOUIsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLGNBQWMsQ0FDOUIsU0FBUyxFQUNULGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FDWCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLEdBQUcsSUFBSSx5Q0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0lBRUYsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtRQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQixNQUFNLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsRUFBRTtZQUNKLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixJQUFJO0FBQ0osSUFBSSx5Q0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMvRGYscUI7Ozs7Ozs7Ozs7O0FDQUEsb0I7Ozs7Ozs7Ozs7O0FDQUEsMkIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHA1LCB7IEF1ZGlvSW4gfSBmcm9tIFwicDVcIjtcbmltcG9ydCBcInA1L2xpYi9hZGRvbnMvcDUuc291bmRcIjtcbmltcG9ydCBcIm1sNVwiO1xuXG5jb25zdCBNT0RFTF9VUkwgPVxuICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9tbDVqcy9tbDUtZGF0YS1hbmQtbW9kZWxzL21vZGVscy9waXRjaC1kZXRlY3Rpb24vY3JlcGUvXCI7XG5cbmNvbnN0IHNrZXRjaCA9IChwOiBwNSkgPT4ge1xuICBsZXQgcGl0Y2g6IGFueTtcbiAgbGV0IGZmdDogcDUuRkZUO1xuICBsZXQgbWljOiBwNS5BdWRpb0luO1xuXG4gIGNvbnN0IGdldEF1ZGlvQ29udGV4dCA9IChwOiBwNSk6IEF1ZGlvQ29udGV4dCA9PiB7XG4gICAgLy8gZ2V0QXVkaW9Db250ZXh0IGlzIG5vdCBkZWZpbmVkIGluIHA1IHR5cGVzLlxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gcC5nZXRBdWRpb0NvbnRleHQoKTtcbiAgfTtcblxuICBwLnNldHVwID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyg3MTAsIDEwMjQpO1xuICAgIGNhbnZhcy5tb3VzZUNsaWNrZWQoKCkgPT4ge1xuICAgICAgLy8gRW5hYmxlIHRoZSBBdWRpb0NvbnRleHQgdG8gYnlwYXNzIHRoZSBDaHJvbWUgc2VjdXJpdHkuXG4gICAgICBsZXQgY3R4OiBBdWRpb0NvbnRleHQgPSBnZXRBdWRpb0NvbnRleHQocCk7XG4gICAgICBjdHgucmVzdW1lKCk7XG4gICAgfSk7XG5cbiAgICBwLm5vRmlsbCgpO1xuXG4gICAgbWljID0gbmV3IHA1LkF1ZGlvSW4oKTtcbiAgICBtaWMuc3RhcnQoYXN5bmMgKGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICBwaXRjaCA9IGF3YWl0IG1sNS5waXRjaERldGVjdGlvbihcbiAgICAgICAgTU9ERUxfVVJMLFxuICAgICAgICBnZXRBdWRpb0NvbnRleHQocCksXG4gICAgICAgIG1pYy5zdHJlYW1cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBmZnQgPSBuZXcgcDUuRkZUKCk7XG4gICAgZmZ0LnNldElucHV0KG1pYyk7XG4gIH07XG5cbiAgcC5kcmF3ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcGl0Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcC5iYWNrZ3JvdW5kKDI1NSk7XG5cbiAgICBjb25zdCBycCA9IGF3YWl0IHBpdGNoLmdldFBpdGNoKCk7XG4gICAgaWYgKHJwKSB7XG4gICAgICAgIHAuc3Ryb2tlKDApO1xuICAgICAgICBwLmxpbmUoMCwgcnAsIHAud2lkdGgsIHJwKTtcbiAgICB9XG5cbiAgICBsZXQgc3BlY3RydW0gPSBmZnQuYW5hbHl6ZSgpO1xuICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgIHAuc3Ryb2tlKDIwMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGVjdHJ1bS5sZW5ndGg7IGkrKykge1xuICAgICAgcC52ZXJ0ZXgocC5tYXAoc3BlY3RydW1baV0sIDAsIDI1NSwgMCwgcC53aWR0aCksIGkpO1xuICAgIH1cbiAgICBwLmVuZFNoYXBlKCk7XG4gIH07XG59O1xuLy8gcFxubmV3IHA1KHNrZXRjaCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1sNTsiLCJtb2R1bGUuZXhwb3J0cyA9IHA1OyIsIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkOyJdLCJzb3VyY2VSb290IjoiIn0=