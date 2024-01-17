console.log("hello");

import DomElements from "./DOM";
import NewTaskManager from "./newTaskManager";
import HandleNavButtons from "./handleViewOptions";
import ProjectManager from "./projectManager";

const newTaskManager = new NewTaskManager();
const handleSideNavButtons = new HandleNavButtons(newTaskManager);
const projectManager = new ProjectManager();
