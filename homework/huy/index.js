'use strict';

const arr = ["a" , 'b', 'c', 'd'];
const newArr = [];
for(let i in arr){
  newArr.push({name: arr[i]})
}




console.log(newArr);

