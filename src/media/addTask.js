import DomElements from "../DOM";

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

      //decription
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
