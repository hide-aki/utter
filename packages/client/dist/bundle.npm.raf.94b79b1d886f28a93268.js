(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"4hXW":function(n,e,t){(function(e){for(var a=t("f83W"),c="undefined"==typeof window?e:window,l=["moz","webkit"],o="AnimationFrame",i=c["request"+o],r=c["cancel"+o]||c["cancelRequest"+o],u=0;!i&&u<l.length;u++)i=c[l[u]+"Request"+o],r=c[l[u]+"Cancel"+o]||c[l[u]+"CancelRequest"+o];if(!i||!r){var f=0,s=0,h=[];i=function(n){if(0===h.length){var e=a(),t=Math.max(0,1e3/60-(e-f));f=t+e,setTimeout(function(){var n=h.slice(0);h.length=0;for(var e=0;e<n.length;e++)if(!n[e].cancelled)try{n[e].callback(f)}catch(n){setTimeout(function(){throw n},0)}},Math.round(t))}return h.push({handle:++s,callback:n,cancelled:!1}),s},r=function(n){for(var e=0;e<h.length;e++)h[e].handle===n&&(h[e].cancelled=!0)}}n.exports=function(n){return i.call(c,n)},n.exports.cancel=function(){r.apply(c,arguments)},n.exports.polyfill=function(n){n||(n=c),n.requestAnimationFrame=i,n.cancelAnimationFrame=r}}).call(this,t("uKge"))}}]);
//# sourceMappingURL=bundle.npm.raf.94b79b1d886f28a93268.js.map