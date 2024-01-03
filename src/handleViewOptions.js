import DomElements from "./DOM";

class HandleNavButtons {
  constructor() {
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

  displayAllTasks() {
    console.log("all tasks page");
    this.currentContent.innerHTML = "";
    this.viewAllTasks.style.display = "flex";
    this.currentContent.appendChild(this.viewAllTasks);
  }

  displayTodayTasks() {
    console.log("today tasks page");
    this.currentContent.innerHTML = "";
    this.viewTodayTasks.style.display = "flex";
    this.currentContent.appendChild(this.viewTodayTasks);
  }

  displayTomorrowTasks() {
    console.log("tomorrow tasks page");
    this.currentContent.innerHTML = "";
    this.viewTomorrowTasks.style.display = "flex";
    this.currentContent.appendChild(this.viewTomorrowTasks);
  }

  displayUpcomingTasks() {
    console.log("upcoming tasks page");
    this.currentContent.innerHTML = "";
    this.viewUpcomingTasks.style.display = "flex";
    this.currentContent.appendChild(this.viewUpcomingTasks);
  }
}

export default HandleNavButtons;
