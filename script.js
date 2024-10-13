// Step 1: Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Initialize the tasks array
  let tasks = [];

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // Load tasks without saving again
  }

  // Step 3: Create the addTask Function
  function addTask(taskText, save = true) {
    // Create a new list item only if taskText is provided
    if (taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.classList.add("task-item"); // Optional styling class

      // Create the remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";

      // Assign onclick event to the remove button
      removeBtn.onclick = function () {
        taskList.removeChild(li);
        // Remove task from tasks array
        tasks = tasks.filter((task) => task !== taskText);
        // Update Local Storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
      };

      // Append the remove button to the li element
      li.appendChild(removeBtn);

      // Append the li to the taskList
      taskList.appendChild(li);

      // Update tasks array and save to Local Storage
      if (save) {
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      // Clear the task input field
      taskInput.value = "";
    } else {
      // Alert user to enter a task if taskText is empty
      alert("Please enter a task.");
    }
  }

  // Step 4: Attach Event Listeners
  addButton.addEventListener("click", function () {
    addTask(taskInput.value.trim()); // Add the trimmed task
  }); // Add task on button click

  // Allow adding tasks by pressing the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value.trim());
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});
