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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DomElements = {\n  //container:\n  currentContent: document.querySelector(\".currentContent\"),\n  container: document.querySelector(\".container\"),\n  allViewPage: document.querySelector(\".all-view\"),\n  tomorrowViewPage: document.querySelector(\".tomorrow-view\"),\n  todayViewPage: document.querySelector(\".today-view\"),\n  upcomingViewPage: document.querySelector(\".upcoming-view\"),\n  //Buttons:\n  addTaskButton: document.querySelector(\".add-task\"),\n  allTasksButton: document.querySelector(\".all-tasks\"),\n  todayTasksButton: document.querySelector(\".today-tasks\"),\n  tomorrowTasksButton: document.querySelector(\".tomorrow-tasks\"),\n  upcomingTasksButton: document.querySelector(\".upcoming-tasks\"),\n  newProjectButton: document.querySelector(\".new-project-button\"),\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomElements);\n\n\n//# sourceURL=webpack://todo--top/./src/DOM.js?");

/***/ }),

/***/ "./src/handleViewOptions.js":
/*!**********************************!*\
  !*** ./src/handleViewOptions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nclass HandleNavButtons {\n  constructor() {\n    //link buttons\n    this.allTasksButton = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allTasksButton;\n    this.tomorrowTasksButton = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tomorrowTasksButton;\n    this.todayTasksButton = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todayTasksButton;\n    this.upcomingTasksButton = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].upcomingTasksButton;\n    //link containers\n    this.currentContent = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentContent;\n    this.viewAllTasks = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allViewPage;\n    this.viewTodayTasks = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todayViewPage;\n    this.viewTomorrowTasks = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tomorrowViewPage;\n    this.viewUpcomingTasks = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].upcomingViewPage;\n    //function to add the event listeners\n    this.initializeEventListeners();\n  }\n  //setting event listeners up\n  initializeEventListeners() {\n    this.allTasksButton.addEventListener(\"click\", () => this.displayAllTasks());\n    this.todayTasksButton.addEventListener(\"click\", () =>\n      this.displayTodayTasks()\n    );\n    this.tomorrowTasksButton.addEventListener(\"click\", () =>\n      this.displayTomorrowTasks()\n    );\n    this.upcomingTasksButton.addEventListener(\"click\", () =>\n      this.displayUpcomingTasks()\n    );\n  }\n\n  displayAllTasks() {\n    console.log(\"Click\");\n    this.currentContent.innerHTML = \"\";\n    this.viewAllTasks.style.display = \"flex\";\n    this.currentContent.appendChild(this.viewAllTasks);\n  }\n\n  displayTodayTasks() {\n    console.log(\"Click2\");\n    this.currentContent.innerHTML = \"\";\n    this.viewTodayTasks.style.display = \"flex\";\n    this.currentContent.appendChild(this.viewTodayTasks);\n  }\n\n  displayTomorrowTasks() {\n    console.log(\"Click3\");\n    this.currentContent.innerHTML = \"\";\n    this.viewTomorrowTasks.style.display = \"flex\";\n    this.currentContent.appendChild(this.viewTomorrowTasks);\n  }\n\n  displayUpcomingTasks() {\n    console.log(\"Click4\");\n    this.currentContent.innerHTML = \"\";\n    this.viewUpcomingTasks.style.display = \"flex\";\n    this.currentContent.appendChild(this.viewUpcomingTasks);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandleNavButtons);\n\n\n//# sourceURL=webpack://todo--top/./src/handleViewOptions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _newTaskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTaskManager */ \"./src/newTaskManager.js\");\n/* harmony import */ var _handleViewOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleViewOptions */ \"./src/handleViewOptions.js\");\nconsole.log(\"hello\");\n\n\n\n\n\nconst taskManager = new _newTaskManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst handleSideNavButtons = new _handleViewOptions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n\n//# sourceURL=webpack://todo--top/./src/index.js?");

/***/ }),

