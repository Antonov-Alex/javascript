


'use strict';

//-------------- "Task 7/8"-----------------------
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/

const inputs = document.querySelector('.inputs');
console.log(inputs);
const elements = document.querySelectorAll('input');
console.log(elements);
const arr = [...elements];
console.log(arr);

for(let  i = 0; i < arr.length; i++){
  console.log('elements[data-legth]')
}

//const addBtn = document.querySelector('button[data-action="add"]')




/*
inputs.addEventListener('click' , handelChekKeyLength)

function handelChekKeyLength(evt){
}
*/