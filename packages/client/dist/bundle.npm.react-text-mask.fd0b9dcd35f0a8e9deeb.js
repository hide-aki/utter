(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"0wbG":function(e,t,r){var n;e.exports=(n=r("r0ML"),function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var u=r(11),s=n(u),l=r(9),f=n(l),c=r(5),p=n(c),d=r(2),h=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return i.setRef=i.setRef.bind(i),i.onBlur=i.onBlur.bind(i),i.onChange=i.onChange.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,p.default)(o({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,i=t.guide,a=t.placeholderChar,u=t.showMask,s={guide:i,placeholderChar:a,showMask:u},l="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0,d.isNil)(n)&&!(0,d.isNil)(e.pipe)||!(0,d.isNil)(n)&&(0,d.isNil)(e.pipe),f=o.toString()!==e.mask.toString(),c=Object.keys(s).some(function(t){return s[t]!==e[t]})||f||l,p=r!==this.inputElement.value;(p||c)&&this.initTextMask()}},{key:"render",value:function(){var e=this.props,t=e.render,r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,t(this.setRef,o({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(s.default.PureComponent);t.default=h,h.propTypes={mask:f.default.oneOfType([f.default.array,f.default.func,f.default.bool,f.default.shape({mask:f.default.oneOfType([f.default.array,f.default.func]),pipe:f.default.func})]).isRequired,guide:f.default.bool,value:f.default.oneOfType([f.default.string,f.default.number]),pipe:f.default.func,placeholderChar:f.default.string,keepCharPositions:f.default.bool,showMask:f.default.bool},h.defaultProps={render:function(e,t){return s.default.createElement("input",o({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";function n(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.placeholderChar;if(!n(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map(function(e){return e instanceof RegExp?t:e}).join("")},t.isArray=n,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return null==e},t.processCaretTraps=function(e){for(var t=[],r=void 0;-1!==(r=e.indexOf(a));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}};var o=r(1),i=[],a="[]"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,o.isArray)(t)){if((void 0===t?"undefined":n(t))!==i.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,o.processCaretTraps)(t).maskWithoutCaretTraps}var s=r.guide,l=void 0===s||s,f=r.previousConformedValue,c=void 0===f?u:f,p=r.placeholderChar,d=void 0===p?i.placeholderChar:p,h=r.placeholder,v=void 0===h?(0,o.convertMaskToPlaceholder)(t,d):h,y=r.currentCaretPosition,m=r.keepCharPositions,g=!1===l&&void 0!==c,b=e.length,k=c.length,C=v.length,O=t.length,P=b-k,T=P>0,w=y+(T?-P:0),x=w+Math.abs(P);if(!0===m&&!T){for(var _=u,M=w;M<x;M++)v[M]===d&&(_+=d);e=e.slice(0,w)+_+e.slice(w,b)}for(var S=e.split(u).map(function(e,t){return{char:e,isNew:t>=w&&t<x}}),j=b-1;j>=0;j--){var E=S[j].char;if(E!==d){var R=j>=w&&k===O;E===v[R?j-P:j]&&S.splice(j,1)}}var V=u,N=!1;e:for(var A=0;A<C;A++){var B=v[A];if(B===d){if(S.length>0)for(;S.length>0;){var I=S.shift(),F=I.char,J=I.isNew;if(F===d&&!0!==g){V+=d;continue e}if(t[A].test(F)){if(!0===m&&!1!==J&&c!==u&&!1!==l&&T){for(var L=S.length,q=null,D=0;D<L;D++){var W=S[D];if(W.char!==d&&!1===W.isNew)break;if(W.char===d){q=D;break}}null!==q?(V+=F,S.splice(q,1)):A--}else V+=F;continue e}N=!0}!1===g&&(V+=v.substr(A,C));break}V+=B}if(g&&!1===T){for(var U=null,G=0;G<V.length;G++)v[G]===d&&(U=G);V=null!==U?V.substr(0,U+1):u}return{conformedValue:V,meta:{someCharsRejected:N}}};var o=r(2),i=r(1),a=[],u=""},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,o=void 0===t?n:t,i=e.previousPlaceholder,a=void 0===i?n:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?r:d,v=e.caretTrapIndexes,y=void 0===v?r:v;if(0===s||!f.length)return 0;var m=f.length,g=o.length,b=p.length,k=l.length,C=m-g,O=C>0,P=0===g;if(C>1&&!O&&!P)return s;var T=0,w=void 0,x=void 0;if(!O||o!==l&&l!==p){var _=l.toLowerCase(),M=f.toLowerCase(),S=M.substr(0,s).split(n),j=S.filter(function(e){return-1!==_.indexOf(e)});x=j[j.length-1];var E=a.substr(0,j.length).split(n).filter(function(e){return e!==c}).length,R=p.substr(0,j.length).split(n).filter(function(e){return e!==c}).length,V=R!==E,N=void 0!==a[j.length-1]&&void 0!==p[j.length-2]&&a[j.length-1]!==c&&a[j.length-1]!==p[j.length-1]&&a[j.length-1]===p[j.length-2];!O&&(V||N)&&E>0&&p.indexOf(x)>-1&&void 0!==f[s]&&(w=!0,x=f[s]);for(var A=h.map(function(e){return _[e]}),B=A.filter(function(e){return e===x}).length,I=j.filter(function(e){return e===x}).length,F=p.substr(0,p.indexOf(c)).split(n).filter(function(e,t){return e===x&&f[t]!==e}).length,J=F+I+B+(w?1:0),L=0,q=0;q<k;q++){var D=_[q];if(T=q+1,D===x&&L++,L>=J)break}}else T=s-C;if(O){for(var W=T,U=T;U<=b;U++)if(p[U]===c&&(W=U),p[U]===c||-1!==y.indexOf(U)||U===b)return W}else if(w){for(var G=T-1;G>=0;G--)if(l[G]===x||-1!==y.indexOf(G)||0===G)return G}else for(var H=T;H>=0;H--)if(p[H-1]===c||-1!==y.indexOf(H)||0===H)return H};var r=[],n=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){document.activeElement===e&&(y?m(function(){return e.setSelectionRange(t,t,h)},0):e.setSelectionRange(t,t,h))}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,u=n.inputElement,l=n.mask,h=n.guide,y=n.pipe,m=n.placeholderChar,g=void 0===m?p.placeholderChar:m,b=n.keepCharPositions,k=void 0!==b&&b,C=n.showMask,O=void 0!==C&&C;if(void 0===r&&(r=u.value),r!==t.previousConformedValue){(void 0===l?"undefined":a(l))===v&&void 0!==l.pipe&&void 0!==l.mask&&(y=l.pipe,l=l.mask);var P=void 0,T=void 0;if(l instanceof Array&&(P=(0,c.convertMaskToPlaceholder)(l,g)),!1!==l){var w=function(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(null==e)return d;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}(r),x=u.selectionEnd,_=t.previousConformedValue,M=t.previousPlaceholder,S=void 0;if((void 0===l?"undefined":a(l))===p.strFunction){if(!1===(T=l(w,{currentCaretPosition:x,previousConformedValue:_,placeholderChar:g})))return;var j=(0,c.processCaretTraps)(T),E=j.maskWithoutCaretTraps,R=j.indexes;T=E,S=R,P=(0,c.convertMaskToPlaceholder)(T,g)}else T=l;var V={previousConformedValue:_,guide:h,placeholderChar:g,pipe:y,placeholder:P,currentCaretPosition:x,keepCharPositions:k},N=(0,f.default)(w,T,V),A=N.conformedValue,B=(void 0===y?"undefined":a(y))===p.strFunction,I={};B&&(!1===(I=y(A,i({rawValue:w},V)))?I={value:_,rejected:!0}:(0,c.isString)(I)&&(I={value:I}));var F=B?I.value:A,J=(0,s.default)({previousConformedValue:_,previousPlaceholder:M,conformedValue:F,placeholder:P,rawValue:w,currentCaretPosition:x,placeholderChar:g,indexesOfPipedChars:I.indexesOfPipedChars,caretTrapIndexes:S}),L=F===P&&0===J,q=O?P:d,D=L?q:F;t.previousConformedValue=D,t.previousPlaceholder=P,u.value!==D&&(u.value=D,o(u,J))}}}}};var u=r(4),s=n(u),l=r(3),f=n(l),c=r(2),p=r(1),d="",h="none",v="object",y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";var n=function(e){};e.exports=function(e,t,r,o,i,a,u,s){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,o,i,a,u,s],c=0;(l=new Error(t.replace(/%s/g,function(){return f[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,r){"use strict";var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&Symbol.iterator,e.exports=r(8)()},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=n}]))}}]);
//# sourceMappingURL=bundle.npm.react-text-mask.fd0b9dcd35f0a8e9deeb.js.map