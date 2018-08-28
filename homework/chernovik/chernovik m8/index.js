


'use strict';

//-------------- "Модуль 8"-----------------------

/*
const btn = document.querySelector('.btn');
const user = {
    name: 'Mango',
    showName() {
        console.log(this);

        console.log(`My name is: ${this.name}`);
    },
};

btn.addEventListener('click', user.showName.bind(user));
*/
const btn = document.querySelector('.btn');
btn.addEventListener('click', handelBtnClick);

function handelBtnClick(event) {
    
    const currentTarget = event.currentTarget;
    console.log(currentTarget);
    
}