  


'use strict';

//-------------- "Task 4/9"-----------------------
const btnA = document.querySelector(".a");
console.log(btnA);
const btnB = document.querySelector(".b");
const btnC = document.querySelector(".c");
const text = document.querySelector("p");

function a (){
return new Promise(function(res,rej){
btnA.addEventListener('click', function(){
  res('A');
  rej(new Error());
})
});
}

function b (){
  return new Promise(function(res,rej){
  btnB.addEventListener('click', function(){
    res('B');
    rej(new Error());
  })
  });
  }

  function c (){
    return new Promise(function(res,rej){
    btnC.addEventListener('click', function(){
      res('C');
      rej(new Error());
    })
    });
    }

    a().then(a)
    .then(b)
    .then(c)
    .then(d => text.textContent = "Вы набрали AABC")
    .catch(err => text.textContent = "Error")

    c().then(b)
    .then(a)
    .then(d => text.textContent = "Вы набрали CBA")
    .catch(err => text.textContent = "Error")