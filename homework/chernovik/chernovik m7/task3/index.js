


'use strict';

//-------------- "Task 3/7"-----------------------

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const list = document.querySelector('.list');

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const item5 = document.createElement('li');
let items = [];
items.push(item1, item2, item3, item4, item5);
//console.log(arr);
/*
 elements.map(el => {
     items.map(x => x.apendChild = el)
     return items;
 })
*/
list.apend(item1, item2, item3, item4, item5);
//console.log(item1, item2, item3, item4, item5);