


'use strict';

//-------------- "Task 1/8"-----------------------
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const button = document.querySelector('.button');
button.addEventListener('click',  handelButtonClick);

function handelButtonClick(evt){
const target = evt.target;
console.log(target);
if(target === button){
    button.textContent ++;
}
}