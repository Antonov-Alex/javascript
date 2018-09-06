


'use strict';

//-------------- "Task 2/8"-----------------------
/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/


function getFormattedTime(time) {
  let date = new Date(time);
  console.log("0"+ date.getMinutes(),":",date.getSeconds(), date.getMilliseconds('1'), ',');
  
  
}

console.log(
  getFormattedTime(1523621052858)
); // 04:12.8

console.log(
  getFormattedTime(1523621161159)
); // 06:01.1

console.log(
  getFormattedTime(1523621244239)
); // 07:24.2
/*
//let date = new Date();
console.log("Date: " + date);
console.log("getDate(): " + date.getDate());
console.log("getDay(): " + date.getDay());
console.log("getMonth(): " + date.getMonth());
console.log("getFullYear(): " + date.getFullYear());
console.log("getHours(): " + date.getHours());
console.log("getMinutes(): " + date.getMinutes());
console.log("getSeconds(): " + date.getSeconds());
console.log("getMilliseconds(): " + date.getMilliseconds());
console.log("getTime(): " + date.getTime());
*/