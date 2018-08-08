


'use strict';
  // task 3/6

  
/*
  Создайте класс Car с указанными полями и методами.
*/

/*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */

class Car {
  constructor(maxSpeed) {
    this.speed = 0;
    this.running = false;
    this.ditance = 0;
    this.maxSpeed = maxSpeed;

  }

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    return this.running = true;
  }

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }
  
  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if(this.speed + spd < this.maxSpeed){
      this.speed =+ spd;
    }
    return console.log('Текущая скорость :' ,this.speed);
  }
  
  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if(this.speed < this.maxSpeed && this.speed > 0){
      this.speed = spd;
    }
    return console.log('Текущая скорость :' ,this.speed);
  }
  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if(this.running = true){
      this.ditance = this.speed * hours
    }
    return console.log('Преодаленная дистанция : ' ,this.ditance);
  }
    static getSpecs (someCar){
       return (console.log(someCar.maxSpeed, someCar.running , someCar.ditance));
  }
  
}




const bmw = new Car (250);

bmw.accelerate(50);
bmw.decelerate(30);
bmw.drive(10);


  
const someCar = new Car(100);

  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar);
/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

