


'use strict';
//=============================================================================================
//           task2/6
  /*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/


function StringBuilder(string = "") {
  this.value = string;
}

StringBuilder.prototype.getValue = function(){
  console.log('value :' , this.value);
  };
  StringBuilder.prototype.append = function(str){
    this.value = this.value + str;
    
  }
  StringBuilder.prototype.prepend = function(str){
    this.value = str + this.value;
    
  }
  StringBuilder.prototype.pad = function(str){
    this.value = str + this.value + str;

  }
  StringBuilder.prototype.showValue = function(){
    console.log('value :' , this.value);
  }
const myString = new StringBuilder('.');

myString.append('^'); 
myString.showValue(); // '.^'

 myString.prepend('^'); 
 myString.showValue(); // '^.^'

  myString.pad('='); 
 myString.showValue(); // '=^.^='
      
    
      







