(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"+hfF":function(e,t,n){var o,i,s;i=[t,n("r0ML"),n("cNRa")],void 0===(s="function"==typeof(o=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=a;var o=s(t),i=s(n);function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=!1;function a(e){u=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){a(!0)}}))}catch(e){}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return u?e:e.capture}function l(e){if("touches"in e){var t=e.touches[0],n=t.pageX,o=t.pageY;return{x:n,y:o}}var i=e.screenX,s=e.screenY;return{x:i,y:s}}var c=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return s._handleSwipeStart=s._handleSwipeStart.bind(s),s._handleSwipeMove=s._handleSwipeMove.bind(s),s._handleSwipeEnd=s._handleSwipeEnd.bind(s),s._onMouseDown=s._onMouseDown.bind(s),s._onMouseMove=s._onMouseMove.bind(s),s._onMouseUp=s._onMouseUp.bind(s),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,p({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,p({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=l(e),n=t.x,o=t.y;this.moveStart={x:n,y:o},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=l(e),n=t.x,o=t.y,i=n-this.moveStart.x,s=o-this.moveStart.y;this.moving=!0;var r=this.props.onSwipeMove({x:i,y:s},e);r&&e.preventDefault(),this.movePosition={deltaX:i,deltaY:s}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return o.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),t}(t.Component);c.displayName="ReactSwipe",c.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,tolerance:i.default.number.isRequired},c.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=c})?o.apply(t,i):o)||(e.exports=s)},MA7L:function(e,t,n){var o,i,s;i=[t,n("+hfF")],void 0===(s="function"==typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=t)&&n.__esModule?n:{default:n};e.default=o.default})?o.apply(t,i):o)||(e.exports=s)}}]);
//# sourceMappingURL=bundle.npm.react-easy-swipe.7d66ff41edb5299c78ff.js.map