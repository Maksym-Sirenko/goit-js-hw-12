import{a as v,S as b,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=15,p=async(t,r=1)=>{const i="https://pixabay.com/api/",s="51705159-2a53c7b838f6ac9c38294ce72",{data:e}=await v.get(i,{params:{key:s,q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:r}});return e},a={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")};let B=new b(".gallery a",{captionsData:"alt",captionDelay:250});const f=t=>{const r=t.map(({webformatURL:i,largeImageURL:s,tags:e,likes:o,views:n,comments:L,downloads:w})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${s}"
            >
              <img
                class="gallery-image"
                src="${i}"
                alt="${e}"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${o}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${n}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${L}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${w}</p>
                </li>
              </ul>
            </a>
          </li>`).join(`
`);a.gallery.insertAdjacentHTML("beforeend",r),B.refresh()},h=()=>{a.loader.classList.remove("hidden")},y=()=>{a.loader.classList.add("hidden")},P=()=>{a.gallery.innerHTML=""};function S(){a.loadMoreBtn.classList.remove("hidden")}function g(){a.loadMoreBtn.classList.add("hidden")}let l=1,d="",m=0;a.searchForm.addEventListener("submit",async t=>{if(t.preventDefault(),d=t.target.elements["search-text"].value.trim(),t.target.elements["search-text"].value.trim(),!d){c.error({message:"Please, enter a valid search query",position:"topRight"});return}l=1,P(),g(),h();try{const{hits:r,totalHits:i}=await p(d,l);if(m=i,r.length===0){c.error({message:"Sorry, no images found. Please try another query!",position:"topRight"});return}f(r),m>u&&S()}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y(),t.target.reset()}});a.loadMoreBtn.addEventListener("click",async()=>{l+=1,h();try{const t=Math.ceil(m/u);if(l>t){g(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}const{hits:r}=await p(d,l);f(r);const{height:i}=a.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"}),l===t&&g()}catch(t){console.log("Load more error:",t),c.error({message:"Something went wrong while loading more images. Check console.",position:"topRight"})}finally{y()}});
//# sourceMappingURL=index.js.map
