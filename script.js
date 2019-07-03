var todos = [];
var completed = [];
var todoList = document.getElementById("todoList");
var completedList = document.getElementById("completedList");
var countElement = document.getElementById("todosCount");
var completedElement = document.getElementById("todosCompleted");

function getTodo() {
  // Get the input
  var newTodo = document.getElementById("todoInput");
  // Add todo to the array.
  todos.push(newTodo.value);
  // Reset value to empty the input
  newTodo.value = "";
  // Function to show todos
  showTodos();
}

function showTodos() {
  var HTML = "";
  // for refactoring to map
  // var HTML = todos.map((todo, index) => {
  //   return `<div><input type="checkbox" id="todo${index}" />
  //     <span className="to  do">${todo}</span></div>`;
  // });
  // HTML.join();

  for (var i = 0; i < todos.length; i++) {
    HTML += `<div><input type="checkbox" id="todo${i}" onChange="complete(this.id)"> <span className="todo">${
      todos[i]
    }</span></input></div>`;
  }

  todoList.innerHTML = HTML;
  countElement.innerHTML = todos.length;
}

function complete(todo) {
  let index = todo.replace("todo", "");

  completed.push(todos[index]);
  todos.splice([index], 1);

  showTodos();
  showCompleted();
}

function showCompleted() {
  var HTML = "";

  for (var i = 0; i < completed.length; i++) {
    HTML += `<div><i class="far fa-check-circle"></i> ${completed[i]}</div>`;
  }

  completedList.innerHTML = HTML;
  completedElement.innerHTML = completed.length;
}
