


'use strict';

//-------------- "Task 2/7"-----------------------
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const list = document.querySelector('.list');
console.log(list);
const firstItem = list.firstElementChild;
console.log(firstItem);


const lastItem = list.lastElementChild;
console.log(lastItem);

firstItem.classList.add('red');
lastItem.classList.add('blue');

firstItem.style.color = '#A9A9A9';
firstItem.style.fontSize = '3rem';
