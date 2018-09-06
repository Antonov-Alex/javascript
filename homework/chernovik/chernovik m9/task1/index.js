


'use strict';

//-------------- "Task 1/9"-----------------------

/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const body = document.querySelector('body');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const colorBody = body.style.backgroundColor;
console.log(body);
console.log(stopBtn);

//startBtn.addEventListener('click' ,handelStartTimer )
//stopBtn.addEventListener('click' ,handelStopTimer)




const onClick = () => {
  setTimeout(() => {
      while(colors){
    colors.forEach(x => body.style.backgroundColor = x)
      }
  }, 2000);
};

// через 2 секунды после нажатия на кнопку 
// появится alert указаный внутри колбека setTimeout
startBtn.addEventListener('click', onClick);