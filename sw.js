if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-1dedad9c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"75adc28cf1fc8361d42223449ba4dc26"},{url:"assets/icon-384.png",revision:"a6b835302e63588a265cb4e59c74a40a"},{url:"assets/icon-512.png",revision:"0e6ac5b90a70b8986de9497ea9277b5c"},{url:"index.css",revision:"7fb43bc6220e37e23b9d78f58f6827de"},{url:"index.html",revision:"61cdd546fa61ea484ff77cbff0149eec"},{url:"index.js",revision:"2cc279214cc32e6b26b020b4442948a0"},{url:"manifest.json",revision:"16c777325cdbc05ce35c2cd0b316bd5f"},{url:"README.md",revision:"ff069f075c132bf8fbee430058e7279a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
