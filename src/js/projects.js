import {Task, TaskManager} from "./tasks";

class Project {
    constructor(title, description, taskList = []){
        this.title = title;
        this.description = description;
        this.taskList = taskList;
        this.count = taskList.length;
        this.idNum = crypto.randomUUID().toString();
    }

    addTask(task){
        this.taskList.push(task);
        this.count++;
    }
}

const ProjectManager = (()=>{
    let projects = []

    return {
        assignTask: (task) => {

        },
        getProjectByName: ((name)=>{
            let result = projects.find((project) => {
                console.log(`${project.title} @@@ ${name}`)
                return project.title.toLowerCase() == name.toLowerCase();
            });
            return result;
        }),
        removeTask: ((task) => {
            console.log(task);
            if (task.project == ''){ return; }
            let project = ProjectManager.getProjectByName(task.project);
            console.log(`remove project: ${project}`)
            let projectTasks = project.taskList;
            let index = projectTasks.findIndex((t)=> {
                return t.title.toLowerCase() == task.title.toLowerCase();
            })

            projectTasks.splice(index, 1);
            project.count--;

        }),
        getProjectByID: ((key)=>{
            let result = projects.find((task) => {
                console.log(key)
                console.log(task.idNum)
                console.log(task.idNum == key)
                return task.idNum == key;
            })
            return result;
        }),
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