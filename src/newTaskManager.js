import DomElements from "./DOM";
import HandleNavButtons from "./handleViewOptions";

class NewTaskManager {
  static instance = null;
  static taskList = [];
  static getTaskList() {
    return NewTaskManager.taskList;
  }

  constructor() {
    if (NewTaskManager.instance) {
      return NewTaskManager.instance;
    }
    this.sideNav = document.querySelector(".sideNav");
    this.formActive = false;
    this.addTaskButton = DomElements.addTaskButton;
    this.addTaskTitle = DomElements.addTaskTitle;
    this.currentContent = DomElements.currentContent;
    this.allViewPage = DomElements.allViewPage;
    this.todaysTasksPage = DomElements.todayViewPage;
    this.tomorrowsTasksPage = DomElements.tomorrowViewPage;
    this.upcomingTasksPage = DomElements.upcomingViewPage;
    this.allTasksButton = DomElements.allTasksButton;
    this.todayTasksButton = DomElements.todayTasksButton;
    this.tomorrowTasksButton = DomElements.tomorrowTasksButton;
    this.upcomingTasksButton = DomElements.upcomingTasksButton;
    this.counter = 1;
    this.navButtons = [
      this.allTasksButton,
      this.todayTasksButton,
      this.tomorrowTasksButton,
      this.upcomingTasksButton,
    ];

    this.initializeEventListeners();
    NewTaskManager.instance = this;
    this.loadTasksFromStorage();
    this.loadStartPage();
  }

  initializeEventListeners() {
    this.addTaskButton.addEventListener("click", () => this.newTaskForm());

    this.addTaskButton.addEventListener("mouseenter", () => {
      this.addTaskTitle.style.opacity = "1";
      this.addTaskTitle.style.transform = "translateX(0)";
      this.addTaskTitle.style.zIndex = "10";
    });

    this.addTaskButton.addEventListener("mouseleave", () => {
      this.addTaskTitle.style.opacity = "0";
      this.addTaskTitle.style.transform = "translateX(100%)";
      this.addTaskTitle.style.zIndex = "-1";
    });
  }

  // load the page of all tasks to display them directly from the storage
  loadStartPage() {
    HandleNavButtons.viewAllTasks.style.display = "flex";
    this.counterReset();
  }

  //function to save the taskList to the local storage
  saveTasksToLocalStorage() {
    const tasksData = NewTaskManager.taskList.map((task) => task.data);
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  }

