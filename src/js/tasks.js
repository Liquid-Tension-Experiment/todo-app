import { ProjectManager } from "./projects";

class Task {
    constructor(title, desc, dueDate, priority, project = ''){
        this.title = title;
        this.description = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.idNum = crypto.randomUUID();
        this.project = project;
        if (project!=''){
            this.assignToProject(this);
        }
    }

    assignToProject(task){
        let targetName = task.project;
        console.log(targetName);
        let projectList = ProjectManager.getProjects();

        let targetProject = projectList.find((p)=> {
            console.log(p.title);
            return targetName == p.title;
        });

        console.log(`found: ${targetProject}`);
        targetProject.addTask(task);

    }
}

const TaskManager = (() => {
    let tasks = []; // Private variable (truly hidden)

    return {
        getTasks: () => tasks,
        createTask: (title,
            description,
            dueDate,
            priority,
            project = "",
        ) => tasks.push(new Task(
            title,
            description,
            dueDate,
            priority,
            project,
        )),
        addTask: (task) => tasks.push(task),
    };
})();

export { Task, TaskManager };