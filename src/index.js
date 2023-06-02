document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    if (taskDescription !== '') {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item'); // Add a CSS class to the task item

      const taskText = document.createElement('span');
      taskText.innerText = taskDescription;
      taskItem.appendChild(taskText);

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'x';
      deleteButton.addEventListener('click', () => {
        const confirmation = confirm('Did you complete the task?');
        if (confirmation) {
          const timeSpent = prompt('How long did it take you to complete the task?');
          if (timeSpent !== null) {
            taskItem.remove();
            console.log(`Task completed in ${timeSpent} minutes.`);
          }
        }
      });
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });
});

