"use strict"

// Task "Admin Login"


const userCancel = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';
const noAccess = 'Доступ запрещен!';

const adminLogin = prompt('Enter your login, please!'); 
    if (adminLogin === null) {
    alert(userCancel);
} else if (adminLogin === 'admin') {
    const adminPassword = prompt('Enter your password, please!');
    if (adminPassword === null) {
    alert(userCancel);   
    } else if (adminPassword === 'm4ngo1zh4ackz0r') {
        alert(welcome);
    } else {
        alert(noAccess);
    }
} else {
    alert(noAccess);
};



