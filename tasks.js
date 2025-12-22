
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

var input = getElementbyID("myInput");
task_box.addEventListener("click", add_task());

input.addEventListener("keypress", function(enter){
    // if text box is not empty then
    if (event.key === "enter"){

    }
});
// user keypress


function add_task(){
    // eventlistener -> task text box is clicked, then ask for plaintext (will be in html)
    // if enter is pressed and task is filled with more than 1 char, then make a new line and add
    // task to list 
        // elseif clicked outside, then close new empty line
    // use a hashmap and also store the position???
    task_list.set(Task.position, Task.task);
    // then task is set to position (redundant.. but could work)

};
function remove_task(){};
function completed_task(){};
function update_task(){};
