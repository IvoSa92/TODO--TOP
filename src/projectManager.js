import DomElements from "./DOM";
import NewTaskManager from "./newTaskManager";

class ProjectManager {
  constructor() {
    this.taskList = NewTaskManager.taskList;
    this.newProjectButton = DomElements.newProjectButton;
    this.projectNav = DomElements.projects;
    this.initializeEventListeners();
    this.newProjectForm = false;
    this.titleInput = null;
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
    if (this.newProjectForm) {
      alert("Please fill out the new project form");
    } else {
      const newForm = document.createElement("div");
      newForm.className = "project-form";

      this.titleInput = document.createElement("input");
      this.titleInput.className = "project-title-input";
      this.titleInput.placeholder = "Project Title";

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "project-button-container";

      const saveButton = document.createElement("button");
      saveButton.className = "project-save-button";
      saveButton.textContent = "Save";
      saveButton.addEventListener(
        "click",
        this.createProjectNavLink.bind(this)
      );

      const cancelButton = document.createElement("button");
      cancelButton.className = "project-cancel-button";
      cancelButton.textContent = "Cancel";
      cancelButton.addEventListener("click", this.cancelNewProject.bind(this));

      buttonContainer.append(saveButton, cancelButton);
      newForm.append(this.titleInput, buttonContainer);

      this.projectNav.appendChild(newForm);
      this.newProjectForm = true;
    }
  }

  // function for adding a button with the project title to the nav bar
  createProjectNavLink() {
    if (this.titleInput.value !== "") {
      //create new button with the value of the input
      const newNavLink = document.createElement("button");
      newNavLink.className = "new-project-nav-btn";
      newNavLink.textContent = this.titleInput.value;
      //add an icon before the title
      const icon = document.createElement("img");
      icon.className = "project-icon";
      icon.src = "../src/media/target.png";
      newNavLink.prepend(icon);

      this.projectNav.appendChild(newNavLink);
      // find the project form to remove it from the DOM
      const projectForm = document.querySelector(".project-form");
      this.projectNav.removeChild(projectForm);
      // set back the value of the project form so a new one can pop up
      this.newProjectForm = false;
    } else {
      alert("please fill out the title input");
    }
  }

  // function for canceling the new project form
  cancelNewProject() {
    this.titleInput.value = "";
    const projectForm = document.querySelector(".project-form");
    this.projectNav.removeChild(projectForm);
    this.newProjectForm = false;
  }
}

export default ProjectManager;

// new project input form save click:
// delete new project form coden
// wenn man auf den button klickt öffnet sich eine neue view page mit dem dazugehörigen project title
