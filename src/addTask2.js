import DomElements from "./DOM";

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
      const newTaskForm = this.createFormElements();
      this.currentContent.appendChild(newTaskForm);
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
    this.descriptionInput = this.createDescriptionField("description-input");

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
      this.descriptionInput,
      this.descriptionInput,
      buttonContainer
    );
    return newTaskForm;
  }

  //creates the input fields of the form
  createInputField(headerText, inputClass, type) {
    const inputContainer = document.createElement("div");

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

    const label = document.createElement("label");
    label.classList.add(descriptionClass);
    label.textContent = "Description";

    const textArea = document.createElement("textarea");
    textArea.classList.add(descriptionClass, "formInput");

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
}
export default NewTaskManager;

// schreibe den code um den submit button zu handlen!!
