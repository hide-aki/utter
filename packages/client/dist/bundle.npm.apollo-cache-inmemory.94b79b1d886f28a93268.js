(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{gr1B:function(t,e,r){"use strict";var n=r("UNrv"),i=r("qW1s"),a=r("dysU"),o=r("SFvQ"),c="Invariant Violation",s=Object.setPrototypeOf,u=void 0===s?function(t,e){return t.__proto__=e,t}:s,l=function(t){function e(r){void 0===r&&(r=c);var n=t.call(this,r)||this;return n.framesToPop=1,n.name=c,u(n,e.prototype),n}return Object(n.c)(e,t),e}(Error);function p(t,e){if(!t)throw new l(e)}!function(t){t.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return console.warn.apply(console,t)},t.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return console.error.apply(console,t)}}(p||(p={}));r.d(e,"a",function(){return A});var f=new Map;if(f.set(1,2)!==f){var d=f.set;Map.prototype.set=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return d.apply(this,t),this}}var h=new Set;if(h.add(3)!==h){var y=h.add;Set.prototype.add=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return y.apply(this,t),this}}var v={};"function"==typeof Object.freeze&&Object.freeze(v);try{f.set(v,v).delete(v)}catch(t){var m=function(t){return t&&function(e){try{f.set(e,e).delete(e)}finally{return t.call(Object,e)}}};Object.freeze=m(Object.freeze),Object.seal=m(Object.seal),Object.preventExtensions=m(Object.preventExtensions)}var b=!1;function O(){var t=!b;return Object(a.z)()||(b=!0),t}var g=function(){function t(){}return t.prototype.ensureReady=function(){return Promise.resolve()},t.prototype.canBypassInit=function(){return!0},t.prototype.match=function(t,e,r){var n=r.store.get(t.id);return!n&&"ROOT_QUERY"===t.id||!!n&&(n.__typename&&n.__typename===e||(O(),"heuristic"))},t}(),j=(function(){function t(t){t&&t.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(t.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}t.prototype.match=function(t,e,r){p(this.isReady);var n=r.store.get(t.id);if(!n)return!1;if(p(n.__typename),n.__typename===e)return!0;var i=this.possibleTypesMap[e];return!!(i&&i.indexOf(n.__typename)>-1)},t.prototype.parseIntrospectionResult=function(t){var e={};return t.__schema.types.forEach(function(t){"UNION"!==t.kind&&"INTERFACE"!==t.kind||(e[t.name]=t.possibleTypes.map(function(t){return t.name}))}),e}}(),function(){function t(){this.children=null,this.key=null}return t.prototype.lookup=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.lookupArray(t)},t.prototype.lookupArray=function(t){var e=this;return t.forEach(function(t){e=e.getOrCreate(t)}),e.key||(e.key=Object.create(null))},t.prototype.getOrCreate=function(e){var r=this.children||(this.children=new Map),n=r.get(e);return n||r.set(e,n=new t),n},t}()),S=Object.prototype.hasOwnProperty,w=function(){function t(t){void 0===t&&(t=Object.create(null));var e=this;this.data=t,this.depend=Object(o.wrap)(function(t){return e.data[t]},{disposable:!0,makeCacheKey:function(t){return t}})}return t.prototype.toObject=function(){return this.data},t.prototype.get=function(t){return this.depend(t),this.data[t]},t.prototype.set=function(t,e){e!==this.data[t]&&(this.data[t]=e,this.depend.dirty(t))},t.prototype.delete=function(t){S.call(this.data,t)&&(delete this.data[t],this.depend.dirty(t))},t.prototype.clear=function(){this.replace(null)},t.prototype.replace=function(t){var e=this;t?(Object.keys(t).forEach(function(r){e.set(r,t[r])}),Object.keys(this.data).forEach(function(r){S.call(t,r)||e.delete(r)})):Object.keys(this.data).forEach(function(t){e.delete(t)})},t}();function x(t){return new w(t)}var R=function(){function t(t){void 0===t&&(t=new j);var e=this;this.cacheKeyRoot=t;var r=this,n=r.executeStoreQuery,i=r.executeSelectionSet;this.executeStoreQuery=Object(o.wrap)(function(t){return n.call(e,t)},{makeCacheKey:function(t){var e=t.query,n=t.rootValue,i=t.contextValue,a=t.variableValues,o=t.fragmentMatcher;if(i.store instanceof w)return r.cacheKeyRoot.lookup(e,i.store,o,JSON.stringify(a),n.id)}}),this.executeSelectionSet=Object(o.wrap)(function(t){return i.call(e,t)},{makeCacheKey:function(t){var e=t.selectionSet,n=t.rootValue,i=t.execContext;if(i.contextValue.store instanceof w)return r.cacheKeyRoot.lookup(e,i.contextValue.store,i.fragmentMatcher,JSON.stringify(i.variableValues),n.id)}})}return t.prototype.readQueryFromStore=function(t){return this.diffQueryAgainstStore(Object(n.a)({},t,{returnPartialData:!1})).result},t.prototype.diffQueryAgainstStore=function(t){var e=t.store,r=t.query,n=t.variables,i=t.previousResult,o=t.returnPartialData,c=void 0===o||o,s=t.rootId,u=void 0===s?"ROOT_QUERY":s,p=t.fragmentMatcherFunction,f=t.config,d=Object(a.o)(r);n=Object(a.c)({},Object(a.g)(d),n);var h={store:e,dataIdFromObject:f&&f.dataIdFromObject||null,cacheRedirects:f&&f.cacheRedirects||{}},y=this.executeStoreQuery({query:r,rootValue:{type:"id",id:u,generated:!0,typename:"Query"},contextValue:h,variableValues:n,fragmentMatcher:p}),v=y.missing&&y.missing.length>0;return v&&!c&&y.missing.forEach(function(t){if(!t.tolerable)throw new l}),i&&Object(a.t)(i,y.result)&&(y.result=i),{result:y.result,complete:!v}},t.prototype.executeStoreQuery=function(t){var e=t.query,r=t.rootValue,n=t.contextValue,i=t.variableValues,o=t.fragmentMatcher,c=void 0===o?_:o,s=Object(a.k)(e),u=Object(a.i)(e),l={query:e,fragmentMap:Object(a.f)(u),contextValue:n,variableValues:i,fragmentMatcher:c};return this.executeSelectionSet({selectionSet:s.selectionSet,rootValue:r,execContext:l})},t.prototype.executeSelectionSet=function(t){var e=this,r=t.selectionSet,i=t.rootValue,o=t.execContext,c=o.fragmentMap,s=o.contextValue,u=o.variableValues,p={result:null},f=[],d=s.store.get(i.id),h=d&&d.__typename||"ROOT_QUERY"===i.id&&"Query"||void 0;function y(t){var e;return t.missing&&(p.missing=p.missing||[],(e=p.missing).push.apply(e,t.missing)),t.result}return r.selections.forEach(function(t){var r;if(Object(a.F)(t,u))if(Object(a.u)(t)){var p=y(e.executeField(d,h,t,o));void 0!==p&&f.push(((r={})[Object(a.E)(t)]=p,r))}else{var v=void 0;if(Object(a.w)(t))v=t;else if(!(v=c[t.name.value]))throw new l;var m=v.typeCondition.name.value,b=o.fragmentMatcher(i,m,s);if(b){var O=e.executeSelectionSet({selectionSet:v.selectionSet,rootValue:i,execContext:o});"heuristic"===b&&O.missing&&(O=Object(n.a)({},O,{missing:O.missing.map(function(t){return Object(n.a)({},t,{tolerable:!0})})})),f.push(y(O))}}}),p.result=Object(a.B)(f),p},t.prototype.executeField=function(t,e,r,n){var i=n.variableValues,o=n.contextValue,c=function(t,e,r,n,i,o){o.resultKey;var c=o.directives,s=r;(n||c)&&(s=Object(a.p)(s,n,c));var u=void 0;if(t&&void 0===(u=t[s])&&i.cacheRedirects&&"string"==typeof e){var l=i.cacheRedirects[e];if(l){var p=l[r];p&&(u=p(t,n,{getCacheKey:function(t){return Object(a.H)({id:i.dataIdFromObject(t),typename:t.__typename})}}))}}if(void 0===u)return{result:u,missing:[{object:t,fieldName:s,tolerable:!1}]};Object(a.x)(u)&&(u=u.json);return{result:u}}(t,e,r.name.value,Object(a.b)(r,i),o,{resultKey:Object(a.E)(r),directives:Object(a.h)(r,i)});return Array.isArray(c.result)?this.combineExecResults(c,this.executeSubSelectedArray(r,c.result,n)):r.selectionSet?null==c.result?c:this.combineExecResults(c,this.executeSelectionSet({selectionSet:r.selectionSet,rootValue:c.result,execContext:n})):(I(r,c.result),c)},t.prototype.combineExecResults=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=null;return t.forEach(function(t){t.missing&&(r=r||[]).push.apply(r,t.missing)}),{result:t.pop().result,missing:r}},t.prototype.executeSubSelectedArray=function(t,e,r){var n=this,i=null;function a(t){return t.missing&&(i=i||[]).push.apply(i,t.missing),t.result}return{result:e=e.map(function(e){return null===e?null:Array.isArray(e)?a(n.executeSubSelectedArray(t,e,r)):t.selectionSet?a(n.executeSelectionSet({selectionSet:t.selectionSet,rootValue:e,execContext:r})):(I(t,e),e)}),missing:i}},t}();function I(t,e){if(!t.selectionSet&&Object(a.v)(e))throw new l}function _(){return!0}var F=function(){function t(t){void 0===t&&(t=Object.create(null)),this.data=t}return t.prototype.toObject=function(){return this.data},t.prototype.get=function(t){return this.data[t]},t.prototype.set=function(t,e){this.data[t]=e},t.prototype.delete=function(t){this.data[t]=void 0},t.prototype.clear=function(){this.data=Object.create(null)},t.prototype.replace=function(t){this.data=t||Object.create(null)},t}();var M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="WriteError",e}return Object(n.c)(e,t),e}(Error);var E=function(){function t(){}return t.prototype.writeQueryToStore=function(t){var e=t.query,r=t.result,n=t.store,i=void 0===n?x():n,a=t.variables,o=t.dataIdFromObject,c=t.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:r,document:e,store:i,variables:a,dataIdFromObject:o,fragmentMatcherFunction:c})},t.prototype.writeResultToStore=function(t){var e=t.dataId,r=t.result,n=t.document,i=t.store,o=void 0===i?x():i,c=t.variables,s=t.dataIdFromObject,u=t.fragmentMatcherFunction,l=Object(a.m)(n);try{return this.writeSelectionSetToStore({result:r,dataId:e,selectionSet:l.selectionSet,context:{store:o,processedData:{},variables:Object(a.c)({},Object(a.g)(l),c),dataIdFromObject:s,fragmentMap:Object(a.f)(Object(a.i)(n)),fragmentMatcherFunction:u}})}catch(t){throw function(t,e){var r=new M("Error writing result to store for query:\n "+JSON.stringify(e));return r.message+="\n"+t.message,r.stack=t.stack,r}(t,n)}},t.prototype.writeSelectionSetToStore=function(t){var e=this,r=t.result,n=t.dataId,i=t.selectionSet,o=t.context,c=o.variables,s=o.store,u=o.fragmentMap;return i.selections.forEach(function(t){if(Object(a.F)(t,c))if(Object(a.u)(t)){var i=Object(a.E)(t),s=r[i];if(void 0!==s)e.writeFieldToStore({dataId:n,value:s,field:t,context:o});else{var l=!1,f=!1;t.directives&&t.directives.length&&(l=t.directives.some(function(t){return t.name&&"defer"===t.name.value}),f=t.directives.some(function(t){return t.name&&"client"===t.name.value})),!l&&!f&&o.fragmentMatcherFunction}}else{var d=void 0;Object(a.w)(t)?d=t:p(d=(u||{})[t.name.value]);var h=!0;if(o.fragmentMatcherFunction&&d.typeCondition){var y=Object(a.H)({id:"self",typename:void 0}),v={store:new F({self:r}),cacheRedirects:{}},m=o.fragmentMatcherFunction(y,d.typeCondition.name.value,v);Object(a.y)(),h=!!m}h&&e.writeSelectionSetToStore({result:r,selectionSet:d.selectionSet,dataId:n,context:o})}}),s},t.prototype.writeFieldToStore=function(t){var e,r,i,o=t.field,c=t.value,s=t.dataId,u=t.context,l=u.variables,f=u.dataIdFromObject,d=u.store,h=Object(a.G)(o,l);if(o.selectionSet&&null!==c)if(Array.isArray(c)){var y=s+"."+h;r=this.processArrayValue(c,y,o.selectionSet,u)}else{var v=s+"."+h,m=!0;if(T(v)||(v="$"+v),f){var b=f(c);p(!b||!T(b)),(b||"number"==typeof b&&0===b)&&(v=b,m=!1)}V(v,o,u.processedData)||this.writeSelectionSetToStore({dataId:v,result:c,selectionSet:o.selectionSet,context:u});var O=c.__typename;r=Object(a.H)({id:v,typename:O},m);var g=(i=d.get(s))&&i[h];if(g!==r&&Object(a.v)(g)){var j=void 0!==g.typename,S=void 0!==O,w=j&&S&&g.typename!==O;p(!m||g.generated||w),p(!j||S),g.generated&&(w?m||d.delete(g.id):function t(e,r,i){if(e===r)return!1;var o=i.get(e);var c=i.get(r);var s=!1;Object.keys(o).forEach(function(e){var r=o[e],n=c[e];Object(a.v)(r)&&T(r.id)&&Object(a.v)(n)&&!Object(a.t)(r,n)&&t(r.id,n.id,i)&&(s=!0)});i.delete(e);var u=Object(n.a)({},o,c);if(Object(a.t)(u,c))return s;i.set(r,u);return!0}(g.id,r.id,d))}}else r=null!=c&&"object"==typeof c?{type:"json",json:c}:c;(i=d.get(s))&&Object(a.t)(r,i[h])||d.set(s,Object(n.a)({},i,((e={})[h]=r,e)))},t.prototype.processArrayValue=function(t,e,r,n){var i=this;return t.map(function(t,o){if(null===t)return null;var c=e+"."+o;if(Array.isArray(t))return i.processArrayValue(t,c,r,n);var s=!0;if(n.dataIdFromObject){var u=n.dataIdFromObject(t);u&&(c=u,s=!1)}return V(c,r,n.processedData)||i.writeSelectionSetToStore({dataId:c,result:t,selectionSet:r,context:n}),Object(a.H)({id:c,typename:t.__typename},s)})},t}();function T(t){return"$"===t[0]}function V(t,e,r){if(!r)return!1;if(r[t]){if(r[t].indexOf(e)>=0)return!0;r[t].push(e)}else r[t]=[e];return!1}var k={fragmentMatcher:new g,dataIdFromObject:function(t){if(t.__typename){if(void 0!==t.id)return t.__typename+":"+t.id;if(void 0!==t._id)return t.__typename+":"+t._id}return null},addTypename:!0,resultCaching:!0};var D=Object.prototype.hasOwnProperty,C=function(t){function e(e,r,n){var i=t.call(this,Object.create(null))||this;return i.optimisticId=e,i.parent=r,i.transaction=n,i}return Object(n.c)(e,t),e.prototype.toObject=function(){return Object(n.a)({},this.parent.toObject(),this.data)},e.prototype.get=function(t){return D.call(this.data,t)?this.data[t]:this.parent.get(t)},e}(F),A=function(t){function e(e){void 0===e&&(e={});var r=t.call(this)||this;r.watches=new Set,r.typenameDocumentCache=new Map,r.cacheKeyRoot=new j,r.silenceBroadcast=!1,r.config=Object(n.a)({},k,e),r.config.customResolvers&&(r.config.cacheRedirects=r.config.customResolvers),r.config.cacheResolvers&&(r.config.cacheRedirects=r.config.cacheResolvers),r.addTypename=r.config.addTypename,r.data=r.config.resultCaching?new w:new F,r.optimisticData=r.data,r.storeReader=new R(r.cacheKeyRoot),r.storeWriter=new E;var i=r,a=i.maybeBroadcastWatch;return r.maybeBroadcastWatch=Object(o.wrap)(function(t){return a.call(r,t)},{makeCacheKey:function(t){if(!t.optimistic&&!t.previousResult)return i.data instanceof w?i.cacheKeyRoot.lookup(t.query,JSON.stringify(t.variables)):void 0}}),r}return Object(n.c)(e,t),e.prototype.restore=function(t){return t&&this.data.replace(t),this},e.prototype.extract=function(t){return void 0===t&&(t=!1),(t?this.optimisticData:this.data).toObject()},e.prototype.read=function(t){return"string"==typeof t.rootId&&void 0===this.data.get(t.rootId)?null:this.storeReader.readQueryFromStore({store:t.optimistic?this.optimisticData:this.data,query:this.transformDocument(t.query),variables:t.variables,rootId:t.rootId,fragmentMatcherFunction:this.config.fragmentMatcher.match,previousResult:t.previousResult,config:this.config})},e.prototype.write=function(t){this.storeWriter.writeResultToStore({dataId:t.dataId,result:t.result,variables:t.variables,document:this.transformDocument(t.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:this.config.fragmentMatcher.match}),this.broadcastWatches()},e.prototype.diff=function(t){return this.storeReader.diffQueryAgainstStore({store:t.optimistic?this.optimisticData:this.data,query:this.transformDocument(t.query),variables:t.variables,returnPartialData:t.returnPartialData,previousResult:t.previousResult,fragmentMatcherFunction:this.config.fragmentMatcher.match,config:this.config})},e.prototype.watch=function(t){var e=this;return this.watches.add(t),function(){e.watches.delete(t)}},e.prototype.evict=function(t){throw new l},e.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},e.prototype.removeOptimistic=function(t){for(var e=[],r=0,n=this.optimisticData;n instanceof C;)n.optimisticId===t?++r:e.push(n),n=n.parent;if(r>0){for(this.optimisticData=n;e.length>0;){var i=e.pop();this.performTransaction(i.transaction,i.optimisticId)}this.broadcastWatches()}},e.prototype.performTransaction=function(t,e){var r=this.data,n=this.silenceBroadcast;this.silenceBroadcast=!0,"string"==typeof e&&(this.data=this.optimisticData=new C(e,this.optimisticData,t));try{t(this)}finally{this.silenceBroadcast=n,this.data=r}this.broadcastWatches()},e.prototype.recordOptimisticTransaction=function(t,e){return this.performTransaction(t,e)},e.prototype.transformDocument=function(t){if(this.addTypename){var e=this.typenameDocumentCache.get(t);return e||(e=Object(a.a)(t),this.typenameDocumentCache.set(t,e),this.typenameDocumentCache.set(e,e)),e}return t},e.prototype.broadcastWatches=function(){var t=this;this.silenceBroadcast||this.watches.forEach(function(e){return t.maybeBroadcastWatch(e)})},e.prototype.maybeBroadcastWatch=function(t){t.callback(this.diff({query:t.query,variables:t.variables,previousResult:t.previousResult&&t.previousResult(),optimistic:t.optimistic}))},e}(i.a)}}]);
//# sourceMappingURL=bundle.npm.apollo-cache-inmemory.94b79b1d886f28a93268.js.map