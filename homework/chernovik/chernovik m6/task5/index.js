


'use strict';
  // task 5/6

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

class Car {
  constructor(maxSpeed, value) {
    
    this._maxSpeed = maxSpeed;
    this._value = value;
  }
  get value () {
    return console.log(this._value);
  }

  set name (value) {
    this._value = value;
  }
}
const myCar = new Car(50, 2000);
  
  myCar.value; // 2000

  const newCar = new Car(50, 4000);
  
  newCar.value; // 4000
