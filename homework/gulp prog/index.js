'use strict';

//-------------- "Модуль 11"-----------------------

/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/

const form = document.querySelector(".form");
const fieldText = document.querySelector(".field-text");
const buttonAdd = document.querySelector(".field-button");
const resultList = document.querySelector(".list");
const resultItem = document.querySelector(".item");
const resultLink = document.querySelectorAll(".link");
const btnDel = document.querySelector(".button-del");
const link = document.querySelector('.link');
const linksList = [
  { name: '', }
];
const arrLS = [];

const arrItmeName = [];

getElemntsFromLS();
addElementsFromLs();
  

function addLink(obj){
  const source = document.querySelector('#link-item').innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = obj.reduce((acc, item) => acc + template(item), '');
  resultList.insertAdjacentHTML('afterbegin', markup);
}

buttonAdd.addEventListener('click' ,handleAddItem )
function handleAddItem(evt){
  evt.preventDefault();
 const value = fieldText.value;
 console.log('val' , value);
 const itemName = linksList[0];
 if(!arrItmeName.includes(value)){
    arrItmeName.push(value);
    arrItmeName.map(x => itemName.name = x);
    addLink(linksList)
  }else{
    
    alert('Данная ссылка уже добавлена в список');
    }
   form.reset();
   locStore(arrItmeName);
  }
 
 
  
 btnDel.addEventListener('click', handleDelItem)
 
   function handleDelItem(evt){
    evt.preventDefault();
    const nodeName = evt.target.nodeName;
    if (nodeName ==='BUTTON'){
      const parent = evt.target.parentNode;
      parent.remove();
    }
   }
  
 function locStore(arr){
  localStorage.setItem("names", JSON.stringify(arr));
    };


  function getElemntsFromLS(){
    const storedNames = JSON.parse(localStorage.getItem("names"));
    console.log(storedNames);
    for(let i in storedNames){
      arrLS.push({name: storedNames[i]})
      console.log(arrLS)
    }
   };
  function addElementsFromLs(){
    
    addLink(arrLS);
    /*
   const btn = document.createElement('button');
   btn.classList.add("button-del");
   resultList.appendChild(btn);
*/
  };
 