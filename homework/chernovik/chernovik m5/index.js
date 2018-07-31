


'use strict';

/*
//console.log([1, 2, 3].map(x => x * 5));
function map(arr, callback){
const newArr = [];
for (let i = 0; i < arr.length; i++){
  const elem = arr[i];
  const result = callback(elem);
  newArr.push(result);
}
return newArr;
}

const numbers = [1, 2, 3, 4, 5];

const double = val => val * 2;

const resultA = map(numbers, double);
console.log('numbers  ;' ,numbers);
console.log('result  ;' ,resultA);

const addFive = val => val + 5;
const resultB = map(numbers, addFive);
console.log('numbers  ;' ,numbers);
console.log('result  ;' ,resultB);
//==============================================================================================
*/
//                МЕТОД "MAP"

/*
const guests = [
{name : 'Mango', age: 2 },
{name : 'Polly', age: 3 },
{name : 'Ajax', age: 4 },

];
const result = guests.map(guest => {
  console.log(guest);

  if(guest.name === 'Mango'){
    return {
      ...guest,
      age: guest.age + 1,
    };
  }
   return guest;
});
console.log(result);
*/
//=============================================================
 //                        Метод "FILTER"
 /*
 function filter(arr, callback){
   const newAray = [];
   for (let i = 0; i < arr.length; i++){
   const passes = callback(arr[i]);
    if (passes){
      newAray.push(arr[i]);
    }
   }
   return newAray;
 }

 const numbers = [1, 2, 3, 4, 5];
 const result = filter(numbers, val => val > 3);
 console.log(result);
 */
//==========================================================
 //  Метод "FILTER" через стрелочную ф-ию
 /*
 const numbers = [1, 2, 3, 4, 5];

 const filtered = numbers.filter(number => number < 3);

 console.log(filtered);
*/
//------------------------------------------
//Пример №2
/*
const guests = [
  {name : 'Mango', age: 2, active: true },
  {name : 'Polly', age: 3, active: false },
  {name : 'Ajax', age: 4, active: true },
  
  ];

const filtered = guests.filter(guest => guest.age > 3);
console.log(filtered);

const activeGuests = guests.filter(guest => guest.active)
console.log(activeGuests);

//----------------------------------------------------------
//Пример №3
const teams = [
  {name: "Manchecter-City", city: "Manchester", color: "blue"},
  {name: "Manchecter-United", city: "Manchester", color: "red"},
  {name: "Chelsee", city: "London", color: "blue"},
];
const findManchester = teams.filter(team => team.city === "Manchester")
console.log(findManchester);

const findColorBlue = teams.filter(team => team.color ==="blue");
console.log(findColorBlue);
*/
//====================================================================
//                            МЕТОД "FIND"
/*
const teams = [
  { id: 1 , name: "Manchecter-City", city: "Manchester", color: "blue"},
  { id: 2 , name: "Manchecter-United", city: "Manchester", color: "red"},
  { id: 3 , name: "Chelsee", city: "London", color: "blue"},
];
const Chelsee = teams.find(team => team.name === "Chelsee");
console.log(Chelsee);

const getGuestById = (arr, id) => arr.find(el => el.id === id);
console.log(getGuestById(teams, 1));

//Данный метод возвращяет один(уникальный) элеметн массива!
*/
//====================================================
//                          МЕТОД "forEach"
//                      (замена метода for...)
/*
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

numbers.forEach(number =>{
console.log(number);
});
*/

//====================================================================================
    //                    МЕТОДЫ "EVERY" и "SOME"

    /*
    const numbers = [1, 2, 3, 4, 5];
    console.log('every : ' ,numbers.every(number => number > 3));
    //false 

    
    console.log('some : ' ,numbers.some(number => number > 3));
    //true

    const validResult ={
      name: true,
      password: false,
      email: true,
    };
    const values = Object.values(validResult);
    const valid = values.every(value => value);
    console.log('valid :' ,valid); //false
    */

    //=================================================================================
    //                     МЕТОД "SORT"
    //Данный метод мутирует изначальный обьект
   /*
    const numbers = [5, 4, 3, 2, 1];
    console.log('sort : ' ,numbers.sort());
    //1,2,3,4,5

    const otherNumbers = [1, 2, 3, 4, 5];
    console.log('sort : ' ,numbers.sort((prev,next) => next - prev));
    //5,4,3,2,1
    const users = [
      {name:'Mango', age: 10 },
      {name:'Poly', age: 4 },
      {name:'Ajax', age: 7 },
    ];
    console.log('оригинальный массив :' ,users);
    console.log('сортировка по возротсанию :' ,users.sort((prev, next) => prev.age - next.age));
    console.log( users );// изменненый масив
    */
    //======================================================================================
   //                      МЕТОД "REDUCE"
   /*
   const numbers = [1, 2, 3, 4, 5];

   const sum = numbers.reduce((accmulator, number) =>{
     return accmulator + number;
   }, 0   // - это изначальное значение акамулятора);
  // console.log('sum :' ,sum); //15

  /*
   const workers = [
    {name:'Mango', salary: 100 },
    {name:'Poly', salary: 150 },
    {name:'Ajax', salary: 50 },
  ];
const sumSalary = workers.reduce((acc, worker)=>{
  return acc + worker.salary;
},0);
   
console.log('сумма зарплат :' ,sumSalary);
*/
//=======================================================================================

