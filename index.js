import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const m="https://pixabay.com/api/",p="47996916-063d7568314d3761f2b5e2fb9";function f(r){const t=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${t.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function g(r){const t=document.createElement("div");t.classList.add("card");const s=document.createElement("a");s.href=r.largeImageURL,s.classList.add("lightbox-item");const o=document.createElement("img");o.src=r.webformatURL,o.alt=r.tags,s.setAttribute("data-title",r.tags),s.appendChild(o);const e=document.createElement("div");e.classList.add("card-info");const n=document.createElement("p");return n.innerHTML=`
    <span class="stat-item">Likes: ${r.likes}</span> 
    <span class="stat-item">Views: ${r.views}</span> 
    <span class="stat-item">Comments: ${r.comments}</span> 
    <span class="stat-item">Downloads: ${r.downloads}</span>
  `,e.appendChild(n),t.appendChild(s),t.appendChild(e),t}const d=document.querySelector("#picture-picker"),h=document.querySelector("#Search-btn"),c=document.querySelector("#results"),a=document.createElement("div");a.id="loading-indicator";a.classList.add("loading-indicator");a.textContent="Loading images, please wait";a.style.display="none";document.body.appendChild(a);h.addEventListener("click",()=>{const r=d.value.trim();if(!r){l.error({title:"Error",message:"Please enter picture description"});return}a.style.display="block",c.innerHTML="",f(r).then(t=>{if(c.innerHTML="",t.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}t.hits.forEach(o=>{const e=g(o);c.appendChild(e)}),new u(".lightbox-item").refresh()}).catch(t=>{console.log(t)}).finally(()=>{a.style.display="none",d.value=""})});
//# sourceMappingURL=index.js.map