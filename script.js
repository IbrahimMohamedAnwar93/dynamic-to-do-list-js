// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Create the addTask Function
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText) {
      // Task Creation and Removal
      const li = document.createElement("li");
      li.textContent = taskText;

      // Add a class to the li element for styling (optional)
      li.classList.add("task-item");

      // Create the remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";

      // Assign onclick event to the remove button
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Append the remove button to the li element
      li.appendChild(removeBtn);

      // Append the li to the taskList
      taskList.appendChild(li);

      // Clear the task input field
      taskInput.value = "";
    } else {
      // Alert user to enter a task if taskText is empty
      alert("Please enter a task.");
    }
  }

  // Attach Event Listeners
  addButton.addEventListener("click", addTask); // Add task on button click

  // Allow adding tasks by pressing the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Invoke the addTask function on DOMContentLoaded
  addTask();
});