//                Пример деструктуризации
/*
const guest = {
name: 'Nonik',
age: 6,
gender: 'male',
room: 25,
chekinTime: '25.09.2108',
};


const logger = guest => {
  console.log(`
    Name: ${guest.name}
    Age: ${guest.age}
    Gender: ${guest.gender}
    Room: ${guest.room}
    Chekin Time: ${guest.chekinTime}

 `);
};
logger(guest);
*/

//============================================================

//              Пример 'контекста'
/*
( () => {
const makeSale = function(product){
console.log(`${this.name} sold ${product}` );
this.sale += 1;
};
const mango = {
name: 'Mango',
sales: 0,
};

mango.sell = makeSale;
mango.sell('apples');

const polly = {
  name: 'Polly',
  sales: 0,
  };

  polly.sell = makeSale;
  polly.sell('grapes');
})();
*/

//=============================================
//           task2/5
    /*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*
const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

const getPropValues = (arr, prop) => arr.map(el => el[prop]);
 

// Вызовы функции для проверки
console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
      */

      //===============================================================================

      // task 8/5
      /*
      const users = [
        {
          id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
          name: 'Moore Hensley',
          email: 'moorehensley@indexia.com',
          eyeColor: 'blue',
          phone: '+1 (848) 556-2344',
          friends: ['Sharron Pace'],
          isActive: false,
          balance: 2811,
          skills: ['ipsum', 'lorem'],
          gender: 'male',
          age: 37,
        },
        {
          id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
          name: 'Sharlene Bush',
          email: 'sharlenebush@tubesys.com',
          eyeColor: 'blue',
          phone: '+1 (855) 582-2464',
          friends: ['Briana Decker', 'Sharron Pace'],
          isActive: true,
          balance: 3821,
          skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
          gender: 'female',
          age: 34,
        },
        {
          id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
          name: 'Ross Vazquez',
          email: 'rossvazquez@xinware.com',
          eyeColor: 'green',
          phone: '+1 (814) 593-3825',
          friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
          isActive: false,
          balance: 3793,
          skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
          gender: 'male',
          age: 24,
        },
        {
          id: '249b6175-5c30-44c6-b154-f120923736f5',
          name: 'Elma Head',
          email: 'elmahead@omatom.com',
          eyeColor: 'green',
          phone: '+1 (909) 547-2687',
          friends: ['Goldie Gentry', 'Aisha Tran'],
          isActive: true,
          balance: 2278,
          skills: ['adipisicing', 'irure', 'velit'],
          gender: 'female',
          age: 21,
        },
        {
          id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
          name: 'Carey Barr',
          email: 'careybarr@nurali.com',
          eyeColor: 'blue',
          phone: '+1 (956) 512-2693',
          friends: ['Jordan Sampson', 'Eddie Strong'],
          isActive: true,
          balance: 3951,
          skills: ['ex', 'culpa', 'nostrud'],
          gender: 'male',
          age: 27,
        },
        {
          guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
          name: 'Blackburn Dotson',
          email: 'blackburndotson@furnigeer.com',
          eyeColor: 'brown',
          phone: '+1 (876) 411-2433',
          friends: ['Jacklyn Lucas', 'Linda Chapman'],
          isActive: false,
          balance: 1498,
          skills: ['non', 'amet', 'ipsum'],
          gender: 'male',
          age: 38,
        },
        {
          id: 'e1bf46ab-7168-491e-925e-f01e21394812',
          name: 'Sheree Anthony',
          email: 'shereeanthony@kog.com',
          eyeColor: 'brown',
          phone: '+1 (979) 504-2554',
          friends: ['Goldie Gentry', 'Briana Decker'],
          isActive: true,
          balance: 2764,
          skills: ['lorem', 'veniam', 'culpa'],
          gender: 'female',
          age: 39,
        },
      ];
/*
  Используя массив (users) объектов пользователей, напишите функции которые с помощью 
  функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
*/


/**
 * Получить массив имен (поле name) всех пользователей
 */
