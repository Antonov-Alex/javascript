  


'use strict';

//-------------- "Task 1/10"-----------------------
/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/


const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
//const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", handleFormSubmit);

/*
  @param {FormEvent} evt

function handleFormSubmit(event) {
  event.preventDefault();
  const query = input.value;
  fetchCountryData(query);

}
function  fetchCountryData(evt) {
const url = "https://restcountries.eu/rest/v2/name/" + evt;
fetch(url)
      .then(response =>{if(response.ok) return response.json();
      throw new Error (`Error while fetching: ${response.statusText}`);})
     .then(data =>{
       const object = data[0];return console.log(object);
     })
     .then(x =>{ const countryName = document.createElement('p');
     console.log(x)
    // countryName.textContent = "Country Name: " + x.name;
     const Capital = document.createElement('p') 
     Capital.textContent = "Capital: " + x.capital;
     const Currency = document.createElement('p') 
     Currency.textContent = "Currency: " + x.currencies[0].code;
     const Flag = document.createElement('img') 
     Flag.style.width = "40px";
     Flag.setAttribute('src', x.flag)
     result.append(countryName, Capital, Currency, Flag);
     console.log(x); 
     return countryName;
    })

      .catch(error => {console.log("ERROR:"  + error);})
}
*/













 // @param {FormEvent} evt
  
  


function handleFormSubmit(event){
  event.preventDefault();
  const requestedCountry = input.value;
  console.log("-----" + requestedCountry);
  
  fetchCountryData(requestedCountry)
}
function fetchCountryData(evt) 
  {  
    const url = "https://restcountries.eu/rest/v2/name/" + evt;
    fetch(url)
      .then(response =>{if(response.ok) return response.json();
      throw new Error (`Error while fetching: ${response.statusText}`);})
      .then(data =>{const object = data[0]; return object})
      .then(x =>{ const countryName = document.createElement('p') 
                 countryName.textContent = "Country Name: " + x.name;
                 const Capital = document.createElement('p') 
                 Capital.textContent = "Capital: " + x.capital;
                 const Currency = document.createElement('p') 
                 Currency.textContent = "Currency: " + x.currencies[0].code;
                 const Flag = document.createElement('img') 
                 Flag.style.width = "40px";
                 Flag.setAttribute('src', x.flag)
                 result.append(countryName, Capital, Currency, Flag);
                 console.log(x); 
                                  

                 return countryName;})
      .catch(error => {console.log("ERROR:"  + error);})
  }
  