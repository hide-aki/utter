(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"/qgR":function(e,t,r){e.exports=r("tV8U")()},h815:function(e,t,r){"use strict";r.d(t,"a",function(){return Y}),r.d(t,"b",function(){return R});var n=r("Zvp9"),o=r.n(n),a=r("m/ml"),i=r.n(a),s=r("/qgR"),c=r.n(s),u=r("r0ML"),p=r.n(u),l=r("CwCo"),f=r.n(l),d={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},h=Object.keys(d).map(function(e){return d[e]}),y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},m=Object.keys(y).reduce(function(e,t){return e[y[t]]=t,e},{}),T=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},b=function(e){var t=T(e,d.TITLE),r=T(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,function(){return t});var n=T(e,"defaultTitle");return t||n||void 0},g=function(e){return T(e,"onChangeClientState")||function(){}},v=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return Object.assign({},e,t)},{})},O=function(e,t){return t.filter(function(e){return void 0!==e[d.BASE]}).map(function(e){return e[d.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o+=1){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t},[])},C=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var o={};r.filter(function(e){for(var r,a=Object.keys(e),i=0;i<a.length;i+=1){var s=a[i],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i+=1){var s=a[i],c=Object.assign({},n[s],o[s]);n[s]=c}return e},[]).reverse()},A=function(e){return Array.isArray(e)?e.join(""):e},j=[d.NOSCRIPT,d.SCRIPT,d.STYLE],E=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},S=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},P=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce(function(t,r){return t[y[r]||r]=e[r],t},t)},I=function(e,t,r){switch(e){case d.TITLE:return{toComponent:function(){return r=P(t.titleAttributes,{key:e=t.title,"data-rh":!0}),[p.a.createElement(d.TITLE,r,e)];var e,r},toString:function(){return function(e,r,n,o){var a=S(t.titleAttributes),i=A(r);return a?"<"+e+' data-rh="true" '+a+">"+E(i,o)+"</"+e+">":"<"+e+' data-rh="true">'+E(i,o)+"</"+e+">"}(e,t.title,0,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return P(t)},toString:function(){return S(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n={key:r,"data-rh":!0};return Object.keys(t).forEach(function(e){var r=y[e]||e;"innerHTML"===r||"cssText"===r?n.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:n[r]=t[e]}),p.a.createElement(e,n)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).reduce(function(e,t){var o=void 0===n[t]?t:t+'="'+E(n[t],r)+'"';return e?e+" "+o:o},""),a=n.innerHTML||n.cssText||"",i=-1===j.indexOf(e);return t+"<"+e+' data-rh="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")}(e,t,r)}}}},L=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,o=e.linkTags,a=e.metaTags,i=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title;void 0===u&&(u="");var p=e.titleAttributes;return{base:I(d.BASE,e.baseTag,r),bodyAttributes:I("bodyAttributes",t,r),htmlAttributes:I("htmlAttributes",n,r),link:I(d.LINK,o,r),meta:I(d.META,a,r),noscript:I(d.NOSCRIPT,i,r),script:I(d.SCRIPT,s,r),style:I(d.STYLE,c,r),title:I(d.TITLE,{title:u,titleAttributes:p},r)}},x=p.a.createContext({}),w=c.a.shape({setHelmet:c.a.func,helmetInstances:c.a.shape({get:c.a.func,add:c.a.func,remove:c.a.func})}),k="undefined"!=typeof document,R=function(e){function t(r){var n=this;e.call(this,r),this.instances=[],this.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},t.canUseDOM||(r.context.helmet=L({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.render=function(){return p.a.createElement(x.Provider,{value:this.value},this.props.children)},t}(u.Component);R.canUseDOM=k,R.propTypes={context:c.a.shape({helmet:c.a.shape()}),children:c.a.node.isRequired},R.defaultProps={context:{}},R.displayName="HelmetProvider";var H=function(e,t){var r,n=document.head||document.querySelector(d.HEAD),o=n.querySelectorAll(e+"[data-rh]"),a=[].slice.call(o),i=[];return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&("innerHTML"===o?n.innerHTML=t.innerHTML:"cssText"===o?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(o,void 0===t[o]?"":t[o]));n.setAttribute("data-rh","true"),a.some(function(e,t){return r=t,n.isEqualNode(e)})?a.splice(r,1):i.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:i}},M=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s+=1){var c=i[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var p=a.indexOf(c);-1!==p&&a.splice(p,1)}for(var l=a.length-1;l>=0;l-=1)r.removeAttribute(a[l]);o.length===a.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==i.join(",")&&r.setAttribute("data-rh",i.join(","))}},N=function(e,t){var r=e.baseTag,n=e.htmlAttributes,o=e.linkTags,a=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,p=e.title,l=e.titleAttributes;M(d.BODY,e.bodyAttributes),M(d.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=A(e)),M(d.TITLE,t)}(p,l);var f={baseTag:H(d.BASE,r),linkTags:H(d.LINK,o),metaTags:H(d.META,a),noscriptTags:H(d.NOSCRIPT,i),scriptTags:H(d.SCRIPT,c),styleTags:H(d.STYLE,u)},h={},y={};Object.keys(f).forEach(function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=f[e].oldTags)}),t&&t(),s(e,h,y)},_=null,q=function(e){function t(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];e.apply(this,t),this.rendered=!1}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!f()(e,this.props)},t.prototype.componentDidUpdate=function(){this.emitChange()},t.prototype.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},t.prototype.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,o=null,a=(e=r.helmetInstances.get().map(function(e){var t=Object.assign({},e.props);return delete t.context,t}),{baseTag:O(["href"],e),bodyAttributes:v("bodyAttributes",e),defer:T(e,"defer"),encode:T(e,"encodeSpecialCharacters"),htmlAttributes:v("htmlAttributes",e),linkTags:C(d.LINK,["rel","href"],e),metaTags:C(d.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:C(d.NOSCRIPT,["innerHTML"],e),onChangeClientState:g(e),scriptTags:C(d.SCRIPT,["src","innerHTML"],e),styleTags:C(d.STYLE,["cssText"],e),title:b(e),titleAttributes:v("titleAttributes",e)});R.canUseDOM?(t=a,_&&cancelAnimationFrame(_),t.defer?_=requestAnimationFrame(function(){N(t,function(){_=null})}):(N(t),_=null)):L&&(o=L(a)),n(o)},t.prototype.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},t.prototype.render=function(){return this.init(),null},t}(u.Component);function D(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}q.propTypes={context:w.isRequired},q.displayName="HelmetDispatcher";var Y=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!o()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case d.SCRIPT:case d.NOSCRIPT:return{innerHTML:t};case d.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return Object.assign({},n,((t={})[r.type]=(n[r.type]||[]).concat([Object.assign({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case d.TITLE:return Object.assign({},o,((t={})[n.type]=i,t),{titleAttributes:Object.assign({},a)});case d.BODY:return Object.assign({},o,{bodyAttributes:Object.assign({},a)});case d.HTML:return Object.assign({},o,{htmlAttributes:Object.assign({},a)});default:return Object.assign({},o,((r={})[n.type]=Object.assign({},a),r))}},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Object.assign({},t);return Object.keys(e).forEach(function(t){var n;r=Object.assign({},r,((n={})[t]=e[t],n))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return i()(h.some(function(t){return e.type===t}),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+h.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),i()(!t||"string"==typeof t||Array.isArray(t)&&!t.some(function(e){return"string"!=typeof e}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.a.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,a=o.children,i=D(o,["children"]),s=Object.keys(i).reduce(function(e,t){return e[m[t]||t]=i[t],e},{}),c=e.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(e,a),c){case d.FRAGMENT:t=r.mapChildrenToProps(a,t);break;case d.LINK:case d.META:case d.NOSCRIPT:case d.SCRIPT:case d.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}}),this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=D(e,["children"]),n=Object.assign({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.a.createElement(x.Consumer,null,function(e){return p.a.createElement(q,Object.assign({},n,{context:e}))})},t}(u.Component);Y.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},Y.defaultProps={defer:!0,encodeSpecialCharacters:!0},Y.displayName="Helmet"},ilAQ:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},tV8U:function(e,t,r){"use strict";var n=r("ilAQ");function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}}}]);
//# sourceMappingURL=bundle.npm.react-helmet-async.6526e959d54102cf12cd.js.map