/*
const getAllNames =  (arr) => arr.map(user => user.name);
 


console.log(getAllNames(users)); 
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

                            
/**
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
 */
/*
const getUsersByEyeColor = (arr, color) => arr.filter(user => user.eyeColor === color)

console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                            
/**
 * Получить массив имен пользователей по полу (поле gender)
 */
/*
const getUsersByGender = (arr, gender) => arr
    .filter(user => user.gender === gender)
    .map(user => user.name)

console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


/**
 * Получить массив только неактивных пользователей (поле isActive)
 */
//const getInactiveUsers = (arr) => users.filter(user => !user.isActive)





//console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                      
                                 
/**
 * Получить пользоваля (не массив) по email (поле email, он уникальный)
 */
/*
const getUserByEmail = (arr, email) => arr.find(user => user.email === email);

console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


/**
 * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
 */
/*
const getUsersWithAge = (arr, min, max) => arr.filter(user => {
  if(user.age > min && user.age < max){
    return user;
  }
}

)

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
                                            
console.log(getUsersWithAge(users, 30, 40)); 
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                                 
                                 
/**
 * Получить общую сумму баланса (поле balance) всех пользователей
 */
/*
const getTotalBalance = arr => arr.reduce((acc, user) =>{
 return user.balance += acc;
},0);
 
 //const sumSalary = workers.reduce((acc, worker)=>{
 // return acc + worker.salary;
//},0);

console.log(getTotalBalance(users)); // 20916
                                
                                
/**
 * Массив имен всех пользователей у которых есть друг с указанным именем
 */
/*
const getUsersByFriend = (arr, name) => arr
    .filter(user => user.friends.includes(name))
    .map(user => user.name)


console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
                                            
*/

//==================================================================================================
const users = [{
  id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
  name: 'Moore Hensley',
  email: 'moorehensley@indexia.com',
  eyeColor: 'blue',
  phone: '+1 (848) 556-2344',
  friends: ['Sharron Pace'],
  isActive: false,
  balance: 2811,
  skills: ['ipsum', 'lorem'],
  gender: 'male',
  age: 37,
},
{
  id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
  name: 'Sharlene Bush',
  email: 'sharlenebush@tubesys.com',
  eyeColor: 'blue',
  phone: '+1 (855) 582-2464',
  friends: ['Briana Decker', 'Sharron Pace'],
  isActive: true,
  balance: 3821,
  skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
  gender: 'female',
  age: 34,
},
{
  id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
  name: 'Ross Vazquez',
  email: 'rossvazquez@xinware.com',
  eyeColor: 'green',
  phone: '+1 (814) 593-3825',
  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  isActive: false,
  balance: 3793,
  skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
  gender: 'male',
  age: 24,
},
{
  id: '249b6175-5c30-44c6-b154-f120923736f5',
  name: 'Elma Head',
  email: 'elmahead@omatom.com',
  eyeColor: 'green',
  phone: '+1 (909) 547-2687',
  friends: ['Goldie Gentry', 'Aisha Tran'],
  isActive: true,
  balance: 2278,
  skills: ['adipisicing', 'irure', 'velit'],
  gender: 'female',
  age: 21,
},
{
  id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
  name: 'Carey Barr',
  email: 'careybarr@nurali.com',
  eyeColor: 'blue',
  phone: '+1 (956) 512-2693',
  friends: ['Jordan Sampson', 'Eddie Strong'],
  isActive: true,
  balance: 3951,
  skills: ['ex', 'culpa', 'nostrud'],
  gender: 'male',
  age: 27,
},
{
  guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
  name: 'Blackburn Dotson',
  email: 'blackburndotson@furnigeer.com',
  eyeColor: 'brown',
  phone: '+1 (876) 411-2433',
  friends: ['Jacklyn Lucas', 'Linda Chapman'],
  isActive: false,
  balance: 1498,
  skills: ['non', 'amet', 'ipsum'],
  gender: 'male',
  age: 38,
},
{
  id: 'e1bf46ab-7168-491e-925e-f01e21394812',
  name: 'Sheree Anthony',
  email: 'shereeanthony@kog.com',
  eyeColor: 'brown',
  phone: '+1 (979) 504-2554',
  friends: ['Goldie Gentry', 'Briana Decker'],
  isActive: true,
  balance: 2764,
  skills: ['lorem', 'veniam', 'culpa'],
  gender: 'female',
  age: 39,
},
];
                                         
/**
* Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
* повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
*/
const getAllSkills = arr =>
 arr.sort((prev, next) => {prev.skills != next.skills

})





console.log(getAllSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

                             
/**
* Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/
//const getUserNamesSortedByFriendsCount = arr => {};

//console.log(getUserNamesSortedByFriendsCount(users)); 
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
  






