(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{EcKl:function(e,n,t){"use strict";t.d(n,"a",function(){return q});var r=t("XYhY"),u=t("GkdJ"),o=t("UNrv"),i=t("scFH"),c=t("dysU");!function(e){function n(n,t){var r=e.call(this,n)||this;return r.link=t,r}Object(o.c)(n,e)}(Error);function a(e){return e.request.length<=1}function f(e,n){var t=Object(o.a)({},e);return Object.defineProperty(n,"setContext",{enumerable:!1,value:function(e){t="function"==typeof e?Object(o.a)({},t,e(t)):Object(o.a)({},t,e)}}),Object.defineProperty(n,"getContext",{enumerable:!1,value:function(){return Object(o.a)({},t)}}),Object.defineProperty(n,"toKey",{enumerable:!1,value:function(){return function(e){return Object(i.a)(e.query)+"|"+JSON.stringify(e.variables)+"|"+e.operationName}(n)}}),n}function s(e,n){return n?n(e):r.a.of()}function p(e){return"function"==typeof e?new q(e):e}function y(){return new q(function(){return r.a.of()})}function b(e){return 0===e.length?y():e.map(p).reduce(function(e,n){return e.concat(n)})}function l(e,n,t){var u=p(n),o=p(t||new q(s));return a(u)&&a(o)?new q(function(n){return e(n)?u.request(n)||r.a.of():o.request(n)||r.a.of()}):new q(function(n,t){return e(n)?u.request(n,t)||r.a.of():o.request(n,t)||r.a.of()})}var v=function(e,n){var t=p(e);if(a(t))return t;var u=p(n);return a(u)?new q(function(e){return t.request(e,function(e){return u.request(e)||r.a.of()})||r.a.of()}):new q(function(e,n){return t.request(e,function(e){return u.request(e,n)||r.a.of()})||r.a.of()})},q=function(){function e(e){e&&(this.request=e)}return e.prototype.split=function(n,t,r){return this.concat(l(n,t,r||new e(s)))},e.prototype.concat=function(e){return v(this,e)},e.prototype.request=function(e,n){throw new u.a(1)},e.empty=y,e.from=b,e.split=l,e.execute=w,e}();function w(e,n){return e.request(f(n.context,function(e){var n={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return n.operationName||(n.operationName="string"!=typeof n.query?Object(c.n)(n.query):""),n}(function(e){for(var n=["query","operationName","variables","extensions","context"],t=0,r=Object.keys(e);t<r.length;t++){var o=r[t];if(n.indexOf(o)<0)throw new u.a(2)}return e}(n))))||r.a.of()}},KeHV:function(e,n,t){"use strict";t.d(n,"c",function(){return f}),t.d(n,"a",function(){return w}),t.d(n,"b",function(){return O});var r=t("e0vG"),u=t("GkdJ"),o=t("UNrv"),i=t("scFH"),c=t("dysU");!function(e){function n(n,t){var r=e.call(this,n)||this;return r.link=t,r}Object(o.c)(n,e)}(Error);function a(e){return e.request.length<=1}function f(e){return new r.a(function(n){n.error(e)})}function s(e,n){var t=Object(o.a)({},e);return Object.defineProperty(n,"setContext",{enumerable:!1,value:function(e){t="function"==typeof e?Object(o.a)({},t,e(t)):Object(o.a)({},t,e)}}),Object.defineProperty(n,"getContext",{enumerable:!1,value:function(){return Object(o.a)({},t)}}),Object.defineProperty(n,"toKey",{enumerable:!1,value:function(){return function(e){return Object(i.a)(e.query)+"|"+JSON.stringify(e.variables)+"|"+e.operationName}(n)}}),n}function p(e,n){return n?n(e):r.a.of()}function y(e){return"function"==typeof e?new w(e):e}function b(){return new w(function(){return r.a.of()})}function l(e){return 0===e.length?b():e.map(y).reduce(function(e,n){return e.concat(n)})}function v(e,n,t){var u=y(n),o=y(t||new w(p));return a(u)&&a(o)?new w(function(n){return e(n)?u.request(n)||r.a.of():o.request(n)||r.a.of()}):new w(function(n,t){return e(n)?u.request(n,t)||r.a.of():o.request(n,t)||r.a.of()})}var q=function(e,n){var t=y(e);if(a(t))return t;var u=y(n);return a(u)?new w(function(e){return t.request(e,function(e){return u.request(e)||r.a.of()})||r.a.of()}):new w(function(e,n){return t.request(e,function(e){return u.request(e,n)||r.a.of()})||r.a.of()})},w=function(){function e(e){e&&(this.request=e)}return e.prototype.split=function(n,t,r){return this.concat(v(n,t,r||new e(p)))},e.prototype.concat=function(e){return q(this,e)},e.prototype.request=function(e,n){throw new u.a(1)},e.empty=b,e.from=l,e.split=v,e.execute=O,e}();function O(e,n){return e.request(s(n.context,function(e){var n={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return n.operationName||(n.operationName="string"!=typeof n.query?Object(c.n)(n.query):""),n}(function(e){for(var n=["query","operationName","variables","extensions","context"],t=0,r=Object.keys(e);t<r.length;t++){var o=r[t];if(n.indexOf(o)<0)throw new u.a(2)}return e}(n))))||r.a.of()}}}]);
//# sourceMappingURL=bundle.npm.apollo-link.6165b644312b13f36ad2.js.map