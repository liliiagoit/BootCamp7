'use strict';

const posts = [
    {
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

let root = document.querySelector('#root');

function createPostCard(el) {
let mainDiv = document.createElement('div');
let postImage = document.createElement('img');
let postTitle = document.createElement('h2');
let postText = document.createElement('p');
let button = document.createElement('a');

mainDiv.classList.add('post');
postImage.classList.add('post__image');
postTitle.classList.add('post__title');
postText.classList.add('post__text');
button.classList.add('button');

postImage.setAttribute('src', el.img);
button.setAttribute('href', el.link);

postTitle.textContent = el.title;
postText.textContent = el.text;
button.textContent = 'Read more';

root.prepend(mainDiv);
mainDiv.append(postImage);
mainDiv.append(postTitle);
mainDiv.append(postText);
mainDiv.append(button);

}

function createCards(posts){
  posts.map(function(el) {
    createPostCard(el);
  })
};

createCards(posts);
