(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"+Hdd":function(e,t,r){var n=r("rubU"),o=r("6eBv"),s=r("O/Fo")("engine.io-client:socket"),i=r("sIYT"),a=r("x/38"),c=r("8xVO"),p=r("K/XI");function h(e,t){if(!(this instanceof h))return new h(e,t);t=t||{},e&&"object"==typeof e&&(t=e,e=null),e?(e=c(e),t.hostname=e.host,t.secure="https"===e.protocol||"wss"===e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=c(t.host).host),this.secure=null!=t.secure?t.secure:"undefined"!=typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.agent=t.agent||!1,this.hostname=t.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=p.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.jsonp=!1!==t.jsonp,this.forceBase64=!!t.forceBase64,this.enablesXDR=!!t.enablesXDR,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],this.transportOptions=t.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades,this.perMessageDeflate=!1!==t.perMessageDeflate&&(t.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=t.pfx||null,this.key=t.key||null,this.passphrase=t.passphrase||null,this.cert=t.cert||null,this.ca=t.ca||null,this.ciphers=t.ciphers||null,this.rejectUnauthorized=void 0===t.rejectUnauthorized||t.rejectUnauthorized,this.forceNode=!!t.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(t.extraHeaders&&Object.keys(t.extraHeaders).length>0&&(this.extraHeaders=t.extraHeaders),t.localAddress&&(this.localAddress=t.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}e.exports=h,h.priorWebsocketSuccess=!1,o(h.prototype),h.protocol=a.protocol,h.Socket=h,h.Transport=r("no1C"),h.transports=r("rubU"),h.parser=r("x/38"),h.prototype.createTransport=function(e){s('creating transport "%s"',e);var t=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}(this.query);t.EIO=a.protocol,t.transport=e;var r=this.transportOptions[e]||{};return this.id&&(t.sid=this.id),new n[e]({query:t,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0,isReactNative:this.isReactNative})},h.prototype.open=function(){var e;if(this.rememberUpgrade&&h.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))e="websocket";else{if(0===this.transports.length){var t=this;return void setTimeout(function(){t.emit("error","No transports available")},0)}e=this.transports[0]}this.readyState="opening";try{e=this.createTransport(e)}catch(e){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)},h.prototype.setTransport=function(e){s("setting transport %s",e.name);var t=this;this.transport&&(s("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=e,e.on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},h.prototype.probe=function(e){s('probing transport "%s"',e);var t=this.createTransport(e,{probe:1}),r=!1,n=this;function o(){if(n.onlyBinaryUpgrades){var o=!this.supportsBinary&&n.transport.supportsBinary;r=r||o}r||(s('probe transport "%s" opened',e),t.send([{type:"ping",data:"probe"}]),t.once("packet",function(o){if(!r)if("pong"===o.type&&"probe"===o.data){if(s('probe transport "%s" pong',e),n.upgrading=!0,n.emit("upgrading",t),!t)return;h.priorWebsocketSuccess="websocket"===t.name,s('pausing current transport "%s"',n.transport.name),n.transport.pause(function(){r||"closed"!==n.readyState&&(s("changing transport and sending upgrade packet"),f(),n.setTransport(t),t.send([{type:"upgrade"}]),n.emit("upgrade",t),t=null,n.upgrading=!1,n.flush())})}else{s('probe transport "%s" failed',e);var i=new Error("probe error");i.transport=t.name,n.emit("upgradeError",i)}}))}function i(){r||(r=!0,f(),t.close(),t=null)}function a(r){var o=new Error("probe error: "+r);o.transport=t.name,i(),s('probe transport "%s" failed because of error: %s',e,r),n.emit("upgradeError",o)}function c(){a("transport closed")}function p(){a("socket closed")}function u(e){t&&e.name!==t.name&&(s('"%s" works - aborting "%s"',e.name,t.name),i())}function f(){t.removeListener("open",o),t.removeListener("error",a),t.removeListener("close",c),n.removeListener("close",p),n.removeListener("upgrading",u)}h.priorWebsocketSuccess=!1,t.once("open",o),t.once("error",a),t.once("close",c),this.once("close",p),this.once("upgrading",u),t.open()},h.prototype.onOpen=function(){if(s("socket open"),this.readyState="open",h.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){s("starting upgrade probes");for(var e=0,t=this.upgrades.length;e<t;e++)this.probe(this.upgrades[e])}},h.prototype.onPacket=function(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(s('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),this.emit("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emit("data",e.data),this.emit("message",e.data)}else s('packet received with socket readyState "%s"',this.readyState)},h.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},h.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer);var t=this;t.pingTimeoutTimer=setTimeout(function(){"closed"!==t.readyState&&t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},h.prototype.setPing=function(){var e=this;clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){s("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},h.prototype.ping=function(){var e=this;this.sendPacket("ping",function(){e.emit("ping")})},h.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},h.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(s("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},h.prototype.write=h.prototype.send=function(e,t,r){return this.sendPacket("message",e,t,r),this},h.prototype.sendPacket=function(e,t,r,n){if("function"==typeof t&&(n=t,t=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){(r=r||{}).compress=!1!==r.compress;var o={type:e,data:t,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},h.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var e=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}function t(){e.onClose("forced close"),s("socket closing - telling transport to close"),e.transport.close()}function r(){e.removeListener("upgrade",r),e.removeListener("upgradeError",r),t()}function n(){e.once("upgrade",r),e.once("upgradeError",r)}return this},h.prototype.onError=function(e){s("socket error %j",e),h.priorWebsocketSuccess=!1,this.emit("error",e),this.onClose("transport error",e)},h.prototype.onClose=function(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){s('socket close with reason: "%s"',e);clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",e,t),this.writeBuffer=[],this.prevBufferLen=0}},h.prototype.filterUpgrades=function(e){for(var t=[],r=0,n=e.length;r<n;r++)~i(this.transports,e[r])&&t.push(e[r]);return t}},"04tz":function(e,t,r){(function(t){var n=r("tTJ9"),o=r("II/P");e.exports=h;var s,i=/\n/g,a=/\\n/g;function c(){}function p(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{}}function h(e){if(n.call(this,e),this.query=this.query||{},!s){var t=p();s=t.___eio=t.___eio||[]}this.index=s.length;var r=this;s.push(function(e){r.onData(e)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){r.script&&(r.script.onerror=c)},!1)}o(h,n),h.prototype.supportsBinary=!1,h.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),n.prototype.doClose.call(this)},h.prototype.doPoll=function(){var e=this,t=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),t.async=!0,t.src=this.uri(),t.onerror=function(t){e.onError("jsonp poll error",t)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(t,r):(document.head||document.body).appendChild(t),this.script=t,"undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent)&&setTimeout(function(){var e=document.createElement("iframe");document.body.appendChild(e),document.body.removeChild(e)},100)},h.prototype.doWrite=function(e,t){var r=this;if(!this.form){var n,o=document.createElement("form"),s=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;o.className="socketio",o.style.position="absolute",o.style.top="-1000px",o.style.left="-1000px",o.target=c,o.method="POST",o.setAttribute("accept-charset","utf-8"),s.name="d",o.appendChild(s),document.body.appendChild(o),this.form=o,this.area=s}function p(){h(),t()}function h(){if(r.iframe)try{r.form.removeChild(r.iframe)}catch(e){r.onError("jsonp polling iframe removal error",e)}try{var e='<iframe src="javascript:0" name="'+r.iframeId+'">';n=document.createElement(e)}catch(e){(n=document.createElement("iframe")).name=r.iframeId,n.src="javascript:0"}n.id=r.iframeId,r.form.appendChild(n),r.iframe=n}this.form.action=this.uri(),h(),e=e.replace(a,"\\\n"),this.area.value=e.replace(i,"\\n");try{this.form.submit()}catch(e){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===r.iframe.readyState&&p()}:this.iframe.onload=p}}).call(this,r("uKge"))},"0UYl":function(e,t,r){var n=r("1VP2"),o=r("tTJ9"),s=r("6eBv"),i=r("II/P"),a=r("O/Fo")("engine.io-client:polling-xhr");function c(){}function p(e){if(o.call(this,e),this.requestTimeout=e.requestTimeout,this.extraHeaders=e.extraHeaders,"undefined"!=typeof location){var t="https:"===location.protocol,r=location.port;r||(r=t?443:80),this.xd="undefined"!=typeof location&&e.hostname!==location.hostname||r!==e.port,this.xs=e.secure!==t}}function h(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.xs=!!e.xs,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.agent=e.agent,this.isBinary=e.isBinary,this.supportsBinary=e.supportsBinary,this.enablesXDR=e.enablesXDR,this.requestTimeout=e.requestTimeout,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders,this.create()}if(e.exports=p,e.exports.Request=h,i(p,o),p.prototype.supportsBinary=!0,p.prototype.request=function(e){return(e=e||{}).uri=this.uri(),e.xd=this.xd,e.xs=this.xs,e.agent=this.agent||!1,e.supportsBinary=this.supportsBinary,e.enablesXDR=this.enablesXDR,e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,e.requestTimeout=this.requestTimeout,e.extraHeaders=this.extraHeaders,new h(e)},p.prototype.doWrite=function(e,t){var r="string"!=typeof e&&void 0!==e,n=this.request({method:"POST",data:e,isBinary:r}),o=this;n.on("success",t),n.on("error",function(e){o.onError("xhr post error",e)}),this.sendXhr=n},p.prototype.doPoll=function(){a("xhr poll");var e=this.request(),t=this;e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},s(h.prototype),h.prototype.create=function(){var e={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized;var t=this.xhr=new n(e),r=this;try{a("xhr open %s: %s",this.method,this.uri),t.open(this.method,this.uri,this.async);try{if(this.extraHeaders)for(var o in t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&t.setRequestHeader(o,this.extraHeaders[o])}catch(e){}if("POST"===this.method)try{this.isBinary?t.setRequestHeader("Content-type","application/octet-stream"):t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{t.setRequestHeader("Accept","*/*")}catch(e){}"withCredentials"in t&&(t.withCredentials=!0),this.requestTimeout&&(t.timeout=this.requestTimeout),this.hasXDR()?(t.onload=function(){r.onLoad()},t.onerror=function(){r.onError(t.responseText)}):t.onreadystatechange=function(){if(2===t.readyState)try{var e=t.getResponseHeader("Content-Type");r.supportsBinary&&"application/octet-stream"===e&&(t.responseType="arraybuffer")}catch(e){}4===t.readyState&&(200===t.status||1223===t.status?r.onLoad():setTimeout(function(){r.onError(t.status)},0))},a("xhr data %s",this.data),t.send(this.data)}catch(e){return void setTimeout(function(){r.onError(e)},0)}"undefined"!=typeof document&&(this.index=h.requestsCount++,h.requests[this.index]=this)},h.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},h.prototype.onData=function(e){this.emit("data",e),this.onSuccess()},h.prototype.onError=function(e){this.emit("error",e),this.cleanup(!0)},h.prototype.cleanup=function(e){if(void 0!==this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=c:this.xhr.onreadystatechange=c,e)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete h.requests[this.index],this.xhr=null}},h.prototype.onLoad=function(){var e;try{var t;try{t=this.xhr.getResponseHeader("Content-Type")}catch(e){}e="application/octet-stream"===t&&this.xhr.response||this.xhr.responseText}catch(e){this.onError(e)}null!=e&&this.onData(e)},h.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},h.prototype.abort=function(){this.cleanup()},h.requestsCount=0,h.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",f);else if("function"==typeof addEventListener){var u="onpagehide"in self?"pagehide":"unload";addEventListener(u,f,!1)}function f(){for(var e in h.requests)h.requests.hasOwnProperty(e)&&h.requests[e].abort()}},"0Vei":function(e,t){
/*! https://mths.be/utf8js v2.1.2 by @mathias */
var r,n,o,s=String.fromCharCode;function i(e){for(var t,r,n=[],o=0,s=e.length;o<s;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<s?56320==(64512&(r=e.charCodeAt(o++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--):n.push(t);return n}function a(e,t){if(e>=55296&&e<=57343){if(t)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function c(e,t){return s(e>>t&63|128)}function p(e,t){if(0==(4294967168&e))return s(e);var r="";return 0==(4294965248&e)?r=s(e>>6&31|192):0==(4294901760&e)?(a(e,t)||(e=65533),r=s(e>>12&15|224),r+=c(e,6)):0==(4292870144&e)&&(r=s(e>>18&7|240),r+=c(e,12),r+=c(e,6)),r+=s(63&e|128)}function h(){if(o>=n)throw Error("Invalid byte index");var e=255&r[o];if(o++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(e){var t,s;if(o>n)throw Error("Invalid byte index");if(o==n)return!1;if(t=255&r[o],o++,0==(128&t))return t;if(192==(224&t)){if((s=(31&t)<<6|h())>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&t)){if((s=(15&t)<<12|h()<<6|h())>=2048)return a(s,e)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&t)&&(s=(7&t)<<18|h()<<12|h()<<6|h())>=65536&&s<=1114111)return s;throw Error("Invalid UTF-8 detected")}e.exports={version:"2.1.2",encode:function(e,t){for(var r=!1!==(t=t||{}).strict,n=i(e),o=n.length,s=-1,a="";++s<o;)a+=p(n[s],r);return a},decode:function(e,t){var a=!1!==(t=t||{}).strict;r=i(e),n=r.length,o=0;for(var c,p=[];!1!==(c=u(a));)p.push(c);return function(e){for(var t,r=e.length,n=-1,o="";++n<r;)(t=e[n])>65535&&(o+=s((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=s(t);return o}(p)}}},"1VP2":function(e,t,r){var n=r("YCHo");e.exports=function(e){var t=e.xdomain,r=e.xscheme,o=e.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!t||n))return new XMLHttpRequest}catch(e){}try{if("undefined"!=typeof XDomainRequest&&!r&&o)return new XDomainRequest}catch(e){}if(!t)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(e){}}},JAiv:function(e,t){e.exports=function(e,t,r){var n=e.byteLength;if(t=t||0,r=r||n,e.slice)return e.slice(t,r);if(t<0&&(t+=n),r<0&&(r+=n),r>n&&(r=n),t>=n||t>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(e),s=new Uint8Array(r-t),i=t,a=0;i<r;i++,a++)s[a]=o[i];return s.buffer}},"O/Fo":function(e,t,r){(function(n){function o(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==n&&"env"in n&&(e=Object({NODE_ENV:"production"}).DEBUG),e}(t=e.exports=r("YWAZ")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())}).call(this,r("5XGf"))},"P/lB":function(e,t){var r=void 0!==r?r:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,n=function(){try{return 2===new Blob(["hi"]).size}catch(e){return!1}}(),o=n&&function(){try{return 2===new Blob([new Uint8Array([1,2])]).size}catch(e){return!1}}(),s=r&&r.prototype.append&&r.prototype.getBlob;function i(e){return e.map(function(e){if(e.buffer instanceof ArrayBuffer){var t=e.buffer;if(e.byteLength!==t.byteLength){var r=new Uint8Array(e.byteLength);r.set(new Uint8Array(t,e.byteOffset,e.byteLength)),t=r.buffer}return t}return e})}function a(e,t){t=t||{};var n=new r;return i(e).forEach(function(e){n.append(e)}),t.type?n.getBlob(t.type):n.getBlob()}function c(e,t){return new Blob(i(e),t||{})}"undefined"!=typeof Blob&&(a.prototype=Blob.prototype,c.prototype=Blob.prototype),e.exports=n?o?Blob:c:s?a:void 0},QdFa:function(e,t,r){(function(t){var n,o,s=r("no1C"),i=r("x/38"),a=r("K/XI"),c=r("II/P"),p=r("YpWo"),h=r("O/Fo")("engine.io-client:websocket");if("undefined"!=typeof WebSocket)n=WebSocket;else if("undefined"!=typeof self)n=self.WebSocket||self.MozWebSocket;else try{o=r(2)}catch(e){}var u=n||o;function f(e){e&&e.forceBase64&&(this.supportsBinary=!1),this.perMessageDeflate=e.perMessageDeflate,this.usingBrowserWebSocket=n&&!e.forceNode,this.protocols=e.protocols,this.usingBrowserWebSocket||(u=o),s.call(this,e)}e.exports=f,c(f,s),f.prototype.name="websocket",f.prototype.supportsBinary=!0,f.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?t?new u(e,t):new u(e):new u(e,t,r)}catch(e){return this.emit("error",e)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},f.prototype.addEventListeners=function(){var e=this;this.ws.onopen=function(){e.onOpen()},this.ws.onclose=function(){e.onClose()},this.ws.onmessage=function(t){e.onData(t.data)},this.ws.onerror=function(t){e.onError("websocket error",t)}},f.prototype.write=function(e){var r=this;this.writable=!1;for(var n=e.length,o=0,s=n;o<s;o++)!function(e){i.encodePacket(e,r.supportsBinary,function(o){if(!r.usingBrowserWebSocket){var s={};if(e.options&&(s.compress=e.options.compress),r.perMessageDeflate)("string"==typeof o?t.byteLength(o):o.length)<r.perMessageDeflate.threshold&&(s.compress=!1)}try{r.usingBrowserWebSocket?r.ws.send(o):r.ws.send(o,s)}catch(e){h("websocket closed before onclose event")}--n||a()})}(e[o]);function a(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}},f.prototype.onClose=function(){s.prototype.onClose.call(this)},f.prototype.doClose=function(){void 0!==this.ws&&this.ws.close()},f.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",r="";return this.port&&("wss"===t&&443!==Number(this.port)||"ws"===t&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=p()),this.supportsBinary||(e.b64=1),(e=a.encode(e)).length&&(e="?"+e),t+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+r+this.path+e},f.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===f.prototype.name)}}).call(this,r("LMID").Buffer)},YWAZ:function(e,t,r){function n(e){var r;function n(){if(n.enabled){var e=n,o=+new Date,s=o-(r||o);e.diff=s,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(r,n){if("%%"===r)return r;c++;var o=t.formatters[n];if("function"==typeof o){var s=i[c];r=o.call(e,s),i.splice(c,1),c--}return r}),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),n.destroy=o,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function o(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}(t=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){var r;t.save(e),t.names=[],t.skips=[];var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(r=0;r<t.instances.length;r++){var s=t.instances[r];s.enabled=t.enabled(s.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r("tV04"),t.instances=[],t.names=[],t.skips=[],t.formatters={}},lPCi:function(e,t){e.exports=Object.keys||function(e){var t=[],r=Object.prototype.hasOwnProperty;for(var n in e)r.call(e,n)&&t.push(n);return t}},no1C:function(e,t,r){var n=r("x/38"),o=r("6eBv");function s(e){this.path=e.path,this.hostname=e.hostname,this.port=e.port,this.secure=e.secure,this.query=e.query,this.timestampParam=e.timestampParam,this.timestampRequests=e.timestampRequests,this.readyState="",this.agent=e.agent||!1,this.socket=e.socket,this.enablesXDR=e.enablesXDR,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.forceNode=e.forceNode,this.isReactNative=e.isReactNative,this.extraHeaders=e.extraHeaders,this.localAddress=e.localAddress}e.exports=s,o(s.prototype),s.prototype.onError=function(e,t){var r=new Error(e);return r.type="TransportError",r.description=t,this.emit("error",r),this},s.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},s.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},s.prototype.send=function(e){if("open"!==this.readyState)throw new Error("Transport not open");this.write(e)},s.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},s.prototype.onData=function(e){var t=n.decodePacket(e,this.socket.binaryType);this.onPacket(t)},s.prototype.onPacket=function(e){this.emit("packet",e)},s.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},rBuO:function(e,t,r){e.exports=r("+Hdd"),e.exports.parser=r("x/38")},rubU:function(e,t,r){var n=r("1VP2"),o=r("0UYl"),s=r("04tz"),i=r("QdFa");t.polling=function(e){var t=!1,r=!1,i=!1!==e.jsonp;if("undefined"!=typeof location){var a="https:"===location.protocol,c=location.port;c||(c=a?443:80),t=e.hostname!==location.hostname||c!==e.port,r=e.secure!==a}if(e.xdomain=t,e.xscheme=r,"open"in new n(e)&&!e.forceJSONP)return new o(e);if(!i)throw new Error("JSONP disabled");return new s(e)},t.websocket=i},tTJ9:function(e,t,r){var n=r("no1C"),o=r("K/XI"),s=r("x/38"),i=r("II/P"),a=r("YpWo"),c=r("O/Fo")("engine.io-client:polling");e.exports=h;var p=null!=new(r("1VP2"))({xdomain:!1}).responseType;function h(e){var t=e&&e.forceBase64;p&&!t||(this.supportsBinary=!1),n.call(this,e)}i(h,n),h.prototype.name="polling",h.prototype.doOpen=function(){this.poll()},h.prototype.pause=function(e){var t=this;function r(){c("paused"),t.readyState="paused",e()}if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(c("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){c("pre-pause polling complete"),--n||r()})),this.writable||(c("we are currently writing - waiting to pause"),n++,this.once("drain",function(){c("pre-pause writing complete"),--n||r()}))}else r()},h.prototype.poll=function(){c("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},h.prototype.onData=function(e){var t=this;c("polling got data %s",e);s.decodePayload(e,this.socket.binaryType,function(e,r,n){if("opening"===t.readyState&&t.onOpen(),"close"===e.type)return t.onClose(),!1;t.onPacket(e)}),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():c('ignoring poll - transport state "%s"',this.readyState))},h.prototype.doClose=function(){var e=this;function t(){c("writing close packet"),e.write([{type:"close"}])}"open"===this.readyState?(c("transport open - closing"),t()):(c("transport not open - deferring close"),this.once("open",t))},h.prototype.write=function(e){var t=this;this.writable=!1;var r=function(){t.writable=!0,t.emit("drain")};s.encodePayload(e,this.supportsBinary,function(e){t.doWrite(e,r)})},h.prototype.uri=function(){var e=this.query||{},t=this.secure?"https":"http",r="";return!1!==this.timestampRequests&&(e[this.timestampParam]=a()),this.supportsBinary||e.sid||(e.b64=1),e=o.encode(e),this.port&&("https"===t&&443!==Number(this.port)||"http"===t&&80!==Number(this.port))&&(r=":"+this.port),e.length&&(e="?"+e),t+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+r+this.path+e}},tV04:function(e,t){var r=1e3,n=60*r,o=60*n,s=24*o,i=365.25*s;function a(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){t=t||{};var c,p=typeof e;if("string"===p&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"days":case"day":case"d":return a*s;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===p&&!1===isNaN(e))return t.long?a(c=e,s,"day")||a(c,o,"hour")||a(c,n,"minute")||a(c,r,"second")||c+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"x/38":function(e,t,r){var n,o=r("lPCi"),s=r("/PUP"),i=r("JAiv"),a=r("fgLL"),c=r("0Vei");"undefined"!=typeof ArrayBuffer&&(n=r("JV4B"));var p="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),h="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),u=p||h;t.protocol=3;var f=t.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},d=o(f),l={type:"error",data:"parser error"},y=r("P/lB");function g(e,t,r){for(var n=new Array(e.length),o=a(e.length,r),s=function(e,r,o){t(r,function(t,r){n[e]=r,o(t,n)})},i=0;i<e.length;i++)s(i,e[i],o)}t.encodePacket=function(e,r,n,o){"function"==typeof r&&(o=r,r=!1),"function"==typeof n&&(o=n,n=null);var s=void 0===e.data?void 0:e.data.buffer||e.data;if("undefined"!=typeof ArrayBuffer&&s instanceof ArrayBuffer)return function(e,r,n){if(!r)return t.encodeBase64Packet(e,n);var o=e.data,s=new Uint8Array(o),i=new Uint8Array(1+o.byteLength);i[0]=f[e.type];for(var a=0;a<s.length;a++)i[a+1]=s[a];return n(i.buffer)}(e,r,o);if(void 0!==y&&s instanceof y)return function(e,r,n){if(!r)return t.encodeBase64Packet(e,n);if(u)return function(e,r,n){if(!r)return t.encodeBase64Packet(e,n);var o=new FileReader;return o.onload=function(){t.encodePacket({type:e.type,data:o.result},r,!0,n)},o.readAsArrayBuffer(e.data)}(e,r,n);var o=new Uint8Array(1);o[0]=f[e.type];var s=new y([o.buffer,e.data]);return n(s)}(e,r,o);if(s&&s.base64)return function(e,r){var n="b"+t.packets[e.type]+e.data.data;return r(n)}(e,o);var i=f[e.type];return void 0!==e.data&&(i+=n?c.encode(String(e.data),{strict:!1}):String(e.data)),o(""+i)},t.encodeBase64Packet=function(e,r){var n,o="b"+t.packets[e.type];if(void 0!==y&&e.data instanceof y){var s=new FileReader;return s.onload=function(){var e=s.result.split(",")[1];r(o+e)},s.readAsDataURL(e.data)}try{n=String.fromCharCode.apply(null,new Uint8Array(e.data))}catch(t){for(var i=new Uint8Array(e.data),a=new Array(i.length),c=0;c<i.length;c++)a[c]=i[c];n=String.fromCharCode.apply(null,a)}return o+=btoa(n),r(o)},t.decodePacket=function(e,r,n){if(void 0===e)return l;if("string"==typeof e){if("b"===e.charAt(0))return t.decodeBase64Packet(e.substr(1),r);if(n&&!1===(e=function(e){try{e=c.decode(e,{strict:!1})}catch(e){return!1}return e}(e)))return l;var o=e.charAt(0);return Number(o)==o&&d[o]?e.length>1?{type:d[o],data:e.substring(1)}:{type:d[o]}:l}o=new Uint8Array(e)[0];var s=i(e,1);return y&&"blob"===r&&(s=new y([s])),{type:d[o],data:s}},t.decodeBase64Packet=function(e,t){var r=d[e.charAt(0)];if(!n)return{type:r,data:{base64:!0,data:e.substr(1)}};var o=n.decode(e.substr(1));return"blob"===t&&y&&(o=new y([o])),{type:r,data:o}},t.encodePayload=function(e,r,n){"function"==typeof r&&(n=r,r=null);var o=s(e);if(r&&o)return y&&!u?t.encodePayloadAsBlob(e,n):t.encodePayloadAsArrayBuffer(e,n);if(!e.length)return n("0:");g(e,function(e,n){t.encodePacket(e,!!o&&r,!1,function(e){n(null,function(e){return e.length+":"+e}(e))})},function(e,t){return n(t.join(""))})},t.decodePayload=function(e,r,n){if("string"!=typeof e)return t.decodePayloadAsBinary(e,r,n);var o;if("function"==typeof r&&(n=r,r=null),""===e)return n(l,0,1);for(var s,i,a="",c=0,p=e.length;c<p;c++){var h=e.charAt(c);if(":"===h){if(""===a||a!=(s=Number(a)))return n(l,0,1);if(a!=(i=e.substr(c+1,s)).length)return n(l,0,1);if(i.length){if(o=t.decodePacket(i,r,!1),l.type===o.type&&l.data===o.data)return n(l,0,1);if(!1===n(o,c+s,p))return}c+=s,a=""}else a+=h}return""!==a?n(l,0,1):void 0},t.encodePayloadAsArrayBuffer=function(e,r){if(!e.length)return r(new ArrayBuffer(0));g(e,function(e,r){t.encodePacket(e,!0,!0,function(e){return r(null,e)})},function(e,t){var n=t.reduce(function(e,t){var r;return e+(r="string"==typeof t?t.length:t.byteLength).toString().length+r+2},0),o=new Uint8Array(n),s=0;return t.forEach(function(e){var t="string"==typeof e,r=e;if(t){for(var n=new Uint8Array(e.length),i=0;i<e.length;i++)n[i]=e.charCodeAt(i);r=n.buffer}o[s++]=t?0:1;var a=r.byteLength.toString();for(i=0;i<a.length;i++)o[s++]=parseInt(a[i]);o[s++]=255;for(n=new Uint8Array(r),i=0;i<n.length;i++)o[s++]=n[i]}),r(o.buffer)})},t.encodePayloadAsBlob=function(e,r){g(e,function(e,r){t.encodePacket(e,!0,!0,function(e){var t=new Uint8Array(1);if(t[0]=1,"string"==typeof e){for(var n=new Uint8Array(e.length),o=0;o<e.length;o++)n[o]=e.charCodeAt(o);e=n.buffer,t[0]=0}var s=(e instanceof ArrayBuffer?e.byteLength:e.size).toString(),i=new Uint8Array(s.length+1);for(o=0;o<s.length;o++)i[o]=parseInt(s[o]);if(i[s.length]=255,y){var a=new y([t.buffer,i.buffer,e]);r(null,a)}})},function(e,t){return r(new y(t))})},t.decodePayloadAsBinary=function(e,r,n){"function"==typeof r&&(n=r,r=null);for(var o=e,s=[];o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],p="",h=1;255!==a[h];h++){if(p.length>310)return n(l,0,1);p+=a[h]}o=i(o,2+p.length),p=parseInt(p);var u=i(o,0,p);if(c)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(e){var f=new Uint8Array(u);u="";for(h=0;h<f.length;h++)u+=String.fromCharCode(f[h])}s.push(u),o=i(o,p)}var d=s.length;s.forEach(function(e,o){n(t.decodePacket(e,r,!0),o,d)})}}}]);
//# sourceMappingURL=bundle.npm.engine.io-client.8d0a60de561e07e85ff8.js.map