import{a as w,S as b,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const m=15,f=async(t,r=1)=>{const a="https://pixabay.com/api/",s="51705159-2a53c7b838f6ac9c38294ce72",{data:e}=await w.get(a,{params:{key:s,q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:r}});return e},i={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")};let B=new b(".gallery a",{captionsData:"alt",captionDelay:250});const p=t=>{const r=t.map(({webformatURL:a,largeImageURL:s,tags:e,likes:o,views:n,comments:L,downloads:v})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${s}"
            >
              <img
                class="gallery-image"
                src="${a}"
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
                  <p class="img-info-value">${v}</p>
                </li>
              </ul>
            </a>
          </li>`).join(`
`);i.gallery.insertAdjacentHTML("beforeend",r),B.refresh()},h=()=>{i.loader.classList.remove("hidden")},y=()=>{i.loader.classList.add("hidden")},P=()=>{i.gallery.innerHTML=""};function M(){i.loadMoreBtn.classList.remove("hidden")}function u(){i.loadMoreBtn.classList.add("hidden")}let l=1,d="",g=0;i.searchForm.addEventListener("submit",async t=>{if(t.preventDefault(),d=t.target.elements["search-text"].value.trim(),t.target.elements["search-text"].value.trim(),!d){c.error({message:"Please, enter a valid search query",position:"topRight"});return}l=1,P(),u(),h();try{const{hits:r,totalHits:a}=await f(d,l);if(g=a,r.length===0){c.error({message:"Sorry, no images found. Please try another query!",position:"topRight"});return}p(r),g>m&&M()}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y(),t.target.reset()}});i.loadMoreBtn.addEventListener("click",async()=>{l+=1,h();try{const t=Math.ceil(g/m);if(l>t){u(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}const{hits:r}=await f(d,l);p(r);const{height:a}=i.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"}),l===t&&u()}catch(t){console.log(t.message)}finally{y()}});
//# sourceMappingURL=index.js.map
