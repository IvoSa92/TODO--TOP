import DomElements from "./DOM";

class NewTaskManager {
  constructor() {
    this.formActive = false;
    this.addTaskButton = DomElements.addTaskButton;
    this.currentContent = DomElements.currentContent;
    this.addTaskButton.addEventListener("click", newTaskForm());
  }

  //creates a new task form pop up window
  newTaskForm() {
    // checks if the for is already displayed
    if (this.formActive === false) {
      this.formActive === true;
      const newTaskForm = this.createFormElements;
      this.currentContent.appendChild(newTaskForm);
    } else {
      alert("Please fill out the displayed form ");
    }
  }

  //creates the elements for the form
  createFormElements() {
    const newTaskForm = document.createElement("div");
    newTaskForm.classList.add("new-task");
  }

  //creates the input fields of the form
  createInputField(inputHeader, inputClass, type) {
    const inputContainer = document.createElement("div");

    const inputHeader = document.createElement("label");
    inputHeader.textContent = inputHeader;
    inputHeader.classList.add(`${inputHeader}-caption`);

    const input = document.createElement("input");
    input.type = type;
    input.classList.add(inputClass, "formInput");

    inputContainer.append(inputHeader, input);
    return inputContainer;
  }
}

export default NewTaskManager;
