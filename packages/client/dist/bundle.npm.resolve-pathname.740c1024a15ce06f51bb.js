(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{SnHU:function(n,t,r){"use strict";function i(n){return"/"===n.charAt(0)}function o(n,t){for(var r=t,i=r+1,o=n.length;i<o;r+=1,i+=1)n[r]=n[i];n.pop()}r.r(t),t.default=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=n&&n.split("/")||[],e=t&&t.split("/")||[],f=n&&i(n),u=t&&i(t),a=f||u;if(n&&i(n)?e=r:r.length&&(e.pop(),e=e.concat(r)),!e.length)return"/";var s=void 0;if(e.length){var h=e[e.length-1];s="."===h||".."===h||""===h}else s=!1;for(var l=0,p=e.length;p>=0;p--){var c=e[p];"."===c?o(e,p):".."===c?(o(e,p),l++):l&&(o(e,p),l--)}if(!a)for(;l--;l)e.unshift("..");!a||""===e[0]||e[0]&&i(e[0])||e.unshift("");var v=e.join("/");return s&&"/"!==v.substr(-1)&&(v+="/"),v}}}]);
//# sourceMappingURL=bundle.npm.resolve-pathname.740c1024a15ce06f51bb.js.map