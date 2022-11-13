let groceryList = document.getElementById('groceryList');
let submit = document.getElementById('submit');
let clearItems = document.getElementById('clear');
let input = document.getElementById('grocery');
let form = document.getElementById('form');
let editButtons = document.getElementsByClassName('edit');
let deleteButtons = document.getElementsByClassName('delete');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = input.value;
    let li = document.createElement('li');
    let span = document.createElement('span');
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    span.innerHTML = value;
    groceryList.appendChild(li);
    li.appendChild(span);
    input.value = '';
    editButton.innerHTML = 'Edit';
    deleteButton.innerHTML = 'X';
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    editButton.className = 'edit';
    deleteButton.className = 'delete';
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (e) => {
            let li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });
    }
    for(let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (e) => {
            let userValue = prompt('Enter new product');
            let li = e.target.parentElement;
            let span = li.firstElementChild;
            span.textContent = userValue;
        });
    }
});

clearItems.addEventListener('click', () => {
    while(groceryList.firstChild) {
        groceryList.removeChild(groceryList.lastChild);
    }
});