import{i as c,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://cors-anywhere.herokuapp.com/",p="https://pixabay.com/api/",m="47996916-063d7568314d3761f2b5e2fb9",i=document.querySelector("#picture-picker"),f=document.querySelector("#Search-btn"),l=document.querySelector("#results");f.addEventListener("click",()=>{const o=i.value.trim();if(!o){c.error({title:"Error",message:"Please enter picture description"});return}const n=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});l.innerHTML="",fetch(`${u}${p}?${n.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}t.hits.forEach(e=>{const r=h(e);l.appendChild(r)}),new d(".lightbox-item").refresh()}).catch(t=>console.log(t)),i.value=""});function h(o){const n=document.createElement("div");n.classList.add("card");const t=document.createElement("a");t.href=o.largeImageURL,t.classList.add("lightbox-item");const s=document.createElement("img");s.src=o.webformatURL,s.alt=o.tags,t.setAttribute("data-title",o.tags),t.appendChild(s);const e=document.createElement("div");e.classList.add("card-info");const r=document.createElement("p");return r.innerHTML=`
    <span>Likes: ${o.likes}</span> | 
    <span>Views: ${o.views}</span> | 
    <span>Comments: ${o.comments}</span> | 
    <span>Downloads: ${o.downloads}</span>
  `,e.appendChild(r),n.appendChild(t),n.appendChild(e),n}
//# sourceMappingURL=index.js.map
