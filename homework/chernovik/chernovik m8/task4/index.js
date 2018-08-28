


'use strict';

//-------------- "Task 4/8"-----------------------

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/  
const form = document.querySelector('.question-form');
const html = document.querySelector('input[value = "html"]');

const css = document.querySelector('input[value = "css"]');
const js = document.querySelector('input[value = "js"]');
const php = document.querySelector('input[value = "php"]');

const cssValue = css.getAttribute('value')
console.log(cssValue);


const result = document.querySelector('p');
const button = document.querySelector('.btn');

console.log(result);


form.addEventListener('submit', handelCheckValue );

function handelCheckValue(evt){
  evt.preventDefault();
const target = evt.target;

target.classList.add('cheked');
console.log(target);
//const value = target.value;
const cheked = document.querySelector('.cheked');
const value = cheked.value;
console.log(value);
result.textContent = `Result : ${value}`;

}


button.addEventListener('submit' , handelSendCheckValue)
 function handelSendCheckValue(evt){
 
 }



