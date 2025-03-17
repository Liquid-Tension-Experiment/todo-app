// import exampleImage from "./img/example.png";

// const image = document.createElement("img");
// image.src = exampleImage
// import { displayHomePage } from "./home.js";
import "../styles.css";

import {Task, TaskManager} from "./tasks.js";
import {Project, ProjectManager } from "./projects.js";
import Display from "./display.js";
import { initEventListeners } from './events.js';

initEventListeners();

ProjectManager.addProject('Car Stuff',
    'These are tasks I need to do to our vehicles.'
);
ProjectManager.addProject('Home Stuff',
    'Repairs, shopping lists, etc'
);
TaskManager.createTask('Buy Groceries',
    "I am quite hungry. I should pick up fruit, meat, vegetables and maybe dog food too",
    '2025-03-15',
    'med',
    'Home Stuff'
);
TaskManager.createTask('Walk the dog',
    "This dog sure is getting fat.",
    '2025-03-15',
    'high',
);



TaskManager.createTask('Change oil',
    'Dodge Dakota needs an oil change.',
    '2025-03-15',
    'low',
    'Car Stuff'
);

TaskManager.createTask('Buy tires',
    'Tread is getting low',
    '2025-03-15',
    'low',
    'Car Stuff'
);

TaskManager.createTask('Buy Windshield Wipers',
    'I really need these asap',
    '2025-03-15',
    'high',
    'Car Stuff'
);


Display.displayTasks(TaskManager.getTasks())


// display.displayProjects(projectList);
// display.displaySingleProject(projectList[0]);
// window.display = display;
// window.tasks = tasks;

// console.log(mytodo);

