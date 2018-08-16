


'use strict';

//-------------- "Task 5/7"-----------------------
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
const list = document.querySelector('.size-filter')

console.log(list);
const inputs = document.querySelectorAll('input');
console.log(inputs);
const checks = list.querySelectorAll('input[type="checkbox"]:checked');
console.log(checks);
 const arrChek = Array.from(checks);
 
 const atr = inputs.hasAttribute('name');
 console.log(atr);


