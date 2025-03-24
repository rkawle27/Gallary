const tasks = [
  { id: 1, name: "Task 1", path: "Dynamic Project/Task 1/task1.html" },
  { id: 2, name: "Task 2", path: "Dynamic Project/Task 2/task2.html" },
  { id: 3, name: "Task 3", path: "Dynamic Project/Task 3/task3.html" },
  { id: 4, name: "Task 4", path: "Dynamic Project/Task 4/task4.html" },
  { id: 5, name: "Task 5", path: "Dynamic Project/Task 5/task5.html" },
  { id: 7, name: "Task 7", path: "Dynamic Project/Task 7/task7.html" },
  { id: 8, name: "Task 8", path: "Dynamic Project/Task 8/task8.html" },
  { id: 9, name: "Task 9", path: "Dynamic Project/Task 9/task9.html" },
  { id: 10, name: "Task 10", path: "Dynamic Project/Task 10/task10.html" },
  { id: 11, name: "Task 11", path: "Dynamic Project/Task 11/task11.html" },
  { id: 12, name: "Task 12", path: "Dynamic Project/Task 12/Task12.html" },
  { id: 13, name: "Task 13", path: "Dynamic Project/Task 13/task13.html" },
  { id: 14, name: "Task 14", path: "Dynamic Project/Task 14/task14.html" },
  { id: 15, name: "Task 15", path: "Dynamic Project/Task 15/task15.html" },
  { id: 16, name: "Task 16", path: "Dynamic Project/Task 16/index.html" }
];

const navContainer = document.getElementById("task-nav");
const iframe = document.getElementById("task-viewer");

// Use map() and innerHTML to create buttons dynamically
navContainer.innerHTML = tasks.map(task => 
  `<li onclick="loadTask('${task.path}')">${task.name}</li>`
).join("");

// Function to change the iframe source
function loadTask(path) {
  iframe.src = path;
}
