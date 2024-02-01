import DomElements from "./DOM";
import HandleNavButtons from "./handleViewOptions";
import NewTaskManager from "./newTaskManager";

class ProjectManager {
  constructor(taskManager) {
    this.taskManager = taskManager;

    this.taskList = NewTaskManager.taskList;
    this.newProjectButton = DomElements.newProjectButton;
    this.projectNav = DomElements.projects;
    this.initializeEventListeners();
    this.newProjectForm = false;
    this.titleInput = null;
    this.currentContent = DomElements.currentContent;
    this.projectData = "";
    this.editProjectFormActive = false;
    this.projectPages = [];
    this.loadProjectPages();
    this.projectButtonCount = this.projectPages.length;
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
      saveButton.addEventListener("click", () => {
        this.saveProjectPages();
        this.createProjectNavLink();
        this.createProjectPage();
      });

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
  createProjectNavLink(projectTitle) {
    let title;

    if (projectTitle) {
      title = projectTitle;

      this.projectData = {
        title: projectTitle,
      };
    } else if (this.titleInput && this.titleInput.value) {
      title = this.titleInput.value;

      this.projectData = {
        title: title,
      };
    } else {
      console.log("No project title provided");
    }

    //create a div for the elements
    const newProjectDiv = document.createElement("div");
    newProjectDiv.className = "new-project-div";

    //create new button with the value of the input
    const newNavLink = document.createElement("button");
    newNavLink.addEventListener("click", (event) => {
      //which button got clicked / filter ID
      const projectButton = event.target.closest(".new-project-nav-btn");
      const projectId = projectButton.id;
      const projectNum = projectId[projectId.length - 1];
      //page to link
      const projectPage = document.querySelector(`#projectPage-${projectNum}`);

      //hide all other project pages
      const projectPagesToHide = document.querySelectorAll(".project-page");
      projectPagesToHide.forEach((page) => {
        page.style.display = "none";
      });

      //hide all task pages
      const taskPages = document.querySelectorAll(".task-page");
      taskPages.forEach((page) => {
        page.style.display = "none";
      });

      //display the wanted page
      projectPage.style.display = "flex";

      HandleNavButtons.currentPage = "project-page";
      this.taskManager.updateScreen();
    });

    newNavLink.className = "new-project-nav-btn";
    this.projectButtonCount++;
    //set id for customization the project button for later use
    newNavLink.setAttribute("id", `project-${this.projectButtonCount}`);
    newNavLink.textContent = title;

    //save data in projectPages for later loading from the storage
    this.projectData.id = newNavLink.id;
    this.projectPages.push(this.projectData);
    console.log(this.projectData);

    //add an icon before the title
    const icon = document.createElement("img");
    icon.className = "project-icon";
    icon.src = "../src/media/target.png";

    //create edit and delete buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "project-buttons";

    //delete project nav button
    const deleteProject = document.createElement("button");
    deleteProject.className = "delete-project";

    deleteProject.classList.add(`project-${this.projectButtonCount}`);
    deleteProject.textContent = "Delete";

    //function to delete the project
    deleteProject.addEventListener("click", (event) => {
      const projectButtonToDelete = event.target.closest(".project-container");

      //find linked page to delete
      const projectClass = event.target.classList[1];
      console.log(projectClass);
      const projectClassNum = projectClass[projectClass.length - 1];
      const pageToDelete = document.querySelector(
        `#projectPage-${projectClassNum}`
      );

      //search for title to delete project from the projectPages
      let searchedClass = projectClass;
      let index = this.projectPages.findIndex(
        (page) => page.id === searchedClass
      );

      //delete project from the array
      this.projectPages.splice(index, 1);
      //update the saved objects
      this.saveProjectPages();

      this.projectNav.removeChild(projectButtonToDelete);
      this.currentContent.removeChild(pageToDelete);
      this.projectButtonCount--;
    });

    const editProject = document.createElement("button");
    editProject.className = "edit-project";
    editProject.classList.add(`project-${this.projectButtonCount}`);
    editProject.textContent = "Edit";
    editProject.addEventListener("click", this.editProjectForm.bind(this));

    buttonContainer.append(editProject, deleteProject);

    //container to style it properly
    const container = document.createElement("div");
    container.className = "project-container";

    newProjectDiv.append(icon, newNavLink);
    container.append(newProjectDiv, buttonContainer);

    this.projectNav.appendChild(container);

    //only remove the form when it is active
    if (this.newProjectForm) {
      // find the project form to remove it from the DOM
      const projectForm = document.querySelector(".project-form");
      this.projectNav.removeChild(projectForm);

      // set back the value of the project form so a new one can pop up
      this.newProjectForm = false;
    }

    this.saveProjectPages();
  }

  createProjectPage(projectTitle) {
    let title;

    if (projectTitle) {
      title = projectTitle.replace(/\s+/g, "-");
    } else if (this.titleInput && this.titleInput.value) {
      title = this.titleInput.value.replace(/\s+/g, "-");
    } else {
      console.error("No project title provided");
      return;
    }

    const projectPageId = `projectPage-${this.projectButtonCount}`;
    const existingPage = document.getElementById(projectPageId);
    if (!existingPage) {
      const projectPage = document.createElement("div");
      projectPage.setAttribute("id", projectPageId);
      projectPage.className = `project-page Project-${title}`;
      projectPage.style.display = "none";
      this.currentContent.appendChild(projectPage);
    }
  }

  // function for canceling the new project form
  cancelNewProject() {
    this.titleInput.value = "";
    const projectForm = document.querySelector(".project-form");
    this.projectNav.removeChild(projectForm);
    this.newProjectForm = false;
  }

  editProjectForm(event) {
    if (this.editProjectFormActive === false) {
      this.editProjectFormActive = true;

      //searching for the right project to edit
      const editButtonClass = event.target.classList[1];
      const projectToChange = document.querySelector(`#${editButtonClass}`);

      const editForm = document.createElement("div");
      editForm.className = "edit-project-form";

      const editTitle = document.createElement("input");
      editTitle.className = "edit-project-title";
      editTitle.placeholder = "new title here";

      const parentElement = document.querySelector(".projects");
      const targetElement = parentElement.children[1];

      const btnContainer = document.createElement("div");
      btnContainer.className = "edit-project-btn-container";

      const saveChangesButton = document.createElement("button");
      saveChangesButton.className = "save-project-changes-button";
      saveChangesButton.textContent = "Save";

      saveChangesButton.addEventListener("click", () => {
        projectToChange.textContent = editTitle.value;
        parentElement.removeChild(editForm);
        this.editProjectFormActive = false;
      });

      const cancelChangesButton = document.createElement("button");
      cancelChangesButton.className = "cancel-project-changes-button";
      cancelChangesButton.textContent = "Cancel";

      cancelChangesButton.addEventListener("click", () => {
        parentElement.removeChild(editForm);
        this.editProjectFormActive = false;
      });

      btnContainer.append(saveChangesButton, cancelChangesButton);

      editForm.append(editTitle, btnContainer);

      parentElement.insertBefore(editForm, targetElement);
    }
  }

  saveProjectPages() {
    const projectButtons = this.projectPages.map((project) => project.title);
    localStorage.setItem("projects", JSON.stringify(projectButtons));
  }

  loadProjectPages() {
    const savedButtons = localStorage.getItem("projects");

    if (savedButtons) {
      const titles = JSON.parse(savedButtons);

      titles.forEach((title, index) => {
        this.projectButtonCount = index;
        this.createProjectNavLink(title);
        this.createProjectPage(title);
      });
    }
  }
}

export default ProjectManager;

//funktionmiert alles ganz gut muss nur dahinter kommen warum die projekt seiten nach 2 x aktualisiern verschwinden
