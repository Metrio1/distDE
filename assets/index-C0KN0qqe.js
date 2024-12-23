var S=Object.defineProperty;var w=i=>{throw TypeError(i)};var $=(i,e,t)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var c=(i,e,t)=>$(i,typeof e!="symbol"?e+"":e,t),P=(i,e,t)=>e.has(i)||w("Cannot "+t);var h=(i,e,t)=>e.has(i)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);var f=(i,e,t)=>(P(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const u=class u{static lock(){if(u.isLocked)return;const e=window.scrollY;document.body.style.setProperty("--scrolledTop",`-${e}px`),document.body.classList.add("lock"),document.body.classList.remove("unlock"),u.isLocked=!0}static unlock(){if(!u.isLocked)return;document.body.classList.remove("lock"),document.body.classList.add("unlock");const e=parseInt(getComputedStyle(document.body).getPropertyValue("--scrolledTop"),10);window.scrollTo({top:-e,behavior:"instant"}),document.body.style.removeProperty("--scrolledTop"),u.isLocked=!1}};c(u,"isLocked",!1);let b=u;var g,I;const s=class s{constructor(){h(this,g);if(s.instance)return s.instance;s.backdrop=document.querySelector("[data-js-modal-backdrop]"),f(this,g,I).call(this),s.instance=this}handleClick(e){const t=e.target.closest(`[${s.attrs.modalClose}]`),o=e.target.closest(`[${s.attrs.triggerOpen}]`);if(o){const a=o.getAttribute(s.attrs.triggerOpen),n=o.getAttribute(s.attrs.modalType);a&&n?s.open({src:a,type:n}):console.error("Modal open attributes are missing or invalid:",a,n)}else if(t)s.closeOpenInstance();else{const[a]=s.getOpenInstance();a&&!a.contains(e.target)&&s.closeOpenInstance()}}handleKeyDown(e){if(e.key==="Escape"){const[t]=s.getOpenInstance();t&&s.closeOpenInstance()}}static getOpenInstance(){for(const[e,t]of s.instances.entries())if(t.isOpen)return[e,t];return[null,null]}static open({src:e,type:t,isNeedShowBackdrop:o=!0,closeAfterDelay:a}={}){s.closeOpenInstance();let n;if(t==="selector")n=document.querySelector(e);else if(t==="html"&&typeof e=="string")n=s.createModal(e);else{console.error("Invalid modal source or type provided:",e,t);return}if(!n){console.error("Modal element not found:",e);return}s.backdrop&&o?s.backdrop.classList.add(s.stateClasses.isOpen):s.backdrop&&s.backdrop.classList.remove(s.stateClasses.isOpen),n.classList.add(s.stateClasses.isOpen),s.instances.set(n,{isOpen:!0,type:t}),s.scrollLock(),a&&setTimeout(()=>{s.closeOpenInstance()},a)}static createModal(e){const t=document.createElement("div");return t.classList.add(s.stateClasses.baseClass),t.innerHTML=e,document.body.appendChild(t),t}static closeOpenInstance({isNeedCloseBackdrop:e=!0}={}){const[t,o]=s.getOpenInstance();console.debug("Open instance:",[t,o]),t&&(e&&s.backdrop&&s.backdrop.classList.remove(s.stateClasses.isOpen),t.classList.remove(s.stateClasses.isOpen),o.type==="html"&&document.body.removeChild(t),s.instances.delete(t),s.scrollUnlock())}static scrollLock(){b.lock()}static scrollUnlock(){b.unlock()}};g=new WeakSet,I=function(){document.addEventListener("click",e=>this.handleClick(e)),document.addEventListener("keydown",e=>this.handleKeyDown(e))},c(s,"instance",null),c(s,"stateClasses",{isOpen:"isOpen",baseClass:"modal"}),c(s,"attrs",{triggerOpen:"data-js-modal-open",modalType:"data-js-modal-type",modalClose:"data-js-modal-close"}),c(s,"instances",new Map),c(s,"backdrop",null);let v=s;var k,C;const r=class r{constructor(){h(this,k);if(r.instance)return r.instance;this.inputs=document.querySelectorAll(`[${r.attrs.inputRequired}]`),f(this,k,C).call(this),r.instance=this}static getValidationForm(e){let t=!0;return t=![...e.elements].some(o=>o.matches(`[${r.attrs.inputRequired}]`)&&!r.validateInput(o)),t}static validateInput(e){const t=e.getAttribute(r.attrs.inputRequired),o=e.closest(`[${r.attrs.row}]`).querySelector(`[${r.attrs.error}]`),a=e.closest(`[${r.attrs.row}]`);let n,l="";switch(t){case"name":n=r.validateText(e.value),l="Введите корректное имя";break;case"email":n=r.validateEmail(e.value),l="Введите корректный адрес электронной почты";break;case"message":n=r.validateText(e.value),l="Это поле обязательно для заполнения";break;default:n=!0}return n?r.hideError(a,o):r.showError(a,o,l),n}static validateEmail(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.trim())}static validateText(e){return e.trim()!==""}static showError(e,t,o){e&&e.classList.add(r.stateClasses.isInvalid),t&&(t.textContent=o)}static hideError(e,t){e&&e.classList.remove(r.stateClasses.isInvalid),t&&(t.textContent="")}};k=new WeakSet,C=function(){this.inputs.forEach(e=>{const t=e.getAttribute(r.attrs.inputRequiredMode);(t?t.trim().replace(" ","").split(","):[]).forEach(a=>{switch(a){case"blur":e.addEventListener("blur",()=>r.validateInput(e));break;case"focus":e.addEventListener("focus",()=>r.validateInput(e));break;case"change":e.addEventListener("input",()=>r.validateInput(e));break}})})},c(r,"instance",null),c(r,"attrs",{inputRequired:"data-js-input-required",inputRequiredMode:"data-js-input-required-mode",error:"data-js-error-msg",row:"data-js-validate-row"}),c(r,"stateClasses",{isInvalid:"isInvalid",isValid:"isValid"});let y=r;var p,E,A;const m=class m{constructor(){h(this,p);c(this,"attrs",{form:"data-js-form"});if(m.instance)return m.instance;f(this,p,A).call(this),m.instance=this}};p=new WeakSet,E=function(e){const{target:t,submitter:o}=e;if(!t.hasAttribute(`${this.attrs.form}`)||t.tagName.toLowerCase()!=="form")return;const a=JSON.parse(t.getAttribute(this.attrs.form)),{url:n,method:l="POST",showModalAfterSuccess:O,isNeedPreventDefault:q=!0,isNeedValidateBeforeSubmit:T}=a;if(q&&e.preventDefault(),T&&!y.getValidationForm(t))return;const j=new FormData(t);o.disabled=!0,fetch(n,{method:l,body:j,headers:{Accept:"application/json"}}).then(d=>{if(!d.ok)throw new Error("Сетевой ответ не успешен");return d.json()}).then(d=>{t.reset(),console.debug("Успешно:",d),O&&(v.open({src:O,type:"selector",isNeedShowBackdrop:!1,closeAfterDelay:2e3}),b.unlock())}).catch(d=>{console.error("Ошибка при выполнении запроса:",d)}).finally(()=>{o.disabled=!1})},A=function(){document.addEventListener("submit",e=>{f(this,p,E).call(this,e)},!0)},c(m,"instance");let L=m;document.addEventListener("DOMContentLoaded",()=>{new v,new L,new y});
