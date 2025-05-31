document.getElementById("add-btn").addEventListener("click", addTodo);
document.getElementById("update-btn").addEventListener("click", updateTodo);
document
  .getElementById("todo-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (document.getElementById("update-btn").style.display === "none") {
        addTodo();
      } else {
        updateTodo();
      }
    }
  });

let currentEditItem = null;
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const strikeBtn = document.createElement("input");
    strikeBtn.setAttribute("type", "checkbox");
    strikeBtn.className = "strike-btn";
    strikeBtn.checked = todo.completed;
    strikeBtn.addEventListener("click", function () {
      todos[index].completed = strikeBtn.checked;
      saveTodos();
      renderTodos();
    });

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.textDecoration = todo.completed ? "line-through" : "none";
    span.style.color = todo.completed ? "green" : "white";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", function () {
      editTodoItem(index);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(strikeBtn);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    showalert("Please enter a task.");
    return;
  }

  todos.push({ text: todoText, completed: false });
  saveTodos();
  renderTodos();

  todoInput.value = "";
  todoInput.focus();
}

function editTodoItem(index) {
  currentEditItem = index;
  document.getElementById("todo-input").value = todos[index].text;
  document.getElementById("add-btn").style.display = "none";
  document.getElementById("update-btn").style.display = "block";
}

function updateTodo() {
  if (currentEditItem !== null) {
    const todoInput = document.getElementById("todo-input");
    todos[currentEditItem].text = todoInput.value.trim();
    saveTodos();
    renderTodos();

    todoInput.value = "";
    document.getElementById("add-btn").style.display = "block";
    document.getElementById("update-btn").style.display = "none";
    currentEditItem = null;
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showalert(msg) {
  document.getElementById("alert-text").innerText = msg;
  document.getElementById("alert").style.top = "0%";
}

function hideAlert() {
  document.getElementById("alert").style.top = "-100%";
  document.getElementById("alert-text").innerText = "";
}

renderTodos();
