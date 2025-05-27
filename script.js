const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task';

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="actions">
      <button class="complete" title="Mark Complete">&#10003;</button>
      <button class="delete" title="Delete Task">&times;</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();

  const completeBtn = li.querySelector('.complete');
  const deleteBtn = li.querySelector('.delete');

  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
}
