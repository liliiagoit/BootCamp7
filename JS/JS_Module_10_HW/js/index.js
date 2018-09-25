'use strict';

const getAllUsers = () => {
    fetch('https://test-users-api.herokuapp.com/users/')
    .then(response => response.ok ? response.json() : null)
    .then(data => createTable(data.data))
    .catch(error => console.log(error))
}

let root = document.querySelector('#root');
let form = document.querySelector('.show_userById');

const createTable = (arr) => {
    let table = document.createElement('table');
    let th = document.createElement('th');
    let userID = document.createElement('td');
    userID.textContent = 'USER ID';
    let userName = document.createElement('td');
    userName.textContent = 'USER NAME';
    let userAge = document.createElement('td');
    userAge.textContent = 'USER AGE';

    table.append(th);
    th.append(userID);
    th.append(userName);
    th.append(userAge);

    arr.map(el => {
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let name = document.createElement('td');
        let age = document.createElement('td');

        id.textContent = el.id;
        name.textContent = el.name;
        age.textContent = el.age;

        table.append(tr);
        tr.append(id);
        tr.append(name);
        tr.append(age);
        root.append(table);        
    })
}
getAllUsers();

const getUserById = (id) => {
    event.preventDefault();
    let uniqueId = document.querySelector('.idUser').value;

    fetch(`https://test-users-api.herokuapp.com/users/${uniqueId}`)
    .then(result => result.ok ? result.json() : null)
    .then(data => createListByID(data.data))
    .catch(error => console.log(error))
}
document.querySelector('.btnGetId').addEventListener('click', getUserById);

let createListByID = (arr) => {
    let input = document.querySelector('.show_userById');
    let ul = document.createElement('ul');
    ul.classList.add('ul');

    let firstLi = document.createElement('li');
    let secondLi = document.createElement('li');
    let thirdLi = document.createElement('li');

    firstLi.textContent = `User id: ${arr.id}`;
    secondLi.textContent = `User name: ${arr.name}`;
    thirdLi.textContent = `User age: ${arr.name}`;

    input.after(ul);
    ul.append(firstLi);
    ul.append(secondLi);
    ul.append(thirdLi);
}



const addUser = (name, age) => {
    event.preventDefault();
    let userName = document.querySelector('#name').value;
    let userAge = document.querySelector('#age').value;

    fetch('https://test-users-api.herokuapp.com/users/', {
    method: 'POST',
    body: JSON.stringify({
        name: userName,
        age: userAge,
    }),
    headers: {
        Accept: 'application/json',
        "Content-type": 'application/json',
    }
    }   
    ).then(result => result.ok ? result.json() : null)
    .then(data => console.log(data))
    .catch(error =>console.log(error))
}

document.querySelector('#button').addEventListener('click', addUser);


const removeUser = (id) => {
    event.preventDefault();
    let removebyId = document.querySelector('.idUser').value;

    fetch(`https://test-users-api.herokuapp.com/users/${removebyId}`, {
    method: 'DELETE',
    }).then(response => response.ok ? response.json() : null)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

document.querySelector('.btnRemoveUser').addEventListener('click', removeUser);


const updateUser = (id, user) => {
    event.preventDefault();
    let usId = document.querySelector('.usId').value;
    let usName = document.querySelector('.usName').value;
    let usAge = document.querySelector('.usAge').value;
    
    fetch(`https://test-users-api.herokuapp.com/users/${usId}`, {
        method: "PUT",
        body: JSON.stringify({name: usName, age: usAge}),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(result => result.ok ? result.json() : null)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

document.querySelector('.btnAdd').addEventListener('click', updateUser);





