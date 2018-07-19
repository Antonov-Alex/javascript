'use strict';

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

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

let totalPrice = 0;
let customerMoney = 0;
let changeAmount = 0;

function Cashier(name, productsDatabase) {
  // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
  this.name = name;
  this.productsDatabase = products;

  this.totalPrice = totalPrice;
  this.customerMoney = customerMoney;
  this.changeAmount = changeAmount;
  this.greet = function () {
    console.log(`Здравствуйте, вас обслуживает ${this.name}`);

  }
  this.countTotalPrice = function (order) {

    const keys = Object.keys(order);
    for (const key of keys) {


      if (products[key]) {
        totalPrice += (order[key] * products[key]);
      }
    }
    console.log('Общая сумма покупки = ', totalPrice);
  }

  this.getCustomerMoney = function (customerMoney) {
    console.log('Сумма которая есть у клиента =', customerMoney);
  }

  this.onSuccess = function () {
    if (changeAmount > 0) {
      return console.log(`Спасибо за покупку, ваша сдача ${changeAmount}`);
    } else if (changeAmount = 0) {
      return console.log(`Спасибо за покупку`);
    }

  }

  this.onError = function () {
    if (customerMoney < totalPrice) {
      return console.log('Очень жаль, вам не хватает денег на покупки');
    }

  }

  this.countChange = function (customerMoney) {
    changeAmount = customerMoney - totalPrice;
    if (customerMoney >= totalPrice) {
      return changeAmount;

    }
    return totalPrice = null;

  }
  this.reset = function (totalPrice, customerMoney, changeAmount) {

    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;

  }
};

const mango = new Cashier('Mango', products);
console.log(mango.name);
console.log(mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
console.log('totalPrise : ', mango.totalPrice); // 0
console.log('customerMoney :', mango.customerMoney); // 0
console.log('changeAmount :', mango.changeAmount); // 0

mango.greet(); // Здравствуйте, вас обслуживает Mango;
mango.countTotalPrice(order); //
mango.getCustomerMoney(300);
const result = mango.countChange(300);

if (result !== null) {
  // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
};
mango.reset();
console.log('totalPrise : ', mango.totalPrice); // 0
console.log('customerMoney :', mango.customerMoney); // 0
console.log('changeAmount :', mango.changeAmount); // 0
