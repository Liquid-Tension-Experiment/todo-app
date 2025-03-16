export default class Display {
    constructor(){
        this.state = '';
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