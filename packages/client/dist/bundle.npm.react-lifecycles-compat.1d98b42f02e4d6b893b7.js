(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{DTbF:function(t,e,n){"use strict";function o(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=t&&this.setState(t)}function p(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!=n?n:null}.bind(this))}function i(t,e){try{var n=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function l(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof e.getSnapshotBeforeUpdate)return t;var n=null,l=null,r=null;if("function"==typeof e.componentWillMount?n="componentWillMount":"function"==typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof e.componentWillReceiveProps?l="componentWillReceiveProps":"function"==typeof e.UNSAFE_componentWillReceiveProps&&(l="UNSAFE_componentWillReceiveProps"),"function"==typeof e.componentWillUpdate?r="componentWillUpdate":"function"==typeof e.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==l||null!==r){var s=t.displayName||t.name,a="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==l?"\n  "+l:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof t.getDerivedStateFromProps&&(e.componentWillMount=o,e.componentWillReceiveProps=p),"function"==typeof e.getSnapshotBeforeUpdate){if("function"!=typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=i;var c=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,t,e,o)}}return t}n.r(e),n.d(e,"polyfill",function(){return l}),o.__suppressDeprecationWarning=!0,p.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=bundle.npm.react-lifecycles-compat.1d98b42f02e4d6b893b7.js.map