"use strict"

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
}

const isLoginUnique = function (login) {
    if (logins.includes(login)) {
        return false;
    } else {
        return true;
    }
}

const addLogin = function (login) {
    if(isLoginValid(login)) {
        if(isLoginUnique(login)){
            logins.push(login);
            return 'Логин успешно добавлен!';
        } else {
            return 'Такой логин уже используется!';
        }
    } else {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
}


// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