/***/ "./src/newTaskManager.js":
/*!*******************************!*\
  !*** ./src/newTaskManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _handleViewOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleViewOptions */ \"./src/handleViewOptions.js\");\n\n\n\nclass NewTaskManager {\n  constructor() {\n    this.formActive = false;\n    this.addTaskButton = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskButton;\n    this.currentContent = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentContent;\n    this.initializeEventListeners();\n  }\n\n  initializeEventListeners() {\n    this.addTaskButton.addEventListener(\"click\", () => this.newTaskForm());\n  }\n\n  //creates a new task form pop up window\n  newTaskForm() {\n    // checks if the for is already displayed\n    if (this.formActive === false) {\n      this.formActive = true;\n      //remove all containers for the form pop up\n      this.currentContent.innerHTML = \"\";\n      //created the form to append\n      const newTaskForm = this.createFormElements();\n      newTaskForm.classList.add(\"new-task\");\n      //creates the blurry background\n      const blurredScreen = document.createElement(\"div\");\n      blurredScreen.classList.add(\"blurred-screen\");\n\n      this.currentContent.append(newTaskForm, blurredScreen);\n    } else {\n      alert(\"Please fill out the displayed form \");\n    }\n  }\n\n  //creates the elements for the form\n  createFormElements() {\n    const newTaskForm = document.createElement(\"div\");\n    newTaskForm.classList.add(\"new-task\");\n\n    this.titleInput = this.createInputField(\"Title\", \"title\", \"text\");\n    this.dateInput = this.createInputField(\"Date\", \"date\", \"date\");\n    this.prioritySelect = this.createSelectField(\"priority-input\", [\n      \"High\",\n      \"Medium\",\n      \"Low\",\n    ]);\n    this.descriptionInput = this.createDescriptionField(\"description\");\n\n    const buttonContainer = document.createElement(\"div\");\n    buttonContainer.classList.add(\"button-container\");\n\n    const submitButton = this.createButtons(\"Submit\", \"submit-button\");\n    submitButton.addEventListener(\"click\", () => {\n      this.handleSubmit();\n    });\n    const deleteButton = this.createButtons(\"Delete\", \"delete-button\");\n    deleteButton.addEventListener(\"click\", () => {\n      this.handleDelete();\n    });\n\n    buttonContainer.append(submitButton, deleteButton);\n\n    newTaskForm.append(\n      this.titleInput,\n      this.dateInput,\n      this.prioritySelect,\n      this.descriptionInput,\n      buttonContainer\n    );\n\n    return newTaskForm;\n  }\n\n  //creates the input fields of the form\n  createInputField(headerText, inputClass, type) {\n    const inputContainer = document.createElement(\"div\");\n    inputContainer.classList.add(\"form-div\");\n\n    const inputHeader = document.createElement(\"label\");\n    inputHeader.textContent = headerText;\n    inputHeader.classList.add(`${inputClass}-caption`);\n\n    const input = document.createElement(\"input\");\n    input.type = type;\n    input.classList.add(`${inputClass}-input`, \"formInput\");\n\n    inputContainer.append(inputHeader, input);\n    return inputContainer;\n  }\n\n  //creates the select field of the form\n  createSelectField(selectClass, options) {\n    const inputContainer = document.createElement(\"div\");\n    inputContainer.classList.add(\"form-div\");\n\n    const label = document.createElement(\"label\");\n    label.textContent = \"Priority\";\n    label.classList.add(\"priority-caption\");\n\n    const select = document.createElement(\"select\");\n    select.classList.add(selectClass, \"formInput\");\n\n    options.forEach((optionText) => {\n      const option = document.createElement(\"option\");\n      option.value = optionText;\n      option.textContent = optionText;\n      select.appendChild(option);\n    });\n\n    inputContainer.append(label, select);\n    return inputContainer;\n  }\n\n  //creates the description field of the form\n  createDescriptionField(descriptionClass) {\n    const descriptionContainer = document.createElement(\"div\");\n    descriptionContainer.classList.add(\"form-div\");\n\n    const label = document.createElement(\"label\");\n    label.classList.add(`${descriptionClass}-caption`);\n    label.textContent = \"Description\";\n\n    const textArea = document.createElement(\"textarea\");\n    textArea.classList.add(`${descriptionClass}-input`, \"formInput\");\n\n    descriptionContainer.append(label, textArea);\n    return descriptionContainer;\n  }\n\n  //creates the buttons of the form\n  createButtons(buttonText, buttonClass) {\n    const button = document.createElement(\"button\");\n    button.textContent = buttonText;\n    button.classList.add(buttonClass, \"form-button\");\n\n    return button;\n  }\n\n  //submit handler\n  handleSubmit() {\n    const allViewPage = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allViewPage;\n    const taskData = {\n      title: this.titleInput.querySelector(\".title-input\").value,\n      date: this.dateInput.querySelector(\".date-input\").value,\n      priority: this.prioritySelect.querySelector(\".priority-input\").value,\n      description:\n        this.descriptionInput.querySelector(\".description-input\").value,\n    };\n\n    const newTaskCard = this.createTaskCard(taskData);\n    newTaskCard.style.height = \"5rem\";\n    const allTasksPage = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allViewPage;\n    allTasksPage.appendChild(newTaskCard);\n\n    this.currentContent.innerHTML = \"\";\n    allViewPage.style.display = \"flex\";\n    this.currentContent.appendChild(allViewPage);\n    this.formActive = false;\n  }\n  // create task card\n  createTaskCard(taskData) {\n    const newTaskCard = document.createElement(\"div\");\n    newTaskCard.classList.add(\"new-task-card\");\n\n    // container for the not expanded part of the task\n    const visibleContent = document.createElement(\"div\");\n    visibleContent.classList.add(\"card-task-visible\");\n\n    //container for the hidden task part\n    const hiddenContent = document.createElement(\"div\");\n    hiddenContent.classList.add(\"card-task-hidden\");\n    hiddenContent.style.display = \"none\";\n\n    //create checkbox\n    const checkBox = document.createElement(\"input\");\n    checkBox.type = \"checkbox\";\n    checkBox.classList.add(\"card-task-checkbox\");\n\n    // create title field\n    const cardTaskTitle = document.createElement(\"label\");\n    cardTaskTitle.textContent = taskData.title;\n    cardTaskTitle.classList.add(\"card-task-title\");\n\n    // create date field\n    const cardTaskDate = document.createElement(\"div\");\n    cardTaskDate.textContent = `DueDate: ${taskData.date}`;\n    cardTaskDate.classList.add(\"card-task-date\");\n\n    // create selection field\n    const cardTaskPriority = document.createElement(\"div\");\n    cardTaskPriority.textContent = taskData.priority;\n    cardTaskPriority.classList.add(\"card-task-priority\");\n\n    // create description field\n    const cardTaskDescription = document.createElement(\"div\");\n    cardTaskDescription.textContent = taskData.description;\n    cardTaskDescription.classList.add(\"card-task-description\");\n\n    // create container for delete and change buttons\n    const cardTaskBtnContainer = document.createElement(\"div\");\n    cardTaskBtnContainer.classList.add(\"card-task-btn-container\");\n\n    //create delete button\n    const cardTaskDeleteBtn = document.createElement(\"button\");\n    cardTaskDeleteBtn.textContent = \"Delete\";\n    cardTaskDeleteBtn.classList.add(\"card-task-delete-btn\");\n\n    //create edit button\n    const cardTaskEditBtn = document.createElement(\"button\");\n    cardTaskEditBtn.textContent = \"Edit\";\n    cardTaskEditBtn.classList.add(\"card-task-edit-btn\");\n\n    //add event listener with function to expand a task card\n    newTaskCard.addEventListener(\"click\", function () {\n      hiddenContent.style.display =\n        hiddenContent.style.display === \"none\" ? \"flex\" : \"none\";\n      newTaskCard.style.height =\n        newTaskCard.style.height === \"5rem\" ? \"auto\" : \"5rem\";\n    });\n\n    // append all elements\n    cardTaskBtnContainer.append(cardTaskDeleteBtn, cardTaskEditBtn);\n    visibleContent.append(checkBox, cardTaskTitle, cardTaskPriority);\n    hiddenContent.append(\n      cardTaskDate,\n      cardTaskDescription,\n      cardTaskBtnContainer\n    );\n\n    newTaskCard.append(visibleContent, hiddenContent);\n\n    return newTaskCard;\n  }\n\n  // function for the delete button of the new card form\n  handleDelete() {\n    const allViewPage = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allViewPage;\n    this.titleInput.value = \"\";\n    this.dateInput.value = \"\";\n    this.prioritySelect.value = \"\";\n    this.descriptionInput.value = \"\";\n    this.currentContent.innerHTML = \"\";\n    this.currentContent.appendChild(allViewPage);\n    this.formActive = false;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskManager);\n\n//\n//\n\n// funktion zum checkbox hinzufügen\n// buttons zur card hinzufügen mit bearbeiten und löschen\n\n\n//# sourceURL=webpack://todo--top/./src/newTaskManager.js?");

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