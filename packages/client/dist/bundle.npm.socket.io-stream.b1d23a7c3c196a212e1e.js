(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{Af9z:function(e,t,r){(function(o){var n=r("AnsB"),s=r("oFWu"),i=r("JBEb");(t=e.exports=function(e,r){null==(r=r||{}).forceBase64&&(r.forceBase64=t.forceBase64);e._streamSocket||(e._streamSocket=new n(e,r));return e._streamSocket}).Buffer=o,t.Socket=n,t.IOStream=s,t.forceBase64=!1,t.createStream=function(e){return new s(e)},t.createBlobReadStream=function(e,t){return new i(e,t)}}).call(this,r("LMID").Buffer)},AnsB:function(e,t,r){(function(o,n){var s=r("4Ka6"),i=r("jxal").EventEmitter,a=r("Otpf"),c=(r("oFWu"),r("WViC")),h=r("goLl")("socket.io-stream:socket"),u=i.prototype.emit,d=i.prototype.on,f=Array.prototype.slice;function l(e,r){if(!(this instanceof l))return new l(e,r);i.call(this),r=r||{},this.sio=e,this.forceBase64=!!r.forceBase64,this.streams={},this.encoder=new c.Encoder,this.decoder=new c.Decoder;var o=t.event;e.on(o,a(this,u)),e.on(o+"-read",a(this,"_onread")),e.on(o+"-write",a(this,"_onwrite")),e.on(o+"-end",a(this,"_onend")),e.on(o+"-error",a(this,"_onerror")),e.on("error",a(this,u,"error")),e.on("disconnect",a(this,"_ondisconnect")),this.encoder.on("stream",a(this,"_onencode")),this.decoder.on("stream",a(this,"_ondecode"))}(t=e.exports=l).event="$stream",t.events=["error","newListener","removeListener"],s.inherits(l,i),l.prototype.$emit=u,l.prototype.emit=function(e){return~t.events.indexOf(e)?u.apply(this,arguments):(this._stream.apply(this,arguments),this)},l.prototype.on=function(e,r){return~t.events.indexOf(e)?d.apply(this,arguments):(this._onstream(e,r),this)},l.prototype._stream=function(e){h("sending new streams");var r=this,o=f.call(arguments,1),n=o[o.length-1];"function"==typeof n&&(o[o.length-1]=function(){var e=f.call(arguments);e=r.decoder.decode(e),n.apply(this,e)}),o=this.encoder.encode(o);var s=this.sio;s.emit.apply(s,[t.event,e].concat(o))},l.prototype._read=function(e,r){this.sio.emit(t.event+"-read",e,r)},l.prototype._write=function(e,r,s,i){o.isBuffer(r)&&(this.forceBase64?(s="base64",r=r.toString(s)):n.Buffer||(r=r.toArrayBuffer?r.toArrayBuffer():r.buffer)),this.sio.emit(t.event+"-write",e,r,s,i)},l.prototype._end=function(e){this.sio.emit(t.event+"-end",e)},l.prototype._error=function(e,r){this.sio.emit(t.event+"-error",e,r.message||r)},l.prototype._onstream=function(e,t){if("function"!=typeof t)throw TypeError("listener must be a function");function r(){h("new streams");var e=this,r=f.call(arguments),o=r[r.length-1];"function"==typeof o&&(r[r.length-1]=function(){var t=f.call(arguments);t=e.encoder.encode(t),o.apply(this,t)}),r=this.decoder.decode(r),t.apply(this,r)}r.listener=t,d.call(this,e,r)},l.prototype._onread=function(e,t){h('read: "%s"',e);var r=this.streams[e];r?r._onread(t):h("ignore invalid stream id")},l.prototype._onwrite=function(e,t,r,s){h('write: "%s"',e);var i=this.streams[e];i?(n.ArrayBuffer&&t instanceof ArrayBuffer&&(t=new o(new Uint8Array(t))),i._onwrite(t,r,s)):s("invalid stream id: "+e)},l.prototype._onend=function(e){h('end: "%s"',e);var t=this.streams[e];t?t._end():h('ignore non-existent stream id: "%s"',e)},l.prototype._onerror=function(e,t){h('error: "%s", "%s"',e,t);var r=this.streams[e];if(r){var o=new Error(t);o.remote=!0,r.emit("error",o)}else h('invalid stream id: "%s"',e)},l.prototype._ondisconnect=function(){var e;for(var t in this.streams)(e=this.streams[t]).destroy(),e.emit("close"),e.emit("error",new Error("Connection aborted"))},l.prototype._onencode=function(e){if(e.socket||e.destroyed)throw new Error("stream has already been sent.");var t=e.id;if(this.streams[t])throw new Error("Encoded stream already exists: "+t);this.streams[t]=e,e.socket=this},l.prototype._ondecode=function(e){var t=e.id;this.streams[t]?this._error(t,new Error("Decoded stream already exists: "+t)):(this.streams[t]=e,e.socket=this)},l.prototype.cleanup=function(e){delete this.streams[e]}}).call(this,r("LMID").Buffer,r("uKge"))},ByhG:function(e,t,r){e.exports=r("Af9z")},JBEb:function(e,t,r){(function(t){var o=r("4Ka6"),n=r("kEn3").Readable,s=r("Otpf");function i(e,t){if(!(this instanceof i))return new i(e,t);var r;n.call(this,t),t=t||{},this.blob=e,this.slice=e.slice||e.webkitSlice||e.mozSlice,this.start=0,this.sync=t.synchronous||!1,(r=t.synchronous?this.fileReader=new FileReaderSync:this.fileReader=new FileReader).onload=s(this,"_onload"),r.onerror=s(this,"_onerror")}e.exports=i,o.inherits(i,n),i.prototype._read=function(e){var r=this.start,o=this.start=this.start+e,n=this.slice.call(this.blob,r,o);if(n.size)if(this.sync){var s=new t(new Uint8Array(this.fileReader.readAsArrayBuffer(n)));this.push(s)}else this.fileReader.readAsArrayBuffer(n);else this.push(null)},i.prototype._onload=function(e){var r=new t(new Uint8Array(e.target.result));this.push(r)},i.prototype._onerror=function(e){var t=e.target.error;this.emit("error",t)}}).call(this,r("LMID").Buffer)},Qjid:function(e,t){e.exports=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},WViC:function(e,t,r){var o=r("4Ka6"),n=r("jxal").EventEmitter,s=r("oFWu");Array.prototype.slice;function i(){n.call(this)}function a(){n.call(this)}t.Encoder=i,t.Decoder=a,o.inherits(i,n),i.prototype.encode=function(e){return e instanceof s?this.encodeStream(e):o.isArray(e)?this.encodeArray(e):e&&"object"==typeof e?this.encodeObject(e):e},i.prototype.encodeStream=function(e){this.emit("stream",e);var t={$stream:e.id};return e.options&&(t.options=e.options),t},i.prototype.encodeArray=function(e){for(var t=[],r=0,o=e.length;r<o;r++)t.push(this.encode(e[r]));return t},i.prototype.encodeObject=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=this.encode(e[r]));return t},o.inherits(a,n),a.prototype.decode=function(e){return e&&e.$stream?this.decodeStream(e):o.isArray(e)?this.decodeArray(e):e&&"object"==typeof e?this.decodeObject(e):e},a.prototype.decodeStream=function(e){var t=new s(e.options);return t.id=e.$stream,this.emit("stream",t),t},a.prototype.decodeArray=function(e){for(var t=[],r=0,o=e.length;r<o;r++)t.push(this.decode(e[r]));return t},a.prototype.decodeObject=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=this.decode(e[r]));return t}},goLl:function(e,t,r){function o(){var e;try{e=t.storage.debug}catch(e){}return e}(t=e.exports=r("x+S3")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(){var e=arguments,r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return e;var o="color: "+this.color;e=[e[0],o,"color: inherit"].concat(Array.prototype.slice.call(e,1));var n=0,s=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(n++,"%c"===e&&(s=n))}),e.splice(s,0,o),e},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){return JSON.stringify(e)},t.enable(o())},oFWu:function(e,t,r){var o=r("4Ka6"),n=r("kEn3").Duplex,s=r("Otpf"),i=r("Qjid"),a=r("goLl")("socket.io-stream:iostream");function c(e){if(!(this instanceof c))return new c(e);c.super_.call(this,e),this.options=e,this.id=i(),this.socket=null,this.pushBuffer=[],this.writeBuffer=[],this._readable=!1,this._writable=!1,this.destroyed=!1,this.allowHalfOpen=e&&e.allowHalfOpen||!1,this.on("finish",this._onfinish),this.on("end",this._onend),this.on("error",this._onerror)}e.exports=c,o.inherits(c,n),c.prototype.destroy=function(){a("destroy"),this.destroyed?a("already destroyed"):(this.readable=this.writable=!1,this.socket&&(a("clean up"),this.socket.cleanup(this.id),this.socket=null),this.destroyed=!0)},c.prototype._read=function(e){var t;if(!this.destroyed)if(this.pushBuffer.length)for(;(t=this.pushBuffer.shift())&&t(););else this._readable=!0,this.socket._read(this.id,e)},c.prototype._onread=function(e){var t=this.writeBuffer.shift();if(t)return t();this._writable=!0},c.prototype._write=function(e,t,r){var o=this;function n(){o.destroyed||(o._writable=!1,o.socket._write(o.id,e,t,r))}this._writable?n():this.writeBuffer.push(n)},c.prototype._onwrite=function(e,t,r){var o=this;function n(){o._readable=!1;var n=o.push(e||"",t);return r(),n}this._readable?n():this.pushBuffer.push(n)},c.prototype._end=function(){this.pushBuffer.length?this.pushBuffer.push(s(this,"_done")):this._done()},c.prototype._done=function(){return this._readable=!1,this.push(null)},c.prototype._onfinish=function(){if(a("_onfinish"),this.socket&&this.socket._end(this.id),this.writable=!1,this._writableState.ended=!0,!this.readable||this._readableState.ended)return a("_onfinish: ended, destroy %s",this._readableState),this.destroy();a("_onfinish: not ended"),this.allowHalfOpen||(this.push(null),this.readable&&!this._readableState.endEmitted&&this.read(0))},c.prototype._onend=function(){if(a("_onend"),this.readable=!1,this._readableState.ended=!0,!this.writable||this._writableState.finished)return a("_onend: %s",this._writableState),this.destroy();a("_onend: not finished"),this.allowHalfOpen||this.end()},c.prototype._onerror=function(e){!e.remote&&this.socket&&this.socket._error(this.id,e),this.destroy()}},qoLy:function(e,t){var r=1e3,o=60*r,n=60*o,s=24*n,i=365.25*s;function a(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){return t=t||{},"string"==typeof e?function(e){if((e=""+e).length>1e4)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"days":case"day":case"d":return a*s;case"hours":case"hour":case"hrs":case"hr":case"h":return a*n;case"minutes":case"minute":case"mins":case"min":case"m":return a*o;case"seconds":case"second":case"secs":case"sec":case"s":return a*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a}}(e):t.long?a(c=e,s,"day")||a(c,n,"hour")||a(c,o,"minute")||a(c,r,"second")||c+" ms":function(e){return e>=s?Math.round(e/s)+"d":e>=n?Math.round(e/n)+"h":e>=o?Math.round(e/o)+"m":e>=r?Math.round(e/r)+"s":e+"ms"}(e);var c}},"x+S3":function(e,t,r){(t=e.exports=function(e){function r(){}function s(){var e=s,r=+new Date,i=r-(o||r);e.diff=i,e.prev=o,e.curr=r,o=r,null==e.useColors&&(e.useColors=t.useColors()),null==e.color&&e.useColors&&(e.color=t.colors[n++%t.colors.length]);var a=Array.prototype.slice.call(arguments);a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var c=0;a[0]=a[0].replace(/%([a-z%])/g,function(r,o){if("%%"===r)return r;c++;var n=t.formatters[o];if("function"==typeof n){var s=a[c];r=n.call(e,s),a.splice(c,1),c--}return r}),"function"==typeof t.formatArgs&&(a=t.formatArgs.apply(e,a));var h=s.log||t.log||console.log.bind(console);h.apply(e,a)}r.enabled=!1,s.enabled=!0;var i=t.enabled(e)?s:r;return i.namespace=e,i}).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e);for(var r=(e||"").split(/[\s,]+/),o=r.length,n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,o;for(r=0,o=t.skips.length;r<o;r++)if(t.skips[r].test(e))return!1;for(r=0,o=t.names.length;r<o;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r("qoLy"),t.names=[],t.skips=[],t.formatters={};var o,n=0}}]);
//# sourceMappingURL=bundle.npm.socket.io-stream.b1d23a7c3c196a212e1e.js.map