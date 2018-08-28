


'use strict';

//-------------- "Task 2/8"-----------------------
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/
const parent = document.querySelector('.calc');
const buttonAdd = document.querySelector('button');
const input = document.querySelectorAll('input');

const inputFirst = input[0];
const inputSecond = input[1];

const result = document.querySelector('.result');



buttonAdd.addEventListener('click' ,handleAddResult)

function handleAddResult(evt){

const firstNum = Number(inputFirst.value);
const secondNum = Number(inputSecond.value)

result.textContent = firstNum + secondNum;
console.log(result);

}