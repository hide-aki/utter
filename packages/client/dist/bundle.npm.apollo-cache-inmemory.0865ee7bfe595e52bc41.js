(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1p8x":function(e,t,r){"use strict";var n=r("UNrv"),a=(r("UGiy"),r("U3yg")),i=r("KH6z"),o=r("SFvQ"),c=r("tsAT"),s=r("eFub"),u=!1,l=function(){function e(){}return e.prototype.ensureReady=function(){return Promise.resolve()},e.prototype.canBypassInit=function(){return!0},e.prototype.match=function(e,t,r){var n=r.store.get(e.id);return!n&&"ROOT_QUERY"===e.id||!!n&&(n.__typename?n.__typename===t||(Object(s.a)("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types. Apollo Client will not be able to accurately map fragments. To make this error go away, use the `IntrospectionFragmentMatcher` as described in the docs: https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher","error"),"heuristic"):(u||(console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments."),console.warn("Could not find __typename on Fragment ",t,n),console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now."),Object(c.e)()||(u=!0)),"heuristic"))},e}(),d=(function(){function e(e){e&&e.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}e.prototype.match=function(e,t,r){if(!this.isReady)throw new Error("FragmentMatcher.match() was called before FragmentMatcher.init()");var n=r.store.get(e.id);if(!n)return!1;if(!n.__typename)throw new Error("Cannot match fragment because __typename property is missing: "+JSON.stringify(n));if(n.__typename===t)return!0;var a=this.possibleTypesMap[t];return!!(a&&a.indexOf(n.__typename)>-1)},e.prototype.parseIntrospectionResult=function(e){var t={};return e.__schema.types.forEach(function(e){"UNION"!==e.kind&&"INTERFACE"!==e.kind||(t[e.name]=e.possibleTypes.map(function(e){return e.name}))}),t}}(),r("u/bu")),f=r("ru8h"),p=r("3pyI"),h=r("cQN5"),y=r("zLY4"),m=function(){function e(){this.children=null,this.key=null}return e.prototype.lookup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.lookupArray(e)},e.prototype.lookupArray=function(e){var t=this;return e.forEach(function(e){t=t.getOrCreate(e)}),t.key||(t.key=Object.create(null))},e.prototype.getOrCreate=function(t){var r=this.children||(this.children=new Map),n=r.get(t);return n||r.set(t,n=new e),n},e}(),v=Object.prototype.hasOwnProperty,b=function(){function e(e){void 0===e&&(e=Object.create(null));var t=this;this.data=e,this.depend=Object(o.wrap)(function(e){return t.data[e]},{disposable:!0,makeCacheKey:function(e){return e}})}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.depend(e),this.data[e]},e.prototype.set=function(e,t){t!==this.data[e]&&(this.data[e]=t,this.depend.dirty(e))},e.prototype.delete=function(e){v.call(this.data,e)&&(delete this.data[e],this.depend.dirty(e))},e.prototype.clear=function(){this.replace(null)},e.prototype.replace=function(e){var t=this;e?(Object.keys(e).forEach(function(r){t.set(r,e[r])}),Object.keys(this.data).forEach(function(r){v.call(e,r)||t.delete(r)})):Object.keys(this.data).forEach(function(e){t.delete(e)})},e}();function g(e){return new b(e)}var O=function(){function e(e){void 0===e&&(e=new m);var t=this;this.cacheKeyRoot=e;var r=this,n=r.executeStoreQuery,a=r.executeSelectionSet;this.executeStoreQuery=Object(o.wrap)(function(e){return n.call(t,e)},{makeCacheKey:function(e){var t=e.query,n=e.rootValue,a=e.contextValue,i=e.variableValues,o=e.fragmentMatcher;if(a.store instanceof b)return r.cacheKeyRoot.lookup(t,a.store,o,JSON.stringify(i),n.id)}}),this.executeSelectionSet=Object(o.wrap)(function(e){return a.call(t,e)},{makeCacheKey:function(e){var t=e.selectionSet,n=e.rootValue,a=e.execContext;if(a.contextValue.store instanceof b)return r.cacheKeyRoot.lookup(t,a.contextValue.store,a.fragmentMatcher,JSON.stringify(a.variableValues),n.id)}})}return e.prototype.readQueryFromStore=function(e){return this.diffQueryAgainstStore(n.a({},e,{returnPartialData:!1})).result},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,n=e.variables,a=e.previousResult,i=e.returnPartialData,o=void 0===i||i,c=e.rootId,s=void 0===c?"ROOT_QUERY":c,u=e.fragmentMatcherFunction,l=e.config,h=Object(d.k)(r);n=Object(f.a)({},Object(d.c)(h),n);var y={store:t,dataIdFromObject:l&&l.dataIdFromObject||null,cacheRedirects:l&&l.cacheRedirects||{}},m=this.executeStoreQuery({query:r,rootValue:{type:"id",id:s,generated:!0,typename:"Query"},contextValue:y,variableValues:n,fragmentMatcher:u}),v=m.missing&&m.missing.length>0;return v&&!o&&m.missing.forEach(function(e){if(!e.tolerable)throw new Error("Can't find field "+e.fieldName+" on object "+JSON.stringify(e.object,null,2)+".")}),a&&Object(p.a)(a,m.result)&&(m.result=a),{result:m.result,complete:!v}},e.prototype.executeStoreQuery=function(e){var t=e.query,r=e.rootValue,n=e.contextValue,a=e.variableValues,i=e.fragmentMatcher,o=void 0===i?w:i,c=Object(d.f)(t),s=Object(d.e)(t),u={query:t,fragmentMap:Object(d.b)(s),contextValue:n,variableValues:a,fragmentMatcher:o};return this.executeSelectionSet({selectionSet:c.selectionSet,rootValue:r,execContext:u})},e.prototype.executeSelectionSet=function(e){var t,r,a=this,i=e.selectionSet,o=e.rootValue,c=e.execContext,s=c.fragmentMap,u=c.contextValue,l=c.variableValues,d={result:{}},f=[],p=u.store.get(o.id),m=p&&p.__typename||"ROOT_QUERY"===o.id&&"Query"||void 0;function v(e){var t;return e.missing&&(d.missing=d.missing||[],(t=d.missing).push.apply(t,e.missing)),e.result}return i.selections.forEach(function(e){var t;if(Object(h.d)(e,l))if(Object(y.c)(e)){var r=v(a.executeField(p,m,e,c));void 0!==r&&f.push(((t={})[Object(y.i)(e)]=r,t))}else{var i=void 0;if(Object(y.e)(e))i=e;else if(!(i=s[e.name.value]))throw new Error("No fragment named "+e.name.value);var d=i.typeCondition.name.value,b=c.fragmentMatcher(o,d,u);if(b){var g=a.executeSelectionSet({selectionSet:i.selectionSet,rootValue:o,execContext:c});"heuristic"===b&&g.missing&&(g=n.a({},g,{missing:g.missing.map(function(e){return n.a({},e,{tolerable:!0})})})),f.push(v(g))}}}),t=d.result,r=[],f.forEach(function(e){!function e(t,r,n){return null!==r&&"object"==typeof r&&(Object.isExtensible&&!Object.isExtensible(t)&&(t=R(t,n)),Object.keys(r).forEach(function(a){var i=r[a];if(S.call(t,a)){var o=t[a];i!==o&&(t[a]=e(R(o,n),i,n))}else t[a]=i})),t}(t,e,r)}),d},e.prototype.executeField=function(e,t,r,n){var a=n.variableValues,i=n.contextValue,o=function(e,t,r,n,a,i){i.resultKey;var o=i.directives,c=r;(n||o)&&(c=Object(y.b)(c,n,o));var s=void 0;if(e&&void 0===(s=e[c])&&a.cacheRedirects&&"string"==typeof t){var u=a.cacheRedirects[t];if(u){var l=u[r];l&&(s=l(e,n,{getCacheKey:function(e){return Object(y.k)({id:a.dataIdFromObject(e),typename:e.__typename})}}))}}if(void 0===s)return{result:s,missing:[{object:e,fieldName:c,tolerable:!1}]};Object(y.f)(s)&&(s=s.json);return{result:s}}(e,t,r.name.value,Object(y.a)(r,a),i,{resultKey:Object(y.i)(r),directives:Object(h.a)(r,a)});return Array.isArray(o.result)?this.combineExecResults(o,this.executeSubSelectedArray(r,o.result,n)):r.selectionSet?null==o.result?o:this.combineExecResults(o,this.executeSelectionSet({selectionSet:r.selectionSet,rootValue:o.result,execContext:n})):(j(r,o.result),o)},e.prototype.combineExecResults=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=null;return e.forEach(function(e){e.missing&&(r=r||[]).push.apply(r,e.missing)}),{result:e.pop().result,missing:r}},e.prototype.executeSubSelectedArray=function(e,t,r){var n=this,a=null;function i(e){return e.missing&&(a=a||[]).push.apply(a,e.missing),e.result}return{result:t=t.map(function(t){return null===t?null:Array.isArray(t)?i(n.executeSubSelectedArray(e,t,r)):e.selectionSet?i(n.executeSelectionSet({selectionSet:e.selectionSet,rootValue:t,execContext:r})):(j(e,t),t)}),missing:a}},e}();function j(e,t){if(!e.selectionSet&&Object(y.d)(t))throw new Error("Missing selection set for object of type "+t.typename+" returned for query field "+e.name.value)}function w(){return!0}var S=Object.prototype.hasOwnProperty;function R(e,t){return null!==e&&"object"==typeof e&&t.indexOf(e)<0&&(e=Array.isArray(e)?e.slice(0):n.a({},e),t.push(e)),e}var x=function(){function e(e){void 0===e&&(e=Object.create(null)),this.data=e}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.delete=function(e){this.data[e]=void 0},e.prototype.clear=function(){this.data=Object.create(null)},e.prototype.replace=function(e){this.data=e||Object.create(null)},e}();var I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="WriteError",t}return n.b(t,e),t}(Error);var _=function(){function e(){}return e.prototype.writeQueryToStore=function(e){var t=e.query,r=e.result,n=e.store,a=void 0===n?g():n,i=e.variables,o=e.dataIdFromObject,c=e.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:r,document:t,store:a,variables:i,dataIdFromObject:o,fragmentMatcherFunction:c})},e.prototype.writeResultToStore=function(e){var t=e.dataId,r=e.result,n=e.document,a=e.store,i=void 0===a?g():a,o=e.variables,c=e.dataIdFromObject,s=e.fragmentMatcherFunction,u=Object(d.h)(n);try{return this.writeSelectionSetToStore({result:r,dataId:t,selectionSet:u.selectionSet,context:{store:i,processedData:{},variables:Object(f.a)({},Object(d.c)(u),o),dataIdFromObject:c,fragmentMap:Object(d.b)(Object(d.e)(n)),fragmentMatcherFunction:s}})}catch(e){throw function(e,t){var r=new I("Error writing result to store for query:\n "+JSON.stringify(t));return r.message+="\n"+e.message,r.stack=e.stack,r}(e,n)}},e.prototype.writeSelectionSetToStore=function(e){var t=this,r=e.result,n=e.dataId,a=e.selectionSet,i=e.context,o=i.variables,s=i.store,u=i.fragmentMap;return a.selections.forEach(function(e){if(Object(h.d)(e,o))if(Object(y.c)(e)){var a=Object(y.i)(e),s=r[a];if(void 0!==s)t.writeFieldToStore({dataId:n,value:s,field:e,context:i});else!(e.directives&&e.directives.length&&e.directives.some(function(e){return e.name&&"defer"===e.name.value}))&&i.fragmentMatcherFunction&&(Object(c.d)()||console.warn("Missing field "+a+" in "+JSON.stringify(r,null,2).substring(0,100)))}else{var l=void 0;if(Object(y.e)(e))l=e;else if(!(l=(u||{})[e.name.value]))throw new Error("No fragment named "+e.name.value+".");var d=!0;if(i.fragmentMatcherFunction&&l.typeCondition){var f=Object(y.k)({id:"self",typename:void 0}),p={store:new x({self:r}),cacheRedirects:{}},m=i.fragmentMatcherFunction(f,l.typeCondition.name.value,p);Object(c.d)()||"heuristic"!==m||console.error("WARNING: heuristic fragment matching going on!"),d=!!m}d&&t.writeSelectionSetToStore({result:r,selectionSet:l.selectionSet,dataId:n,context:i})}}),s},e.prototype.writeFieldToStore=function(e){var t,r,a,i=e.field,o=e.value,c=e.dataId,s=e.context,u=s.variables,l=s.dataIdFromObject,d=s.store,f=Object(y.j)(i,u);if(i.selectionSet&&null!==o)if(Array.isArray(o)){var h=c+"."+f;r=this.processArrayValue(o,h,i.selectionSet,s)}else{var m=c+"."+f,v=!0;if(E(m)||(m="$"+m),l){var b=l(o);if(b&&E(b))throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');(b||"number"==typeof b&&0===b)&&(m=b,v=!1)}F(m,i,s.processedData)||this.writeSelectionSetToStore({dataId:m,result:o,selectionSet:i.selectionSet,context:s});var g=o.__typename;r=Object(y.k)({id:m,typename:g},v);var O=(a=d.get(c))&&a[f];if(O!==r&&Object(y.d)(O)){var j=void 0!==O.typename,w=void 0!==g,S=j&&w&&O.typename!==g;if(v&&!O.generated&&!S)throw new Error("Store error: the application attempted to write an object with no provided id but the store already contains an id of "+O.id+" for this object. The selectionSet that was trying to be written is:\n"+JSON.stringify(i));if(j&&!w)throw new Error("Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of "+O.typename+" for the object of id "+O.id+". The selectionSet that was trying to be written is:\n"+JSON.stringify(i));O.generated&&(S?v||d.delete(O.id):function e(t,r,a){if(t===r)return!1;var i=a.get(t);var o=a.get(r);var c=!1;Object.keys(i).forEach(function(t){var r=i[t],n=o[t];Object(y.d)(r)&&E(r.id)&&Object(y.d)(n)&&!Object(p.a)(r,n)&&e(r.id,n.id,a)&&(c=!0)});a.delete(t);var s=n.a({},i,o);if(Object(p.a)(s,o))return c;a.set(r,s);return!0}(O.id,r.id,d))}}else r=null!=o&&"object"==typeof o?{type:"json",json:o}:o;(a=d.get(c))&&Object(p.a)(r,a[f])||d.set(c,n.a({},a,((t={})[f]=r,t)))},e.prototype.processArrayValue=function(e,t,r,n){var a=this;return e.map(function(e,i){if(null===e)return null;var o=t+"."+i;if(Array.isArray(e))return a.processArrayValue(e,o,r,n);var c=!0;if(n.dataIdFromObject){var s=n.dataIdFromObject(e);s&&(o=s,c=!1)}return F(o,r,n.processedData)||a.writeSelectionSetToStore({dataId:o,result:e,selectionSet:r,context:n}),Object(y.k)({id:o,typename:e.__typename},c)})},e}();function E(e){return"$"===e[0]}function F(e,t,r){if(!r)return!1;if(r[e]){if(r[e].indexOf(t)>=0)return!0;r[e].push(t)}else r[e]=[t];return!1}r.d(t,"a",function(){return C});var M={fragmentMatcher:new l,dataIdFromObject:function(e){if(e.__typename){if(void 0!==e.id)return e.__typename+":"+e.id;if(void 0!==e._id)return e.__typename+":"+e._id}return null},addTypename:!0,resultCaching:!0};var T=Object.prototype.hasOwnProperty,k=function(e){function t(t,r,n){var a=e.call(this,Object.create(null))||this;return a.optimisticId=t,a.parent=r,a.transaction=n,a}return n.b(t,e),t.prototype.toObject=function(){return n.a({},this.parent.toObject(),this.data)},t.prototype.get=function(e){return T.call(this.data,e)?this.data[e]:this.parent.get(e)},t}(x),C=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;r.watches=new Set,r.typenameDocumentCache=new Map,r.cacheKeyRoot=new m,r.silenceBroadcast=!1,r.config=n.a({},M,t),r.config.customResolvers&&(console.warn("customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version."),r.config.cacheRedirects=r.config.customResolvers),r.config.cacheResolvers&&(console.warn("cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version."),r.config.cacheRedirects=r.config.cacheResolvers),r.addTypename=r.config.addTypename,r.data=r.config.resultCaching?new b:new x,r.optimisticData=r.data,r.storeReader=new O(r.cacheKeyRoot),r.storeWriter=new _;var a=r,i=a.maybeBroadcastWatch;return r.maybeBroadcastWatch=Object(o.wrap)(function(e){return i.call(r,e)},{makeCacheKey:function(e){if(!e.optimistic&&!e.previousResult)return a.data instanceof b?a.cacheKeyRoot.lookup(e.query,JSON.stringify(e.variables)):void 0}}),r}return n.b(t,e),t.prototype.restore=function(e){return e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).toObject()},t.prototype.read=function(e){return"string"==typeof e.rootId&&void 0===this.data.get(e.rootId)?null:this.storeReader.readQueryFromStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:this.config.fragmentMatcher.match,previousResult:e.previousResult,config:this.config})},t.prototype.write=function(e){this.storeWriter.writeResultToStore({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:this.config.fragmentMatcher.match}),this.broadcastWatches()},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:this.config.fragmentMatcher.match,config:this.config})},t.prototype.watch=function(e){var t=this;return this.watches.add(e),function(){t.watches.delete(e)}},t.prototype.evict=function(e){throw new Error("eviction is not implemented on InMemory Cache")},t.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){for(var t=[],r=0,n=this.optimisticData;n instanceof k;)n.optimisticId===e?++r:t.push(n),n=n.parent;if(r>0){for(this.optimisticData=n;t.length>0;){var a=t.pop();this.performTransaction(a.transaction,a.optimisticId)}this.broadcastWatches()}},t.prototype.performTransaction=function(e,t){var r=this.data,n=this.silenceBroadcast;this.silenceBroadcast=!0,"string"==typeof t&&(this.data=this.optimisticData=new k(t,this.optimisticData,e));try{e(this)}finally{this.silenceBroadcast=n,this.data=r}this.broadcastWatches()},t.prototype.recordOptimisticTransaction=function(e,t){return this.performTransaction(e,t)},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=Object(i.a)(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(){var e=this;this.silenceBroadcast||this.watches.forEach(function(t){return e.maybeBroadcastWatch(t)})},t.prototype.maybeBroadcastWatch=function(e){e.callback(this.diff({query:e.query,variables:e.variables,previousResult:e.previousResult&&e.previousResult(),optimistic:e.optimistic}))},t}(a.a)},UGiy:function(e,t){var r=new Map;if(r.set(1,2)!==r){var n=r.set;Map.prototype.set=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.apply(this,e),this}}var a=new Set;if(a.add(3)!==a){var i=a.add;Set.prototype.add=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.apply(this,e),this}}var o={};"function"==typeof Object.freeze&&Object.freeze(o);try{r.set(o,o).delete(o)}catch(e){var c=function(e){return e&&function(t){try{r.set(t,t).delete(t)}finally{return e.call(Object,t)}}};Object.freeze=c(Object.freeze),Object.seal=c(Object.seal),Object.preventExtensions=c(Object.preventExtensions)}}}]);
//# sourceMappingURL=bundle.npm.apollo-cache-inmemory.0865ee7bfe595e52bc41.js.map