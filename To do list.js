const form = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const taskCount = document.getElementById('task-count');

  function updateTaskCount() {
    taskCount.textContent = `Total Tasks: ${taskList.children.length}`;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.innerHTML = `<input type='checkbox'> 
      <label>${taskInput.value}</label>
      <button class='delete-btn'>Delete</button>`;
      taskList.appendChild(li);
      taskInput.value = '';
      updateTaskCount();

      li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        updateTaskCount();
      });
    }
  });

  updateTaskCount();