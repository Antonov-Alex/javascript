


'use strict';
//task 2/10

/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "";

submitBtn.addEventListener("click", handleFormSubmit);

/*
  @param {FormEvent} evt
*/
function handleFormSubmit(event){
  event.preventDefault();
const query = input.value;
console.log(query);
fetchUserData(query);
}



function fetchUserData(evt){
const url ='https:api.github.com/users/'+ evt;
fetch(url)
      .then(response =>{if(response.ok) return response.json();
      throw new Error (`Error while fetching: ${response.statusText}`);})
      .then(data =>{
        console.log(data);
        const UserName = document.createElement('p');
        UserName.textContent =  'Username:'+ data.login;
        console.log(UserName);
        const avatar = document.createElement('img');
        avatar.setAttribute('src', data.avatar_url);
        const bio = document.createElement('p');
        bio.textContent = 'Bio:'+ data.bio;
        const publicRepos = document.createElement('p');
        publicRepos.textContent = data.public_repos;
       result.append(UserName,avatar,bio,publicRepos)
        
       return UserName;
      })
      
      
      .catch(error => {
        // catch обрабатывает возможную ошибку запроса
        console.error("Error: ", error);
      });
}