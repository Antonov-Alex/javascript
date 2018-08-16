'use strict';

//-------------- "mod 7"-----------------------
const posts = [{
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const createPostCard = ({
  img,
  title,
  text,
  link
}) => {
  const card = document.createElement('div');
  card.classList.add('post');

  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('src', img);
  image.setAttribute('alt', 'post image');

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('post__title');
  cardTitle.textContent = title;

  const cardText = document.createElement('p');
  cardText.classList.add('post__text');
  cardText.textContent = text;

  const cardButton = document.createElement('a');
  cardButton.classList.add('button');
  cardButton.textContent = 'Read more';
  cardButton.setAttribute('href', link);




  card.append(image, cardTitle, cardText, cardButton);
  return card;

};

const createCards = (posts) => {
  const elements = posts.map(post => createPostCard(post))
  return elements;
};



const parent = document.querySelector('#root');

const cards = createCards(posts);

parent.append(...cards);
