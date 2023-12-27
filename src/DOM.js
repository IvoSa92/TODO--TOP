export default Dom;

class DomElements {
  constructor() {
    //container:
    this.currentContent = document.querySelector(".currentContent");
    this.container = document.querySelector(".container");
    //Buttons:
    this.addTaskButton = document.querySelector(".add-task");
    this.allTasksButton = document.querySelector(".all-tasks");
    this.todayTasksButton = document.querySelector(".today-tasks");
    this.weekTasksButton = document.querySelector(".week-tasks");
    this.upcomingTasksButton = document.querySelector(".upcoming-tasks");
    this.newProjectButton = document.querySelector(".new-project-button");
  }
}
