import DomElements from "./DOM";

class HandleNavButtons {
  constructor() {
    this.allTasksButton = DomElements.allTasksButton;
    this.tomorrowTasksButton = DomElements.tomorrowTasksButton;
    this.todayTasksButton = DomElements.todayTasksButton;
    this.upcomingTasksButton = DomElements.upcomingTasksButton;
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
    console.log("clickMotherFucker");
  }
}

export default HandleNavButtons;
