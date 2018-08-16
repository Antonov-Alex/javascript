


'use strict';

//-------------- "Task 6/7"-----------------------
/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.

<div class="post">
<img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
<h2 class="post__title">Lorem ipsum dolor</h2>
<p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>

<a class="button" href="#">Read more</a>
</div>
*/

const createPostCard = () =>{
  const card =  document.createElement('div');
  card.classList.add('post');

  const img = document.createElement('img');
  img.classList.add('post__image');
  img.setAttribute('src', 'http://via.placeholder.com/400x150');
  img.setAttribute('alt' , 'post image');

 const title = document.createElement('h2');
 title.classList.add('post__title');
title.textContent = 'Lorem ipsum dolor';

const text = document.createElement('p');
text.classList.add('post__text');
text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';

const button = document.createElement('a');
 button.classList.add('button');
button.textContent = 'Read more';
button.setAttribute('href', '#');




 card.append(img, title, text, button);
 console.log(card);
 document.body.append(card);
  
};

createPostCard();
createPostCard();




/*
const dishGrid = document.querySelector('.dish-grid');
const cards = createCards(dishes);

console.log(cards);

dishGrid.append(...cards);
*/