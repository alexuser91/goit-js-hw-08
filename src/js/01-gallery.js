import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const listEL = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('gallery__item');

  listItemEl.innerHTML = `<a clarr = "gallery__link" href ="${item.original}" >
  <img class="gallery__image"
  src="${item.preview}"
  alt="${item.description}"
  />
  </a>`;

  listEL.append(listItemEl);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.visible()) {
    lightbox.close();
  }
});

listEl.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'IMG') {
    lightbox.open();
  }
});

console.log(galleryItems);
