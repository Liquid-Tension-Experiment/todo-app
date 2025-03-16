import ToDo from "./todoClass";

export default class Project {
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