
const todos = [];
const todoUl = document.getElementsByClassName('todos')[0];
const todoForm = document.getElementsByClassName('add-todo-form');
const checkboxes = document.getElementsByClassName('checkbox-for-list');


if(localStorage.getItem('todolist')){
    // debugger;
    const persisted = JSON.parse(localStorage.getItem('todolist'));
    
    persisted.forEach(ele => {
        todos.push(ele);
    });

    todos.forEach(el => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    label.innerHTML = el.todo;
    label.setAttribute('for', el.todo)
    input.data = el;    
    if(input.data.done === true){
        input.checked = true;
    };
    input.className = 'checkbox-for-list'
    
    label.append(input);

    const li = document.createElement('li');
    li.append(label);
    const todoselement = document.getElementsByClassName('todos')
    todoselement[0].appendChild(li);
    })
}

function addTodo(e){
    // debugger;
    e.preventDefault();
    const todo = document.getElementsByName('add-todo');
    let todoObject = {todo: todo[0].value, done: false}
    todos.push(todoObject);
    todo[0].value = '';
    populateList();
    localStorage.setItem('todolist', JSON.stringify(todos))
}

function populateList(){
    // debugger;

    const el = todos[todos.length - 1];

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    label.innerHTML = el.todo;
    // label.setAttribute('for', el.todo)        
    input.className = 'checkbox-for-list'
    input.data = el;
    label.append(input);

    const li = document.createElement('li');
    li.append(label);
    const todoselement = document.getElementsByClassName('todos')
    todoselement[0].appendChild(li);

}

function updateCheckbox(e){
    debugger;
}

const todoclass =  document.getElementsByClassName('add-todo-form')[0];

// const todobutton = todoclass[0].lastChild;

todoclass.addEventListener('submit', addTodo);

Array.from(checkboxes).forEach(checkbox => {
    checkbox.addEventListener('click', updateCheckbox);
})

