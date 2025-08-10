/* empty css                      */import{a as p,i as n,S as m}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",f="51705159-2a53c7b838f6ac9c38294ce72",d=o=>p.get(g,{params:{key:f,q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r.hits.length===0?null:r.hits).catch(r=>(n.error({message:`Error while getting images: ${r.message}`,position:"topRight"}),console.error(r),null)),l={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};let h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:c,downloads:u})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${a}"
            >
              <img
                class="gallery-image"
                src="${i}"
                alt="${e}"
                loading="lazy"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${t}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${s}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${c}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${u}</p>
                </li>
              </ul>
            </a>
          </li>`).join("");l.gallery.innerHTML=r,h.refresh()}const L=()=>{l.loader.classList.remove("hidden")},v=()=>{l.loader.classList.add("hidden")},S=()=>{l.gallery.innerHTML=""};l.searchForm.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.error({message:"Please, enter a valid search query",position:"topRight"});return}S(),L(),d(r).then(i=>{if(!((i==null?void 0:i.length)>0)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i)}).catch(i=>{console.log(i.message)}).finally(()=>{v(),o.target.reset()})});
//# sourceMappingURL=index.js.map
