import DomElements from "./DOM";
import NewTaskManager from "./newTaskManager";

class HandleNavButtons {
  static currentPage = "allTasks";
  static viewAllTasks = DomElements.allViewPage;
  constructor(taskManager) {
    this.taskManager = taskManager;
    //link buttons
    this.allTasksButton = DomElements.allTasksButton;
    this.tomorrowTasksButton = DomElements.tomorrowTasksButton;
    this.todayTasksButton = DomElements.todayTasksButton;
    this.upcomingTasksButton = DomElements.upcomingTasksButton;
    this.navButtons = [
      this.allTasksButton,
      this.todayTasksButton,
      this.tomorrowTasksButton,
      this.upcomingTasksButton,
    ];
    //link containers
    this.currentContent = DomElements.currentContent;
    this.viewAllTasks = DomElements.allViewPage;
    this.viewTodayTasks = DomElements.todayViewPage;
    this.viewTomorrowTasks = DomElements.tomorrowViewPage;
    this.viewUpcomingTasks = DomElements.upcomingViewPage;
    this.sideNavPages = Array.from(document.querySelectorAll(".task-page"));

    //function to add the event listeners
    this.initializeEventListeners();
  }
  //setting event listeners up
  initializeEventListeners() {
    this.allTasksButton.addEventListener("click", () => this.displayAllTasks());
    this.todayTasksButton.addEventListener("click", () =>
      this.displayTodayTasks()
    );
    this.tomorrowTasksButton.addEventListener("click", () =>
      this.displayTomorrowTasks()
    );
    this.upcomingTasksButton.addEventListener("click", () =>
      this.displayUpcomingTasks()
    );
    // Event listeners for setting active button
    this.navButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        this.setActiveButton(e.currentTarget);
      });
    });
  }

  //event listeners for active button
  setActiveButton(activeButton) {
    this.navButtons.forEach((button) => {
      button.classList.remove("active");
    });
    activeButton.classList.add("active");
  }

  // function for the page with all tasks sorted by priority
  displayAllTasks() {
    // hide all other pages
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewAllTasks.style.display = "flex";
    HandleNavButtons.currentPage = "allTasks";
    this.taskManager.updateScreen();
  }

  // function to display the page with all tasks with the date of today
  displayTodayTasks() {
    // hide all other pages
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewTodayTasks.style.display = "flex";
    HandleNavButtons.currentPage = "todayTasks";
    this.taskManager.updateScreen();
  }

  // function to display the page with all tasks with the date of tomorrow
  displayTomorrowTasks() {
    // hide all other pages
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewTomorrowTasks.style.display = "flex";
    HandleNavButtons.currentPage = "tomorrowTasks";
    this.taskManager.updateScreen();
  }

  // function to display the page with alls tasks with the date of tomorrow - future
  displayUpcomingTasks() {
    // hide all other pages
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewUpcomingTasks.style.display = "flex";
    HandleNavButtons.currentPage = "upcomingTasks";
    this.taskManager.updateScreen();
  }
}

export default HandleNavButtons;
