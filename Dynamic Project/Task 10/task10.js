let taskStack = [];
function addTask() {
const taskInput = document.getElementById("taskInput");
const taskName = taskInput.value.trim();
if (taskName) {
taskStack.push(taskName);
taskInput.value = "";
updatePipeline();
} else {
alert("enter task name.");
}
}
function undoTask() {
if (taskStack.length > 0) {
taskStack.pop();
updatePipeline();
} else {
alert("No tasks.");
}
}
function updatePipeline() {
const pipelineText = document.getElementById("pipelineText");
if (taskStack.length === 0) {
pipelineText.textContent = "No tasks yet.";
} else {
pipelineText.textContent = taskStack.join(" - ");
}
}
