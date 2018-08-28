


'use strict';

//-------------- "Task 8/8"-----------------------
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

const input = document.querySelector('.input');
console.log(input);
const result = document.querySelector('p');
console.log(result);

input.addEventListener('focus', handelFocus);

function handelFocus(evt){
const target = evt.target;
console.log(target);
const value = target.value;
if(value !== null){
  console.log("Input is in focus!")
  
}
result.textContent = `Current input value: ${value}`;
console.log(result.textContent)


}

 