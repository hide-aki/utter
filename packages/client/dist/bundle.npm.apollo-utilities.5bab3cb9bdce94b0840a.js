(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3pyI":function(n,e,t){"use strict";function r(n,e){if(n===e)return!0;if(n instanceof Date&&e instanceof Date)return n.getTime()===e.getTime();if(null!=n&&"object"==typeof n&&null!=e&&"object"==typeof e){for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t)){if(!Object.prototype.hasOwnProperty.call(e,t))return!1;if(!r(n[t],e[t]))return!1}for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&!Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}return!1}t.d(e,"a",function(){return r})},Jcf3:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=Object.prototype.toString;function i(n){return function n(e,t){switch(r.call(e)){case"[object Array]":if(t.has(e))return t.get(e);var i=e.slice(0);return t.set(e,i),i.forEach(function(e,r){i[r]=n(e,t)}),i;case"[object Object]":if(t.has(e))return t.get(e);var u=Object.create(Object.getPrototypeOf(e));return t.set(e,u),Object.keys(e).forEach(function(r){u[r]=n(e[r],t)}),u;default:return e}}(n,new Map)}},KH6z:function(n,e,t){"use strict";var r=t("UNrv"),i=t("z61M"),u=t("u/bu");function o(n,e,t){var r=0;return n.forEach(function(t,i){e.call(this,t,i,n)&&(n[r++]=t)},t),n.length=r,n}t.d(e,"e",function(){return l}),t.d(e,"a",function(){return d}),t.d(e,"d",function(){return v}),t.d(e,"b",function(){return g}),t.d(e,"c",function(){return h}),t.d(e,"f",function(){return b});var a={kind:"Field",name:{kind:"Name",value:"__typename"}};function c(n){return function n(e,t){return e.selectionSet.selections.every(function(e){return"FragmentSpread"===e.kind&&n(t[e.name.value],t)})}(Object(u.i)(n),Object(u.b)(Object(u.e)(n)))?null:n}function f(n){return function(e){return n.some(function(n){return n.name&&n.name===e.name.value||n.test&&n.test(e)})}}function l(n,e){var t=Object.create(null),r=[],u=Object.create(null),a=[],l=c(Object(i.a)(e,{Variable:{enter:function(n,e,r){"VariableDefinition"!==r.kind&&(t[n.name.value]=!0)}},Field:{enter:function(e){if(n.some(function(n){return n.remove})&&e.directives&&e.directives.some(f(n)))return e.arguments&&e.arguments.forEach(function(n){"Variable"===n.value.kind&&r.push({name:n.value.name.value})}),e.selectionSet&&function n(e){var t=[];e.selections.forEach(function(e){"Field"!==e.kind&&"InlineFragment"!==e.kind||!e.selectionSet?"FragmentSpread"===e.kind&&t.push(e):n(e.selectionSet).forEach(function(n){return t.push(n)})});return t}(e.selectionSet).forEach(function(n){a.push({name:n.name.value})}),null}},FragmentSpread:{enter:function(n){u[n.name.value]=!0}},Directive:{enter:function(e){if(f(n)(e))return null}}}));return l&&o(r,function(n){return!t[n.name]}).length&&(l=h(r,l)),l&&o(a,function(n){return!u[n.name]}).length&&(l=b(a,l)),l}function d(n){return Object(i.a)(Object(u.a)(n),{SelectionSet:{enter:function(n,e,t){if(!t||"OperationDefinition"!==t.kind){var i=n.selections;if(i)if(!i.some(function(n){return"Field"===n.kind&&("__typename"===n.name.value||0===n.name.value.lastIndexOf("__",0))}))return r.a({},n,{selections:i.concat([a])})}}}})}var s={test:function(n){var e="connection"===n.name.value;return e&&(n.arguments&&n.arguments.some(function(n){return"key"===n.name.value})||console.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")),e}};function v(n){return l([s],Object(u.a)(n))}function m(n,e,t){return void 0===t&&(t=!0),e&&e.selections&&e.selections.some(function(e){return p(n,e,t)})}function p(n,e,t){return void 0===t&&(t=!0),"Field"!==e.kind||!e||!!e.directives&&(e.directives.some(f(n))||t&&m(n,e.selectionSet,t))}function g(n,e){var t;return Object(u.a)(e),c(Object(i.a)(e,{SelectionSet:{enter:function(e,i,u,o){var a=o.join("-");if(!t||a===t||!a.startsWith(t)){if(e.selections){var c=e.selections.filter(function(e){return p(n,e)});return m(n,e,!1)&&(t=a),r.a({},e,{selections:c})}return null}}}}))}function h(n,e){var t=function(n){return function(e){return n.some(function(n){return e.value&&"Variable"===e.value.kind&&e.value.name&&(n.name===e.value.name.value||n.test&&n.test(e))})}}(n);return c(Object(i.a)(e,{OperationDefinition:{enter:function(e){return r.a({},e,{variableDefinitions:e.variableDefinitions.filter(function(e){return!n.some(function(n){return n.name===e.variable.name.value})})})}},Field:{enter:function(e){if(n.some(function(n){return n.remove})){var r=0;if(e.arguments.forEach(function(n){t(n)&&(r+=1)}),1===r)return null}}},Argument:{enter:function(n){if(t(n))return null}}}))}function b(n,e){function t(e){if(n.some(function(n){return n.name===e.name.value}))return null}return c(Object(i.a)(e,{FragmentSpread:{enter:t},FragmentDefinition:{enter:t}}))}},Y2VA:function(n,e,t){"use strict";function r(n){try{return n()}catch(n){console.error&&console.error(n)}}function i(n){return n.errors&&n.errors.length}t.d(e,"b",function(){return r}),t.d(e,"a",function(){return i})},"aNY/":function(n,e,t){"use strict";t.r(e);var r=t("cQN5"),i=t("zayl"),u=t("u/bu"),o=t("KH6z"),a=t("zLY4"),c=t("ru8h"),f=t("Jcf3"),l=t("tsAT"),d=t("Y2VA"),s=t("3pyI");function v(n){if((Object(l.b)()||Object(l.e)())&&!("function"==typeof Symbol&&"string"==typeof Symbol("")))return function n(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){null===e[t]||"object"!=typeof e[t]&&"function"!=typeof e[t]||Object.isFrozen(e[t])||n(e[t])}),e}(n);return n}var m=t("eFub");function p(n){return JSON.parse(JSON.stringify(n))}t.d(e,"getDirectiveInfoFromField",function(){return r.a}),t.d(e,"shouldInclude",function(){return r.d}),t.d(e,"getDirectiveNames",function(){return r.b}),t.d(e,"hasDirectives",function(){return r.c}),t.d(e,"getFragmentQueryDocument",function(){return i.a}),t.d(e,"getMutationDefinition",function(){return u.g}),t.d(e,"checkDocument",function(){return u.a}),t.d(e,"getOperationDefinition",function(){return u.h}),t.d(e,"getOperationDefinitionOrDie",function(){return u.i}),t.d(e,"getOperationName",function(){return u.j}),t.d(e,"getFragmentDefinitions",function(){return u.e}),t.d(e,"getQueryDefinition",function(){return u.k}),t.d(e,"getFragmentDefinition",function(){return u.d}),t.d(e,"getMainDefinition",function(){return u.f}),t.d(e,"createFragmentMap",function(){return u.b}),t.d(e,"getDefaultValues",function(){return u.c}),t.d(e,"variablesInOperation",function(){return u.l}),t.d(e,"removeDirectivesFromDocument",function(){return o.e}),t.d(e,"addTypenameToDocument",function(){return o.a}),t.d(e,"removeConnectionDirectiveFromDocument",function(){return o.d}),t.d(e,"getDirectivesFromDocument",function(){return o.b}),t.d(e,"removeArgumentsFromDocument",function(){return o.c}),t.d(e,"removeFragmentSpreadFromDocument",function(){return o.f}),t.d(e,"isScalarValue",function(){return a.h}),t.d(e,"isNumberValue",function(){return a.g}),t.d(e,"valueToObjectRepresentation",function(){return a.m}),t.d(e,"storeKeyNameFromField",function(){return a.j}),t.d(e,"getStoreKeyName",function(){return a.b}),t.d(e,"argumentsObjectFromField",function(){return a.a}),t.d(e,"resultKeyNameFromField",function(){return a.i}),t.d(e,"isField",function(){return a.c}),t.d(e,"isInlineFragment",function(){return a.e}),t.d(e,"isIdValue",function(){return a.d}),t.d(e,"toIdValue",function(){return a.k}),t.d(e,"isJsonValue",function(){return a.f}),t.d(e,"valueFromNode",function(){return a.l}),t.d(e,"assign",function(){return c.a}),t.d(e,"cloneDeep",function(){return f.a}),t.d(e,"getEnv",function(){return l.a}),t.d(e,"isEnv",function(){return l.c}),t.d(e,"isProduction",function(){return l.d}),t.d(e,"isDevelopment",function(){return l.b}),t.d(e,"isTest",function(){return l.e}),t.d(e,"tryFunctionOrLogError",function(){return d.b}),t.d(e,"graphQLResultHasError",function(){return d.a}),t.d(e,"isEqual",function(){return s.a}),t.d(e,"maybeDeepFreeze",function(){return v}),t.d(e,"warnOnceInDevelopment",function(){return m.a}),t.d(e,"stripSymbols",function(){return p})},cQN5:function(n,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"d",function(){return o}),t.d(e,"b",function(){return a}),t.d(e,"c",function(){return c});var r=t("z61M"),i=t("zLY4");function u(n,e){if(n.directives&&n.directives.length){var t={};return n.directives.forEach(function(n){t[n.name.value]=Object(i.a)(n,e)}),t}return null}function o(n,e){if(void 0===e&&(e={}),!n.directives)return!0;var t=!0;return n.directives.forEach(function(n){if("skip"===n.name.value||"include"===n.name.value){var r=n.arguments||[],i=n.name.value;if(1!==r.length)throw new Error("Incorrect number of arguments for the @"+i+" directive.");var u=r[0];if(!u.name||"if"!==u.name.value)throw new Error("Invalid argument for the @"+i+" directive.");var o=r[0].value,a=!1;if(o&&"BooleanValue"===o.kind)a=o.value;else{if("Variable"!==o.kind)throw new Error("Argument for the @"+i+" directive must be a variable or a boolean value.");if(void 0===(a=e[o.name.value]))throw new Error("Invalid variable referenced in @"+i+" directive.")}"skip"===i&&(a=!a),a||(t=!1)}}),t}function a(n){var e=[];return Object(r.a)(n,{Directive:function(n){e.push(n.name.value)}}),e}function c(n,e){return a(e).some(function(e){return n.indexOf(e)>-1})}},eFub:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("tsAT"),i=Object.create({});function u(n,e){if(void 0===e&&(e="warn"),!Object(r.d)()&&!i[n])switch(Object(r.e)()||(i[n]=!0),e){case"error":console.error(n);break;default:console.warn(n)}}},ru8h:function(n,e,t){"use strict";function r(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.forEach(function(e){null!=e&&Object.keys(e).forEach(function(t){n[t]=e[t]})}),n}t.d(e,"a",function(){return r})},tsAT:function(n,e,t){"use strict";(function(n){function r(){return void 0!==n?"production":"development"}function i(n){return r()===n}function u(){return!0===i("production")}function o(){return!0===i("development")}function a(){return!0===i("test")}t.d(e,"a",function(){return r}),t.d(e,"c",function(){return i}),t.d(e,"d",function(){return u}),t.d(e,"b",function(){return o}),t.d(e,"e",function(){return a})}).call(this,t("5XGf"))},"u/bu":function(n,e,t){"use strict";t.d(e,"g",function(){return u}),t.d(e,"a",function(){return o}),t.d(e,"h",function(){return a}),t.d(e,"i",function(){return c}),t.d(e,"j",function(){return f}),t.d(e,"e",function(){return l}),t.d(e,"k",function(){return d}),t.d(e,"d",function(){return s}),t.d(e,"f",function(){return v}),t.d(e,"b",function(){return m}),t.d(e,"c",function(){return p}),t.d(e,"l",function(){return g});var r=t("ru8h"),i=t("zLY4");function u(n){o(n);var e=n.definitions.filter(function(n){return"OperationDefinition"===n.kind&&"mutation"===n.operation})[0];if(!e)throw new Error("Must contain a mutation definition.");return e}function o(n){if("Document"!==n.kind)throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');var e=n.definitions.filter(function(n){return"FragmentDefinition"!==n.kind}).map(function(n){if("OperationDefinition"!==n.kind)throw new Error('Schema type definitions not allowed in queries. Found: "'+n.kind+'"');return n});if(e.length>1)throw new Error("Ambiguous GraphQL document: contains "+e.length+" operations");return n}function a(n){return o(n),n.definitions.filter(function(n){return"OperationDefinition"===n.kind})[0]}function c(n){var e=a(n);if(!e)throw new Error("GraphQL document is missing an operation");return e}function f(n){return n.definitions.filter(function(n){return"OperationDefinition"===n.kind&&n.name}).map(function(n){return n.name.value})[0]||null}function l(n){return n.definitions.filter(function(n){return"FragmentDefinition"===n.kind})}function d(n){var e=a(n);if(!e||"query"!==e.operation)throw new Error("Must contain a query definition.");return e}function s(n){if("Document"!==n.kind)throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');if(n.definitions.length>1)throw new Error("Fragment must have exactly one definition.");var e=n.definitions[0];if("FragmentDefinition"!==e.kind)throw new Error("Must be a fragment definition.");return e}function v(n){var e;o(n);for(var t=0,r=n.definitions;t<r.length;t++){var i=r[t];if("OperationDefinition"===i.kind){var u=i.operation;if("query"===u||"mutation"===u||"subscription"===u)return i}"FragmentDefinition"!==i.kind||e||(e=i)}if(e)return e;throw new Error("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.")}function m(n){void 0===n&&(n=[]);var e={};return n.forEach(function(n){e[n.name.value]=n}),e}function p(n){if(n&&n.variableDefinitions&&n.variableDefinitions.length){var e=n.variableDefinitions.filter(function(n){return n.defaultValue}).map(function(n){var e=n.variable,t=n.defaultValue,r={};return Object(i.m)(r,e.name,t),r});return r.a.apply(void 0,[{}].concat(e))}return{}}function g(n){var e=new Set;if(n.variableDefinitions)for(var t=0,r=n.variableDefinitions;t<r.length;t++){var i=r[t];e.add(i.variable.name.value)}return e}},zLY4:function(n,e,t){"use strict";t.d(e,"h",function(){return o}),t.d(e,"g",function(){return a}),t.d(e,"m",function(){return c}),t.d(e,"j",function(){return f}),t.d(e,"b",function(){return d}),t.d(e,"a",function(){return s}),t.d(e,"i",function(){return v}),t.d(e,"c",function(){return m}),t.d(e,"e",function(){return p}),t.d(e,"d",function(){return g}),t.d(e,"k",function(){return h}),t.d(e,"f",function(){return b}),t.d(e,"l",function(){return k});var r=t("UNrv"),i=t("3HLU"),u=t.n(i);function o(n){return["StringValue","BooleanValue","EnumValue"].indexOf(n.kind)>-1}function a(n){return["IntValue","FloatValue"].indexOf(n.kind)>-1}function c(n,e,t,r){if(function(n){return"IntValue"===n.kind}(t)||function(n){return"FloatValue"===n.kind}(t))n[e.value]=Number(t.value);else if(function(n){return"BooleanValue"===n.kind}(t)||function(n){return"StringValue"===n.kind}(t))n[e.value]=t.value;else if(function(n){return"ObjectValue"===n.kind}(t)){var i={};t.fields.map(function(n){return c(i,n.name,n.value,r)}),n[e.value]=i}else if(function(n){return"Variable"===n.kind}(t)){var u=(r||{})[t.name.value];n[e.value]=u}else if(function(n){return"ListValue"===n.kind}(t))n[e.value]=t.values.map(function(n){var t={};return c(t,e,n,r),t[e.value]});else if(function(n){return"EnumValue"===n.kind}(t))n[e.value]=t.value;else{if(!function(n){return"NullValue"===n.kind}(t))throw new Error('The inline argument "'+e.value+'" of kind "'+t.kind+'"is not supported. Use variables instead of inline arguments to overcome this limitation.');n[e.value]=null}}function f(n,e){var t=null;n.directives&&(t={},n.directives.forEach(function(n){t[n.name.value]={},n.arguments&&n.arguments.forEach(function(r){var i=r.name,u=r.value;return c(t[n.name.value],i,u,e)})}));var r=null;return n.arguments&&n.arguments.length&&(r={},n.arguments.forEach(function(n){var t=n.name,i=n.value;return c(r,t,i,e)})),d(n.name.value,r,t)}var l=["connection","include","skip","client","rest","export"];function d(n,e,t){if(t&&t.connection&&t.connection.key){if(t.connection.filter&&t.connection.filter.length>0){var r=t.connection.filter?t.connection.filter:[];r.sort();var i=e,o={};return r.forEach(function(n){o[n]=i[n]}),t.connection.key+"("+JSON.stringify(o)+")"}return t.connection.key}var a=n;if(e){var c=u()(e);a+="("+c+")"}return t&&Object.keys(t).forEach(function(n){-1===l.indexOf(n)&&(t[n]&&Object.keys(t[n]).length?a+="@"+n+"("+JSON.stringify(t[n])+")":a+="@"+n)}),a}function s(n,e){if(n.arguments&&n.arguments.length){var t={};return n.arguments.forEach(function(n){var r=n.name,i=n.value;return c(t,r,i,e)}),t}return null}function v(n){return n.alias?n.alias.value:n.name.value}function m(n){return"Field"===n.kind}function p(n){return"InlineFragment"===n.kind}function g(n){return n&&"id"===n.type&&"boolean"==typeof n.generated}function h(n,e){return void 0===e&&(e=!1),r.a({type:"id",generated:e},"string"==typeof n?{id:n,typename:void 0}:n)}function b(n){return null!=n&&"object"==typeof n&&"json"===n.type}function y(n){throw new Error("Variable nodes are not supported by valueFromNode")}function k(n,e){switch(void 0===e&&(e=y),n.kind){case"Variable":return e(n);case"NullValue":return null;case"IntValue":return parseInt(n.value,10);case"FloatValue":return parseFloat(n.value);case"ListValue":return n.values.map(function(n){return k(n,e)});case"ObjectValue":for(var t={},r=0,i=n.fields;r<i.length;r++){var u=i[r];t[u.name.value]=k(u.value,e)}return t;default:return n.value}}},zayl:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t("UNrv");function i(n,e){var t=e,i=[];if(n.definitions.forEach(function(n){if("OperationDefinition"===n.kind)throw new Error("Found a "+n.operation+" operation"+(n.name?" named '"+n.name.value+"'":"")+". No operations are allowed when using a fragment as a query. Only fragments are allowed.");"FragmentDefinition"===n.kind&&i.push(n)}),void 0===t){if(1!==i.length)throw new Error("Found "+i.length+" fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");t=i[0].name.value}return r.a({},n,{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:t}}]}}].concat(n.definitions)})}}}]);
//# sourceMappingURL=bundle.npm.apollo-utilities.5bab3cb9bdce94b0840a.js.map