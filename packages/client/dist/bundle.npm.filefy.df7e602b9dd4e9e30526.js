(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{Jy3M:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.prototype.exportFile=function(t,e,o){if(window.navigator.msSaveOrOpenBlob){var n=new Blob([o]);window.navigator.msSaveOrOpenBlob(n,e)}var r="data:text/"+t+";charset=utf-8,\ufeff"+encodeURIComponent(o),i=document.createElement("a");i.setAttribute("href",r),i.setAttribute("download",e),document.body.appendChild(i),i.click()},t}();e.default=n},UMD6:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("sjSY");e.CsvBuilder=n.default},sjSY:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){var o=t.call(this)||this;return o._FileName="",o._Delimeter=",",o._Columns=[],o._RowData=[],o._FileName=e,o}return r(e,t),e.prototype.setColumns=function(t){return this._Columns=t,this},e.prototype.setDelimeter=function(t){return this._Delimeter=t,this},e.prototype.addRow=function(t){return this._RowData.push(t),this},e.prototype.addRows=function(t){return this._RowData=this._RowData.concat(t),this},e.prototype.escapeCell=function(t){return"string"==typeof t?'"'+t.replace('"','""')+'"':t},e.prototype.getRowData=function(t){return t.map(this.escapeCell).join(this._Delimeter)},e.prototype.exportFile=function(){var e=this,o=[];this._Columns&&this._Columns.length>0&&o.push(this.getRowData(this._Columns)),this._RowData.forEach(function(t){o.push(e.getRowData(t))});var n=o.join("\r\n");t.prototype.exportFile.call(this,"csv",this._FileName,n)},e}(i(o("Jy3M")).default);e.default=s}}]);
//# sourceMappingURL=bundle.npm.filefy.df7e602b9dd4e9e30526.js.map