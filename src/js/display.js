

export default class Display {
    constructor(){
        this.state = '';
    }
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
            let priorityLevel = this.#getPriorityClassName(task);
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
    }

    displayProjects(projects){
        const leftCol = document.querySelector('.main-left-col');
        this.#emptyContent(leftCol);

        let projectlist = document.createElement("div");
        projectlist.classList.add("project-list");
        leftCol.appendChild(projectlist);

        let projectheading = document.createElement("div");
        projectheading.classList.add("project-heading");
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
    }
    displayTasks(tasks){
        const leftCol = document.querySelector('.main-left-col');
        this.#emptyContent(leftCol);

        let taskSection = document.createElement("div");
        taskSection.classList.add("task-section");
        leftCol.appendChild(taskSection);

        
        for (const task of tasks){
            let taskRow = document.createElement("div");
            taskRow.classList.add("task-row");
            taskSection.appendChild(taskRow);

            let icon = document.createElement("div");
            let priorityLevel = this.#getPriorityClassName(task);
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
    }
    displaySingleTask(task){
        const rightCol = document.querySelector('.main-right-col');
        this.#emptyContent(rightCol);

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
        pText.textContent = this.#getPriorityString(task);
        row.append(pText);

        let icon = document.createElement("div");
        let priorityLevel = this.#getPriorityClassName(task);
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
        button.text = "Edit";
        row.appendChild(button);

        button = document.createElement("button");
        button.type = "button";
        button.id = "btn-remove"
        button.text = "Remove";
        row.appendChild(button);

    }
    #getPriorityString(element)
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
    #getPriorityClassName(element)
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
    #emptyContent(element){
        while(element.firstChild){
            element.removeChild(element.lastChild);
        }
    }
}