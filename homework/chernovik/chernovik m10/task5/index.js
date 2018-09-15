


'use strict';

//-------------- "Модуль 10"-----------------------

const Api_Key = '10064977-9ec42b587efee78c3ff5559b6';


const  refs ={
    page: document.querySelector('.page'),
    loadMoreBtn: document.querySelector('.load-more'),
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),
};

refs.form.addEventListener('submit', handleFormSubmit);
refs.addEventListener('click' , handleLadMoreBtn)

function handleLadMoreBtn(){

}
//=============================================
function handleFormSubmit(e){

e.preventDefault();

const query = refs.queryInput.value;
refs.page.classList.add('show-loader');

fetchImages(query).then(items =>{
refs.page.classList.remove('show-loader');
const markup =createGridItems(items);


refs.grid.innerHTML = markup;
});

refs.form.reset();
}

function fetchImages( query) {
    
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${Api_Key}&per_page=9`;
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
  
        throw new Error(`Error while fetching: ${response.statusText}`);
      })
      
      .then(data => data.hits)
      .catch(error => {
        console.log('ERROR: ', error);
      });
  }
  function createGridItems(items) {
    return items.reduce(
      (markup, item) =>
        markup +
        `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
      '',
    );
  }
















