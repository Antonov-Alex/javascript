


'use strict';

//-------------- "Task 10/8"-----------------------

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const menu = document.querySelector('.menu');
//console.log(menu);

const items = document.querySelectorAll('.menu-link');
//console.log(items);
const arr = [...items];
//console.log(arr);

menu.addEventListener('click',handeleClickOnItem);

function handeleClickOnItem(evt){
const target = evt.target;

const addClass = () =>target.classList.add("menu-link-active");
 console.log(target);
for(let i in arr){
 if( target){
   addClass();
   
 }
 arr[i].classList.remove("menu-link-active");
}


}


    
   



 