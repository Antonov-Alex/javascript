


'use strict';

//-------------- "Task 9/8"-----------------------
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.

 */
const button = document.querySelector('.btn');
console.log(button);
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.js-modal-backdrop');
console.log(modalWindow);

const buttonClose = document.querySelector('.js-close-modal');
console.log(buttonClose);
const background = document.querySelector('.js-modal-backdrop')
console.log(background);


button.addEventListener('click' , handelClickButton)
function handelClickButton(evt){
modal.classList.remove('modal-hidden');
};

modalWindow.addEventListener('click', handeleCloseModalWindow)
function handeleCloseModalWindow(evt){
const target = evt.target;
console.log('target :' ,target);

if( target === buttonClose || target === background ){
  modalWindow.classList.add('modal-hidden');
}
}