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
    console.log("Click");
    this.viewAllTasks.style.display = "flex";
    this.currentContent.appendChild(this.viewAllTasks);
  }
}

export default HandleNavButtons;
