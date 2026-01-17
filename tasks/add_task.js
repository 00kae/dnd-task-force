function add_task(event) {
    // if not empty, make new line and map task
    task_list.set(Task.position, Task.task);
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
    // sql to store
    //display task
};

const form = document.getElementById("taskID"); 
form.addEventListener("submit", add_task);


