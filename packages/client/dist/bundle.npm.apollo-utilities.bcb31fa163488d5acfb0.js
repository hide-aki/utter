(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"3pyI":function(n,e,t){"use strict";function r(n,e){if(n===e)return!0;if(n instanceof Date&&e instanceof Date)return n.getTime()===e.getTime();if(null!=n&&"object"==typeof n&&null!=e&&"object"==typeof e){for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t)){if(!Object.prototype.hasOwnProperty.call(e,t))return!1;if(!r(n[t],e[t]))return!1}for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&!Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}return!1}t.d(e,"a",function(){return r})},KH6z:function(n,e,t){"use strict";var r=t("UNrv"),i=t("z61M"),u=t("u/bu");t.d(e,"a",function(){return a});var o={kind:"Field",name:{kind:"Name",value:"__typename"}};function a(n){return Object(i.b)(Object(u.a)(n),{SelectionSet:{enter:function(n,e,t){if(!t||"OperationDefinition"!==t.kind){var i=n.selections;if(i)if(!i.some(function(n){return"Field"===n.kind&&("__typename"===n.name.value||0===n.name.value.lastIndexOf("__",0))}))return r.a({},n,{selections:i.concat([o])})}}}})}},cQN5:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return u});t("z61M");var r=t("zLY4");function i(n,e){if(n.directives&&n.directives.length){var t={};return n.directives.forEach(function(n){t[n.name.value]=Object(r.a)(n,e)}),t}return null}function u(n,e){if(void 0===e&&(e={}),!n.directives)return!0;var t=!0;return n.directives.forEach(function(n){if("skip"===n.name.value||"include"===n.name.value){var r=n.arguments||[],i=n.name.value;if(1!==r.length)throw new Error("Incorrect number of arguments for the @"+i+" directive.");var u=r[0];if(!u.name||"if"!==u.name.value)throw new Error("Invalid argument for the @"+i+" directive.");var o=r[0].value,a=!1;if(o&&"BooleanValue"===o.kind)a=o.value;else{if("Variable"!==o.kind)throw new Error("Argument for the @"+i+" directive must be a variable or a boolean value.");if(void 0===(a=e[o.name.value]))throw new Error("Invalid variable referenced in @"+i+" directive.")}"skip"===i&&(a=!a),a||(t=!1)}}),t}},eFub:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("tsAT"),i=Object.create({});function u(n,e){if(void 0===e&&(e="warn"),!Object(r.a)()&&!i[n])switch(Object(r.b)()||(i[n]=!0),e){case"error":console.error(n);break;default:console.warn(n)}}},ru8h:function(n,e,t){"use strict";function r(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.forEach(function(e){null!=e&&Object.keys(e).forEach(function(t){n[t]=e[t]})}),n}t.d(e,"a",function(){return r})},tsAT:function(n,e,t){"use strict";(function(n){function r(e){return(void 0!==n?"production":"development")===e}function i(){return!0===r("production")}function u(){return!0===r("test")}t.d(e,"a",function(){return i}),t.d(e,"b",function(){return u})}).call(this,t("5XGf"))},"u/bu":function(n,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"f",function(){return o}),t.d(e,"g",function(){return a}),t.d(e,"h",function(){return c}),t.d(e,"d",function(){return f}),t.d(e,"i",function(){return l}),t.d(e,"e",function(){return d}),t.d(e,"b",function(){return s}),t.d(e,"c",function(){return v});var r=t("ru8h"),i=t("zLY4");function u(n){if("Document"!==n.kind)throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');var e=n.definitions.filter(function(n){return"FragmentDefinition"!==n.kind}).map(function(n){if("OperationDefinition"!==n.kind)throw new Error('Schema type definitions not allowed in queries. Found: "'+n.kind+'"');return n});if(e.length>1)throw new Error("Ambiguous GraphQL document: contains "+e.length+" operations");return n}function o(n){return u(n),n.definitions.filter(function(n){return"OperationDefinition"===n.kind})[0]}function a(n){var e=o(n);if(!e)throw new Error("GraphQL document is missing an operation");return e}function c(n){return n.definitions.filter(function(n){return"OperationDefinition"===n.kind&&n.name}).map(function(n){return n.name.value})[0]||null}function f(n){return n.definitions.filter(function(n){return"FragmentDefinition"===n.kind})}function l(n){var e=o(n);if(!e||"query"!==e.operation)throw new Error("Must contain a query definition.");return e}function d(n){var e;u(n);for(var t=0,r=n.definitions;t<r.length;t++){var i=r[t];if("OperationDefinition"===i.kind){var o=i.operation;if("query"===o||"mutation"===o||"subscription"===o)return i}"FragmentDefinition"!==i.kind||e||(e=i)}if(e)return e;throw new Error("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.")}function s(n){void 0===n&&(n=[]);var e={};return n.forEach(function(n){e[n.name.value]=n}),e}function v(n){if(n&&n.variableDefinitions&&n.variableDefinitions.length){var e=n.variableDefinitions.filter(function(n){return n.defaultValue}).map(function(n){var e=n.variable,t=n.defaultValue,r={};return Object(i.j)(r,e.name,t),r});return r.a.apply(void 0,[{}].concat(e))}return{}}},zLY4:function(n,e,t){"use strict";t.d(e,"j",function(){return o}),t.d(e,"h",function(){return a}),t.d(e,"b",function(){return f}),t.d(e,"a",function(){return l}),t.d(e,"g",function(){return d}),t.d(e,"c",function(){return s}),t.d(e,"e",function(){return v}),t.d(e,"d",function(){return m}),t.d(e,"i",function(){return p}),t.d(e,"f",function(){return h});var r=t("UNrv"),i=t("3HLU"),u=t.n(i);function o(n,e,t,r){if(function(n){return"IntValue"===n.kind}(t)||function(n){return"FloatValue"===n.kind}(t))n[e.value]=Number(t.value);else if(function(n){return"BooleanValue"===n.kind}(t)||function(n){return"StringValue"===n.kind}(t))n[e.value]=t.value;else if(function(n){return"ObjectValue"===n.kind}(t)){var i={};t.fields.map(function(n){return o(i,n.name,n.value,r)}),n[e.value]=i}else if(function(n){return"Variable"===n.kind}(t)){var u=(r||{})[t.name.value];n[e.value]=u}else if(function(n){return"ListValue"===n.kind}(t))n[e.value]=t.values.map(function(n){var t={};return o(t,e,n,r),t[e.value]});else if(function(n){return"EnumValue"===n.kind}(t))n[e.value]=t.value;else{if(!function(n){return"NullValue"===n.kind}(t))throw new Error('The inline argument "'+e.value+'" of kind "'+t.kind+'"is not supported. Use variables instead of inline arguments to overcome this limitation.');n[e.value]=null}}function a(n,e){var t=null;n.directives&&(t={},n.directives.forEach(function(n){t[n.name.value]={},n.arguments&&n.arguments.forEach(function(r){var i=r.name,u=r.value;return o(t[n.name.value],i,u,e)})}));var r=null;return n.arguments&&n.arguments.length&&(r={},n.arguments.forEach(function(n){var t=n.name,i=n.value;return o(r,t,i,e)})),f(n.name.value,r,t)}var c=["connection","include","skip","client","rest","export"];function f(n,e,t){if(t&&t.connection&&t.connection.key){if(t.connection.filter&&t.connection.filter.length>0){var r=t.connection.filter?t.connection.filter:[];r.sort();var i=e,o={};return r.forEach(function(n){o[n]=i[n]}),t.connection.key+"("+JSON.stringify(o)+")"}return t.connection.key}var a=n;if(e){var f=u()(e);a+="("+f+")"}return t&&Object.keys(t).forEach(function(n){-1===c.indexOf(n)&&(t[n]&&Object.keys(t[n]).length?a+="@"+n+"("+JSON.stringify(t[n])+")":a+="@"+n)}),a}function l(n,e){if(n.arguments&&n.arguments.length){var t={};return n.arguments.forEach(function(n){var r=n.name,i=n.value;return o(t,r,i,e)}),t}return null}function d(n){return n.alias?n.alias.value:n.name.value}function s(n){return"Field"===n.kind}function v(n){return"InlineFragment"===n.kind}function m(n){return n&&"id"===n.type&&"boolean"==typeof n.generated}function p(n,e){return void 0===e&&(e=!1),r.a({type:"id",generated:e},"string"==typeof n?{id:n,typename:void 0}:n)}function h(n){return null!=n&&"object"==typeof n&&"json"===n.type}},zayl:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t("UNrv");function i(n,e){var t=e,i=[];if(n.definitions.forEach(function(n){if("OperationDefinition"===n.kind)throw new Error("Found a "+n.operation+" operation"+(n.name?" named '"+n.name.value+"'":"")+". No operations are allowed when using a fragment as a query. Only fragments are allowed.");"FragmentDefinition"===n.kind&&i.push(n)}),void 0===t){if(1!==i.length)throw new Error("Found "+i.length+" fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");t=i[0].name.value}return r.a({},n,{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:t}}]}}].concat(n.definitions)})}}}]);
//# sourceMappingURL=bundle.npm.apollo-utilities.bcb31fa163488d5acfb0.js.map