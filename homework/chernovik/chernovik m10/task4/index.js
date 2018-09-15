


'use strict';

//-------------- "Task 4/10"-----------------------

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию getUserByName, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.
 
  Результатом fetch будет ответ от сервера, 
  вывести содержимое всего ответа (id, name, age) 
  или 'Такого пользователя в списке нет!'.
*/

const input = document.querySelector("input");
const postBtn = document.querySelector(".js-post");
const result = document.querySelector(".result");

postBtn.addEventListener("click", getUserByName);

function getUserByName(event) {
  event.preventDefault();
  const value = input.value;
  console.log(value);
  
  search(value)
}



function search(evt){
fetch("https://test-users-api.herokuapp.com/users/")
.then(response => {
  if(response.ok) return response.json();

  throw new Error(`Error while fetching: ${response.statusText}`);
})
.then(x => {
  
  const arr = x.data;
  const txt = document.createElement('p');
 result.append(txt);
 
  const element = arr.find(el => el.name = evt)
    
      const elementJson = JSON.stringify(element);
      txt.textContent = elementJson;
  })
    //return create(notFound);
    
    
  
  
  
    

    //const info = 'Name :' + el.name + "  ID :" +el.id + "  Age :" + el.age;
  

  

.catch(error => {
});
};

function create(b){
 const txt = document.createElement('p');
 result.append(txt);
 txt.textContent = b;

};

const notFound = 'Такого пользователя в списке нет!';




