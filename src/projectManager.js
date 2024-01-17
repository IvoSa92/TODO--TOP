import DomElements from "./DOM";
import NewTaskManager from "./newTaskManager";

class ProjectManager {
  constructor() {
    this.taskList = NewTaskManager.taskList;
    this.newProjectButton = DomElements.newProjectButton;
    this.projectNav = DomElements.projects;
    this.initializeEventListeners();
  }
  // event listener for the new project button
  initializeEventListeners() {
    this.newProjectButton.addEventListener(
      "click",
      this.addNewProject.bind(this)
    );
  }

  //function for the input form to create a new project
  addNewProject() {
    const newForm = document.createElement("div");
    newForm.className = "project-form";

    const titleInput = document.createElement("input");
    titleInput.className = "project-title-input";
    titleInput.placeholder = "Project Title";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "project-button-container";

    const saveButton = document.createElement("button");
    saveButton.className = "project-save-button";
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.className = "project-cancel-button";
    cancelButton.textContent = "Cancel";

    buttonContainer.append(saveButton, cancelButton);
    newForm.append(titleInput, buttonContainer);

    this.projectNav.appendChild(newForm);
  }
}

export default ProjectManager;

// New project Button click:
// Form poppt auf direkt unter dem button mit einem Input Feld und 2 buttons 1:Ad 2: Cancel
