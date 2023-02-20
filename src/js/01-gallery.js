// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);  

const galleryImagesContainer = document.querySelector('.gallery');

const imageGalleryMarkup = galleryItems.map(item => `
  <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
`).join('');

galleryImagesContainer.innerHTML = imageGalleryMarkup;

// galleryImagesContainer.addEventListener('click', onClickGalleryImage);

// function onClickGalleryImage(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }; 
// }

const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',
  captionDelay: 250,
});
