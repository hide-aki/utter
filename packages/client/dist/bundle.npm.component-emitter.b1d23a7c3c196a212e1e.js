(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"6eBv":function(t,e,s){function i(t){if(t)return function(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}(t)}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function s(){this.off(t,s),e.apply(this,arguments)}return s.fn=e,this.on(t,s),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n=0;n<i.length;n++)if((s=i[n])===e||s.fn===e){i.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),s=this._callbacks["$"+t];if(s)for(var i=0,n=(s=s.slice(0)).length;i<n;++i)s[i].apply(this,e);return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}}}]);
//# sourceMappingURL=bundle.npm.component-emitter.b1d23a7c3c196a212e1e.js.map