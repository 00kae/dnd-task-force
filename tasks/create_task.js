const MAX_TASK = 50;
// maximum task number 

const task_list = new Map();
// user task list

class Task {
    constructor(position, task) {
        this.position = position;
        this.task = task;
  }
}
var task_input = document.getElementById("taskID");
