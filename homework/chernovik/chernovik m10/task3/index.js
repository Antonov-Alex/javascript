


'use strict';

//-------------- "Task 3/10"-----------------------

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как  
  и кол-во объектов пользователей в ответе:
  
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");

//getBtn.addEventListener("click", fetchUsers);

/*
  @param {FormEvent} evt
*/

  fetch("https://test-users-api.herokuapp.com/users/")
  .then(response => {
    if(response.ok) return response.json();

    throw new Error(`Error while fetching: ${response.statusText}`);
  })
  .then(x => {
    const arr = x.data;
    
    const arrId = arr.forEach(el => {
     const id = document.createElement('p');
     result.append(id);
     id.textContent = "ID: " + el.id +  "______" +"Name: " + el.name + '______' +'Age: ' +el.age;
    
    });
   
    
    
    // data handling
  })
 
  .catch(error => {
  });


