import { TaskManager } from "./tasks";

function getPriorityString(element)
{
    if(element.priority == 'high'){
        return 'High';
    }else if(element.priority == 'med'){
        return 'Medium';
    }else if(element.priority == 'low'){
        return 'Low';
    }else{
        return "error";
    }
}
function getPriorityClassName(element)
{
    if(element.priority == 'high'){
        return 'priority-high';
    }else if(element.priority == 'med'){
        return 'priority-med';
    }else if(element.priority == 'low'){
        return 'priority-low';
    }else{
        return "error";
    }
}
function emptyContent(element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
}
const Display = {
appendTasks(tasks){
    const projectInfoCol = document.querySelector('.project-info-col');
    let taskSection = document.createElement("div");
    taskSection.classList.add("task-section");
    projectInfoCol.appendChild(taskSection);
    
    for (const task of tasks){
        let taskRow = document.createElement("div");
        taskRow.classList.add("task-row");
        taskSection.appendChild(taskRow);

        let icon = document.createElement("div");
        let priorityLevel = getPriorityClassName(task);
        icon.classList.add("priority-icon", priorityLevel);
        taskRow.appendChild(icon);

        let title = document.createElement("div");
        title.classList.add("task-title");
        title.textContent = task.title;
        taskRow.appendChild(title);

        let date = document.createElement("div");
        date.classList.add("task-date");
        date.textContent = task.dueDate;
        taskRow.appendChild(date);
    }
},

displayProjects(projects){
    const leftCol = document.querySelector('.main-left-col');
    const rightCol = document.querySelector('.main-right-col');
    emptyContent(leftCol);
    emptyContent(rightCol);

    let projectlist = document.createElement("div");
    projectlist.classList.add("project-list");
    leftCol.appendChild(projectlist);

    let projectheading = document.createElement("div");
    projectheading.classList.add("large-heading");
    projectheading.textContent = "Projects";
    projectlist.appendChild(projectheading);

    let button = document.createElement("button");
    button.type = "button";
    button.id = "btn-new-project";
    button.textContent = "Create New Project";
    projectlist.appendChild(button);

    for (const project of projects){
        let card = document.createElement("div");
        card.classList.add("project-card");
        card.setAttribute("data-key", project.idNum);
        projectlist.appendChild(card);

        let toprow = document.createElement("div")
        toprow.classList.add("project-card-top-row");
        card.appendChild(toprow);

        let text = document.createElement("div");
        text.classList.add("project-title");
        text.textContent = project.title;
        toprow.appendChild(text);

        text = document.createElement("div");
        text.classList.add("count-text");
        text.textContent = `Tasks: ${project.count}`;
        toprow.appendChild(text);

        text = document.createElement("div");
        text.classList.add("project-description");
        text.textContent = project.description;
        card.appendChild(text);
    }
},
displaySingleProject(project){
    const rightCol = document.querySelector('.main-right-col');
    emptyContent(rightCol);

    let infocol = document.createElement("div");
    infocol.classList.add("project-info-col");
    rightCol.appendChild(infocol);

    let toprow = document.createElement("div");
    toprow.classList.add("top-row");
    infocol.appendChild(toprow);

    let h2 = document.createElement("h2");
    h2.textContent = project.title;
    toprow.appendChild(h2);

    let text = document.createElement("div");
    text.textContent = `Tasks: ${project.count}`;
    toprow.appendChild(text);

    let stats = document.createElement("div");
    stats.classList.add("project-stats");
    infocol.append(stats);

    let low=0;
    let med=0;
    let high=0;
    for (const t of project.taskList){
        if (t.priority == 'low'){
            low++;
        }else if (t.priority == 'med'){
            med++;
        }else if (t.priority == 'high'){
            high++;
        }
    }

    text = document.createElement("p");
    text.textContent = `High Priority Tasks: ${high}`;
    stats.append(text);

    text = document.createElement("p");
    text.textContent = `Medium Priority Tasks: ${med}`;
    stats.append(text);

    text = document.createElement("p");
    text.textContent = `Low Priority Tasks: ${low}`;
    stats.append(text);

    text = document.createElement("p");
    text.textContent = project.description;
    infocol.append(text);

    this.appendTasks(project.taskList);
},
displayProjectForm(){
    let test = document.querySelector(".add-project-form");
    if (test != null){
        console.log('form already open');
        return;
    }
    const replaceMe = document.querySelector("#btn-new-project");

    let frm = document.createElement("form");
    frm.classList.add("add-project-form");

    let label = document.createElement("label");
    label.for ="new-project-title";
    label.textContent = "Project Title *";
    frm.appendChild(label);

    let input = document.createElement("input");
    input.type = "text";
    input.name = "new-title";
    input.id = "new-title";
    frm.appendChild(input);
    // input.required = true;

    label = document.createElement("label");
    label.textContent = "Description *";
    label.for = "new-description";
    frm.appendChild(label);

    input = document.createElement("textarea");
    input.name = "new-description";
    input.id = "new-description";
    input.rows = "4";
    frm.appendChild(input);

    let row = document.createElement("div");
    row.classList.add("btn-row");
    frm.appendChild(row);

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit";
    row.appendChild(button);

    button = document.createElement("button");
    button.type = "button";
    button.id = "btn-cancel-project";
    button.textContent = "Cancel";
    row.appendChild(button);

    replaceMe.append(frm);
    // replaceMe.parentElement.replaceChild(frm, replaceMe);
},
displayTaskForm(){
    
    let test = document.querySelector(".add-task-form");
    if (test != null){
        console.log('form already open');
        return;
    }
    const replaceMe = document.querySelector("#new-task-btn");

    let frm = document.createElement("form");
    frm.classList.add("add-task-form");

    // let legend = document.createElement("legend");
    // legend.textContent = "New Task";
    // frm.appendChild(legend);

    let label = document.createElement("label");
    label.for ="new-title";
    label.textContent = "Task Title *";
    frm.appendChild(label);

    let input = document.createElement("input");
    input.type = "text";
    input.name = "new-title";
    input.id = "new-title";
    frm.appendChild(input);
    input.required = true;

    label = document.createElement("label");
    label.textContent = "Description *";
    label.for = "new-description";
    frm.appendChild(label);

    input = document.createElement("textarea");
    input.name = "new-description";
    input.id = "new-description";
    input.rows = "4";
    input.required = true;
    frm.appendChild(input);

    label = document.createElement("label");
    label.for = "new-priority";
    label.textContent = "Priority *";
    frm.appendChild(label);

    let select = document.createElement("select");
    select.id = "new-priority";
    select.name = "new-priority";
    select.required = true;
    frm.appendChild(select);

    input = document.createElement("option");
    input.value = "low";
    input.textContent = "Low";
    select.appendChild(input);

    input = document.createElement("option");
    input.value = "med";
    input.textContent = "Medium";
    input.required = true;
    select.appendChild(input);

    input = document.createElement("option");
    input.value = "high";
    input.textContent = "High";
    select.appendChild(input);

    label = document.createElement("label");
    label.textContent = "Due Date *";
    label.for = "new-due-date";
    frm.appendChild(label);

    input = document.createElement("input");
    input.type = "date";
    input.id = "date";
    input.required = true;
    input.name = "new-due-date";
    input.textContent = "Due Date *";
    frm.appendChild(input);

    let row = document.createElement("div");
    row.classList.add("btn-row");
    frm.appendChild(row);

    let button = document.createElement("button");
    button.type = "submit";
    button.id = "add-task-submit";
    button.textContent = "Submit";
    row.appendChild(button);

    button = document.createElement("button");
    button.type = "button";
    button.id = "btn-cancel-task";
    button.textContent = "Cancel";
    row.appendChild(button);
    replaceMe.appendChild(frm);

    // replaceMe.parentElement.replaceChild(frm, replaceMe);
},
displayTasks(tasks){
    const leftCol = document.querySelector('.main-left-col');
    const rightCol = document.querySelector('.main-right-col');
    emptyContent(leftCol);
    emptyContent(rightCol);

    let taskSection = document.createElement("div");
    taskSection.classList.add("task-section");
    leftCol.appendChild(taskSection);

    let taskHeader = document.createElement("div");
    taskHeader.classList.add("large-heading");
    taskHeader.textContent = 'Tasks';
    taskSection.appendChild(taskHeader);

    let newtaskbutton = document.createElement("button");
    newtaskbutton.type = "button";
    newtaskbutton.id = "new-task-btn";
    newtaskbutton.textContent = "New Task";
    taskSection.appendChild(newtaskbutton)

    
    for (const task of tasks){
        let taskRow = document.createElement("div");
        taskRow.classList.add("task-row");
        taskRow.setAttribute('data-key', task.idNum.toString());
        taskSection.appendChild(taskRow);

        let icon = document.createElement("div");
        let priorityLevel = getPriorityClassName(task);
        icon.classList.add("priority-icon", priorityLevel);
        taskRow.appendChild(icon);

        let title = document.createElement("div");
        title.classList.add("task-title");
        title.textContent = task.title;
        taskRow.appendChild(title);

        let date = document.createElement("div");
        date.classList.add("task-date");
        date.textContent = task.dueDate;
        taskRow.appendChild(date);

    }
},
unExpandTask(taskElement){
    
    let taskObj = TaskManager.getTaskByID(taskElement.dataset.key);
    console.log(taskElement);
    console.log(taskObj);
    let taskRow = document.createElement("div");
    taskRow.classList.add("task-row");
    taskRow.setAttribute("data-key", taskObj.idNum);

    let icon = document.createElement("div");
    let priorityLevel = getPriorityClassName(taskObj);
    icon.classList.add("priority-icon", priorityLevel);
    taskRow.appendChild(icon);

    let title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = taskObj.title;
    taskRow.appendChild(title);

    let date = document.createElement("div");
    date.classList.add("task-date");
    date.textContent = taskObj.dueDate;
    taskRow.appendChild(date);

    taskElement.parentElement.replaceChild(taskRow, taskElement);
},
expandTask(taskElement){
    const taskObject = TaskManager.getTaskByID(taskElement.dataset.key);
    let expandedTask = document.createElement("div");
    expandedTask.setAttribute("data-key", taskElement.dataset.key);
    expandedTask.classList.add("expanded-task");

    let firstrow = document.createElement("div");
    firstrow.classList.add("expanded-top-row");
    expandedTask.appendChild(firstrow);

    let icon = document.createElement("div");
    let priorityLevel = getPriorityClassName(taskObject);
    icon.classList.add("priority-icon", priorityLevel);
    firstrow.appendChild(icon);

    let title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = taskObject.title;
    firstrow.appendChild(title);

    let date = document.createElement("div");
    date.classList.add("task-date");
    date.textContent = taskObject.dueDate;
    firstrow.appendChild(date);

    let text = document.createElement("div");
    text.classList.add("project-info-text")
    text.textContent = `Project: ${taskObject.project}`;
    expandedTask.append(text);

    text = document.createElement("div");
    text.textContent = `Description`;
    text.classList.add("description-label")
    expandedTask.append(text);

    text = document.createElement("div");
    text.classList.add("description-text");
    text.textContent = taskObject.description;
    expandedTask.append(text);

    let row = document.createElement("div");
    row.classList.add("task-button-row");
    expandedTask.appendChild(row);

    let button = document.createElement("button");
    button.type = "button";
    button.id = "btn-edit"
    button.textContent = "Edit";
    row.appendChild(button);

    button = document.createElement("button");
    button.type = "button";
    button.id = "btn-remove-task";
    button.textContent = "Remove";
    row.appendChild(button);

    taskElement.parentElement.replaceChild(expandedTask, taskElement);

},
displaySingleTask(task){
    const rightCol = document.querySelector('.main-right-col');
    emptyContent(rightCol);

    let taskDisplay = document.createElement("div");
    taskDisplay.classList.add("task-display");
    rightCol.appendChild(taskDisplay);

    let row = document.createElement("div");
    row.classList.add("row-one");
    taskDisplay.appendChild(row);

    let title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = task.title;
    row.appendChild(title);

    let pText = document.createElement("div");
    title.classList.add("priority-text");
    pText.textContent = getPriorityString(task);
    row.append(pText);

    let icon = document.createElement("div");
    let priorityLevel = getPriorityClassName(task);
    icon.classList.add("priority-icon", priorityLevel);
    row.appendChild(icon);

    row = document.createElement("div");
    row.classList.add("row-two");
    taskDisplay.appendChild(row);

    let text = document.createElement("div");
    text.textContent = `Project: ${task.project}`;
    row.append(text);

    row = document.createElement("div");
    row.classList.add("row-three");
    taskDisplay.appendChild(row);

    text = document.createElement("div");
    text.textContent = `Description`;
    row.append(text);

    text = document.createElement("div");
    text.textContent = task.description;
    row.append(text);

    row = document.createElement("div");
    row.classList.add("task-button-row");
    taskDisplay.appendChild(row);

    let button = document.createElement("button");
    button.type = "button";
    button.id = "btn-edit"
    button.textContent = "Edit";
    row.appendChild(button);

    button = document.createElement("button");
    button.type = "button";
    button.id = "btn-remove"
    button.textContent = "Remove";
    row.appendChild(button);

}

}
export default Display;