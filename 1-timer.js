/* empty css                      */import{f as L,i as S}from"./assets/vendor-BbSUbo7J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();let d,l;const u=document.querySelector("span[data-days]"),f=document.querySelector("span[data-hours]"),m=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]"),a=document.querySelector(".js-start"),b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){new Date().getTime()>e[0].getTime()?(window.alert("Please choose a date in the future"),y(),a.disabled=!0):(d=e[0],a.disabled=!1)}};document.addEventListener("DOMContentLoaded",()=>{L("#datetime-picker",b),a.addEventListener("click",()=>{console.log("Start button clicked"),d?(a.disabled=!0,l=setInterval(()=>{const e=new Date().getTime(),r=d.getTime()-e;if(r<1e3)clearInterval(l),h({days:0,hours:0,minutes:0,seconds:0}),console.log("Timer ended");else{const n=w(r);console.log("Time left:",n),h(n)}},1e3)):y()})});const y=()=>{S.error({title:"Error",message:"Please choose a date in the future",position:"topRight",color:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"150%",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%"})},c=e=>e<10?`0${e}`:e;function h({days:e,hours:r,minutes:n,seconds:s}){u&&(u.textContent=c(e)),f&&(f.textContent=c(r)),m&&(m.textContent=c(n)),p&&(p.textContent=c(s))}function w(e){const o=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),g=Math.floor(e%864e5%36e5/6e4),T=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:g,seconds:T}}
//# sourceMappingURL=1-timer.js.map
