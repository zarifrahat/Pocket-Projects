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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\r\n\r\nclass Clock {\r\n  constructor() {\r\n    // 1. Create a Date object.\r\n    const currentTime = new Date();\r\n\r\n    // 2. Store the hour, minute, and second.\r\n    this.hours = currentTime.getHours();\r\n    this.minutes = currentTime.getMinutes();\r\n    this.seconds = currentTime.getSeconds();\r\n\r\n    // 3. Call printTime.\r\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement); \r\n\r\n    // 4. Schedule the tick at 1 second intervals.\r\n    setInterval(this._tick.bind(this), 1000);\r\n  }\r\n\r\n  printTime() {\r\n    // Format the time in HH:MM:SS\r\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\r\n\r\n    // Use console.log to print it.\r\n    // console.log(timeString);\r\n    return timeString;\r\n  }\r\n\r\n  _tick() {\r\n    // 1. Increment the time by one second.\r\n    this._incrementSeconds();\r\n\r\n    // 2. Call printTime.\r\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement);\r\n  }\r\n\r\n  _incrementSeconds() {\r\n    // 1. Increment the time by one second.\r\n    this.seconds += 1;\r\n    if (this.seconds === 60) {\r\n      this.seconds = 0;\r\n      this._incrementMinutes();\r\n    }\r\n  }\r\n\r\n  _incrementMinutes() {\r\n    this.minutes += 1;\r\n    if (this.minutes === 60) {\r\n      this.minutes = 0;\r\n      this._incrementHours();\r\n    }\r\n  }\r\n\r\n  _incrementHours() {\r\n    this.hours = (this.hours + 1) % 24;\r\n  }\r\n}\r\n\r\nconst clockElement = document.getElementById('clock');\r\nconst clock = new Clock();\r\n\r\nObject(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(clock.printTime(), clockElement); \n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(){\n  const keys = Object.keys(dogs);\n  const dogsArr = [];\n  // debugger;\n\n  keys.forEach(dog =>{\n    const newATag = document.createElement('a');\n    newATag.innerHTML = dog;\n    newATag.setAttribute(\"href\", `${dogs[dog]}`);\n\n    const newLiTag = document.createElement('li');\n    newLiTag.classList.add('dog-link');\n\n    newLiTag.append(newATag);\n    dogsArr.push(newLiTag);\n  })\n\n  return dogsArr;\n}\n\nfunction attachDogLinks(){\n  let dogLinks = dogLinkCreator();\n\n  dogLinks.forEach(link => {\n    $('.drop-down-dog-list').append(link);\n  });\n}\n attachDogLinks();\n\nfunction handleEnter(){\n  const elements = document.getElementsByClassName('dog-link');\n  Array.from(elements).forEach(el=>{\n    el.classList.remove('dog-link')\n    el.classList.add('shown-dog-link')\n  })\n\n}\n\nfunction handleLeave() {\n  const elements = document.getElementsByClassName('shown-dog-link');\n  Array.from(elements).forEach(el => {\n    el.classList.remove('shown-dog-link')\n    el.classList.add('dog-link')\n  })\n}\n\nconst dogList = document.getElementsByClassName('drop-down-dog-list');\n// debugger;\n\n\ndogList[0].addEventListener('mouseover', handleEnter);\n\ndogList[0].addEventListener('mouseout', handleLeave);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst todos = [];\nconst todoUl = document.getElementsByClassName('todos')[0];\nconst todoForm = document.getElementsByClassName('add-todo-form');\nconst checkboxes = document.getElementsByClassName('checkbox-for-list');\n\n\nif(localStorage.getItem('todolist')){\n    // debugger;\n    const persisted = JSON.parse(localStorage.getItem('todolist'));\n    \n    persisted.forEach(ele => {\n        todos.push(ele);\n    });\n\n    todos.forEach(el => {\n    const label = document.createElement('label');\n    const input = document.createElement('input');\n    input.setAttribute('type', 'checkbox');\n    label.innerHTML = el.todo;\n    label.setAttribute('for', el.todo)\n    input.data = el;    \n    if(input.data.done === true){\n        input.checked = true;\n    };\n    input.className = 'checkbox-for-list'\n    \n    label.append(input);\n\n    const li = document.createElement('li');\n    li.append(label);\n    const todoselement = document.getElementsByClassName('todos')\n    todoselement[0].appendChild(li);\n    })\n}\n\nfunction addTodo(e){\n    // debugger;\n    e.preventDefault();\n    const todo = document.getElementsByName('add-todo');\n    let todoObject = {todo: todo[0].value, done: false}\n    todos.push(todoObject);\n    todo[0].value = '';\n    populateList();\n    localStorage.setItem('todolist', JSON.stringify(todos))\n}\n\nfunction populateList(){\n    // debugger;\n\n    const el = todos[todos.length - 1];\n\n    const label = document.createElement('label');\n    const input = document.createElement('input');\n    input.setAttribute('type', 'checkbox');\n    label.innerHTML = el.todo;\n    // label.setAttribute('for', el.todo)        \n    input.className = 'checkbox-for-list'\n    input.data = el;\n    label.append(input);\n\n    const li = document.createElement('li');\n    li.append(label);\n    const todoselement = document.getElementsByClassName('todos')\n    todoselement[0].appendChild(li);\n\n}\n\nfunction updateCheckbox(e){\n    debugger;\n}\n\nconst todoclass =  document.getElementsByClassName('add-todo-form')[0];\n\n// const todobutton = todoclass[0].lastChild;\n\ntodoclass.addEventListener('submit', addTodo);\n\nArray.from(checkboxes).forEach(checkbox => {\n    checkbox.addEventListener('click', updateCheckbox);\n})\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    let ptag = document.createElement('p');\n    ptag.innerHTML = string;\n    if(htmlElement.children.length !== 0) {\n        htmlElement.removeChild(htmlElement.children[htmlElement.children.length - 1])\n    }\n    htmlElement.appendChild(ptag);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });