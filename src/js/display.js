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
            let priorityLevel = this.#getPriorityString(task);
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
    displaySingleTask(){

    }
    #getPriorityString(element)
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