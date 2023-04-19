import{g as l}from"./gallery-items-ed16b741.js";/* empty css               */console.log(l);const i=document.querySelector(".gallery"),c=l.map(({preview:e,original:a,description:s})=>`<li class="gallery__item">
    <a class="gallery__link" href="${a}">
      <img
        class="gallery__image"
        src="${e}"
        data-source="${a}"
        alt="${s}"
      />
    </a>
  </li>
  `).join("");i.insertAdjacentHTML("afterbegin",c);let t="";i.addEventListener("click",e=>{e.preventDefault(),e.target.nodeName==="IMG"&&(t=basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`),t.show())});document.addEventListener("keydown",e=>{t.visible()&&e.code==="Escape"&&t.close()});
