


'use strict';

//-------------- "Модуль 6"-----------------------
/*
const animal = { eats: true};
const dog = { barks: true};

dog.__proto__ = animal;   // В данном случае получилось, что animal является прототипом для dog.

console.log(dog.barks); //true
console.log(dog.eats);  //true
*/

//--------------------------------------------------------
/*

const animal = { eats: true };

const dog = { barks: true, eats: false };

dog.__proto__ = animal; // 

console.log( dog.barks ); // true
console.log( dog.eats ); // false, свойство взято из dog
*/

//--------------------------------------------------------------------------------------
/*
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
for(const key in dog){
  console.log(key); //barks
}                   //eats

console.log('animal :' ,animal);//  : eats: true
console.log('dog :' , dog);//barks: true; =>proto(ANIMAL) :eats:true

*/
//----------------------------------------------------------------------------------------

//                         <<<Объект без прототипа>>>
/*
const user = {
  name: 'Mango',
  age: 2
};
console.log(user.toString);// function

const otherUser = Object.create(null);   // Объект, создаваемый при помощи Object.create(null) не имеет прототипа, 
otherUser.name = 'Mango';                // а значит в нём нет лишних свойств. Для коллекции – как раз то, что надо.

console.log(otherUser.name); // Mango
console.log(otherUser.toString); // undefined
*/
//=============================================================================================

//                        <<<hasOwnProperty>>>
/*
const animal = { eats: true };

const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
// В данном случае цикл for in не  не делает различия между свойствами объекта и его прототипа.

  console.log(key); // barks, eats
}
//----------------------------------------------------------------

const otherAnimal = { eats: true };

const cat = Object.create(otherAnimal); // используем метод obj.hasOwnProperty(prop), 
cat.barks = true;                       // который возвращает true, если свойство prop принадлежит самому объекту obj, 
                                        // а не его прототипу, иначе false.
for (const key in cat) {
  if (!cat.hasOwnProperty(key)) continue;

  console.log(key); // barks
}
*/
//========================================================================================

//                              <<<Свойство Fn.prototype>>>
/*
function Guest (name, room) {
  this.name = name;
  this.room = room;
}
console.log(Guest.prototype); // {constructor: ƒ}
const mango = new Guest('Mango', 28);

console.log(mango); // Guest {name: "Mango", room: 28}
*/
//-----------------------------------------------------------------------------------------
/*
function Guest (name, room) {
  this.name = name;
  this.room = room;
}
Guest.prototype.showGuestInfo = function(){                // Свойство prototype может передать по ссылке свое значение всем потомкам 
  console.log(`name: ${this.name}, room: ${this.room}`);   // функции-конструктора. Если мы изменим значение у свойства prototype то это 
};                                                         // новое значение получат и все свойства, имеющие ссылку на объект prototype.

const mango = new Guest('Mango', 28);
const poly = new Guest('Poly', 36);

mango.showGuestInfo(); // name: Mango, room: 28
poly.showGuestInfo(); // name: Poly, room: 36
*/
//=======================================================================================================

//                                   <<<Наследование и конструкторы>>>
/*
function Hero(name, xp) {
  this.name = name;
  this.xp = xp;
}

Hero.prototype.gainXp = function (amaunt) {
console.log(`${this.name} gained ${amaunt} experience points`);
this.xp += amaunt;
};

const mango = new Hero('Mango', 1000);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero,
// то ему доступны методы из Hero.prototype

mango.gainXp(500); // Mango gained 500 experience points
console.log(mango); // Hero { name: 'Mango', xp: 1500 }

function Warrior(name, xp, weapon) {
Hero.call(this, name, xp);
 this.weapon = weapon;                                         //Во время выполнения функции Warrior вызываем
//добавляем новое свойство - оружие                            // функцию Hero в контексте объекта создающегося
                                                               // в Warrior, а так же передаем аргументы для
                                                               //инициализации полей this.name и this.xp
                                                               // this в данном случае это наш будущий экземпляр Warrior
  
}
Warrior.prototype.attack = function (){
  console.log(`${this.name} attacks with ${this.weapon}`);
};
const poly = new Warrior('Poly', 200, 'sword');
console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
poly.attack(); // Poly attacks with sword

//если мы попробуем вызвать у poly метод gainXp(), который обьявлен на Hero.prototype? - будет ошибка
// poly.gainXp(); // Uncaught TypeError: poly.gainXp is not a function

//  Дело в том что поля из Hero.prototype не добавляются в цепочку прототипов по 
// умолчанию. Необходимо явно укзать связь поля Warrior.prototype и Hero.prototype
// Сделать это очень легко, но важно поминать как и почему это работает.

Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
  poly.gainXp(300); // Poly gained 300 experience points
};

//---------------------------------------------------------------
//     Полный код примера:

function Hero(name, xp) {
  this.name = name;
  this.xp = xp;
}

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

function Warrior(name, xp, weapon) {
  Hero.call(this, name, xp);

  this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');
*/
//================================================================================================

function Hotel(name, rooms){
  this.name = name;
  this.rooms = rooms;
}

Hotel.prototype.newBuilding = function(amaunt) {
  console.log(`${this.name} has  ${amaunt} new rooms`);
  this.rooms += amaunt;
};
const fourSesons = new Hotel('Four Sesons Hotel' , 120);
console.log(fourSesons);
fourSesons.newBuilding(100);

function Pool (name, rooms, pools){
Hotel.call(this, name, rooms);
this.pools = pools;
}

Pool.prototype = Object.create(Hotel.prototype);

Pool.prototype.build = function () {
  console.log(`${this.name} has ${this.pools} new pools`);
};
const miramar = new Pool('Miramar' , 120, 5);
console.log(miramar);
miramar.newBuilding(50);