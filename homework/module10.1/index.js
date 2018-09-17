'use strict';

//-------------- "Модуль 10"-----------------------

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
const url = 'https://test-users-api.herokuapp.com/users/'
const btnGetUsers = document.querySelector('.js-get-all_users');
const result = document.querySelector(".result");
const btnGetById = document.querySelector('.js-get-byId');
const input = document.querySelector(".js-find-by-id");
const btnAddUser = document.querySelector('.js-add-user');
const inputName = document.querySelector(".js-add-name");
const inputAge = document.querySelector(".js-add-age");
const inputDel = document.querySelector(".js-delete");
const btnDelete = document.querySelector('.js-del-user');
const resList = document.createElement('ul');
const btnUpdate = document.querySelector('.js-update-user');
const inputForUdate = document.querySelector('.js-id-for_udate');
const inputUdateName = document.querySelector(".js-update-name");
const inputUdateAge = document.querySelector(".js-update-age");
const formSearch = document.querySelector('.search-form');

result.append(resList);
resList.classList.add('list');
const request = {

  UserID: null,
  UserName: null,
  UserAge: null,
}

console.log(formSearch);
btnGetUsers.addEventListener('click', handleGetUsersInfo);

function handleGetUsersInfo(event) {
  event.preventDefault();
  console.log(btnGetUsers);
  getAllUsers();
  formSearch.reset();
};

function getAllUsers() {

  fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching: ${response.statusText}`);
    })

    .then(x => {
      const arr = x.data;
      console.log(arr);
      const userInfo = arr.forEach(el => {
        const item = document.createElement('li');
        item.classList.add('item');
        item.setAttribute('id', el.id);
        resList.append(item);

        item.textContent = "ID: " + el.id + "______" + "Name: " + el.name + '______' + 'Age: ' + el.age;
      });
    })
    .catch(error => {
      console.log("ERROR:" + error);
    })
};


btnGetById.addEventListener('click', handleFindUserById);

function handleFindUserById(event) {
  event.preventDefault();
  const value = input.value;
  getUserById(value);
  formSearch.reset();
}

function getUserById(id) {
  fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching: ${response.statusText}`);
    })

    .then(x => {
      const arr = x.data;
      const txt = document.createElement('p');
      result.append(txt);
      const element = arr.find(el => el.id = id)
      const elementJson = JSON.stringify(element);
      txt.textContent = elementJson;


    })
    .catch(error => {
      console.log("ERROR:" + error);
    })
};

btnAddUser.addEventListener('click', handleAddUser);

function handleAddUser(evt) {
  evt.preventDefault();

  request.UserName = inputName.value;
  request.UserAge = inputAge.value;

  if (request.UserAge === "" || request.UserName === "") {
    DOMrefs.createNewUserForm.reset();
    return alert("all fields should be filled properly");
  }

  addUser(request.UserName, request.UserAge);
  formSearch.reset();
}

function addUser(nameToAdd, ageToAdd) {
  const user = {
    name: nameToAdd,
    age: ageToAdd,
  }

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    return response.json();
  }).then(
    newuser => {
      return console.log(newuser);
    }

  ).catch(error => {
    alert(`User ID   "${error}"  is Invalid `);
    console.log("ERROR:" + error)
  })
};

btnDelete.addEventListener('click', handleDelUser);

function handleDelUser(evt) {
  evt.preventDefault();
  const value = inputDel.value;
  removeUser(value);

};

function removeUser(id) {
  fetch(url + id, {
      method: 'DELETE'
    }).then((x) => {
      // console.log(x)
    })

    .catch(error => console.log('ERROR' + error));
};


btnUpdate.addEventListener('click', updateUser);

function updateUser(event) {
  event.preventDefault();

  const id = inputForUdate.value;

  const updatedUser = {
    name: inputUdateName.value,
    age: inputUdateAge.value
  }

  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(() => alert("Success!"))
    .catch(error => console.log(error));

  formSearch.reset();
}
