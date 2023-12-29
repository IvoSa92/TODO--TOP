import DomElements from "./DOM";

// function to create a new ToDo
export function createNewTaskForm() {
  let formActive = false;
  DomElements.addTaskButton.addEventListener("click", () => {
    //create Form Pop Up Window:
    if (formActive === false) {
      formActive = true;

      let newTaskForm = document.createElement("div");
      newTaskForm.classList.add("new-task");

      // title
      let titleCaption = document.createElement("p");
      titleCaption.classList.add("title-caption");
      titleCaption.textContent = "Task Title";

      let titleInput = document.createElement("input");
      titleInput.classList.add("title-input", "formInput");

      //date
      let dateCaption = document.createElement("p");
      dateCaption.classList.add("date-caption");
      dateCaption.textContent = "Date";
      let dateInput = document.createElement("input");
      dateInput.setAttribute("type", "date");
      dateInput.classList.add("date-input", "formInput");

      //priority selection
      let priorityCaption = document.createElement("p");
      priorityCaption.classList.add("priority-caption");
      priorityCaption.textContent = "Priority";
      let priorityInput = document.createElement("select");
      priorityInput.classList.add("priority-input", "formInput");

      let options = ["High", "Medium", "Low"];
      options.forEach((optionText) => {
        let option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        priorityInput.appendChild(option);
      });

      //description
      let descriptionCaption = document.createElement("p");
      descriptionCaption.classList.add("description-caption");
      descriptionCaption.textContent = "Description";
      let descriptionInput = document.createElement("textarea");
      descriptionInput.classList.add("description-input", "formInput");

      //buttons
      let buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");

      //submit button
      let submitButton = document.createElement("button");
      submitButton.classList.add("submit-button", "form-button");
      submitButton.textContent = "Submit";

      //delete button
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button", "form-button");
      deleteButton.textContent = "Delete";
      buttonContainer.append(submitButton, deleteButton);

      //appending all elements:
      newTaskForm.append(
        titleCaption,
        titleInput,
        dateCaption,
        dateInput,
        priorityCaption,
        priorityInput,
        descriptionCaption,
        descriptionInput,
        buttonContainer
      );

      DomElements.currentContent.append(newTaskForm);
    } else if (formActive === true) {
      alert("Please fill out the displayed form");
    }
  });
}

// Jetzt Submit und Delete Button programmieren, erst mal als einzelne function weil es als class iwie nicht geklappt hat

/*
import DomElements from "../DOM";

class TaskFormManager {
    constructor() {
        this.formActive = false;
        this.addTaskButton = DomElements.addTaskButton;
        this.currentContent = DomElements.currentContent;
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.addTaskButton.addEventListener("click", () => this.createNewTaskForm());
    }

    createNewTaskForm() {
        if (this.formActive===false) {
            this.formActive = true;
            const newTaskForm = this.createFormElements();
            this.currentContent.append(newTaskForm);
        } else {
            alert("Please fill out the displayed form");
        }
    }

    createFormElements() {
        const newTaskForm = document.createElement("div");
        newTaskForm.classList.add("new-task");

        this.titleInput = this.createInputField("Task Title", "title-input");
        this.dateInput = this.createInputField("Date", "date-input", "date");
        this.prioritySelect = this.createSelectField("priority-input", ["High", "Medium", "Low"]);
        this.descriptionTextArea = this.createTextAreaField("description-input");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const submitButton = this.createButton("Submit", "submit-button");
        submitButton.addEventListener("click", () => this.handleSubmit());
        
        const deleteButton = this.createButton("Delete", "delete-button");

        buttonContainer.append(submitButton, deleteButton);
        newTaskForm.append(
            this.titleInput, 
            this.dateInput, 
            this.prioritySelect, 
            this.descriptionTextArea, 
            buttonContainer
        );

        return newTaskForm;
    }

    createInputField(labelText, inputClass, type = "text") {
        const wrapper = document.createElement('div');

        const label = document.createElement('label');
        label.textContent = labelText;
        label.classList.add(labelText.toLowerCase().replace(" ", "-") + "-caption");

        const input = document.createElement('input');
        input.type = type;
        input.classList.add(inputClass, "formInput");

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        return wrapper;
    }

    createSelectField(selectClass, options) {
        const wrapper = document.createElement('div');

        const label = document.createElement('label');
        label.textContent = "Priority";
        label.classList.add("priority-caption");

        const select = document.createElement('select');
        select.classList.add(selectClass, "formInput");
        options.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText;
            option.textContent = optionText;
            select.appendChild(option);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        return wrapper;
    }

    createTextAreaField(textAreaClass) {
        const wrapper = document.createElement('div');

        const label = document.createElement('label');
        label.textContent = "Description";
        label.classList.add("description-caption");

        const textArea = document.createElement('textarea');
        textArea.classList.add(textAreaClass, "formInput");

        wrapper.appendChild(label);
        wrapper.appendChild(textArea);
        return wrapper;
    }

    createButton(buttonText, buttonClass) {
        const button = document.createElement('button');
        button.textContent = buttonText;
        button.classList.add(buttonClass, "form-button");
        return button;
    }

    handleSubmit() {
        const task = {
            title: this.titleInput.querySelector('input').value,
            date: this.dateInput.querySelector('input').value,
            priority: this.prioritySelect.querySelector('select').value,
            description: this.descriptionTextArea.querySelector('textarea').value
        };

        console.log(task); // Hier haben Sie das Task-Objekt. Sie können es weiter verarbeiten.
        this.formActive = false; // Formularstatus zurücksetzen
    }
}

export default TaskFormManager;
*/
