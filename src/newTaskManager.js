import DomElements from "./DOM";
import HandleNavButtons from "./handleViewOptions";

class NewTaskManager {
  constructor() {
    this.formActive = false;
    this.addTaskButton = DomElements.addTaskButton;
    this.currentContent = DomElements.currentContent;
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.addTaskButton.addEventListener("click", () => this.newTaskForm());
  }

  //creates a new task form pop up window
  newTaskForm() {
    // checks if the for is already displayed
    if (this.formActive === false) {
      this.formActive = true;
      //remove all containers for the form pop up
      this.currentContent.innerHTML = "";
      //created the form to append
      const newTaskForm = this.createFormElements();
      newTaskForm.classList.add("new-task");
      //creates the blurry background
      const blurredScreen = document.createElement("div");
      blurredScreen.classList.add("blurred-screen");

      this.currentContent.append(newTaskForm, blurredScreen);
    } else {
      alert("Please fill out the displayed form ");
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

    const allTasksPage = DomElements.allViewPage;
    allTasksPage.appendChild(newTaskCard);

    this.currentContent.innerHTML = "";
    allViewPage.style.display = "flex";
    this.currentContent.appendChild(allViewPage);
    this.formActive = false;
  }

  createTaskCard(taskData) {
    // create task card
    const newTaskCard = document.createElement("div");
    newTaskCard.classList.add("new-task-card");

    //create checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    // create title field
    const cardTaskTitle = document.createElement("label");
    cardTaskTitle.textContent = taskData.title;
    cardTaskTitle.classList.add("card-task-title");

    // create date field
    const cardTaskDate = document.createElement("div");
    cardTaskDate.textContent = taskData.date;
    cardTaskDate.classList.add("card-task-date");

    // create selection field
    const cardTaskPriority = document.createElement("div");
    cardTaskPriority.textContent = taskData.priority;
    cardTaskPriority.classList.add("card-task-priority");

    // create description field
    const cardTaskDescription = document.createElement("div");
    cardTaskDescription.textContent = taskData.description;
    cardTaskDescription.classList.add("card-task-description");

    // append all elements
    newTaskCard.append(
      checkBox,
      cardTaskTitle,
      cardTaskDate,
      cardTaskPriority,
      cardTaskDescription
    );

    return newTaskCard;
  }
}
export default NewTaskManager;
