import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgCollection = galleryItems
    .map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `
    )
    .join('')
   
gallery.insertAdjacentHTML('afterbegin', imgCollection);

let instance = '';


gallery.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.nodeName === 'IMG') {
        instance = basicLightbox.create(
            `<img src="${e.target.dataset.source}" width="800" height="600">`
        );
        instance.show();
    }
});

document.addEventListener('keydown', (e) => {
    if (instance.visible()) {
        if (e.code === 'Escape') {
            instance.close();
        };
    };
    
});

