(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"iB/h":function(n,t,e){"use strict";var r,o=e("Aqhw"),u=e("u/bu"),i=e("scFH"),c=(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),a=function(){return(a=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};var f=function(n){function t(t,e){var r=n.call(this,t)||this;return r.link=e,r}return c(t,n),t}(Error);function s(n){return n.request.length<=1}function p(n){return new o.a(function(t){t.error(n)})}function l(n,t){var e=a({},n);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(n){e=a({},e,"function"==typeof n?n(e):n)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return a({},e)}}),Object.defineProperty(t,"toKey",{enumerable:!1,value:function(){return function(n){return Object(i.a)(n.query)+"|"+JSON.stringify(n.variables)+"|"+n.operationName}(t)}}),t}var y=function(n,t){return t?t(n):o.a.of()},w=function(n){return"function"==typeof n?new m(n):n},v=function(){return new m(function(n,t){return o.a.of()})},b=function(n){return 0===n.length?v():n.map(w).reduce(function(n,t){return n.concat(t)})},h=function(n,t,e){void 0===e&&(e=new m(y));var r=w(t),u=w(e);return s(r)&&s(u)?new m(function(t){return n(t)?r.request(t)||o.a.of():u.request(t)||o.a.of()}):new m(function(t,e){return n(t)?r.request(t,e)||o.a.of():u.request(t,e)||o.a.of()})},q=function(n,t){var e=w(n);if(s(e))return console.warn(new f("You are calling concat on a terminating link, which will have no effect",e)),e;var r=w(t);return s(r)?new m(function(n){return e.request(n,function(n){return r.request(n)||o.a.of()})||o.a.of()}):new m(function(n,t){return e.request(n,function(n){return r.request(n,t)||o.a.of()})||o.a.of()})},m=function(){function n(n){n&&(this.request=n)}return n.prototype.split=function(t,e,r){return void 0===r&&(r=new n(y)),this.concat(h(t,e,r))},n.prototype.concat=function(n){return q(this,n)},n.prototype.request=function(n,t){throw new Error("request is not implemented")},n.empty=v,n.from=b,n.split=h,n.execute=d,n}();function d(n,t){return n.request(l(t.context,function(n){var t={variables:n.variables||{},extensions:n.extensions||{},operationName:n.operationName,query:n.query};return t.operationName||(t.operationName="string"!=typeof t.query?Object(u.j)(t.query):""),t}(function(n){for(var t=["query","operationName","variables","extensions","context"],e=0,r=Object.keys(n);e<r.length;e++){var o=r[e];if(t.indexOf(o)<0)throw new Error("illegal argument: "+o)}return n}(t))))||o.a.of()}e.d(t,"a",function(){return m}),e.d(t,"c",function(){return d}),e.d(t,"d",function(){return p}),e.d(t,"b",function(){return o.a})}}]);
//# sourceMappingURL=bundle.npm.apollo-link.5bab3cb9bdce94b0840a.js.map