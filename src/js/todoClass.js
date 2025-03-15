export default class ToDo {
    constructor(title, desc, dueDate, priority, project = ''){
        this.title = title;
        this.description = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
        this.project = project;
    }

}