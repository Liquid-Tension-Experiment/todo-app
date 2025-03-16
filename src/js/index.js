// import exampleImage from "./img/example.png";

// const image = document.createElement("img");
// image.src = exampleImage
// import { displayHomePage } from "./home.js";
import "../styles.css";

import ToDo from "./todoClass.js";
import Project from "./projectClass.js";
import Display from "./display.js";

const tasks = []
let mytodo = new ToDo('Change oil',
    'Dodge Dakota needs an oil change.',
    '7/7/2025',
    'low',
)
let mytodo2 = new ToDo('Buy Groceries',
    "I am quite hungry. I should pick up fruit, meat, vegetables and maybe dog food too",
    '3/17/2025',
    'med',
)
let mytodo3 = new ToDo('Walk the dog',
    "This dog sure is getting fat.",
    '3/15/2025',
    'high',
)
tasks.push(mytodo);
tasks.push(mytodo2);
tasks.push(mytodo3);

const projectList = [];
projectList.push(new Project('Car Stuff',
    'These are tasks I need to do to our vehicles.',
))

const display = new Display();
// window.display = display;
// window.tasks = tasks;
// display.displayTasks(tasks);
// display.displaySingleTask(tasks[2]);
// console.log(mytodo);
