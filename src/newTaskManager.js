import DomElements from "./DOM";
import HandleNavButtons from "./handleViewOptions";

class NewTaskManager {
  constructor() {
    this.formActive = false;
    this.addTaskButton = DomElements.addTaskButton;
    this.currentContent = DomElements.currentContent;
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

  //submit handler
  handleSubmit() {
    const allViewPage = DomElements.allViewPage;
    const taskData = {
      title: this.titleInput.querySelector(".title-input").value,
      date: this.dateInput.querySelector(".date-input").value,
      priority: this.prioritySelect.querySelector(".priority-input").value,
      description:
        this.descriptionInput.querySelector(".description-input").value,
    };

    const newTaskCard = this.createTaskCard(taskData);
    newTaskCard.style.height = "5rem";
    this.taskList.push(newTaskCard);
    allViewPage.innerHTML = "";

    // adding custom classes to the task cards and appending them to the all view page
    this.taskList.forEach((card, index) => {
      card.className = `new-task-card-${index + 1} task-card`;
      allViewPage.appendChild(card);
    });
    console.log(this.taskList);
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
  // create task card
  createTaskCard(taskData) {
    const newTaskCard = document.createElement("div");
    newTaskCard.classList.add("new-task-card");

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

    // create title field
    const cardTaskTitle = document.createElement("label");
    cardTaskTitle.textContent = taskData.title;
    cardTaskTitle.classList.add("card-task-title");

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
      let taskId = taskToDelete.classList[0];

      // finding task with taskId
      let index = this.taskList.find(
        (objekt) => objekt.className === taskToDelete.className
      );
      //delete the task in the taskList
      if (index !== -1) {
        this.taskList.splice(index, 1);
      }
      console.log(this.taskList);
      // remove taskcard from the page
      index.remove();
    });

    //create edit button with function to edit the task
    const cardTaskEditBtn = document.createElement("button");
    cardTaskEditBtn.textContent = "Edit";
    cardTaskEditBtn.classList.add("card-task-edit-btn");
    cardTaskEditBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      let taskCard = event.target.closest(".new-task-card");
      console.log(taskData);
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
}
export default NewTaskManager;

// TODO:
// delete funktion umschreiben: versuche auf die id der card zu kommen welche dan aus dem array gelöscht wird !
// funktion edit der card hinzufügen
// funktion zum checkbox hinzufügen
// funktion für die änderung der farbe der task card je nach priorität
