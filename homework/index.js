'use strict';



const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const CANCELED = 'Отменено пользователем!'
const NOT_AVAILABLE = 'Доступ запрещен!'
const USER = prompt('Введите ваше имя')
if (USER === null) {

   alert(CANCELED);
}




if (USER === ADMIN_LOGIN) {
  const PASSWORD = prompt('Введите Ваш пароль!');
  if (PASSWORD === null) {

    ( alert(CANCELED));
  }

  if (PASSWORD === ADMIN_PASSWORD) {
    alert('Добро пожаловать!');
  } else {
     alert(NOT_AVAILABLE);
  }
} else {
  (USER !== ADMIN_LOGIN)
  (alert(NOT_AVAILABLE))
}

//====================================================================================




'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log('Existing logins database: ', logins);
const updatedLoginBase = [logins];
let login = prompt('Please, enter your login');

// (function expression) (checkLoginValidity)------------------------------------------------------
const checkLoginValidity = function(login) {
    if (4 <= login.length && login.length <= 16) {
        return true;
    }
    return false;
};
const checkLoginValidityResult = checkLoginValidity(login);

// (function expression) (checkIfLoginExists)------------------------------------------------------
const checkIfLoginExists = function(logins, login) {
    if (logins.includes(login)) {
        return true;
    }
    return false;
};
const checkIfLoginExistsResult = checkIfLoginExists(logins, login);

// (function expression) (addLogin) ----------------------------------------------------------------
const addLogin = function(logins, login) {
    console.log('Entered login: ', login);
    console.log('login length:', login.length);
    checkLoginValidity(login);
    console.log('Length Validity (4-16):', checkLoginValidityResult);

    if (!checkLoginValidityResult) {
        return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else {
        console.log(
            `Checking login " ${login} " for existance in the base of logins...`,
        );
        checkIfLoginExists(logins, login);
    }
    if (!checkIfLoginExistsResult) {
        console.log('Данный логин отсутствует в базе логинов');
        console.log('Логин успешно добавлен!');
        updatedLoginBase.push(login);
    } else {
        console.log('Такой логин уже используется!');
    }
};

// (function call) (addLogin)=======================================================================
addLogin(logins, login);

console.log('updated base of logins: ', updatedLoginBase);