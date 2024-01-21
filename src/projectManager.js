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
    this.currentContent = DomElements.currentContent;
    this.projectButtonCount = 0;
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
      //
      this.projectNav.appendChild(newForm);
      this.newProjectForm = true;
    }
  }

  // function for adding a button with the project title to the nav bar
  createProjectNavLink() {
    if (this.titleInput.value !== "") {
      //create a div for the elements
      const newProjectDiv = document.createElement("div");
      newProjectDiv.className = "new-project-div";

      //create new button with the value of the input
      const newNavLink = document.createElement("button");
      newNavLink.addEventListener("click", (event) => {
        //search for target button ID
        let projectEvent = event.target.closest(".new-project-nav-btn");
        let projectId = projectEvent.id;
        let projectNum = projectId.substring(8);

        // create project page and append it to the screen
        this.currentContent.innerHTML = "";
        const newProjectPage = document.createElement("div");
        newProjectPage.setAttribute("id", `projectPage-${projectNum}`);
        newProjectPage.className = "project-page";

        this.currentContent.appendChild(newProjectPage);
      });

      newNavLink.className = "new-project-nav-btn";
      this.projectButtonCount++;
      //set id for customization the project button for later use
      newNavLink.setAttribute("id", `project-${this.projectButtonCount}`);
      newNavLink.textContent = this.titleInput.value;
      //add an icon before the title
      const icon = document.createElement("img");
      icon.className = "project-icon";
      icon.src = "../src/media/target.png";

      //create edit and delete buttons
      const buttonContainer = document.createElement("div");
      buttonContainer.className = "project-buttons";

      const deleteProject = document.createElement("button");
      deleteProject.className = "delete-project";
      deleteProject.textContent = "Delete";
      deleteProject.addEventListener("click", (event) => {
        const projectButtonToDelete =
          event.target.closest(".project-container");
        this.projectNav.removeChild(projectButtonToDelete);
      });

      const editProject = document.createElement("button");
      editProject.className = "edit-project";
      editProject.textContent = "Edit";

      buttonContainer.append(editProject, deleteProject);

      //container to style it properly
      const container = document.createElement("div");
      container.className = "project-container";

      newProjectDiv.append(icon, newNavLink);
      container.append(newProjectDiv, buttonContainer);

      this.projectNav.appendChild(container);
      // find the project form to remove it from the DOM
      const projectForm = document.querySelector(".project-form");
      this.projectNav.removeChild(projectForm);

      /*//add new page for the projects for later activation
      const projectPage = document.createElement("div");
      projectPage.setAttribute("id", `projectPage-${this.projectButtonCount}`);
      projectPage.className = "project-page";
      this.currentContent.appendChild(projectPage);*/

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
// dann programmieren dass man einer task aus der task list ein projektname zuweisen kann vllt als object attribute
// funktion schreiben welche die projekte auch anhand der project attribute auf die richtige seite hinzufügt (updateScreen?)
// project button delete einbauen (button zum löschen eines project buttons, dabei muss die project count -1 genommen werden)
