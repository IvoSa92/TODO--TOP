/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*class DomElements {\n  constructor() {\n    //container:\n    this.currentContent = document.querySelector(\".currentContent\");\n    this.container = document.querySelector(\".container\");\n    //Buttons:\n    this.addTaskButton = document.querySelector(\".add-task\");\n    this.allTasksButton = document.querySelector(\".all-tasks\");\n    this.todayTasksButton = document.querySelector(\".today-tasks\");\n    this.weekTasksButton = document.querySelector(\".week-tasks\");\n    this.upcomingTasksButton = document.querySelector(\".upcoming-tasks\");\n    this.newProjectButton = document.querySelector(\".new-project-button\");\n  }\n}\n\nexport default DomElements;*/\n\nconst DomElements = {\n  //container:\n  currentContent: document.querySelector(\".currentContent\"),\n  container: document.querySelector(\".container\"),\n  //Buttons:\n  addTaskButton: document.querySelector(\".add-task\"),\n  allTasksButton: document.querySelector(\".all-tasks\"),\n  todayTasksButton: document.querySelector(\".today-tasks\"),\n  weekTasksButton: document.querySelector(\".week-tasks\"),\n  upcomingTasksButton: document.querySelector(\".upcoming-tasks\"),\n  newProjectButton: document.querySelector(\".new-project-button\"),\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomElements);\n\n\n//# sourceURL=webpack://todo--top/./src/DOM.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nclass NewTaskManager {\n  constructor() {\n    this.formActive = false;\n    this.addTaskButton = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskButton;\n    this.currentContent = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentContent;\n    this.initializeEventListeners();\n  }\n\n  initializeEventListeners() {\n    this.addTaskButton.addEventListener(\"click\", () => this.newTaskForm());\n  }\n\n  //creates a new task form pop up window\n  newTaskForm() {\n    // checks if the for is already displayed\n    if (this.formActive === false) {\n      this.formActive = true;\n      //created the form to append\n      const newTaskForm = this.createFormElements();\n      newTaskForm.classList.add(\"new-task\");\n      //creates the blurry background\n      const blurredScreen = document.createElement(\"div\");\n      blurredScreen.classList.add(\"blurred-screen\");\n\n      this.currentContent.append(newTaskForm, blurredScreen);\n    } else {\n      alert(\"Please fill out the displayed form \");\n    }\n  }\n\n  //creates the elements for the form\n  createFormElements() {\n    const newTaskForm = document.createElement(\"div\");\n    newTaskForm.classList.add(\"new-task\");\n\n    this.titleInput = this.createInputField(\"Title\", \"title\", \"text\");\n    this.dateInput = this.createInputField(\"Date\", \"date\", \"date\");\n    this.prioritySelect = this.createSelectField(\"priority-input\", [\n      \"High\",\n      \"Medium\",\n      \"Low\",\n    ]);\n    this.descriptionInput = this.createDescriptionField(\"description\");\n\n    const buttonContainer = document.createElement(\"div\");\n    buttonContainer.classList.add(\"button-container\");\n\n    const submitButton = this.createButtons(\"Submit\", \"submit-button\");\n    submitButton.addEventListener(\"click\", () => {\n      this.handleSubmit();\n    });\n    const deleteButton = this.createButtons(\"Delete\", \"delete-button\");\n\n    buttonContainer.append(submitButton, deleteButton);\n\n    newTaskForm.append(\n      this.titleInput,\n      this.dateInput,\n      this.descriptionInput,\n      this.descriptionInput,\n      buttonContainer\n    );\n    return newTaskForm;\n  }\n\n  //creates the input fields of the form\n  createInputField(headerText, inputClass, type) {\n    const inputContainer = document.createElement(\"div\");\n    inputContainer.classList.add(\"form-div\");\n\n    const inputHeader = document.createElement(\"label\");\n    inputHeader.textContent = headerText;\n    inputHeader.classList.add(`${inputClass}-caption`);\n\n    const input = document.createElement(\"input\");\n    input.type = type;\n    input.classList.add(`${inputClass}-input`, \"formInput\");\n\n    inputContainer.append(inputHeader, input);\n    return inputContainer;\n  }\n\n  //creates the select field of the form\n  createSelectField(selectClass, options) {\n    const inputContainer = document.createElement(\"div\");\n    inputContainer.classList.add(\"form-div\");\n\n    const label = document.createElement(\"label\");\n    label.textContent = \"Priority\";\n    label.classList.add(\"priority-caption\");\n\n    const select = document.createElement(\"select\");\n    select.classList.add(selectClass, \"formInput\");\n\n    options.forEach((optionText) => {\n      const option = document.createElement(\"option\");\n      option.value = optionText;\n      option.textContent = optionText;\n      select.appendChild(option);\n    });\n\n    inputContainer.append(label, select);\n    return inputContainer;\n  }\n\n  //creates the description field of the form\n  createDescriptionField(descriptionClass) {\n    const descriptionContainer = document.createElement(\"div\");\n    descriptionContainer.classList.add(\"form-div\");\n\n    const label = document.createElement(\"label\");\n    label.classList.add(`${descriptionClass}-caption`);\n    label.textContent = \"Description\";\n\n    const textArea = document.createElement(\"textarea\");\n    textArea.classList.add(`${descriptionClass}-input`, \"formInput\");\n\n    descriptionContainer.append(label, textArea);\n    return descriptionContainer;\n  }\n\n  //creates the buttons of the form\n  createButtons(buttonText, buttonClass) {\n    const button = document.createElement(\"button\");\n    button.textContent = buttonText;\n    button.classList.add(buttonClass, \"form-button\");\n\n    return button;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskManager);\n\n// schreibe den code um den submit button zu handeln!!\n\n\n//# sourceURL=webpack://todo--top/./src/addTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\nconsole.log(\"hello\");\n\n\n//import { createNewTaskForm } from \"./addTask\";\n//createNewTaskForm();\n\n\nconst taskManager = new _addTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n\n//# sourceURL=webpack://todo--top/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;