  //function to load the tasklist from the local storage and display them through updateScreen();
  loadTasksFromStorage() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasksData = JSON.parse(storedTasks);
      tasksData.forEach((taskData) => {
        const taskElement = this.createTaskCard(taskData);
        NewTaskManager.taskList.push({ data: taskData, element: taskElement });
      });
      this.updateScreen();
    }
  }

  counterReset() {
    if (this.counter > 100) {
      this.counter = 1;
    }
  }

  //creates a new task form pop up window when user clicks on the plus icon
  newTaskForm() {
    // checks if the form is already displayed
    if (this.formActive === false) {
      this.formActive = true;
      //remove all containers for the form pop up

      //created the form to append
      const newTaskForm = this.createFormElements();
      // newTaskForm.classList.add("new-task");
      //creates the blurry background
      const blurredScreen = document.createElement("div");
      blurredScreen.classList.add("blurred-screen");

      this.currentContent.append(newTaskForm, blurredScreen);
    } else {
      alert("Please fill out the displayed form");
    }
  }

  //creates the elements for the form
  createFormElements() {
    const newTaskForm = document.createElement("div");
    newTaskForm.classList.add("new-task");

    this.titleInput = this.createInputField("Title", "title", "text");
    this.dateInput = this.createInputField("Date", "date", "date");
    this.prioritySelect = this.createSelectField("priority-input", [
      "High",
      "Medium",
      "Low",
    ]);
    this.projectSelection = this.createProjectSelection();
    this.descriptionInput = this.createDescriptionField("description");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const submitButton = this.createButtons("Submit", "submit-button");
    submitButton.addEventListener("click", () => {
      this.handleSubmit();
    });
    const deleteButton = this.createButtons("Delete", "delete-button");
    deleteButton.addEventListener("click", () => {
      this.handleDelete();
    });

    buttonContainer.append(submitButton, deleteButton);

    newTaskForm.append(
      this.titleInput,
      this.dateInput,
      this.prioritySelect,
      this.projectSelection,
      this.descriptionInput,
      buttonContainer
    );

    return newTaskForm;
  }

  //creates the input fields of the form
  createInputField(headerText, inputClass, type) {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("form-div");

    const inputHeader = document.createElement("label");
    inputHeader.textContent = headerText;
    inputHeader.classList.add(`${inputClass}-caption`);

    const input = document.createElement("input");
    input.type = type;
    input.classList.add(`${inputClass}-input`, "formInput");

    inputContainer.append(inputHeader, input);
    return inputContainer;
  }

  //creates the select field of the form
  createSelectField(selectClass, options) {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("form-div");

    const label = document.createElement("label");
    label.textContent = "Priority";
    label.classList.add("priority-caption");

    const select = document.createElement("select");
    select.classList.add(selectClass, "formInput");

    options.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      select.appendChild(option);
    });

    inputContainer.append(label, select);
    return inputContainer;
  }

  // creates the project selection field of the form
  createProjectSelection() {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("form-div");

    const label = document.createElement("label");
    label.classList.add("form-project-label");
    label.textContent = "Project";

    const select = document.createElement("select");
    select.classList.add("form-project-select");
    select.classList.add("formInput");

    // search for all created projects in the DOM
    const optionElements = Array.from(
      document.querySelectorAll(".new-project-nav-btn")
    );

    //filter the elements for their innerHTML to add them to the selection
    const innerHTMLArray = optionElements.map(function (element) {
      return element.textContent;
    });

    //adding option for No Project
    const noProject = "No Project";
    innerHTMLArray.push(noProject);

    innerHTMLArray.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      select.appendChild(option);
    });

    projectContainer.append(label, select);
    return projectContainer;
  }

  //creates the description field of the form
  createDescriptionField(descriptionClass) {
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("form-div");

    const label = document.createElement("label");
    label.classList.add(`${descriptionClass}-caption`);
    label.textContent = "Description";

    const textArea = document.createElement("textarea");
    textArea.classList.add(`${descriptionClass}-input`, "formInput");

    descriptionContainer.append(label, textArea);
    return descriptionContainer;
  }

  //creates the buttons of the form
  createButtons(buttonText, buttonClass) {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.add(buttonClass, "form-button");

    return button;
  }

  // function for the delete button of the new task form
  handleDelete() {
    const allViewPage = DomElements.allViewPage;
    this.titleInput.value = "";
    this.dateInput.value = "";
    this.prioritySelect.value = "";
    this.descriptionInput.value = "";
    allViewPage.style.display = "flex";
    this.formActive = false;
    this.currentContent.removeChild(document.querySelector(".new-task"));
    this.currentContent.removeChild(document.querySelector(".blurred-screen"));
    this.todaysTasksPage.style.display = "none";
    this.tomorrowsTasksPage.style.display = "none";
    this.upcomingTasksPage.style.display = "none";
    this.saveTasksToLocalStorage();
  }

  //submit handler
  handleSubmit() {
    const allViewPage = DomElements.allViewPage;
    const taskData = {
      title: this.titleInput.querySelector(".title-input").value,
      date: this.dateInput.querySelector(".date-input").value,
      priority: this.prioritySelect.querySelector(".priority-input").value,
      description:
        this.descriptionInput.querySelector(".description-input").value,
      id: `new-task-card-${this.counter}`,
      project: this.projectSelection.querySelector(".form-project-select")
        .value,
      isChecked: false,
    };

    this.counter++;

    const newTaskCard = this.createTaskCard(taskData);
    newTaskCard.style.height = "5rem";
    NewTaskManager.taskList.push({ data: taskData, element: newTaskCard });

    // remove task form and blurred screen after clicking on submit
    const taskForm = document.querySelector(".new-task");
    const blurredScreen = document.querySelector(".blurred-screen");
    this.currentContent.removeChild(taskForm);
    this.currentContent.removeChild(blurredScreen);

    // appending the tasks to the current content screen
    allViewPage.style.display = "flex";
    this.todaysTasksPage.style.display = "none";
    this.tomorrowsTasksPage.style.display = "none";
    this.upcomingTasksPage.style.display = "none";
    this.formActive = false;

    // updating the screen with the tasks in the array
    this.saveTasksToLocalStorage();
    this.updateScreen();
  }

  // function to detect todays date and format it like the date in the tasks
  isToday() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }
  //function to detect todays date and add one day for tomorrow date
  isTomorrow() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const Tomorrow = parseFloat(day) + 1;
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${year}-${month}-${Tomorrow}`;
  }

  updateScreen() {
    // get todays date and the numbers for month and year
    const today = this.isToday();
    const tomorrow = this.isTomorrow();

    //filter tasklist for all tasks
    const allTasks = NewTaskManager.taskList;

    // filter tasklist by the todays date
    const todaysTasks = NewTaskManager.taskList.filter(
      (task) => task.data.date === today
    );

    // filter tasklist by the date of tomorrow
    const tomorrowTasks = NewTaskManager.taskList.filter(
      (task) => task.data.date === tomorrow
    );

    //filter tasks by date bigger than today
    const upcomingTasks = NewTaskManager.taskList.filter(
      (task) => task.data.date > tomorrow
    );

    //sort tasks after priority
    NewTaskManager.taskList.sort(
      (a, b) =>
        this.priorityToNumber(b.data.priority) -
        this.priorityToNumber(a.data.priority)
    );

    //collect all project pages which got created
    const projectPages = Array.from(document.querySelectorAll(".project-page"));

    //clear all task pages
    this.allViewPage.innerHTML = "";
    this.todaysTasksPage.innerHTML = "";
    this.tomorrowsTasksPage.innerHTML = "";
    this.upcomingTasksPage.innerHTML = "";

    //append task with priority colorization
    if (HandleNavButtons.currentPage === "allTasks") {
      allTasks.forEach((taskObject) =>
        this.appendTaskToPage(taskObject, this.allViewPage)
      );
    } else if (HandleNavButtons.currentPage === "todayTasks") {
      todaysTasks.forEach((taskObject) =>
        this.appendTaskToPage(taskObject, this.todaysTasksPage)
      );
    } else if (HandleNavButtons.currentPage === "tomorrowTasks") {
      tomorrowTasks.forEach((taskObject) =>
        this.appendTaskToPage(taskObject, this.tomorrowsTasksPage)
      );
    } else if (HandleNavButtons.currentPage === "upcomingTasks") {
      upcomingTasks.forEach((taskObject) =>
        this.appendTaskToPage(taskObject, this.upcomingTasksPage)
      );
    } else if (HandleNavButtons.currentPage === "project-page") {
      //search for the active project page
      let activePage = projectPages.filter((page) => {
        let style = window.getComputedStyle(page);
        return style.display === "flex";
      });
      activePage = activePage[0];
      activePage.innerHTML = "";

      allTasks.forEach((taskObject) => {
        if (`Project-${taskObject.data.project}` === activePage.classList[1]) {
          this.appendTaskToPage(taskObject, activePage);
          console.log(taskObject.data.project);
          console.log(activePage.classList[1]);
        }
      });
    }

    //change color from priority title
    const taskPriorityDiv = document.querySelectorAll(".card-task-priority");

    taskPriorityDiv.forEach((task) => {
      switch (task.innerHTML) {
        case "High":
          task.classList.add("priority-high-title");
          break;
        case "Medium":
          task.classList.add("priority-medium-title");
          break;
        case "Low":
          task.classList.add("priority-low-title");
          break;
      }
    });

    //searching for the  buttons to create the functionality to set the active project button
    const projectNavBar = document.querySelector(".projects");
    this.projectButtons = projectNavBar.querySelectorAll(
      ".new-project-nav-btn"
    );

    this.allButtons = Array.from(this.projectButtons).concat(
      Array.from(this.navButtons)
    );

    this.allButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        this.setActiveButton(event.currentTarget);
      });
    });
  }

  setActiveButton(activeButton) {
    this.allButtons.forEach((button) => {
      button.classList.remove("active");
    });
    activeButton.classList.add("active");
  }

  // function for appending the tasks
  appendTaskToPage(taskObject, page) {
    taskObject.element.className = "task-card";
    if (taskObject.isChecked) {
      //change title text decoration and color by checking checkbox
      taskObject.element.classList.toggle("checked-checkbox-font");
      taskObject.element.classList.toggle("checked-checkbox-font");
      taskObject.element.classList.toggle("checked-checkbox-background");
    } else if (taskObject.isChecked === false) {
      //change title text decoration and color by checking checkbox
      taskObject.element.classList.toggle("checked-checkbox-font");
      taskObject.element.classList.toggle("checked-checkbox-font");
    }

    //change color for the priority
    switch (taskObject.data.priority) {
      case "High":
        taskObject.element.classList.add("priority-high");
        break;
      case "Medium":
        taskObject.element.classList.add("priority-medium");
        break;
      case "Low":
        taskObject.element.classList.add("priority-low");
        break;
    }
    page.appendChild(taskObject.element);
  }

  // function to set the priorities to number so the task list can be ordered by priority
  priorityToNumber(priority) {
    switch (priority) {
      case "High":
        return 3;

      case "Medium":
        return 2;

      case "Low":
        return 1;
    }
  }

  // create task card
  createTaskCard(taskData) {
    const newTaskCard = document.createElement("div");
    newTaskCard.dataset.id = taskData.id;
    newTaskCard.dataset.classList = `Project-${taskData.project.replace(
      /\s+/g,
      "-"
    )}`;

    // container for the not expanded part of the task
    const visibleContent = document.createElement("div");
    visibleContent.classList.add("card-task-visible");

    //container for the hidden task part
    const hiddenContent = document.createElement("div");
    hiddenContent.classList.add("card-task-hidden");
    hiddenContent.style.display = "none";

    //create checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("card-task-checkbox");

    checkBox.addEventListener("click", (event) => {
      event.stopPropagation();

      //find task which gets checked
      let taskChecked = event.target.closest(".task-card");
      let taskId = taskChecked.dataset.id;
      let taskChildren = taskChecked.children[0];
      let taskChildren2 = taskChecked.children[1];
      const priorityText = taskChildren.children[2];

      // finding task with taskId
      let index = NewTaskManager.taskList.findIndex(
        (task) => task.data.id === taskId
      );
      console.log(taskId);
      console.log(index);
      NewTaskManager.taskList[index].data.isChecked = NewTaskManager.taskList[
        index
      ].data.isChecked
        ? false
        : true;

      //change title text decoration and color by checking checkbox
      cardTaskTitle.classList.toggle("checked-checkbox-font");
      cardTaskPriority.classList.toggle("checked-checkbox-font");
      newTaskCard.classList.toggle("checked-checkbox-background");
      cardTaskDeleteBtn.classList.toggle("checkbox-checked");
      cardTaskEditBtn.classList.toggle("checkbox-checked");
      priorityText.classList.toggle("priority-checked");

      taskChildren.classList.toggle("checked-checkbox-background");
      taskChildren2.classList.toggle("checked-checkbox-background");
    });

    // create title field
    const cardTaskTitle = document.createElement("label");
    cardTaskTitle.textContent = taskData.title;
    cardTaskTitle.classList.add("card-task-title");
    //setting color for event listener function
    cardTaskTitle.style.color = "rgb(59, 59, 59)";

    // create project field
    const cardTaskProject = document.createElement("label");
    cardTaskProject.textContent = `Project: ${taskData.project}`;
    cardTaskProject.classList.add("card-task-project");

    // create date field
    const cardTaskDate = document.createElement("div");
    cardTaskDate.textContent = `DueDate: ${taskData.date}`;
    cardTaskDate.classList.add("card-task-date");

    //create container for project and date
    const dateProjectContainer = document.createElement("div");
    dateProjectContainer.classList.add("date-project-container");

    dateProjectContainer.append(cardTaskProject, cardTaskDate);

    // create selection field
    const cardTaskPriority = document.createElement("div");
    cardTaskPriority.textContent = taskData.priority;
    cardTaskPriority.classList.add("card-task-priority");
    cardTaskPriority.style.color = "rgb(59, 59, 59)";

    // create description field
    const cardTaskDescription = document.createElement("div");
    cardTaskDescription.textContent = `Description: ${taskData.description}`;
    cardTaskDescription.classList.add("card-task-description");

    // create container for delete and change buttons
    const cardTaskBtnContainer = document.createElement("div");
    cardTaskBtnContainer.classList.add("card-task-btn-container");

    //create delete button with the function the delete the task
    const cardTaskDeleteBtn = document.createElement("button");
    cardTaskDeleteBtn.textContent = "Delete";
    cardTaskDeleteBtn.classList.add("card-task-delete-btn");
    cardTaskDeleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      //get task by the class and set it as the id for finding it in the taskList array
      let taskToDelete = event.target.closest(".task-card");
      let taskId = taskToDelete.dataset.id;

      // finding task with taskId
      let index = NewTaskManager.taskList.findIndex(
        (task) => task.data.id === taskId
      );

      const allPages = Array.from(document.querySelectorAll(".task-page"));
      const allProjectPages = document.querySelectorAll(".project-page");
      allProjectPages.forEach((page) => {
        allPages.push(page);
      });

      allPages.forEach((page) => {
        if (
          page.classList.contains("project-page") &&
          page.style.display === "flex"
        ) {
          //delete the taskCard from the project pages
          const taskProject = NewTaskManager.taskList[index];
          const taskProjectX = taskProject.data.project.replace(/\s+/g, "-");

          //find project page
          const projectPageToDeleteTask = document.querySelector(
            `.Project-${taskProjectX}`
          );

          //find taskCard
          const taskCardToDelete = document.querySelector(
            `[data-class-list="Project-${taskProjectX}"]`
          );
          //remove from the project page
          projectPageToDeleteTask.removeChild(taskCardToDelete);
        }
      });

      //delete the task in the taskList
      if (index !== -1) {
        NewTaskManager.taskList.splice(index, 1);
        this.saveTasksToLocalStorage();
        this.updateScreen();
      }
    });

    //create edit button with function to edit the task
    const cardTaskEditBtn = document.createElement("button");
    cardTaskEditBtn.textContent = "Edit";
    cardTaskEditBtn.classList.add("card-task-edit-btn");
    // function for editing the task
    cardTaskEditBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      // get task object
      let taskCard = event.target.closest(".task-card");
      let taskId = taskCard.dataset.id;
      this.editTaskForm(taskId);
    });

    newTaskCard.style.height = "5rem";

    //add event listener with function to expand a task card
    newTaskCard.addEventListener("click", function (event) {
      const clickedTaskCard = event.target.closest(".task-card");
      const hiddenCard = clickedTaskCard.children[1];

      let clickedTaskCardChild = clickedTaskCard.children[0];
      const priorityText = clickedTaskCardChild.children[2];

      hiddenContent.style.display =
        hiddenContent.style.display === "none" ? "flex" : "none";
      newTaskCard.style.height =
        newTaskCard.style.height === "5rem" ? "auto" : "5rem";
      visibleContent.classList.toggle("card-task-visible-border");

      switch (priorityText.innerHTML) {
        case "High":
          clickedTaskCardChild.classList.toggle(
            "card-task-background-color-high"
          );
          hiddenCard.classList.toggle("hidden-background-color-high");
          break;

        case "Medium":
          clickedTaskCardChild.classList.toggle(
            "card-task-background-color-medium"
          );
          hiddenCard.classList.toggle("hidden-background-color-medium");
          break;

        case "Low":
          clickedTaskCardChild.classList.toggle(
            "card-task-background-color-low"
          );
          hiddenCard.classList.toggle("hidden-background-color-low");
          break;
      }
    });

    // append all elements
    cardTaskBtnContainer.append(cardTaskDeleteBtn, cardTaskEditBtn);
    visibleContent.append(checkBox, cardTaskTitle, cardTaskPriority);
    hiddenContent.append(
      dateProjectContainer,
      cardTaskDescription,
      cardTaskBtnContainer
    );

    newTaskCard.append(visibleContent, hiddenContent);

    return newTaskCard;
  }

  editTaskForm = (taskId) => {
    const taskObject = NewTaskManager.taskList.find(
      (task) => task.data.id === taskId
    );

    if (taskObject) {
      // blurred screen for background
      const blurredScreen = document.createElement("div");
      blurredScreen.classList.add("blurred-screen");
      //create form div
      const editForm = document.createElement("div");
      editForm.className = "edit-form";
      // create title
      const editTitle = document.createElement("h2");
      editTitle.textContent = "Title";
      editTitle.className = "edit-title";
      //create title input field with the value of the task to edit
      const editTitleInput = document.createElement("input");
      editTitleInput.className = "edit-title-input";
      editTitleInput.value = taskObject.data.title;
      //create project field
      const editProject = document.createElement("h2");
      editProject.textContent = "Project";
      editProject.className = "edit-project-title";
      //create project selection field with the value of the task to edit
      const editProjectInput = document.createElement("select");
      editProjectInput.className = "edit-project-input";
      //create the options to select"
      const optionElements = Array.from(
        document.querySelectorAll(".new-project-nav-btn")
      );
      const innerHTMLArray = optionElements.map(function (element) {
        return element.textContent;
      });

      const noProject = "No Project";

      innerHTMLArray.push(noProject);

      innerHTMLArray.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        editProjectInput.appendChild(option);
      });

      //create date
      const editDate = document.createElement("h2");
      editDate.textContent = "Date";
      editDate.className = "edit-date";
      //create date input field with the value of the task to edit
      const editDateInput = document.createElement("input");
      editDateInput.className = "edit-date-input";
      editDateInput.type = "date";
      editDateInput.value = taskObject.data.date;
      //create priority
      const editPriority = document.createElement("h2");
      editPriority.textContent = "Priority";
      editPriority.className = "edit-priority";
      //create priority input field with the value of the task to edit
      const editPriorityInput = document.createElement("select");
      editPriorityInput.className = "edit-priority-input";
      // create the options to select
      const options = ["High", "Medium", "Low"];
      options.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        editPriorityInput.appendChild(option);
        editPriorityInput.value = taskObject.data.priority;
      });

      // create description
      const editDescription = document.createElement("h2");
      editDescription.textContent = "Description";
      editDescription.className = "edit-description";
      //create description input field with the value of the task to edit
      const editDescriptionInput = document.createElement("textarea");
      editDescriptionInput.className = "edit-description-input";
      editDescriptionInput.value = taskObject.data.description;
      //create button container
      const editButtonContainer = document.createElement("div");
      editButtonContainer.className = "edit-button-container";
      // create button for submitting the changes
      const editSubmitBtn = document.createElement("button");
      editSubmitBtn.className = "edit-submit-button";
      editSubmitBtn.textContent = "Save";

      //add event listener to the edit submit button
      editSubmitBtn.addEventListener("click", () => {
        //change the task values in the taskList
        let taskIndex = NewTaskManager.taskList.findIndex(
          (task) => task.data.id === taskId
        );

        NewTaskManager.taskList[taskIndex].data.title = editTitleInput.value;
        NewTaskManager.taskList[taskIndex].data.date = editDateInput.value;
        NewTaskManager.taskList[taskIndex].data.project =
          editProjectInput.value;
        NewTaskManager.taskList[taskIndex].data.priority =
          editPriorityInput.value;
        NewTaskManager.taskList[taskIndex].data.description =
          editDescriptionInput.value;

        // create new taskData for the new taskCard after editing
        const taskData = {
          title: NewTaskManager.taskList[taskIndex].data.title,
          date: NewTaskManager.taskList[taskIndex].data.date,
          project: NewTaskManager.taskList[taskIndex].data.project,
          priority: NewTaskManager.taskList[taskIndex].data.priority,
          description: NewTaskManager.taskList[taskIndex].data.description,
          id: taskId,
        };

        // create new task Card
        const updatedTaskCard = this.createTaskCard(taskData);
        updatedTaskCard.style.height = "5rem";
        NewTaskManager.taskList[taskIndex].element = updatedTaskCard;

        // remove form and blurry screen
        this.currentContent.removeChild(editForm);
        this.currentContent.removeChild(blurredScreen);

        // update screen
        this.saveTasksToLocalStorage();
        this.updateScreen();
      });

      //create cancel button
      let editCancelBtn = document.createElement("button");
      editCancelBtn.className = "edit-cancel-button";
      editCancelBtn.textContent = "Cancel";

      // ad event listener with function to the cancel button
      editCancelBtn.addEventListener("click", () => {
        this.currentContent.removeChild(editForm);
        this.currentContent.removeChild(blurredScreen);
        this.formActive = false;
      });

      //append the buttons to the button container
      editButtonContainer.append(editSubmitBtn, editCancelBtn);
      //append the elements to the form
      editForm.append(
        editTitle,
        editTitleInput,
        editProject,
        editProjectInput,
        editDate,
        editDateInput,
        editPriority,
        editPriorityInput,
        editDescription,
        editDescriptionInput,
        editButtonContainer
      );
      this.currentContent.append(editForm, blurredScreen);
    }
  };
}
export default NewTaskManager;
