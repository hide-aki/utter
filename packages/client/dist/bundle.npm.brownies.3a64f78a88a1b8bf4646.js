(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"18K1":function(e,t,r){!function(e){"use strict";var t=Symbol("options"),r=function(e,t){function n(e,t){for(var r in e=e||{},t)void 0===e[r]&&(e[r]=t[r]);return e}function o(e){var t=e;return t instanceof Date||(t=new Date).setTime(t.getTime()+1e3*e),t.toUTCString()}if(n(r,{expires:31536e3,path:"/",secure:"https:"===window.location.protocol,nulltoremove:!0,autojson:!0,autoencode:!0,encode:function(e){return encodeURIComponent(e)},decode:function(e){return decodeURIComponent(e)},fallback:!1}),t=n(t,r),"string"==typeof e){var c,i=document.cookie.split(/;\s*/).map(t.autoencode?t.decode:function(e){return e}).map(function(e){return e.split("=")}).reduce(function(e,t){return e[t[0]]=t.splice(1).join("="),e},{})[e];if(!t.autojson)return i;try{c=JSON.parse(i)}catch(e){c=i}return void 0===c&&t.fallback&&(c=t.fallback(e,t)),c}for(var s in e){var u=e[s],a=void 0===u||t.nulltoremove&&null===u,l=t.autojson?JSON.stringify(u):u,f=t.autoencode?t.encode(l):l;a&&(f="");var p=t.encode(s)+"="+f+(t.expires?";expires="+o(a?-1e4:t.expires):"")+";path="+t.path+(t.domain?";domain="+t.domain:"")+(t.secure?";secure":"");t.test&&t.test(p),document.cookie=p}return r},n=[];const o=(e,n)=>{if(n===Symbol.iterator)return s();if(n===t)return r;const o=r(n);return void 0===o?null:o},c=(e,o,c=null)=>{if(o===t)for(let e in c)return r[e]=c[e],!0;return r({[o]:c}),n.filter(e=>e.key===o).forEach(({check:e})=>e()),!0},i=()=>{const e=document.cookie.split(";"),t={};for(var r=0;r<e.length;r++){const n=e[r].split("="),c=(n[0]+"").trim();try{t[c]=o(0,c)}catch(e){console.warn(e)}}return t},s=()=>{const e=Object.values(i());return function*(){for(;e.length;)yield e.shift()}};var u=new Proxy({},{get:o,set:c,deleteProperty:c,getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),ownKeys:()=>Object.keys(i())}),a=(e,t)=>{t||(t={}),"function"==typeof t&&(t={cmp:t});var r=t.space||"";"number"==typeof r&&(r=Array(r+1).join(" "));var n="boolean"==typeof t.cycles&&t.cycles,o=t.replacer||function(e,t){return t},c=t.cmp&&function(e){return function(t){return function(r,n){var o={key:r,value:t[r]},c={key:n,value:t[n]};return e(o,c)}}}(t.cmp),i=[];return function e(t,s,u,a){var p=r?"\n"+new Array(a+1).join(r):"",y=r?": ":":";if(u&&u.toJSON&&"function"==typeof u.toJSON&&(u=u.toJSON()),void 0!==(u=o.call(t,s,u))){if("object"!=typeof u||null===u)return JSON.stringify(u);if(l(u)){for(var h=[],d=0;d<u.length;d++){var m=e(u,d,u[d],a+1)||JSON.stringify(null);h.push(p+r+m)}return"["+h.join(",")+p+"]"}if(-1!==i.indexOf(u)){if(n)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}i.push(u);for(var v=f(u).sort(c&&c(u)),h=[],d=0;d<v.length;d++){var s=v[d],b=e(u,s,u[s],a+1);if(b){var g=JSON.stringify(s)+y+b;h.push(p+r+g)}}return i.splice(i.indexOf(u),1),"{"+h.join(",")+p+"}"}}({"":e},"",e,0)},l=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},f=Object.keys||function(e){var t=Object.prototype.hasOwnProperty||function(){return!0},r=[];for(var n in e)t.call(e,n)&&r.push(n);return r};const p="JSSTR:",y=e=>("string"!=typeof e&&(e=p+a(e)),e),h=e=>e&&"string"==typeof e&&e.slice(0,p.length)===p?JSON.parse(e.slice(p.length)):e,d=()=>{const e={};for(var t in localStorage)null!==m[t]&&(e[t]=m[t]);return e},m=new Proxy({},{get:(e,t)=>{if(t===Symbol.iterator){const e=Object.values(d());return function*(){for(;e.length;)yield e.shift()}}return h(localStorage.getItem(t))},set:(e,t,r)=>(localStorage.setItem(t,y(r)),n.filter(e=>e.key===t).forEach(({check:e})=>e()),!0),deleteProperty:(e,t)=>(localStorage.removeItem(t),n.filter(e=>e.key===t).forEach(({check:e})=>e()),!0),getOwnPropertyDescriptor:e=>({enumerable:!0,configurable:!0}),ownKeys:e=>Object.keys(d())}),v=()=>{const e={};for(var t in sessionStorage)null!==b[t]&&(e[t]=b[t]);return e},b=new Proxy({},{get:(e,t)=>{if(t===Symbol.iterator){const e=Object.values(v());return function*(){for(;e.length;)yield e.shift()}}return h(sessionStorage.getItem(t))},set:(e,t,r)=>(sessionStorage.setItem(t,y(r)),n.filter(e=>e.key===t).forEach(({check:e})=>e()),!0),deleteProperty:(e,t)=>(sessionStorage.removeItem(t),n.filter(e=>e.key===t).forEach(({check:e})=>e()),!0),getOwnPropertyDescriptor:e=>({enumerable:!0,configurable:!0}),ownKeys:e=>Object.keys(v())});class g{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise((r,n)=>{const o=indexedDB.open(e,1);o.onerror=(()=>n(o.error)),o.onsuccess=(()=>r(o.result)),o.onupgradeneeded=(()=>{o.result.createObjectStore(t)})})}_withIDBStore(e,t){return this._dbp.then(r=>new Promise((n,o)=>{const c=r.transaction(this.storeName,e);c.oncomplete=(()=>n()),c.onabort=c.onerror=(()=>o(c.error)),t(c.objectStore(this.storeName))}))}}let w;function S(){return w||(w=new g),w}function k(e,t=S()){let r;return t._withIDBStore("readonly",t=>{r=t.get(e)}).then(()=>r.result)}const O=new Proxy(async()=>{const e={},t=await function(e=S()){const t=[];return e._withIDBStore("readonly",e=>{(e.openKeyCursor||e.openCursor).call(e).onsuccess=function(){this.result&&(t.push(this.result.key),this.result.continue())}}).then(()=>t)}();return await Promise.all(t.map(async t=>{e[t]=await k(t)})),e},{get:async(e,t)=>{const r=await k(t);return void 0===r?null:r},set:(e,t,r)=>(function(e,t,r=S()){r._withIDBStore("readwrite",r=>{r.put(t,e)})}(t,r),n.filter(e=>e.key===t).forEach(({check:e})=>e()),!0),deleteProperty:(e,t)=>(function(e,t=S()){t._withIDBStore("readwrite",t=>{t.delete(e)})}(t),n.filter(e=>e.key===t).forEach(({check:e})=>e()),!0)}),j=e=>(e=>!e||["boolean","number","string"].includes(typeof e))(e)?e:JSON.parse(a(e));e.cookies=u,e.local=m,e.session=b,e.db=O,e.options=t,e.subscribe=((e,t,r)=>{let o=e[t]&&e[t].then?e[t].then(j):j(e[t]);const c=()=>{const n=e[t];if(o&&o.then||n&&n.then)return Promise.all([o,n]).then(([e,t])=>{a(e)!==a(t)&&(r(t,e),o=j(t))});a(o)!==a(n)&&(r(n,o),o=j(n))},i=setInterval(c,100);return n.push({id:i,key:t,check:c,cb:r}),i}),e.unsubscribe=(e=>"number"==typeof e?clearInterval(e):n.filter(({cb:t})=>t===e).map(e=>clearInterval(e.id))),Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=bundle.npm.brownies.3a64f78a88a1b8bf4646.js.map