/*class DomElements {
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

export default DomElements;*/

import { domainToASCII } from "url";

const DomElements = {
  //container:
  currentContent: document.querySelector(".currentContent"),
  container: document.querySelector(".container"),
  allViewPage: document.querySelector(".all-view"),
  tomorrowViewPage: document.querySelector(".tomorrow-view"),
  weekViewPage: document.querySelector(".wek-view"),
  upcomingViewPage: document.querySelector(".upcoming-view"),
  //Buttons:
  addTaskButton: document.querySelector(".add-task"),
  allTasksButton: document.querySelector(".all-tasks"),
  todayTasksButton: document.querySelector(".today-tasks"),
  weekTasksButton: document.querySelector(".week-tasks"),
  upcomingTasksButton: document.querySelector(".upcoming-tasks"),
  newProjectButton: document.querySelector(".new-project-button"),
};

export default DomElements;
