const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const taskTable = document.getElementById("taskTable");

let tasks = [];

function renderTasks() {
  taskTable.innerHTML = "";
  if (tasks.length === 0) {
    taskTable.innerHTML = '<tr><td colspan="4" class="empty">No task found</td></tr>';
    return;
  }

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.text}</td>
      <td>${task.date}</td>
      <td>${task.completed ? "Done" : "Pending"}</td>
      <td>
        <button onclick="toggleStatus(${index})">✓</button>
        <button onclick="deleteTask(${index})" class="danger">X</button>
      </td>
    `;

    taskTable.appendChild(row);
  });
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  const date = dateInput.value;

  if (!text || !date) return;

  tasks.push({ text, date, completed: false });
  taskInput.value = "";
  dateInput.value = "";

  renderTasks();
});

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

deleteAllBtn.addEventListener("click", () => {
  tasks = [];
  renderTasks();
});

renderTasks();
