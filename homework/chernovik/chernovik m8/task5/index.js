


'use strict';

//-------------- "Task 5/8"-----------------------

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/

const list = document.querySelector('.images')
console.log(list);
list.addEventListener('click', handleListClick );

function handleListClick(evt){
const target = evt.target;
console.log(target);
const srcAtr = target.getAttribute("src");

return alert(srcAtr);
}