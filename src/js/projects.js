import {Task, TaskManager} from "./tasks";

class Project {
    constructor(title, description, taskList = []){
        this.title = title;
        this.description = description;
        this.taskList = taskList;
        this.count = taskList.length;
        this.idNum = crypto.randomUUID();
    }

    addTask(task){
        this.taskList.push(task);
        this.count++;
    }
}

const ProjectManager = (()=>{
    let projects = []

    return {
        getProjects: () => projects,
        addProject: (title,
            description,
            taskList = [],
        ) => projects.push(new Project(
            title,
            description,
            taskList,
        ))
    };
})();

export { Project, ProjectManager }