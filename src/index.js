// src/index.js

// 1. Select the elements immediately
// (The test environment has already loaded the HTML, so these will be found)
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');
const inputField = document.querySelector('#new-task-description');

// 2. Add the submit listener directly
if (form) {
  form.addEventListener('submit', (event) => {
    // Prevent page reload
    event.preventDefault();

    // Get the value (the test sets this to "Wash the dishes")
    const taskDescription = inputField.value;

    // Create the li and add text
    const li = document.createElement('li');
    li.textContent = taskDescription;

    // Append to the list
    taskList.appendChild(li);

    // Optional cleanup
    inputField.value = '';
  });
}
