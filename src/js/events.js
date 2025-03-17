import Display from "./display";
import { ProjectManager } from "./projects";
import { TaskManager } from "./tasks";

function handleClick(event) {
    const target = event.target;

    if (target.matches('#btn-tasks')) {
        Display.displayTasks(TaskManager.getTasks());
        
        console.log('task button clicked')
    }

    if (target.matches('#new-task-btn')) {
        Display.displayTaskForm();
        console.log('displaying form');
    }

    if (target.closest('.task-row')) {

        Display.expandTask(target.closest(".task-row"));
        let key = target.closest(".task-row").dataset.key;
        let task = TaskManager.getTaskByID(key);
    }
    if (target.matches("#add-task-submit"))
        {
        event.preventDefault();
        let f = document.querySelector(".add-task-form");
        if (!f.reportValidity()) {  // Now validation messages show immediately
            return;
        }
        let title = document.querySelector("#new-title").value;
        let desc = document.querySelector("#new-description").value;
        let priority = document.querySelector("#new-priority").value;
        let date = document.querySelector("#new-due-date").value;

        TaskManager.createTask(title, desc, date, priority);
        document.querySelector(".add-task-form").remove();
        Display.displayTasks(TaskManager.getTasks());

        console.log(title);
        console.log(desc);
        console.log(priority);
        console.log(date);
        event.preventDefault();
    }
    if (target.closest('.expanded-task')) {

        Display.unExpandTask(target.closest(".expanded-task"));
        // let key = target.closest(".expanded-task").dataset.key;
        // let task = TaskManager.getTaskByID(key);
    }
    if (target.matches("#btn-remove-task")){
        let task = target.closest(".expanded-task");
        event.stopPropagation();
        ProjectManager.removeTask(TaskManager.getTaskByID(task.dataset.key));
        TaskManager.removeTask(task.dataset.key);
        Display.displayTasks(TaskManager.getTasks());
    }
    if (target.closest('.project-card')) {
        console.log(target.closest(".task-row"));
        let key = target.closest(".project-card").dataset.key;
        let project = ProjectManager.getProjectByID(key);
        Display.displaySingleProject(project);
        console.log(key);
    }


    if (target.matches('#btn-cancel-task')) {
        document.querySelector(".add-task-form").remove();
    }
    if (target.matches('#btn-cancel-project')) {
        document.querySelector(".add-project-form").remove();

    }
    if (target.matches('#btn-new-project')) {
        Display.displayProjectForm();
        console.log('hewwo');
    }
    if (target.matches('#btn-projects')) {
        Display.displayProjects(ProjectManager.getProjects());
        console.log('project btn clicked');
    }
}

// Attach event listeners using event delegation
export function initEventListeners() {
    document.addEventListener('click', handleClick);
}