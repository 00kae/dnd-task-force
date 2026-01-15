
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
var task_input = getElementbyID("taskID");

function add_task(event) {
    // if task is filled with more than 1 char, then make a new line and add task to list 
    task_list.set(Task.position, Task.task);
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
    // sql to store
    //display task
};

form.addEventListener("submit", add_task);

function remove_task(){
    task_list.delete(Task.position);
};
function completed_task(){
    // add task to completed list
};
function update_task(){};
