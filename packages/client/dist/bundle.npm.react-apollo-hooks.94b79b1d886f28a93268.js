(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BpPM:function(r,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u});var n=e("r0ML"),o=e.n(n),i=o.a.createContext(null);function a(r){var t=r.client,e=r.children;return o.a.createElement(i.Provider,{value:t},e)}function u(r){var t=Object(n.useContext)(i);if(r)return r;if(!t)throw new Error('Could not find "client" in the context or passed in as a prop. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via props.');return t}},GYe8:function(r,t,e){"use strict";var n=e("pvem"),o=e("r0ML"),i=e("BpPM");var a=Object(o.createContext)(null);var u=e("scFH"),c=e("8Ei6"),s=e.n(c);function l(r){if(!s()(r))return r;var t=Object.keys(r).sort().reduce(function(t,e){return t[e]=l(r[e]),t},{});return JSON.stringify(t)}var f=new WeakMap;function d(r){var t=f.get(r);return null==t&&(t=new Map,f.set(r,t)),t}function p(r){var t=r.query,e=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,["query"]);return Object(u.a)(t)+"@@"+l(e)}function v(){return(v=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r}).apply(this,arguments)}function b(r,t){var e=void 0===t?{}:t,u=e.ssr,c=void 0===u||u,s=e.skip,f=void 0!==s&&s,b=e.suspend,h=void 0!==b&&b,w=e.pollInterval,y=e.notifyOnNetworkStatusChange,O=void 0!==y&&y,g=e.client,j=e.context,k=e.metadata,P=e.variables,M=e.fetchPolicy,m=e.errorPolicy,x=e.fetchResults,C=Object(i.b)(g),E=Object(o.useContext)(a),S=c&&E,L=f||null!=E&&!c,Q=!S||"network-only"!==M&&"cache-and-network"!==M?M:"cache-first",R=Object(o.useMemo)(function(){return t={context:j,errorPolicy:m,fetchPolicy:Q,fetchResults:x,metadata:k,notifyOnNetworkStatusChange:O,pollInterval:w,query:r,variables:P},Object.keys(t).reduce(function(r,e){return void 0!==t[e]&&(r[e]=t[e]),r},{});var t},[r,w,O,j&&l(j),k&&l(k),P&&l(P),Q,m,x]),q=Object(o.useMemo)(function(){return function(r,t){var e=d(r),n=p(t),o=e.get(n);return null==o&&(o=r.watchQuery(t),e.set(n,o)),o}(C,R)},[C,R]),A=Object(o.useState)(0),J=A[0],N=A[1],B=Object(o.useMemo)(function(){var r=q.currentResult(),t=r.data;return(r.error||r.errors)&&(t=v({},r.data,(q.getLastResult()||{}).data)),{data:t,error:r.errors&&r.errors.length>0?new n.ApolloError({graphQLErrors:r.errors}):r.error,errors:r.errors,loading:r.loading,networkStatus:h?void 0:r.networkStatus,partial:r.partial}},[L,J,q]);Object(o.useEffect)(function(){if(!L){var r=function(){(function(){N(function(r){return r+1})})()},t=q.subscribe(r,r);return function(r,t){var e=d(r),n=p(t);e.delete(n)}(C,R),function(){t.unsubscribe()}}},[L,q]),function(r,t){if(r&&t&&"cache-first"!==t)throw new Error("Fetch policy "+t+" is not supported without 'suspend: false'")}(h,Q);var F={fetchMore:q.fetchMore.bind(q),refetch:q.refetch.bind(q),startPolling:q.startPolling.bind(q),stopPolling:q.stopPolling.bind(q),updateQuery:q.updateQuery.bind(q)};if(L)return v({},F,{data:void 0,error:void 0,loading:!1,networkStatus:void 0});if(B.partial){if(h)throw q.result();S&&E.register(q.result())}return v({},F,B)}e.d(t,"a",function(){return b})}}]);
//# sourceMappingURL=bundle.npm.react-apollo-hooks.94b79b1d886f28a93268.js.map