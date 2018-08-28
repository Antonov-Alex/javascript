


'use strict';

//-------------- "Task 3/8"-----------------------

/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/
const button = document.querySelectorAll('.btn');
const buttonMinuse = document.querySelector('.js-sub');
const buttonPluse = document.querySelector('.js-add');
const res = document.querySelector('.js-value');
//const number = res.textContent;
buttonPluse.addEventListener('click' , handelAddValue);
function handelAddValue(evt){
  res.textContent ++ ;
}

buttonMinuse.addEventListener('click' , handeleMinValue);
function handeleMinValue(evt){
  res.textContent --;
if(res.textContent < 0 ){
  res.textContent = 0;
}
}
