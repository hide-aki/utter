(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{Iv59:function(e,t,r){var n;n=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),l=(n=i)&&n.__esModule?n:{default:n};var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={width:"auto"},r.boundCalculateWidth=r.calculateWidth.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"componentDidMount",value:function(){var e=this.refs.outerDiv,t=this.refs.childrenWrapper;this.calculateWidth(),window.addEventListener("resize",this.boundCalculateWidth),e.onscroll=function(){t.scrollLeft=e.scrollLeft},t.onscroll=function(){e.scrollLeft=t.scrollLeft}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.boundCalculateWidth)}},{key:"componentDidUpdate",value:function(){this.calculateWidth()}},{key:"calculateWidth",value:function(){var e=this.getChildWrapperWidth();null==e&&(e="auto"),e!==this.state.width&&this.setState({width:e})}},{key:"getChildWrapperWidth",value:function(){var e=null;return this.refs.childrenWrapper&&this.refs.childrenWrapper.scrollWidth&&(e=this.refs.childrenWrapper.scrollWidth+"px"),e}},{key:"render",value:function(){var e={paddingTop:"1px",width:this.state.width};return l.default.createElement("div",null,l.default.createElement("div",{ref:"outerDiv",style:{overflowX:"auto",overflowY:"hidden"}},l.default.createElement("div",{ref:"innerDiv",style:e}," ")),l.default.createElement("div",{ref:"childrenWrapper",style:{overflow:"auto",overflowY:"hidden"}},this.props.children))}}]),t}();t.default=a,e.exports=t.default},function(t,r){t.exports=e}])},e.exports=n(r("r0ML"))}}]);
//# sourceMappingURL=bundle.npm.react-double-scrollbar.515a02fda3fc6459120b.js.map