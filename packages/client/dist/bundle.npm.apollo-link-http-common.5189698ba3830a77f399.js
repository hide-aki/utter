(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{eRYG:function(e,r,n){"use strict";n.d(r,"c",function(){return s}),n.d(r,"d",function(){return u}),n.d(r,"a",function(){return c}),n.d(r,"b",function(){return d}),n.d(r,"e",function(){return f}),n.d(r,"g",function(){return p}),n.d(r,"f",function(){return l});var t=n("UNrv"),o=n("scFH"),a=n("GkdJ"),s={http:{includeQuery:!0,includeExtensions:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},i=function(e,r,n){var t=new Error(n);throw t.name="ServerError",t.response=e,t.statusCode=e.status,t.result=r,t},u=function(e){return function(r){return r.text().then(function(e){try{return JSON.parse(e)}catch(t){var n=t;return n.name="ServerParseError",n.response=r,n.statusCode=r.status,n.bodyText=e,Promise.reject(n)}}).then(function(n){return r.status>=300&&i(r,n,"Response not successful: Received status code "+r.status),Array.isArray(n)||n.hasOwnProperty("data")||n.hasOwnProperty("errors")||i(r,n,"Server response was missing for query '"+(Array.isArray(e)?e.map(function(e){return e.operationName}):e.operationName)+"'."),n})}},c=function(e){if(!e&&"undefined"==typeof fetch){throw"undefined"==typeof window&&"node-fetch",new a.a(1)}},d=function(){if("undefined"==typeof AbortController)return{controller:!1,signal:!1};var e=new AbortController;return{controller:e,signal:e.signal}},f=function(e,r){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];var s=Object(t.a)({},r.options,{headers:r.headers,credentials:r.credentials}),i=r.http;n.forEach(function(e){s=Object(t.a)({},s,e.options,{headers:Object(t.a)({},s.headers,e.headers)}),e.credentials&&(s.credentials=e.credentials),i=Object(t.a)({},i,e.http)});var u=e.operationName,c=e.extensions,d=e.variables,f=e.query,p={operationName:u,variables:d};return i.includeExtensions&&(p.extensions=c),i.includeQuery&&(p.query=Object(o.a)(f)),{options:s,body:p}},p=function(e,r){var n;try{n=JSON.stringify(e)}catch(e){var t=new a.a(2);throw t.parseError=e,t}return n},l=function(e,r){var n=e.getContext().uri;return n||("function"==typeof r?r(e):r||"/graphql")}}}]);
//# sourceMappingURL=bundle.npm.apollo-link-http-common.5189698ba3830a77f399.js.map