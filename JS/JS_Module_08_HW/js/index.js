'use strict';

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  ];

const div = document.querySelector('.image-gallery');
const fullview = document.querySelector('.fullview');
const overImage = document.querySelector('img');
const preview = document.querySelector('.preview');

function createGallery(obj) {
  overImage.classList.add('mainPicture');
  overImage.setAttribute('src', obj[0].fullview);
  overImage.setAttribute('alt', obj[0].alt);

  div.append(fullview);
  div.append(preview);
  fullview.append(overImage);

  for (let i of galleryItems) {
    let li = document.createElement('li');
    li.classList.add('link');

    let liImg = document.createElement('img');
    liImg.classList.add('photo');

    liImg.setAttribute('src', i.preview);
    liImg.setAttribute('data-fullview', i.fullview);
    liImg.setAttribute('alt', i.alt);

    preview.append(li);
    li.append(liImg);
  }
}

createGallery(galleryItems);

preview.addEventListener('click', openLagreImage);

let list = [...document.querySelectorAll('.link')];

function openLagreImage({target}) {
const nodeName = target.nodeName;
if(nodeName === 'IMG') {
overImage.setAttribute('src', event.target.dataset.fullview);
list.forEach(el => el.classList.contains('active') ? el.classList.remove('active') : el);
event.target.parentElement.classList.toggle('active');
} else return;
}


  


 