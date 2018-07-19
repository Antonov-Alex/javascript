'use strict';









//const name = "hmhhh";
//const age = 12;

//const dog = {
 // age : 12,
  //name : "hobot",
 // color : 'brown',
//}
 // for(const key in dog){
//console.log(key);
//console.log('значение ключа :' , dog[key]);
 // }


 //==================================================================================================
 /*
const salerys = {
  Mango : 50,
  Gufy : 70,
  Vasya : 150,
  
};
let total = 0;
for(const key in salerys){
total += salerys[key];
}
  console.log(total);
  */

/*
  const office = [
    {name : 'Mango', salorey : 150,},
    {name : 'Vasya', salorey : 250,},
    {name : 'Kolya', salorey : 300,},
  ];
  console.log(office[0].name);
  console.log(office[2].salorey);
*/


/*
const dog = {
  name : 'Huy',
  friends : [
    {name : 'pif', age : 5,},
    {name : 'fop', age : 10,}
  ]
}
console.log(dog.friends[0].age);
console.log(dog.friends[1].name);
*/
//========================================================================================================
/*
              //                       
let total = 0;
const office = [
  {name : 'Mango', salorey : 150,},
  {name : 'Vasya', salorey : 250,},
  {name : 'Kolya', salorey : 300,},
];
for(const worker of office){
total += worker.salorey;

}
console.log(total);
*/
//================================================================================================================================
//                                 Object.keys
/*
let total = 0;
const salerys = {
  Mango : 50,
  Gufy : 70,
  Vasya : 150,
  
};
const keys = Object.keys(salerys);
console.log(keys);
for(const key of keys){
total += salerys[key];
}
console.log(total);
*/
//=========================================================================================================
//                            Object.values

/*
let total = 0;
const salerys = {
  Mango : 50,
  Gufy : 70,
  Vasya : 150,
};
const values = Object.values(salerys);
for(const value of values){
  total += value;
}
console.log(total);

*/

//===========================================================================================================
           //                 Object.entries

/*
  let total = 0;
const salerys = {
  Mango : 50,
  Gufy : 70,
  Vasya : 150,
};
const entries = Object.entries(salerys);
console.log(entries);
for(const entrie of entries ){
  const key = entrie[0];
  const value = entrie[1];
  console.log(key);
  console.log(value);
  total += value; 
}
console.log('total : ' ,total);
*/

//====================================================================================================================
//                                            СЛИЯНИЕ ОБЪЕКТОВ
//                                        ------------------------

//                                            Object.assign
//  
/*
const defultSettings = {
  workTime : '24h',
  theme : 'light theme',
  name : '',
};
const userSettings = {
  name : 'Huy',
  age : 31,
  theme : 'dark theme',
};
const marced = Object.assign({},defultSettings,userSettings);
console.log(marced);
*/
//==============================================================================================================================
//                                           ... (rest)
/*
const defultSettings = {
  workTime : '24h',
  theme : 'light theme',
  name : '',
};
const userSettings = {
  name : 'Huy',
  age : 31,
  theme : 'dark theme',
};
const marced = {...defultSettings,...userSettings};
console.log(marced);
*/
//=============================================================================================================================
//           ДОБАВЛЕНИЕ В МАССИВ(ВМЕСТО PUSH & SLICE) =>SPRED
/*
const arr = [1, 2, 3, 4, 5, 6]
const newArray = [0, 27, 90, ...arr,'to-do']
console.log(newArray);
//   МОЖНО ДОБАВЛЯТЬ В НАЧАЛО ,СЕРЕДИНУ ИЛИ В КОНЕЦ
//==================================================================
*/
/*
//      ------------ ДЕСТУКТУРИЗАЦИЯ---------------
const dog = {
  age : 12,
  name : "hobot",
 color : 'brown',
}
const { age, name, color , breed} = dog;
console.log(name);
console.log(age);
console.log(color);
*/


/*  
// ========================================================================
//  МОДУЛЬ 4 ДОП/ДЗ-1
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/
/*
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
user.mood = 'happy';
console.log(user);

user.hobby = 'javascript';
console.log(user);

delete user.premium;
console.log(user);


for(const key in user){
console.log(user[key]);
}
const keys = Object.keys(user);
console.log(keys);
for(const key of keys){
 
}
const entries = Object.entries(user);
for(const entrie of entries){
  const key = entrie[0];
  const value = entrie[1];
  console.log(entrie[0]);
  console.log(entrie[1]);
}
*/
//=========================================================
//  МОДУЛЬ 4 ДОП/ДЗ-2
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/
/*
const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};

let bestWorkerName = ' ';
const entries = Object.entries(tasksCompleted);
for(let entrie of entries ){
  let key = entrie[0];
  let value = entrie[1];
  bestWorkerName = key;
 console.log(key,value);
}
console.log(bestWorkerName);
 */
//==================================================================================================
  //  МОДУЛЬ 4 ДОП/ДЗ-3

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
/*
const countProps = function(obj){
  const values = Object.values(obj);
  let counter = 0;
  for(let value in values){
    counter ++;
  }
  return counter;
}
// Вызовы функции для проверки
console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3
*/
//==========================================================================================================
 //  МОДУЛЬ 4 ДОП/ДЗ-4

 /*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
/*
const isObjectEmpty = function(obj){
  for(let key in obj){
  return false;
             }
return true;
  }
// Вызовы функции для проверки
console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({a: 1})
); // false

console.log(
  isObjectEmpty({a: 1, b: 2})
); // false
*/
//==============================================================================

