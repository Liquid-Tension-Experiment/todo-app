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

    if (target.matches('#btn-cancel')) {
        Display.displayTasks(TaskManager.getTasks());
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