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

let totalPrice = 0;
let customerMoney = 0;
let changeAmount = 0;

function Cashier(name, productsDatabase) {
  this.name = name;
  this.productsDatabase = productsDatabase;

  this.totalPrice = totalPrice;

  this.customerMoney = customerMoney;
  this.changeAmount = changeAmount;
  this.greet = function () {
    console.log(`Здравствуйте, вас обслуживает ${this.name}`);

  }
  // onSuccess() - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${сдача}` 
  //       если сдача больше 0, и строку `Спасибо за покупку` если сдача равна 0.

  this.onSuccess = function () {

    if (changeAmount > 0) {
      return console.log(`Спасибо за покупку, ваша сдача ${changeAmount}`);
    } else if (changeAmount = 0) {
      return console.log(`Спасибо за покупку`);
    }

  }


  //onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   

  this.onError = function () {
    if (customerMoney < totalPrice) {
      return console.log('Очень жаль, вам не хватает денег на покупки');
    }

  }

  // countTotalPrice(order) - метод, получает список покупок, считает общую стоимость исходя из 
  //      поля productsDatabase. Записывает результат в поле totalPrice.


  this.countTotalPrice = function (order) {
    order = {};
    order = products;
    const values = Object.values(products);
    for (const value of values) {
      totalPrice += value;

    }
    console.log('Список покупок :', products);
    console.log('Общая сумма продуктов = ', totalPrice);


  } //- getCustomerMoney(value) - метод, получает число - деньги покупателя и записывает его в поле customerMoney
  this.getCustomerMoney = function (value) {

    value = Number(prompt('Введите сумму которая увас есть'));
    customerMoney = value;
    console.log('Сумма которая есть у клиента :', customerMoney);
  }


  //- countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя, 
  //записывает результат в поле changeAmount.
  //* Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
  //* Если денег было передано достаточно, возвращает текущее значение changeAmount
  //* Если было передано меньше денег чем в поле totalPrice, возвращает null 
  this.countChange = function () {

    changeAmount = customerMoney - totalPrice;
    if (customerMoney >= totalPrice) {
      return changeAmount;

    }
    return changeAmount = null;

  }
  this.beforeReset = function () {
    console.log('totalPrice :', totalPrice, 'customerMoney :', customerMoney, 'changeAmount :', changeAmount);
  }
  //- reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
  this.reset = function (totalPrice, customerMoney, changeAmount) {

    totalPrice = 0;
    customerMoney = 0;
    changeAmount = 0;
    return console.log('After reset : ', 'totalPrice :', totalPrice, 'customerMoney :', customerMoney, 'changeAmount :', changeAmount);
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
