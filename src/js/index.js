// import exampleImage from "./img/example.png";

// const image = document.createElement("img");
// image.src = exampleImage
// import { displayHomePage } from "./home.js";
import "../styles.css";

import ToDo from "./todoClass.js";
import Project from "./projectClass.js";
import Display from "./display.js";

const tasks = []

let mytodo2 = new ToDo('Buy Groceries',
    "I am quite hungry. I should pick up fruit, meat, vegetables and maybe dog food too",
    '3/17/2025',
    'med',
);
let mytodo3 = new ToDo('Walk the dog',
    "This dog sure is getting fat.",
    '3/15/2025',
    'high',
);

tasks.push(mytodo2);
tasks.push(mytodo3);

const projectList = [];
projectList.push(new Project('Car Stuff',
    'These are tasks I need to do to our vehicles.'
))
projectList.push(new Project('Home Stuff',
    'Repairs, shopping lists, etc'
))
tasks.push(new ToDo('Change oil',
    'Dodge Dakota needs an oil change.',
    '7/7/2025',
    'low',
    'Car Stuff'
));
projectList[0].addTask(tasks[tasks.length-1])
tasks.push(new ToDo('Buy tires',
    'Tread is getting low',
    '9/7/2025',
    'low',
    'Car Stuff'
));
projectList[0].addTask(tasks[tasks.length-1])
tasks.push(new ToDo('Buy Windshield Wipers',
    'I really need these asap',
    '3/20/2025',
    'high',
    'Car Stuff'
));
projectList[0].addTask(tasks[tasks.length-1])

const display = new Display();
display.displayProjects(projectList);
display.appendTasks(projectList[0].taskList)
// window.display = display;
// window.tasks = tasks;
// display.displayTasks(tasks);
// display.displaySingleTask(tasks[2]);
// console.log(mytodo);
