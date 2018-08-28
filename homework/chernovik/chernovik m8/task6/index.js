


'use strict';

//-------------- "Task 6/8"-----------------------
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

const list = document.querySelector('.list');
console.log(list);

list.addEventListener('click' , handlListClick)
function handlListClick(evt){
  const target = evt.target;
const nodeName = target.nodeName;
console.log(nodeName);

if(nodeName === 'BUTTON') {
  //console.log('В точку!!!')
  
  const parent = evt.target.parentNode;
  
  
  parent.remove();
  
   }
}