(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{kEn3:function(e,r,n){e.exports=t;var o=n("jxal").EventEmitter;function t(){o.call(this)}n("oJKg")(t,o),t.Readable=n("Q2Ao"),t.Writable=n("VVPH"),t.Duplex=n("g5ht"),t.Transform=n("JD30"),t.PassThrough=n("9weu"),t.Stream=t,t.prototype.pipe=function(e,r){var n=this;function t(r){e.writable&&!1===e.write(r)&&n.pause&&n.pause()}function i(){n.readable&&n.resume&&n.resume()}n.on("data",t),e.on("drain",i),e._isStdio||r&&!1===r.end||(n.on("end",a),n.on("close",u));var s=!1;function a(){s||(s=!0,e.end())}function u(){s||(s=!0,"function"==typeof e.destroy&&e.destroy())}function c(e){if(d(),0===o.listenerCount(this,"error"))throw e}function d(){n.removeListener("data",t),e.removeListener("drain",i),n.removeListener("end",a),n.removeListener("close",u),n.removeListener("error",c),e.removeListener("error",c),n.removeListener("end",d),n.removeListener("close",d),e.removeListener("close",d)}return n.on("error",c),e.on("error",c),n.on("end",d),n.on("close",d),e.on("close",d),e.emit("pipe",n),e}}}]);
//# sourceMappingURL=bundle.npm.stream-browserify.3b782e73db299f6d82ef.js.map