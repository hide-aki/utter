(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"5FK1":function(e,t,n){"use strict";var r=n("HQtS"),i=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t};e.exports=u;var a=n("14k8");a.inherits=n("oJKg");var o=n("lfJK"),s=n("n8W+");a.inherits(u,o);for(var d=i(s.prototype),h=0;h<d.length;h++){var l=d[h];u.prototype[l]||(u.prototype[l]=s.prototype[l])}function u(e){if(!(this instanceof u))return new u(e);o.call(this,e),s.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",f)}function f(){this.allowHalfOpen||this._writableState.ended||r.nextTick(c,this)}function c(e){e.end()}Object.defineProperty(u.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(u.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),u.prototype._destroy=function(e,t){this.push(null),this.end(),r.nextTick(t,e)}},"5nrE":function(e,t,n){e.exports=n("jxal").EventEmitter},"92vH":function(e,t,n){"use strict";var r=n("HQtS");function i(e,t){e.emit("error",t)}e.exports={destroy:function(e,t){var n=this,a=this._readableState&&this._readableState.destroyed,o=this._writableState&&this._writableState.destroyed;return a||o?(t?t(e):!e||this._writableState&&this._writableState.errorEmitted||r.nextTick(i,this,e),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?(r.nextTick(i,n,e),n._writableState&&(n._writableState.errorEmitted=!0)):t&&t(e)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},"9weu":function(e,t,n){e.exports=n("Q2Ao").PassThrough},JD30:function(e,t,n){e.exports=n("Q2Ao").Transform},Maku:function(e,t,n){"use strict";e.exports=o;var r=n("5FK1"),i=n("14k8");function a(e,t){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(!r)return this.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!=t&&this.push(t),r(e);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function o(e){if(!(this instanceof o))return new o(e);r.call(this,e),this._transformState={afterTransform:a.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",s)}function s(){var e=this;"function"==typeof this._flush?this._flush(function(t,n){d(e,t,n)}):d(this,null,null)}function d(e,t,n){if(t)return e.emit("error",t);if(null!=n&&e.push(n),e._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(e._transformState.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}i.inherits=n("oJKg"),i.inherits(o,r),o.prototype.push=function(e,t){return this._transformState.needTransform=!1,r.prototype.push.call(this,e,t)},o.prototype._transform=function(e,t,n){throw new Error("_transform() is not implemented")},o.prototype._write=function(e,t,n){var r=this._transformState;if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},o.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},o.prototype._destroy=function(e,t){var n=this;r.prototype._destroy.call(this,e,function(e){t(e),n.emit("close")})}},Q2Ao:function(e,t,n){(t=e.exports=n("lfJK")).Stream=t,t.Readable=t,t.Writable=n("n8W+"),t.Duplex=n("5FK1"),t.Transform=n("Maku"),t.PassThrough=n("oJKJ")},VVPH:function(e,t,n){e.exports=n("n8W+")},Z3So:function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},eFem:function(e,t,n){"use strict";var r=n("xsYT").Buffer,i=n(2);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,n=""+t.data;t=t.next;)n+=e+t.data;return n},e.prototype.concat=function(e){if(0===this.length)return r.alloc(0);if(1===this.length)return this.head.data;for(var t,n,i,a=r.allocUnsafe(e>>>0),o=this.head,s=0;o;)t=o.data,n=a,i=s,t.copy(n,i),s+=o.data.length,o=o.next;return a},e}(),i&&i.inspect&&i.inspect.custom&&(e.exports.prototype[i.inspect.custom]=function(){var e=i.inspect({length:this.length});return this.constructor.name+" "+e})},g5ht:function(e,t,n){e.exports=n("5FK1")},lfJK:function(e,t,n){"use strict";(function(t,r){var i=n("HQtS");e.exports=v;var a,o=n("Z3So");v.ReadableState=y;n("jxal").EventEmitter;var s=function(e,t){return e.listeners(t).length},d=n("5nrE"),h=n("xsYT").Buffer,l=t.Uint8Array||function(){};var u=n("14k8");u.inherits=n("oJKg");var f=n(1),c=void 0;c=f&&f.debuglog?f.debuglog("stream"):function(){};var p,b=n("eFem"),g=n("92vH");u.inherits(v,d);var w=["error","close","destroy","pause","resume"];function y(e,t){e=e||{};var r=t instanceof(a=a||n("5FK1"));this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var i=e.highWaterMark,o=e.readableHighWaterMark,s=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(o||0===o)?o:s,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new b,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(p||(p=n("RBac").StringDecoder),this.decoder=new p(e.encoding),this.encoding=e.encoding)}function v(e){if(a=a||n("5FK1"),!(this instanceof v))return new v(e);this._readableState=new y(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),d.call(this)}function m(e,t,n,r,i){var a,o=e._readableState;null===t?(o.reading=!1,function(e,t){if(t.ended)return;if(t.decoder){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,M(e)}(e,o)):(i||(a=function(e,t){var n;r=t,h.isBuffer(r)||r instanceof l||"string"==typeof t||void 0===t||e.objectMode||(n=new TypeError("Invalid non-string/buffer chunk"));var r;return n}(o,t)),a?e.emit("error",a):o.objectMode||t&&t.length>0?("string"==typeof t||o.objectMode||Object.getPrototypeOf(t)===h.prototype||(t=function(e){return h.from(e)}(t)),r?o.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):_(e,o,t,!0):o.ended?e.emit("error",new Error("stream.push() after EOF")):(o.reading=!1,o.decoder&&!n?(t=o.decoder.write(t),o.objectMode||0!==t.length?_(e,o,t,!1):R(e,o)):_(e,o,t,!1))):r||(o.reading=!1));return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(o)}function _(e,t,n,r){t.flowing&&0===t.length&&!t.sync?(e.emit("data",n),e.read(0)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&M(e)),R(e,t)}Object.defineProperty(v.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),v.prototype.destroy=g.destroy,v.prototype._undestroy=g.undestroy,v.prototype._destroy=function(e,t){this.push(null),t(e)},v.prototype.push=function(e,t){var n,r=this._readableState;return r.objectMode?n=!0:"string"==typeof e&&((t=t||r.defaultEncoding)!==r.encoding&&(e=h.from(e,t),t=""),n=!0),m(this,e,t,!1,n)},v.prototype.unshift=function(e){return m(this,e,null,!0,!1)},v.prototype.isPaused=function(){return!1===this._readableState.flowing},v.prototype.setEncoding=function(e){return p||(p=n("RBac").StringDecoder),this._readableState.decoder=new p(e),this._readableState.encoding=e,this};var S=8388608;function k(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=S?e=S:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function M(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(c("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?i.nextTick(x,e):x(e))}function x(e){c("emit readable"),e.emit("readable"),W(e)}function R(e,t){t.readingMore||(t.readingMore=!0,i.nextTick(E,e,t))}function E(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(c("maybeReadMore read 0"),e.read(0),n!==t.length);)n=t.length;t.readingMore=!1}function j(e){c("readable nexttick read 0"),e.read(0)}function T(e,t){t.reading||(c("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),W(e),t.flowing&&!t.reading&&e.read(0)}function W(e){var t=e._readableState;for(c("flow",t.flowing);t.flowing&&null!==e.read(););}function q(e,t){return 0===t.length?null:(t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):n=function(e,t,n){var r;e<t.head.data.length?(r=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):r=e===t.head.data.length?t.shift():n?function(e,t){var n=t.head,r=1,i=n.data;e-=i.length;for(;n=n.next;){var a=n.data,o=e>a.length?a.length:e;if(o===a.length?i+=a:i+=a.slice(0,e),0===(e-=o)){o===a.length?(++r,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=a.slice(o));break}++r}return t.length-=r,i}(e,t):function(e,t){var n=h.allocUnsafe(e),r=t.head,i=1;r.data.copy(n),e-=r.data.length;for(;r=r.next;){var a=r.data,o=e>a.length?a.length:e;if(a.copy(n,n.length-e,0,o),0===(e-=o)){o===a.length?(++i,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=a.slice(o));break}++i}return t.length-=i,n}(e,t);return r}(e,t.buffer,t.decoder),n);var n}function C(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,i.nextTick(O,t,e))}function O(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function B(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}v.prototype.read=function(e){c("read",e),e=parseInt(e,10);var t=this._readableState,n=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return c("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?C(this):M(this),null;if(0===(e=k(e,t))&&t.ended)return 0===t.length&&C(this),null;var r,i=t.needReadable;return c("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&c("length less than watermark",i=!0),t.ended||t.reading?c("reading or ended",i=!1):i&&(c("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=k(n,t))),null===(r=e>0?q(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&C(this)),null!==r&&this.emit("data",r),r},v.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},v.prototype.pipe=function(e,t){var n=this,a=this._readableState;switch(a.pipesCount){case 0:a.pipes=e;break;case 1:a.pipes=[a.pipes,e];break;default:a.pipes.push(e)}a.pipesCount+=1,c("pipe count=%d opts=%j",a.pipesCount,t);var d=(!t||!1!==t.end)&&e!==r.stdout&&e!==r.stderr?l:v;function h(t,r){c("onunpipe"),t===n&&r&&!1===r.hasUnpiped&&(r.hasUnpiped=!0,c("cleanup"),e.removeListener("close",w),e.removeListener("finish",y),e.removeListener("drain",u),e.removeListener("error",g),e.removeListener("unpipe",h),n.removeListener("end",l),n.removeListener("end",v),n.removeListener("data",b),f=!0,!a.awaitDrain||e._writableState&&!e._writableState.needDrain||u())}function l(){c("onend"),e.end()}a.endEmitted?i.nextTick(d):n.once("end",d),e.on("unpipe",h);var u=function(e){return function(){var t=e._readableState;c("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&s(e,"data")&&(t.flowing=!0,W(e))}}(n);e.on("drain",u);var f=!1;var p=!1;function b(t){c("ondata"),p=!1,!1!==e.write(t)||p||((1===a.pipesCount&&a.pipes===e||a.pipesCount>1&&-1!==B(a.pipes,e))&&!f&&(c("false write response, pause",n._readableState.awaitDrain),n._readableState.awaitDrain++,p=!0),n.pause())}function g(t){c("onerror",t),v(),e.removeListener("error",g),0===s(e,"error")&&e.emit("error",t)}function w(){e.removeListener("finish",y),v()}function y(){c("onfinish"),e.removeListener("close",w),v()}function v(){c("unpipe"),n.unpipe(e)}return n.on("data",b),function(e,t,n){if("function"==typeof e.prependListener)return e.prependListener(t,n);e._events&&e._events[t]?o(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n)}(e,"error",g),e.once("close",w),e.once("finish",y),e.emit("pipe",n),a.flowing||(c("pipe resume"),n.resume()),e},v.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,n),this);if(!e){var r=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<i;a++)r[a].emit("unpipe",this,n);return this}var o=B(t.pipes,e);return-1===o?this:(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,n),this)},v.prototype.on=function(e,t){var n=d.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var r=this._readableState;r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&M(this):i.nextTick(j,this))}return n},v.prototype.addListener=v.prototype.on,v.prototype.resume=function(){var e=this._readableState;return e.flowing||(c("resume"),e.flowing=!0,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,i.nextTick(T,e,t))}(this,e)),this},v.prototype.pause=function(){return c("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(c("pause"),this._readableState.flowing=!1,this.emit("pause")),this},v.prototype.wrap=function(e){var t=this,n=this._readableState,r=!1;for(var i in e.on("end",function(){if(c("wrapped end"),n.decoder&&!n.ended){var e=n.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(i){(c("wrapped data"),n.decoder&&(i=n.decoder.write(i)),n.objectMode&&null==i)||(n.objectMode||i&&i.length)&&(t.push(i)||(r=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var a=0;a<w.length;a++)e.on(w[a],this.emit.bind(this,w[a]));return this._read=function(t){c("wrapped _read",t),r&&(r=!1,e.resume())},this},Object.defineProperty(v.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),v._fromList=q}).call(this,n("uKge"),n("5XGf"))},"n8W+":function(e,t,n){"use strict";(function(t,r,i){var a=n("HQtS");function o(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,n){var r=e.entry;e.entry=null;for(;r;){var i=r.callback;t.pendingcb--,i(n),r=r.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}(t,e)}}e.exports=y;var s,d=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?r:a.nextTick;y.WritableState=w;var h=n("14k8");h.inherits=n("oJKg");var l={deprecate:n("/TEe")},u=n("5nrE"),f=n("xsYT").Buffer,c=i.Uint8Array||function(){};var p,b=n("92vH");function g(){}function w(e,t){s=s||n("5FK1"),e=e||{};var r=t instanceof s;this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var i=e.highWaterMark,h=e.writableHighWaterMark,l=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(h||0===h)?h:l,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var u=!1===e.decodeStrings;this.decodeStrings=!u,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var n=e._writableState,r=n.sync,i=n.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(n),t)!function(e,t,n,r,i){--t.pendingcb,n?(a.nextTick(i,r),a.nextTick(M,e,t),e._writableState.errorEmitted=!0,e.emit("error",r)):(i(r),e._writableState.errorEmitted=!0,e.emit("error",r),M(e,t))}(e,n,r,t,i);else{var o=S(n);o||n.corked||n.bufferProcessing||!n.bufferedRequest||_(e,n),r?d(m,e,n,o,i):m(e,n,o,i)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new o(this)}function y(e){if(s=s||n("5FK1"),!(p.call(y,this)||this instanceof s))return new y(e);this._writableState=new w(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),u.call(this)}function v(e,t,n,r,i,a,o){t.writelen=r,t.writecb=o,t.writing=!0,t.sync=!0,n?e._writev(i,t.onwrite):e._write(i,a,t.onwrite),t.sync=!1}function m(e,t,n,r){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,r(),M(e,t)}function _(e,t){t.bufferProcessing=!0;var n=t.bufferedRequest;if(e._writev&&n&&n.next){var r=t.bufferedRequestCount,i=new Array(r),a=t.corkedRequestsFree;a.entry=n;for(var s=0,d=!0;n;)i[s]=n,n.isBuf||(d=!1),n=n.next,s+=1;i.allBuffers=d,v(e,t,!0,t.length,i,"",a.finish),t.pendingcb++,t.lastBufferedRequest=null,a.next?(t.corkedRequestsFree=a.next,a.next=null):t.corkedRequestsFree=new o(t),t.bufferedRequestCount=0}else{for(;n;){var h=n.chunk,l=n.encoding,u=n.callback;if(v(e,t,!1,t.objectMode?1:h.length,h,l,u),n=n.next,t.bufferedRequestCount--,t.writing)break}null===n&&(t.lastBufferedRequest=null)}t.bufferedRequest=n,t.bufferProcessing=!1}function S(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function k(e,t){e._final(function(n){t.pendingcb--,n&&e.emit("error",n),t.prefinished=!0,e.emit("prefinish"),M(e,t)})}function M(e,t){var n=S(t);return n&&(!function(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,a.nextTick(k,e,t)):(t.prefinished=!0,e.emit("prefinish")))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),n}h.inherits(y,u),w.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(w.prototype,"buffer",{get:l.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(p=Function.prototype[Symbol.hasInstance],Object.defineProperty(y,Symbol.hasInstance,{value:function(e){return!!p.call(this,e)||this===y&&(e&&e._writableState instanceof w)}})):p=function(e){return e instanceof this},y.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},y.prototype.write=function(e,t,n){var r,i=this._writableState,o=!1,s=!i.objectMode&&(r=e,f.isBuffer(r)||r instanceof c);return s&&!f.isBuffer(e)&&(e=function(e){return f.from(e)}(e)),"function"==typeof t&&(n=t,t=null),s?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof n&&(n=g),i.ended?function(e,t){var n=new Error("write after end");e.emit("error",n),a.nextTick(t,n)}(this,n):(s||function(e,t,n,r){var i=!0,o=!1;return null===n?o=new TypeError("May not write null values to stream"):"string"==typeof n||void 0===n||t.objectMode||(o=new TypeError("Invalid non-string/buffer chunk")),o&&(e.emit("error",o),a.nextTick(r,o),i=!1),i}(this,i,e,n))&&(i.pendingcb++,o=function(e,t,n,r,i,a){if(!n){var o=function(e,t,n){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=f.from(t,n));return t}(t,r,i);r!==o&&(n=!0,i="buffer",r=o)}var s=t.objectMode?1:r.length;t.length+=s;var d=t.length<t.highWaterMark;d||(t.needDrain=!0);if(t.writing||t.corked){var h=t.lastBufferedRequest;t.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:a,next:null},h?h.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else v(e,t,!1,s,r,i,a);return d}(this,i,s,e,t,n)),o},y.prototype.cork=function(){this._writableState.corked++},y.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||_(this,e))},y.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(y.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),y.prototype._write=function(e,t,n){n(new Error("_write() is not implemented"))},y.prototype._writev=null,y.prototype.end=function(e,t,n){var r=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),null!=e&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||function(e,t,n){t.ending=!0,M(e,t),n&&(t.finished?a.nextTick(n):e.once("finish",n));t.ended=!0,e.writable=!1}(this,r,n)},Object.defineProperty(y.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),y.prototype.destroy=b.destroy,y.prototype._undestroy=b.undestroy,y.prototype._destroy=function(e,t){this.end(),t(e)}}).call(this,n("5XGf"),n("JT7O").setImmediate,n("uKge"))},oJKJ:function(e,t,n){"use strict";e.exports=a;var r=n("Maku"),i=n("14k8");function a(e){if(!(this instanceof a))return new a(e);r.call(this,e)}i.inherits=n("oJKg"),i.inherits(a,r),a.prototype._transform=function(e,t,n){n(null,e)}}}]);
//# sourceMappingURL=bundle.npm.readable-stream.4dcb30b5208a36129893.js.map