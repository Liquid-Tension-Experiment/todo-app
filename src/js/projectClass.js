import ToDo from "./todoClass";

export default class Project {
    constructor(title, description, todoList){
        this.title = title;
        this.description = description;
        this.todoList = todoList;
        this.idNum = crypto.randomUUID();
    }
}