//  МОДУЛЬ 4 ДОП/ДЗ-5

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/
/*
let total = 0;
const countTotalSalary = function(salaries){
let key = Object.keys(salaries);
for(let key in salaries){
total += salaries[key] ;
}
return total;
}
// Вызовы функции для проверки
console.log(
  countTotalSalary({})
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330
*/

//==============================================================================================================
/*
function fn(){
  console.log(this);
}

fn();

const petya = {
name : 'Petya',
showThis(){
  console.log(this);
},
showName(){
console.log(this.name);
},
};
petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
petya.showName();
*/
/*
const hotel = {
  showThis : function(){
const fn =() => this;
console.log(fn());
  }
};
hotel.showThis();
*/
 //const greet = function(){
 // return "Hi my name is " + this.name;
 //   }
 /*
const greet = function(greeting){
  return greeting + "hi my name is " + this.name;
}


const person = {
name : "Vasya",
greet : greet,

};

const anotherPerson = {
  name : "Fedya",
  greet : greet,
  
  };

console.log(person.greet());
console.log(anotherPerson.greet.call(person , "привет"));

 

function Hotel(name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
}

// В результате вызова :
const hotel = new Hotel("Resort Hotel", 5, 100);
// получаем такой объект
console.log( hotel );

/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
/*
function User(name, isActive, age, friends){
 this.name = name;
 this.isActive = true;
 this.age = age;
 this.friends = friends;
 function getUserInfo(){
 return  `User ${this.name} is ${this.age} years old and has ${this.friends} friends`
 }
}
const otherUser = new User('Ann' , true, 6, 7)
console.log(otherUser);
let str = ann.name + "/n" +
ann.isActive + "/n" +
ann.age + "/n" +
ann.friends;
ann.getUserInfo()
*/


//==============================================================================================









/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

let totalPrice = 0;
let customerMoney = 0;
let changeAmount = 0;

function Cashier(name ,productsDatabase){
this.name = name;
this.productsDatabase = productsDatabase;

this.totalPrice = totalPrice;

this.customerMoney = customerMoney;
this.changeAmount = changeAmount;
this.greet = function(){
  console.log( `Здравствуйте, вас обслуживает ${this.name}` );
  
}  
// onSuccess() - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${сдача}` 
 //       если сдача больше 0, и строку `Спасибо за покупку` если сдача равна 0.

this.onSuccess = function(){

if(changeAmount > 0 ){
 return console.log(`Спасибо за покупку, ваша сдача ${changeAmount}`);
}
else if(changeAmount = 0){
 return console.log( `Спасибо за покупку` );
}

}


//onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   

this.onError = function(){
  if(customerMoney < totalPrice){
   return  console.log( 'Очень жаль, вам не хватает денег на покупки'  );
  }
  
}

// countTotalPrice(order) - метод, получает список покупок, считает общую стоимость исходя из 
  //      поля productsDatabase. Записывает результат в поле totalPrice.


this.countTotalPrice = function(order){
  order = {};
  order = products;
  const values = Object.values(products);          
for(const value of values){
  totalPrice += value;
 
}
console.log('Список покупок :' ,products);
console.log('Общая сумма продуктов = ' ,totalPrice);


}//- getCustomerMoney(value) - метод, получает число - деньги покупателя и записывает его в поле customerMoney
this.getCustomerMoney = function(value){
  
  value = Number(prompt('Введите сумму которая увас есть'));
  customerMoney = value;
 console.log('Сумма которая есть у клиента :' ,customerMoney);
}


//- countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя, 
//записывает результат в поле changeAmount.
//* Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
//* Если денег было передано достаточно, возвращает текущее значение changeAmount
//* Если было передано меньше денег чем в поле totalPrice, возвращает null 
this.countChange = function(){
  
  changeAmount = customerMoney - totalPrice;
   if(customerMoney >= totalPrice){
    return changeAmount;
    
  }
  return changeAmount = null;
  
}
this.beforeReset = function(){
  console.log('totalPrice :' ,totalPrice, 'customerMoney :' ,customerMoney, 'changeAmount :' ,changeAmount );
}
//- reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
this.reset = function(totalPrice , customerMoney , changeAmount){
  
totalPrice = 0;
customerMoney = 0;
changeAmount = 0;
return console.log('After reset : ','totalPrice :' ,totalPrice, 'customerMoney :' ,customerMoney, 'changeAmount :' ,changeAmount );
  }
 



};


let cashier = new Cashier("Vasya", {});

//console.log( cashier );
cashier.greet();
cashier.countTotalPrice();
cashier.getCustomerMoney();
cashier.countChange();
cashier.onError();
cashier.onSuccess();

cashier.countChange();
cashier.beforeReset();
cashier.reset();

/* 
  Необходимо создать функцию-конструктор Cashier.
  
  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
    - name - строка, имя кассира, передается при вызове конструктора
    
    - productsDatabase - объект база данных продуктов, передается при вызове конструктора
    
    - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
    
    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
    
    - changeAmount - число, сдача, всегда начинается с 0
    
    - greet() - метод, выводит в консоль строку `Здравствуйте, вас обслуживает ${имя_кассира}`
    
    - onSuccess() - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${сдача}` 
        если сдача больше 0, и строку `Спасибо за покупку` если сдача равна 0.
    
    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'    
    
    - countTotalPrice(order) - метод, получает список покупок, считает общую стоимость исходя из 
        поля productsDatabase. Записывает результат в поле totalPrice.
      
    - getCustomerMoney(value) - метод, получает число - деньги покупателя и записывает его в поле customerMoney
        
    - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя, 
        записывает результат в поле changeAmount.
        * Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
        * Если денег было передано достаточно, возвращает текущее значение changeAmount
        * Если было передано меньше денег чем в поле totalPrice, возвращает null 
    
    - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
*/
