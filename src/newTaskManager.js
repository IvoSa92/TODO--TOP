import DomElements from "./DOM";
import HandleNavButtons from "./handleViewOptions";

class NewTaskManager {
  constructor() {
    this.formActive = false;
    this.addTaskButton = DomElements.addTaskButton;
    this.currentContent = DomElements.currentContent;
    this.allViewPage = DomElements.allViewPage;
    this.taskList = [];
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.addTaskButton.addEventListener("click", () => this.newTaskForm());
  }

  //creates a new task form pop up window when user clicks on the plus icon
  newTaskForm() {
    // checks if the form is already displayed
    if (this.formActive === false) {
      this.formActive = true;
      //remove all containers for the form pop up
      // this.currentContent.innerHTML = "";
      //created the form to append
      const newTaskForm = this.createFormElements();
      //newTaskForm.classList.add("new-task");
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
    this.currentContent.innerHTML = "";
    this.currentContent.appendChild(allViewPage);
    this.formActive = false;
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
      id: `new-task-card-${this.taskList.length + 1}`,
    };

    const newTaskCard = this.createTaskCard(taskData);
    newTaskCard.style.height = "5rem";
    this.taskList.push({ data: taskData, element: newTaskCard });
    allViewPage.innerHTML = "";

    // updating the screen with the tasks in the array
    this.updateScreen();

    // remove task form and blurred screen after clicking on submit
    const taskForm = document.querySelector(".new-task");
    const blurredScreen = document.querySelector(".blurred-screen");
    this.currentContent.removeChild(taskForm);
    this.currentContent.removeChild(blurredScreen);
    // appending the tasks to the current content screen
    this.currentContent.appendChild(allViewPage);
    allViewPage.style.display = "flex";
    this.formActive = false;
  }

  // function for append all tasks as task card to the screen
  updateScreen() {
    this.allViewPage.innerHTML = "";

    this.taskList.forEach((taskObject) => {
      taskObject.element.className = "task-card";
      this.allViewPage.appendChild(taskObject.element);
    });
  }

  // create task card
  createTaskCard(taskData) {
    const newTaskCard = document.createElement("div");
    newTaskCard.classList.add("new-task-card");
    newTaskCard.dataset.id = taskData.id;
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
      //change title text decoration by checking checkbox
      cardTaskTitle.style.textDecoration =
        cardTaskTitle.style.textDecoration === "line-through"
          ? ""
          : "line-through";
      //change text color by checking checkbox
      cardTaskTitle.style.color =
        cardTaskTitle.style.color === "rgb(59, 59, 59)"
          ? "#6d6868"
          : "rgb(59, 59, 59)";
      //changing priority text color by checking checkbox

      console.log("check");
    });

    // create title field
    const cardTaskTitle = document.createElement("label");
    cardTaskTitle.textContent = taskData.title;
    cardTaskTitle.classList.add("card-task-title");
    //setting color for event listener function
    cardTaskTitle.style.color = "rgb(59, 59, 59)";

    // create date field
    const cardTaskDate = document.createElement("div");
    cardTaskDate.textContent = `DueDate: ${taskData.date}`;
    cardTaskDate.classList.add("card-task-date");

    // create selection field
    const cardTaskPriority = document.createElement("div");
    cardTaskPriority.textContent = taskData.priority;
    cardTaskPriority.classList.add("card-task-priority");

    // create description field
    const cardTaskDescription = document.createElement("div");
    cardTaskDescription.textContent = taskData.description;
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
      let index = this.taskList.findIndex((task) => task.data.id === taskId);

      //delete the task in the taskList
      if (index !== -1) {
        this.taskList.splice(index, 1);
        this.updateScreen();
      }

      console.log(this.taskList);
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

    //add event listener with function to expand a task card

    newTaskCard.addEventListener("click", function () {
      hiddenContent.style.display =
        hiddenContent.style.display === "none" ? "flex" : "none";
      newTaskCard.style.height =
        newTaskCard.style.height === "5rem" ? "auto" : "5rem";
    });

    // append all elements
    cardTaskBtnContainer.append(cardTaskDeleteBtn, cardTaskEditBtn);
    visibleContent.append(checkBox, cardTaskTitle, cardTaskPriority);
    hiddenContent.append(
      cardTaskDate,
      cardTaskDescription,
      cardTaskBtnContainer
    );

    newTaskCard.append(visibleContent, hiddenContent);

    return newTaskCard;
  }

  expandTaskCard() {}

  editTaskForm = (taskId) => {
    const taskObject = this.taskList.find((task) => task.data.id === taskId);
    console.log(taskObject);
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
        let taskIndex = this.taskList.findIndex(
          (task) => task.data.id === taskId
        );

        this.taskList[taskIndex].data.title = editTitleInput.value;
        this.taskList[taskIndex].data.date = editDateInput.value;
        this.taskList[taskIndex].data.priority = editPriorityInput.value;
        this.taskList[taskIndex].data.description = editDescriptionInput.value;
        // create new taskData for the new taskCard after editing
        const taskData = {
          title: this.taskList[taskIndex].data.title,
          date: this.taskList[taskIndex].data.date,
          priority: this.taskList[taskIndex].data.priority,
          description: this.taskList[taskIndex].data.description,
          id: taskId,
        };
        // create new task Card
        const updatedTaskCard = this.createTaskCard(taskData);
        updatedTaskCard.style.height = "5rem";
        this.taskList[taskIndex].element = updatedTaskCard;

        // remove form and blurry screen
        this.currentContent.removeChild(editForm);
        this.currentContent.removeChild(blurredScreen);
        // update screen
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

// TODO:
// beim checkbox clicken soll die prio auch die farbe ändern
// funktion zum checkbox hinzufügen
// funktion für die änderung der farbe der task card je nach priorität
