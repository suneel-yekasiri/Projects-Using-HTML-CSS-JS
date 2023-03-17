
// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const createBtn = document.getElementById('createBtn');
const myTasks = document.getElementById('myTasks');
const saveBtn = document.getElementById('saveBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');


const saveMessage = document.querySelector('.save-message');
createBtn.addEventListener('mouseover', () => {
 saveMessage.textContent = 'Click Create to Create your tasks';
});

createBtn.addEventListener('mouseout', () => {
 saveMessage.textContent = '';
});


const saveMessage1 = document.querySelector('.save-message1');
saveBtn.addEventListener('mouseover', () => {
 saveMessage1.textContent = 'Click Save Tasks to Save your tasks';
});

saveBtn.addEventListener('mouseout', () => {
 saveMessage1.textContent = '';
});


const saveMessage2 = document.querySelector('.save-message2');
deleteAllBtn.addEventListener('mouseover', () => {
 saveMessage2.textContent = 'Click Delete All Tasks to Delete your all tasks';
 
});

deleteAllBtn.addEventListener('mouseout', () => {
 saveMessage2.textContent = '';
});


// Initialize an array to store the tasks
let tasks = [];

// Add event listener to the create button
createBtn.addEventListener('click', () => {

// Get the task text from the input box
const taskText = taskInput.value;

// Check if the task text is empty
if (taskText.trim() === '') {
   alert('Please enter a task');
   return;
 }

// Create a task object with the task text and completed status
const task = {
text: taskText,
completed: false
};

// Add the task to the tasks array
tasks.push(task);

// Clear the input box
taskInput.value = '';

// Render the tasks in the My Tasks section
renderTasks();
});

// Function to render the tasks in the My Tasks section
function renderTasks() {

// Clear the existing tasks in the My Tasks section
myTasks.innerHTML = '';

// Loop through the tasks array and create HTML elements for each task
tasks.forEach((task, index) => {
const taskDiv = document.createElement('div');
taskDiv.classList.add('task');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = task.completed;
checkbox.addEventListener('change', () => {
  
// Update the completed status of the task and strike out the task text if it is completed
task.completed = checkbox.checked;
if (task.completed) {
taskText.style.textDecoration = 'line-through';
} else {
taskText.style.textDecoration = 'none';
}
});
taskDiv.appendChild(checkbox);
const taskText = document.createElement('span');
taskText.innerText = task.text;
taskDiv.appendChild(taskText);
const editBtn = document.createElement('button');
editBtn.innerText = 'Edit';
editBtn.addEventListener('click', () => {

// Prompt the user to edit the task text
const newText = prompt('Enter new task text', task.text);

// Update the task text if the user entered a new value
if (newText !== null && newText !== '') {
task.text = newText;
renderTasks();
}
});
taskDiv.appendChild(editBtn);

const deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete';

deleteBtn.addEventListener('click', () => {
// Remove the task from the tasks array and render the tasks

const confirmDelete = confirm('Are you sure you want to delete this task?');
 // If the user clicks "OK", remove the task from the tasks array and render the tasks

 if (confirmDelete) {
   tasks.splice(index, 1);
   renderTasks();
   localStorage.setItem('tasks', JSON.stringify(tasks));
 }
});


taskDiv.appendChild(deleteBtn);

// Add the task HTML element to the My Tasks section
myTasks.appendChild(taskDiv);
});
}

// Add event listener to the save button
saveBtn.addEventListener('click', () => {

// Save the tasks to local storage
localStorage.setItem('tasks', JSON.stringify(tasks));
});


// Add event listener to the delete all tasks button
deleteAllBtn.addEventListener('click', () => {

// Clear the tasks array,
// Remove the tasks from the My Tasks section and update the local storage
tasks = [];
renderTasks();
localStorage.setItem('tasks', JSON.stringify(tasks));
});

// Function to load the tasks from local storage
function loadTasks() {
const storedTasks = localStorage.getItem('tasks');
if (storedTasks !== null) {
tasks = JSON.parse(storedTasks);
renderTasks();
}
}

// Load the tasks when the page is loaded
loadTasks();
