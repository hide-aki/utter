(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"2h+m":function(t,e,n){var o=n("8xVO"),i=n("UfBo")("socket.io-client:url");t.exports=function(t,e){var n=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host);"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t=void 0!==e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t));n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443"));n.path=n.path||"/";var r=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}},AT3x:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},EsBO:function(t,e,n){function o(t){var n;function o(){if(o.enabled){var t=o,i=+new Date,r=i-(n||i);t.diff=r,t.prev=n,t.curr=i,n=i;for(var s=new Array(arguments.length),c=0;c<s.length;c++)s[c]=arguments[c];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,o){if("%%"===n)return n;a++;var i=e.formatters[o];if("function"==typeof i){var r=s[a];n=i.call(t,r),s.splice(a,1),a--}return n}),e.formatArgs.call(t,s),(o.log||e.log||console.log.bind(console)).apply(t,s)}}return o.namespace=t,o.enabled=e.enabled(t),o.useColors=e.useColors(),o.color=function(t){var n,o=0;for(n in t)o=(o<<5)-o+t.charCodeAt(n),o|=0;return e.colors[Math.abs(o)%e.colors.length]}(t),o.destroy=i,"function"==typeof e.init&&e.init(o),e.instances.push(o),o}function i(){var t=e.instances.indexOf(this);return-1!==t&&(e.instances.splice(t,1),!0)}(e=t.exports=o.debug=o.default=o).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){var n;e.save(t),e.names=[],e.skips=[];var o=("string"==typeof t?t:"").split(/[\s,]+/),i=o.length;for(n=0;n<i;n++)o[n]&&("-"===(t=o[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var r=e.instances[n];r.enabled=e.enabled(r.namespace)}},e.enabled=function(t){if("*"===t[t.length-1])return!0;var n,o;for(n=0,o=e.skips.length;n<o;n++)if(e.skips[n].test(t))return!1;for(n=0,o=e.names.length;n<o;n++)if(e.names[n].test(t))return!0;return!1},e.humanize=n("z7ry"),e.instances=[],e.names=[],e.skips=[],e.formatters={}},P4bA:function(t,e){t.exports=function(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}},QQt5:function(t,e,n){var o=n("AT3x"),i=n("uAeR"),r=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===r.call(Blob),c="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===r.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,r=t;return r.data=function t(e,n){if(!e)return e;if(i(e)){var r={_placeholder:!0,num:n.length};return n.push(e),r}if(o(e)){for(var s=new Array(e.length),c=0;c<e.length;c++)s[c]=t(e[c],n);return s}if("object"==typeof e&&!(e instanceof Date)){var s={};for(var a in e)s[a]=t(e[a],n);return s}return e}(n,e),r.attachments=e.length,{packet:r,buffers:e}},e.reconstructPacket=function(t,e){return t.data=function t(e,n){if(!e)return e;if(e&&e._placeholder)return n[e.num];if(o(e))for(var i=0;i<e.length;i++)e[i]=t(e[i],n);else if("object"==typeof e)for(var r in e)e[r]=t(e[r],n);return e}(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){var n=0,r=t;!function t(a,u,h){if(!a)return a;if(s&&a instanceof Blob||c&&a instanceof File){n++;var p=new FileReader;p.onload=function(){h?h[u]=this.result:r=this.result,--n||e(r)},p.readAsArrayBuffer(a)}else if(o(a))for(var f=0;f<a.length;f++)t(a[f],f,a);else if("object"==typeof a&&!i(a))for(var l in a)t(a[l],l,a)}(r),n||e(r)}},UfBo:function(t,e,n){(function(o){function i(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==o&&"env"in o&&(t=Object({NODE_ENV:"production"}).DEBUG),t}(e=t.exports=n("EsBO")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return;var o="color: "+this.color;t.splice(1,0,o,"color: inherit");var i=0,r=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(i++,"%c"===t&&(r=i))}),t.splice(r,0,o)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=i,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(i())}).call(this,n("5XGf"))},VZEn:function(t,e,n){var o=n("rBuO"),i=n("n3jh"),r=n("6eBv"),s=n("x7OH"),c=n("P4bA"),a=n("Otpf"),u=n("UfBo")("socket.io-client:manager"),h=n("sIYT"),p=n("r+q5"),f=Object.prototype.hasOwnProperty;function l(t,e){if(!(this instanceof l))return new l(t,e);t&&"object"==typeof t&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new p({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||s;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=!1!==e.autoConnect,this.autoConnect&&this.open()}t.exports=l,l.prototype.emitAll=function(){for(var t in this.emit.apply(this,arguments),this.nsps)f.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},l.prototype.updateSocketIds=function(){for(var t in this.nsps)f.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},l.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},r(l.prototype),l.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},l.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},l.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},l.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},l.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},l.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},l.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},l.prototype.open=l.prototype.connect=function(t,e){if(u("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;u("opening %s",this.uri),this.engine=o(this.uri,this.opts);var n=this.engine,i=this;this.readyState="opening",this.skipReconnect=!1;var r=c(n,"open",function(){i.onopen(),t&&t()}),s=c(n,"error",function(e){if(u("connect_error"),i.cleanup(),i.readyState="closed",i.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else i.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;u("connect attempt will timeout after %d",a);var h=setTimeout(function(){u("connect attempt timed out after %d",a),r.destroy(),n.close(),n.emit("error","timeout"),i.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(h)}})}return this.subs.push(r),this.subs.push(s),this},l.prototype.onopen=function(){u("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(c(t,"data",a(this,"ondata"))),this.subs.push(c(t,"ping",a(this,"onping"))),this.subs.push(c(t,"pong",a(this,"onpong"))),this.subs.push(c(t,"error",a(this,"onerror"))),this.subs.push(c(t,"close",a(this,"onclose"))),this.subs.push(c(this.decoder,"decoded",a(this,"ondecoded")))},l.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},l.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},l.prototype.ondata=function(t){this.decoder.add(t)},l.prototype.ondecoded=function(t){this.emit("packet",t)},l.prototype.onerror=function(t){u("error",t),this.emitAll("error",t)},l.prototype.socket=function(t,e){var n=this.nsps[t];if(!n){n=new i(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}function r(){~h(o.connecting,n)||o.connecting.push(n)}return n},l.prototype.destroy=function(t){var e=h(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},l.prototype.packet=function(t){u("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var o=0;o<n.length;o++)e.engine.write(n[o],t.options);e.encoding=!1,e.processPacketQueue()}))},l.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},l.prototype.cleanup=function(){u("cleanup");for(var t=this.subs.length,e=0;e<t;e++){this.subs.shift().destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},l.prototype.close=l.prototype.disconnect=function(){u("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},l.prototype.onclose=function(t){u("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},l.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)u("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();u("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(u("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(u("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(u("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},l.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},cYf2:function(t,e,n){var o=n("2h+m"),i=n("x7OH"),r=n("VZEn"),s=n("UfBo")("socket.io-client");t.exports=e=a;var c=e.managers={};function a(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,i=o(t),a=i.source,u=i.id,h=i.path,p=c[u]&&h in c[u].nsps;return e.forceNew||e["force new connection"]||!1===e.multiplex||p?(s("ignoring socket cache for %s",a),n=r(a,e)):(c[u]||(s("new io instance for %s",a),c[u]=r(a,e)),n=c[u]),i.query&&!e.query&&(e.query=i.query),n.socket(i.path,e)}e.protocol=i.protocol,e.connect=a,e.Manager=n("VZEn"),e.Socket=n("n3jh")},n3jh:function(t,e,n){var o=n("x7OH"),i=n("6eBv"),r=n("Db0U"),s=n("P4bA"),c=n("Otpf"),a=n("UfBo")("socket.io-client:socket"),u=n("K/XI"),h=n("/PUP");t.exports=l;var p={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;function l(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}i(l.prototype),l.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[s(t,"open",c(this,"onopen")),s(t,"packet",c(this,"onpacket")),s(t,"close",c(this,"onclose"))]}},l.prototype.open=l.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},l.prototype.send=function(){var t=r(arguments);return t.unshift("message"),this.emit.apply(this,t),this},l.prototype.emit=function(t){if(p.hasOwnProperty(t))return f.apply(this,arguments),this;var e=r(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:h(e))?o.BINARY_EVENT:o.EVENT,data:e,options:{}};return n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(a("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},l.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},l.prototype.onopen=function(){if(a("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"==typeof this.query?u.encode(this.query):this.query;a("sending connect packet with query %s",t),this.packet({type:o.CONNECT,query:t})}else this.packet({type:o.CONNECT})},l.prototype.onclose=function(t){a("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},l.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===o.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},l.prototype.onevent=function(t){var e=t.data||[];a("emitting event %j",e),null!=t.id&&(a("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},l.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var i=r(arguments);a("sending ack %j",i),e.packet({type:h(i)?o.BINARY_ACK:o.ACK,id:t,data:i})}}},l.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(a("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):a("bad ack %s",t.id)},l.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},l.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},l.prototype.ondisconnect=function(){a("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},l.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},l.prototype.close=l.prototype.disconnect=function(){return this.connected&&(a("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},l.prototype.compress=function(t){return this.flags.compress=t,this},l.prototype.binary=function(t){return this.flags.binary=t,this}},uAeR:function(t,e,n){(function(e){t.exports=function(t){return n&&e.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))};var n="function"==typeof e&&"function"==typeof e.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}}).call(this,n("LMID").Buffer)},x7OH:function(t,e,n){var o=n("UfBo")("socket.io-parser"),i=n("6eBv"),r=n("QQt5"),s=n("AT3x"),c=n("uAeR");function a(){}e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=a,e.Decoder=p;var u=e.ERROR+'"encode error"';function h(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var i=function(t){try{return JSON.stringify(t)}catch(t){return!1}}(t.data);if(!1===i)return u;n+=i}return o("encoded %j as %s",t,n),n}function p(){this.reconstructor=null}function f(t){this.reconPack=t,this.buffers=[]}function l(t){return{type:e.ERROR,data:"parser error: "+t}}a.prototype.encode=function(t,n){(o("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)?function(t,e){r.removeBlobs(t,function(t){var n=r.deconstructPacket(t),o=h(n.packet),i=n.buffers;i.unshift(o),e(i)})}(t,n):n([h(t)])},i(p.prototype),p.prototype.add=function(t){var n;if("string"==typeof t)n=function(t){var n=0,i={type:Number(t.charAt(0))};if(null==e.types[i.type])return l("unknown packet type "+i.type);if(e.BINARY_EVENT===i.type||e.BINARY_ACK===i.type){for(var r="";"-"!==t.charAt(++n)&&(r+=t.charAt(n),n!=t.length););if(r!=Number(r)||"-"!==t.charAt(n))throw new Error("Illegal attachments");i.attachments=Number(r)}if("/"===t.charAt(n+1))for(i.nsp="";++n;){var c=t.charAt(n);if(","===c)break;if(i.nsp+=c,n===t.length)break}else i.nsp="/";var a=t.charAt(n+1);if(""!==a&&Number(a)==a){for(i.id="";++n;){var c=t.charAt(n);if(null==c||Number(c)!=c){--n;break}if(i.id+=t.charAt(n),n===t.length)break}i.id=Number(i.id)}if(t.charAt(++n)){var u=function(t){try{return JSON.parse(t)}catch(t){return!1}}(t.substr(n)),h=!1!==u&&(i.type===e.ERROR||s(u));if(!h)return l("invalid payload");i.data=u}return o("decoded %s as %j",t,i),i}(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new f(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!c(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(n=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,this.emit("decoded",n))}},p.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},f.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=r.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},f.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},z7ry:function(t,e){var n=1e3,o=60*n,i=60*o,r=24*i,s=365.25*r;function c(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}t.exports=function(t,e){e=e||{};var a,u=typeof t;if("string"===u&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!e)return;var c=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*r;case"hours":case"hour":case"hrs":case"hr":case"h":return c*i;case"minutes":case"minute":case"mins":case"min":case"m":return c*o;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===u&&!1===isNaN(t))return e.long?c(a=t,r,"day")||c(a,i,"hour")||c(a,o,"minute")||c(a,n,"second")||a+" ms":function(t){if(t>=r)return Math.round(t/r)+"d";if(t>=i)return Math.round(t/i)+"h";if(t>=o)return Math.round(t/o)+"m";if(t>=n)return Math.round(t/n)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}}}]);
//# sourceMappingURL=bundle.npm.socket.io-client.220286466fa61e245d89.js.map