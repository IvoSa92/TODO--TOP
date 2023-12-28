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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewTaskForm: () => (/* binding */ createNewTaskForm)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n// function to create a new ToDo\nfunction createNewTaskForm() {\n  let formActive = false;\n  _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskButton.addEventListener(\"click\", () => {\n    //create Form Pop Up Window:\n    if (formActive === false) {\n      formActive = true;\n\n      let newTaskForm = document.createElement(\"div\");\n      newTaskForm.classList.add(\"new-task\");\n\n      // title\n      let titleCaption = document.createElement(\"p\");\n      titleCaption.classList.add(\"title-caption\");\n      titleCaption.textContent = \"Task Title\";\n\n      let titleInput = document.createElement(\"input\");\n      titleInput.classList.add(\"title-input\", \"formInput\");\n\n      //date\n      let dateCaption = document.createElement(\"p\");\n      dateCaption.classList.add(\"date-caption\");\n      dateCaption.textContent = \"Date\";\n      let dateInput = document.createElement(\"input\");\n      dateInput.setAttribute(\"type\", \"date\");\n      dateInput.classList.add(\"date-input\", \"formInput\");\n\n      //priority selection\n      let priorityCaption = document.createElement(\"p\");\n      priorityCaption.classList.add(\"priority-caption\");\n      priorityCaption.textContent = \"Priority\";\n      let priorityInput = document.createElement(\"select\");\n      priorityInput.classList.add(\"priority-input\", \"formInput\");\n\n      let options = [\"High\", \"Medium\", \"Low\"];\n      options.forEach((optionText) => {\n        let option = document.createElement(\"option\");\n        option.value = optionText;\n        option.textContent = optionText;\n        priorityInput.appendChild(option);\n      });\n\n      //description\n      let descriptionCaption = document.createElement(\"p\");\n      descriptionCaption.classList.add(\"description-caption\");\n      descriptionCaption.textContent = \"Description\";\n      let descriptionInput = document.createElement(\"textarea\");\n      descriptionInput.classList.add(\"description-input\", \"formInput\");\n\n      //buttons\n      let buttonContainer = document.createElement(\"div\");\n      buttonContainer.classList.add(\"button-container\");\n\n      //submit button\n      let submitButton = document.createElement(\"button\");\n      submitButton.classList.add(\"submit-button\", \"form-button\");\n      submitButton.textContent = \"Submit\";\n\n      //delete button\n      let deleteButton = document.createElement(\"button\");\n      deleteButton.classList.add(\"delete-button\", \"form-button\");\n      deleteButton.textContent = \"Delete\";\n      buttonContainer.append(submitButton, deleteButton);\n\n      //appending all elements:\n      newTaskForm.append(\n        titleCaption,\n        titleInput,\n        dateCaption,\n        dateInput,\n        priorityCaption,\n        priorityInput,\n        descriptionCaption,\n        descriptionInput,\n        buttonContainer\n      );\n\n      _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentContent.append(newTaskForm);\n    } else if (formActive === true) {\n      alert(\"Please fill out the displayed form\");\n    }\n  });\n}\n\n// Jetzt Submit und Delete Button programmieren, erst mnal als einzelne function weil es als class iwie nicht geklappt hat\n\n/*\nimport DomElements from \"../DOM\";\n\nclass TaskFormManager {\n    constructor() {\n        this.formActive = false;\n        this.addTaskButton = DomElements.addTaskButton;\n        this.currentContent = DomElements.currentContent;\n        this.initializeEventListeners();\n    }\n\n    initializeEventListeners() {\n        this.addTaskButton.addEventListener(\"click\", () => this.createNewTaskForm());\n    }\n\n    createNewTaskForm() {\n        if (this.formActive===false) {\n            this.formActive = true;\n            const newTaskForm = this.createFormElements();\n            this.currentContent.append(newTaskForm);\n        } else {\n            alert(\"Please fill out the displayed form\");\n        }\n    }\n\n    createFormElements() {\n        const newTaskForm = document.createElement(\"div\");\n        newTaskForm.classList.add(\"new-task\");\n\n        this.titleInput = this.createInputField(\"Task Title\", \"title-input\");\n        this.dateInput = this.createInputField(\"Date\", \"date-input\", \"date\");\n        this.prioritySelect = this.createSelectField(\"priority-input\", [\"High\", \"Medium\", \"Low\"]);\n        this.descriptionTextArea = this.createTextAreaField(\"description-input\");\n\n        const buttonContainer = document.createElement(\"div\");\n        buttonContainer.classList.add(\"button-container\");\n\n        const submitButton = this.createButton(\"Submit\", \"submit-button\");\n        submitButton.addEventListener(\"click\", () => this.handleSubmit());\n        \n        const deleteButton = this.createButton(\"Delete\", \"delete-button\");\n\n        buttonContainer.append(submitButton, deleteButton);\n        newTaskForm.append(\n            this.titleInput, \n            this.dateInput, \n            this.prioritySelect, \n            this.descriptionTextArea, \n            buttonContainer\n        );\n\n        return newTaskForm;\n    }\n\n    createInputField(labelText, inputClass, type = \"text\") {\n        const wrapper = document.createElement('div');\n\n        const label = document.createElement('label');\n        label.textContent = labelText;\n        label.classList.add(labelText.toLowerCase().replace(\" \", \"-\") + \"-caption\");\n\n        const input = document.createElement('input');\n        input.type = type;\n        input.classList.add(inputClass, \"formInput\");\n\n        wrapper.appendChild(label);\n        wrapper.appendChild(input);\n        return wrapper;\n    }\n\n    createSelectField(selectClass, options) {\n        const wrapper = document.createElement('div');\n\n        const label = document.createElement('label');\n        label.textContent = \"Priority\";\n        label.classList.add(\"priority-caption\");\n\n        const select = document.createElement('select');\n        select.classList.add(selectClass, \"formInput\");\n        options.forEach(optionText => {\n            const option = document.createElement('option');\n            option.value = optionText;\n            option.textContent = optionText;\n            select.appendChild(option);\n        });\n\n        wrapper.appendChild(label);\n        wrapper.appendChild(select);\n        return wrapper;\n    }\n\n    createTextAreaField(textAreaClass) {\n        const wrapper = document.createElement('div');\n\n        const label = document.createElement('label');\n        label.textContent = \"Description\";\n        label.classList.add(\"description-caption\");\n\n        const textArea = document.createElement('textarea');\n        textArea.classList.add(textAreaClass, \"formInput\");\n\n        wrapper.appendChild(label);\n        wrapper.appendChild(textArea);\n        return wrapper;\n    }\n\n    createButton(buttonText, buttonClass) {\n        const button = document.createElement('button');\n        button.textContent = buttonText;\n        button.classList.add(buttonClass, \"form-button\");\n        return button;\n    }\n\n    handleSubmit() {\n        const task = {\n            title: this.titleInput.querySelector('input').value,\n            date: this.dateInput.querySelector('input').value,\n            priority: this.prioritySelect.querySelector('select').value,\n            description: this.descriptionTextArea.querySelector('textarea').value\n        };\n\n        console.log(task); // Hier haben Sie das Task-Objekt. Sie können es weiter verarbeiten.\n        this.formActive = false; // Formularstatus zurücksetzen\n    }\n}\n\nexport default TaskFormManager;\n*/\n\n\n//# sourceURL=webpack://todo--top/./src/addTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\nconsole.log(\"hello\");\n\n\n\n(0,_addTask__WEBPACK_IMPORTED_MODULE_1__.createNewTaskForm)();\n\n\n//# sourceURL=webpack://todo--top/./src/index.js?");

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