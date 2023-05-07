function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }

  var li = document.createElement("li");
  var taskName = document.createElement("span");
  taskName.innerHTML = taskInput.value;
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "edit-button";
  editButton.onclick = function() {
    editTask(taskName);
  };
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "x";
  deleteButton.onclick = function() {
    deleteTask(li);
  };
  li.appendChild(taskName);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(li) {
  li.parentNode.removeChild(li);
}

function editTask(taskName) {
  var newName = prompt("Enter new task name:");
  if (newName !== null) {
    taskName.innerHTML = newName;
  }
}