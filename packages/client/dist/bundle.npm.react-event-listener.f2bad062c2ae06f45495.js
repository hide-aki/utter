(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"7Vcp":function(n,t,e){"use strict";function r(n){return n&&"object"==typeof n&&"default"in n?n.default:n}Object.defineProperty(t,"__esModule",{value:!0});var i=r(e("cvzg")),o=r(e("/sAY")),u=r(e("Opd7")),s=r(e("+9ix")),p=r(e("bPvv")),a=r(e("hRJb")),c=r(e("/gSE")),l=r(e("daqd")),f=r(e("r0ML"));r(e("cNRa")),r(e("pjAE"));var d,v=(d=null,function(){if(null!==d)return d;var n,t,e,r=!1;try{window.addEventListener("test",null,(n={},t="passive",e={get:function(){r=!0}},Object.defineProperty(n,t,e)))}catch(n){}return d=r,r}()),h={capture:!1,passive:!1};function y(n){return l({},h,n)}function b(n,t,e){var r=[n,t];return r.push(v?e:e.capture),r}function w(n,t,e,r){n.addEventListener.apply(n,b(t,e,r))}function g(n,t,e,r){n.removeEventListener.apply(n,b(t,e,r))}var L=function(n){function t(){return i(this,t),u(this,s(t).apply(this,arguments))}return p(t,n),o(t,[{key:"componentDidMount",value:function(){this.applyListeners(w)}},{key:"componentDidUpdate",value:function(n){this.applyListeners(g,n),this.applyListeners(w)}},{key:"componentWillUnmount",value:function(){this.applyListeners(g)}},{key:"applyListeners",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props,e=t.target;if(e){var r=e;"string"==typeof e&&(r=window[e]),function(n,t){n.children,n.target;var e=c(n,["children","target"]);Object.keys(e).forEach(function(n){if("on"===n.substring(0,2)){var r=e[n],i=a(r),o="object"===i;if(o||"function"===i){var u="capture"===n.substr(-7).toLowerCase(),s=n.substring(2).toLowerCase();s=u?s.substring(0,s.length-7):s,o?t(s,r.handler,r.options):t(s,r,y({capture:u}))}}})}(t,n.bind(null,r))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(f.PureComponent);L.propTypes={},t.withOptions=function(n,t){return{handler:n,options:y(t)}},t.default=L}}]);
//# sourceMappingURL=bundle.npm.react-event-listener.f2bad062c2ae06f45495.js.map