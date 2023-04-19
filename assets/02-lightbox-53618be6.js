import{g as l}from"./gallery-items-ed16b741.js";/* empty css               */console.log(l);const t=document.querySelector(".gallery"),i=l.map(({original:a,description:e,preview:o})=>`<li class="gallery__item">
    <a class="gallery__link" href="${a}">
       <img class="gallery__image" src="${o}" alt="${e}" />
    </a>
 </li>
 `).join("");t.insertAdjacentHTML("beforeend",i);new SimpleLightbox(".gallery a",{captionsPosition:"bottom",captionsDelay:250,captionsData:"alt",maxZoom:0});
