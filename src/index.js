console.log("hello");

import DomElements from "./DOM";
import NewTaskManager from "./newTaskManager";
import HandleNavButtons from "./handleViewOptions";

const newTaskManager = new NewTaskManager();
const handleSideNavButtons = new HandleNavButtons(newTaskManager);
