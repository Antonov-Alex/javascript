



'use strict';

//-------------- "Task 4/7"-----------------------
/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
/*
const createElement = () => {
 const list = document.createElement('ul');
list.classList.add('list');
const item = document.createElement('li');
item.classList.add('item');
list.append(item);
var value;
const createItem = () => {
  value = document.createElement('li');
 return value;
}

  
while(true){
    createItem();
    let item = value;
    let addText = prompt( 'введте значние');
    item.innerHTML === addText;
    item.classList.add('item');
    list.append(item);
    if(addText == null){
        break;
    }
}
return list;
};



const show = createElement();
console.log(show);
*/
let arr = [];

const createElement = () => {
    const list = document.createElement('ul');
   list.classList.add('list');
   const item = document.createElement('li');
   item.classList.add('item');
   list.append(item);
   var value;
   const createItem = () => {
     value = document.createElement('li');
    return value;
   }
   while(true){
    createItem();
    let item = value;
    let addText = prompt( 'введте значние');
    arr.push(addText);
   for(let i in arr){
    item.textContent = arr[i];
   }
    item.classList.add('item');
    list.append(item);
    if(addText == null){
        break;
    }
}
return list;
};





   const show = createElement();
   console.log(show);