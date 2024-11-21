let addUserInput = document.querySelector('.form-input');
let addUserBtn = document.querySelector('.form-btn');
let userList = document.querySelector('.user-list');
let userBtn = document.querySelector('.form-btn');

addUserBtn.onclick = function() {
    let li = document.createElement('li');
    let removeBtn = document.createElement('button');

    li.textContent = addUserInput.value;
    removeBtn.textContent = 'Remove';
    li.classList.add('user-list--item')
    removeBtn.classList.add('remove-btn')
    addUserInput.value = '';
    userList.insertBefore(li, userList.firstChild);

    li.appendChild(removeBtn);

    removeBtn.onclick = function() {
        userList.removeChild(li);
    }
}














