import DomElements from "./DOM";
import NewTaskManager from "./newTaskManager";

class HandleNavButtons {
  static currentPage = "allTasks";
  constructor(taskManager) {
    this.taskManager = taskManager;
    //link buttons
    this.allTasksButton = DomElements.allTasksButton;
    this.tomorrowTasksButton = DomElements.tomorrowTasksButton;
    this.todayTasksButton = DomElements.todayTasksButton;
    this.upcomingTasksButton = DomElements.upcomingTasksButton;
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
  }
  // function for the page with all tasks sortet by priority
  displayAllTasks() {
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewAllTasks.style.display = "flex";
    // this.currentContent.appendChild(this.viewAllTasks);
    HandleNavButtons.currentPage = "allTasks";
    this.taskManager.updateScreen();
  }
  // function to display the page with all tasks with the date of today
  displayTodayTasks() {
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewTodayTasks.style.display = "flex";
    //this.currentContent.appendChild(this.viewTodayTasks);
    HandleNavButtons.currentPage = "todayTasks";
    this.taskManager.updateScreen();
  }
  // function to display the page with all tasks with the date of tomorrow
  displayTomorrowTasks() {
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewTomorrowTasks.style.display = "flex";
    // this.currentContent.appendChild(this.viewTomorrowTasks);
    HandleNavButtons.currentPage = "tomorrowTasks";
    this.taskManager.updateScreen();
  }
  // function to display the page with alls tasks with the date of tomorrow - future
  displayUpcomingTasks() {
    this.sideNavPages.forEach((page) => {
      page.style.display = "none";
    });

    const projectPages = document.querySelectorAll(".project-page");
    projectPages.forEach((page) => {
      page.style.display = "none";
    });

    this.viewUpcomingTasks.style.display = "flex";
    // this.currentContent.appendChild(this.viewUpcomingTasks);
    HandleNavButtons.currentPage = "upcomingTasks";
    this.taskManager.updateScreen();
  }
}

export default HandleNavButtons;
