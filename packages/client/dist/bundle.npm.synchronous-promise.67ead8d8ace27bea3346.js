(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{LJYB:function(t,n,e){"use strict";function i(t){return Array.prototype.slice.apply(t)}var s="pending";function r(t){this.status=s,this._continuations=[],this._parent=null,this._paused=!1,t&&t.call(this,this._continueWith.bind(this),this._failWith.bind(this))}function o(t){return t&&"function"==typeof t.then}if(r.prototype={then:function(t,n){var e=r.unresolved()._setParent(this);if(this._isRejected()){if(this._paused)return this._continuations.push({promise:e,nextFn:t,catchFn:n}),e;if(n)try{var i=n(this._error);return o(i)?(this._chainPromiseData(i,e),e):r.resolve(i)._setParent(this)}catch(t){return r.reject(t)._setParent(this)}return r.reject(this._error)._setParent(this)}return this._continuations.push({promise:e,nextFn:t,catchFn:n}),this._runResolutions(),e},catch:function(t){if(this._isResolved())return r.resolve(this._data)._setParent(this);var n=r.unresolved()._setParent(this);return this._continuations.push({promise:n,catchFn:t}),this._runRejections(),n},pause:function(){return this._paused=!0,this},resume:function(){var t=this._findFirstPaused();return t&&(t._paused=!1,t._runResolutions(),t._runRejections()),this},_findAncestry:function(){return this._continuations.reduce(function(t,n){if(n.promise){var e={promise:n.promise,children:n.promise._findAncestry()};t.push(e)}return t},[])},_setParent:function(t){if(this._parent)throw new Error("parent already set");return this._parent=t,this},_continueWith:function(t){var n=this._findFirstPending();n&&(n._data=t,n._setResolved())},_findFirstPending:function(){return this._findFirstAncestor(function(t){return t._isPending&&t._isPending()})},_findFirstPaused:function(){return this._findFirstAncestor(function(t){return t._paused})},_findFirstAncestor:function(t){for(var n,e=this;e;)t(e)&&(n=e),e=e._parent;return n},_failWith:function(t){var n=this._findFirstPending();n&&(n._error=t,n._setRejected())},_takeContinuations:function(){return this._continuations.splice(0,this._continuations.length)},_runRejections:function(){if(!this._paused&&this._isRejected()){var t=this._error,n=this._takeContinuations(),e=this;n.forEach(function(n){if(n.catchFn)try{var i=n.catchFn(t);e._handleUserFunctionResult(i,n.promise)}catch(t){t.message;n.promise.reject(t)}else n.promise.reject(t)})}},_runResolutions:function(){if(!this._paused&&this._isResolved()){var t=this._takeContinuations();if(o(this._data))return this._handleWhenResolvedDataIsPromise(this._data);var n=this._data,e=this;t.forEach(function(t){if(t.nextFn)try{var i=t.nextFn(n);e._handleUserFunctionResult(i,t.promise)}catch(n){e._handleResolutionError(n,t)}else t.promise&&t.promise.resolve(n)})}},_handleResolutionError:function(t,n){if(this._setRejected(),n.catchFn)try{return void n.catchFn(t)}catch(n){t=n}n.promise&&n.promise.reject(t)},_handleWhenResolvedDataIsPromise:function(t){var n=this;return t.then(function(t){n._data=t,n._runResolutions()}).catch(function(t){n._error=t,n._setRejected(),n._runRejections()})},_handleUserFunctionResult:function(t,n){o(t)?this._chainPromiseData(t,n):n.resolve(t)},_chainPromiseData:function(t,n){t.then(function(t){n.resolve(t)}).catch(function(t){n.reject(t)})},_setResolved:function(){this.status="resolved",this._paused||this._runResolutions()},_setRejected:function(){this.status="rejected",this._paused||this._runRejections()},_isPending:function(){return this.status===s},_isResolved:function(){return"resolved"===this.status},_isRejected:function(){return"rejected"===this.status}},r.resolve=function(t){return new r(function(n,e){o(t)?t.then(function(t){n(t)}).catch(function(t){e(t)}):n(t)})},r.reject=function(t){return new r(function(n,e){e(t)})},r.unresolved=function(){return new r(function(t,n){this.resolve=t,this.reject=n})},r.all=function(){var t=i(arguments);return Array.isArray(t[0])&&(t=t[0]),t.length?new r(function(n,e){var i=[],s=0,o=!1;t.forEach(function(u,c){r.resolve(u).then(function(e){i[c]=e,(s+=1)===t.length&&n(i)}).catch(function(t){!function(t){o||(o=!0,e(t))}(t)})})}):r.resolve([])},Promise===r)throw new Error("Please use SynchronousPromise.installGlobally() to install globally");var u=Promise;r.installGlobally=function(t){if(Promise===r)return t;var n=function(t){if(void 0===t||t.__patched)return t;var n=t;return(t=function(){n.apply(this,i(arguments))}).__patched=!0,t}(t);return Promise=r,n},r.uninstallGlobally=function(){Promise===r&&(Promise=u)},t.exports={SynchronousPromise:r}},h0Wa:function(t,n,e){"use strict";function i(t){return Array.prototype.slice.apply(t)}var s="pending";function r(t){this.status=s,this._continuations=[],this._parent=null,this._paused=!1,t&&t.call(this,this._continueWith.bind(this),this._failWith.bind(this))}function o(t){return t&&"function"==typeof t.then}if(r.prototype={then:function(t,n){var e=r.unresolved()._setParent(this);if(this._isRejected()){if(this._paused)return this._continuations.push({promise:e,nextFn:t,catchFn:n}),e;if(n)try{var i=n(this._error);return o(i)?(this._chainPromiseData(i,e),e):r.resolve(i)._setParent(this)}catch(t){return r.reject(t)._setParent(this)}return r.reject(this._error)._setParent(this)}return this._continuations.push({promise:e,nextFn:t,catchFn:n}),this._runResolutions(),e},catch:function(t){if(this._isResolved())return r.resolve(this._data)._setParent(this);var n=r.unresolved()._setParent(this);return this._continuations.push({promise:n,catchFn:t}),this._runRejections(),n},pause:function(){return this._paused=!0,this},resume:function(){var t=this._findFirstPaused();return t&&(t._paused=!1,t._runResolutions(),t._runRejections()),this},_findAncestry:function(){return this._continuations.reduce(function(t,n){if(n.promise){var e={promise:n.promise,children:n.promise._findAncestry()};t.push(e)}return t},[])},_setParent:function(t){if(this._parent)throw new Error("parent already set");return this._parent=t,this},_continueWith:function(t){var n=this._findFirstPending();n&&(n._data=t,n._setResolved())},_findFirstPending:function(){return this._findFirstAncestor(function(t){return t._isPending&&t._isPending()})},_findFirstPaused:function(){return this._findFirstAncestor(function(t){return t._paused})},_findFirstAncestor:function(t){for(var n,e=this;e;)t(e)&&(n=e),e=e._parent;return n},_failWith:function(t){var n=this._findFirstPending();n&&(n._error=t,n._setRejected())},_takeContinuations:function(){return this._continuations.splice(0,this._continuations.length)},_runRejections:function(){if(!this._paused&&this._isRejected()){var t=this._error,n=this._takeContinuations(),e=this;n.forEach(function(n){if(n.catchFn)try{var i=n.catchFn(t);e._handleUserFunctionResult(i,n.promise)}catch(t){t.message;n.promise.reject(t)}else n.promise.reject(t)})}},_runResolutions:function(){if(!this._paused&&this._isResolved()){var t=this._takeContinuations();if(o(this._data))return this._handleWhenResolvedDataIsPromise(this._data);var n=this._data,e=this;t.forEach(function(t){if(t.nextFn)try{var i=t.nextFn(n);e._handleUserFunctionResult(i,t.promise)}catch(n){e._handleResolutionError(n,t)}else t.promise&&t.promise.resolve(n)})}},_handleResolutionError:function(t,n){if(this._setRejected(),n.catchFn)try{return void n.catchFn(t)}catch(n){t=n}n.promise&&n.promise.reject(t)},_handleWhenResolvedDataIsPromise:function(t){var n=this;return t.then(function(t){n._data=t,n._runResolutions()}).catch(function(t){n._error=t,n._setRejected(),n._runRejections()})},_handleUserFunctionResult:function(t,n){o(t)?this._chainPromiseData(t,n):n.resolve(t)},_chainPromiseData:function(t,n){t.then(function(t){n.resolve(t)}).catch(function(t){n.reject(t)})},_setResolved:function(){this.status="resolved",this._paused||this._runResolutions()},_setRejected:function(){this.status="rejected",this._paused||this._runRejections()},_isPending:function(){return this.status===s},_isResolved:function(){return"resolved"===this.status},_isRejected:function(){return"rejected"===this.status}},r.resolve=function(t){return new r(function(n,e){o(t)?t.then(function(t){n(t)}).catch(function(t){e(t)}):n(t)})},r.reject=function(t){return new r(function(n,e){e(t)})},r.unresolved=function(){return new r(function(t,n){this.resolve=t,this.reject=n})},r.all=function(){var t=i(arguments);return Array.isArray(t[0])&&(t=t[0]),t.length?new r(function(n,e){var i=[],s=0,o=!1;t.forEach(function(u,c){r.resolve(u).then(function(e){i[c]=e,(s+=1)===t.length&&n(i)}).catch(function(t){!function(t){o||(o=!0,e(t))}(t)})})}):r.resolve([])},Promise===r)throw new Error("Please use SynchronousPromise.installGlobally() to install globally");var u=Promise;r.installGlobally=function(t){if(Promise===r)return t;var n=function(t){if(void 0===t||t.__patched)return t;var n=t;return(t=function(){n.apply(this,i(arguments))}).__patched=!0,t}(t);return Promise=r,n},r.uninstallGlobally=function(){Promise===r&&(Promise=u)},t.exports={SynchronousPromise:r}}}]);
//# sourceMappingURL=bundle.npm.synchronous-promise.67ead8d8ace27bea3346.js.map