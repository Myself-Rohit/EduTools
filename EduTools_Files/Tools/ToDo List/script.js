document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('update-btn').addEventListener('click', updateTodo);
document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (document.getElementById('update-btn').style.display === 'none') {
            addTodo();
        } else {
            updateTodo();
        }
    }
});

let currentEditItem = null;

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        showalert('Please enter a task.');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = todoText;

    const strikeBtn = document.createElement('input');
    strikeBtn.setAttribute("type","checkbox")
    strikeBtn.textContent = 'complete';
    strikeBtn.className = 'strike-btn';
    strikeBtn.addEventListener('click', function() {
        strikeTodoItem(li);
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', function() {
        editTodoItem(li);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(strikeBtn);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
    todoInput.focus();
}


function strikeTodoItem(li){
    currentEditItem = li;
    if(!li.childNodes[0].checked){
        li.childNodes[1].style.textDecoration = "none";
        li.childNodes[1].style.color= "white";
    }else{
        li.childNodes[1].style.textDecoration = "line-through";
        li.childNodes[1].style.color= "green";
    }
}

function editTodoItem(li) {
    currentEditItem = li;
    document.getElementById('todo-input').value = li.childNodes[1].innerText;
    document.getElementById('add-btn').style.display = 'none';
    document.getElementById('update-btn').style.display = 'block';
}

function updateTodo() {
    if (currentEditItem) {
        const todoInput = document.getElementById('todo-input');
        currentEditItem.childNodes[1].innerText = todoInput.value;
        todoInput.value = '';
        document.getElementById('add-btn').style.display = 'block';
        document.getElementById('update-btn').style.display = 'none';
        currentEditItem = null;
    }
}

function showalert(msg){
    document.getElementById("alert-text").innerText = msg
    document.getElementById("alert").style.top ="0%";
}

function hideAlert(){
    document.getElementById("alert").style.top ="-100%";
    document.getElementById("alert-text").innerText = ""
}