// import exampleImage from "./img/example.png";

// const image = document.createElement("img");
// image.src = exampleImage
// import { displayHomePage } from "./home.js";
import "../styles.css";

import ToDo from "./todoClass.js";
import Project from "./projectClass.js";

let mytodo = new ToDo('Change oil',
    'Dodge Dakota needs an oil change.',
    '7/7/2025',
    'med',
)
console.log(mytodo);
