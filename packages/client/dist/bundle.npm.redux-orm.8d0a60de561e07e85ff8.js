(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{WzOx:function(e,t,n){"use strict";var r=n("7Bu7"),i=n.n(r),s=n("z9G0"),a=n.n(s),o=n("TBCP"),u=n.n(o),l=n("Yjcn"),d=n.n(l),c=n("yMGJ"),h=n.n(c),f=n("nRQ0"),m=n.n(f),v=n("fx7Y"),y=n.n(v),p=n("n/KI"),g=n.n(p),w=n("nV0A"),k=n.n(w),b=n("oIRZ"),M=n.n(b),N=n("lVi8"),_=n.n(N),F=n("PtB1"),S=n.n(F),E=n("sAvI"),D=n.n(E),C=n("HJBN"),T=n.n(C),A="REDUX_ORM_UPDATE",I="REDUX_ORM_DELETE",R="REDUX_ORM_CREATE",B="REDUX_ORM_FILTER",O="REDUX_ORM_EXCLUDE",x="SUCCESS";function P(e){return("function"==typeof console.warn?console.warn.bind(console):console.log.bind(console))(e)}function j(e,t){return e+((n=t).charAt(0).toUpperCase()+n.slice(1));var n}function U(e){return"from"+e+"Id"}function q(e){return"to"+e+"Id"}function V(e){return function(){var t;return(t=this.getQuerySet())[e].apply(t,arguments)}}function Q(e){return function(){return this.getQuerySet()[e]}}function L(e,t){var n=t.sharedMethods.slice();!function(e,t){for(var n=e;n!==Function.prototype;)t(n),n=k()(n)}(t,function(t){for(var r=0;r<n.length;r++){var i=!1,s=n[r],a=g()(t.prototype,s);void 0!==a&&(void 0!==a.get?(a.get=Q(s),y()(e,s,a),i=!0):"function"==typeof a.value&&(e[s]=V(s),i=!0)),i&&n.splice(r--,1)}})}function X(e){return null!=e&&"function"==typeof e.getId?e.getId():e}function G(e,t){var n=D()(e,t),r=T()(e,n),i=T()(t,n);return r.length||i.length?{delete:r,add:i}:null}S.a.getBatchToken;function Y(e,t){var n=e.type,r=e.payload;if(n!==B)return!1;if("object"!==(void 0===r?"undefined":i()(r)))return!1;if(!r.hasOwnProperty(t))return!1;var s=r[t];return null!==s&&void 0!==s}var z=function(){function e(t,n,r){u()(this,e),a()(this,{modelClass:t,clauses:n||[]}),this._opts=r}return d()(e,[{key:"_new",value:function(e,t){var n=a()({},this._opts,t);return new this.constructor(this.modelClass,e,n)}},{key:"toString",value:function(){var e=this;return this._evaluate(),"QuerySet contents:\n    - "+this.rows.map(function(t){var n=t.id;return e.modelClass.withId(n).toString()}).join("\n    - ")}},{key:"toRefArray",value:function(){return this._evaluate()}},{key:"toModelArray",value:function(){var e=this.modelClass;return this._evaluate().map(function(t){return new e(t)})}},{key:"count",value:function(){return this._evaluate(),this.rows.length}},{key:"exists",value:function(){return Boolean(this.count())}},{key:"at",value:function(e){var t=this.modelClass,n=this._evaluate();if(e>=0&&e<n.length)return new t(n[e])}},{key:"first",value:function(){return this.at(0)}},{key:"last",value:function(){var e=this._evaluate();return this.at(e.length-1)}},{key:"all",value:function(){return this._new(this.clauses)}},{key:"filter",value:function(e){var t="object"===(void 0===e?"undefined":i()(e))?h()(e,X):e,n={type:B,payload:t};return this._new(this.clauses.concat(n))}},{key:"exclude",value:function(e){var t="object"===(void 0===e?"undefined":i()(e))?h()(e,X):e,n={type:O,payload:t};return this._new(this.clauses.concat(n))}},{key:"_evaluate",value:function(){if(void 0===this.modelClass.session)throw new Error(["Tried to query the "+this.modelClass.modelName+" model's table without a session. ","Create a session using `session = orm.session()` and use ",'`session["'+this.modelClass.modelName+'"]` for querying instead.'].join(""));if(!this._evaluated){var e=this.modelClass,t=e.session,n={table:e.modelName,clauses:this.clauses};this.rows=t.query(n).rows,this._evaluated=!0}return this.rows}},{key:"orderBy",value:function(e,t){var n={type:"REDUX_ORM_ORDER_BY",payload:[e,t]};return this._new(this.clauses.concat(n))}},{key:"update",value:function(e){var t=this.modelClass,n=t.session,r=t.modelName;n.applyUpdate({action:A,query:{table:r,clauses:this.clauses},payload:e}),this._evaluated=!1}},{key:"delete",value:function(){var e=this.modelClass,t=e.session,n=e.modelName;this.toModelArray().forEach(function(e){return e._onDelete()}),t.applyUpdate({action:I,query:{table:n,clauses:this.clauses}}),this._evaluated=!1}},{key:"map",value:function(){throw new Error("`QuerySet.prototype.map` has been removed. Call `.toModelArray()` or `.toRefArray()` first to map.")}},{key:"forEach",value:function(){throw new Error("`QuerySet.prototype.forEach` has been removed. Call `.toModelArray()` or `.toRefArray()` first to iterate.")}},{key:"withModels",get:function(){throw new Error("`QuerySet.prototype.withModels` has been removed. Use `.toModelArray()` or predicate functions that instantiate Models from refs, e.g. `new Model(ref)`.")}},{key:"withRefs",get:function(){P("`QuerySet.prototype.withRefs` has been deprecated. Query building operates on refs only now.")}}],[{key:"addSharedMethod",value:function(e){this.sharedMethods=this.sharedMethods.concat(e)}}]),e}();z.sharedMethods=["count","at","all","last","first","filter","exclude","orderBy","update","delete"];var H=z,J=n("jcxm"),K=n.n(J),W=n("p4we"),Z=n.n(W),$=n("WoSP"),ee=n.n($),te=n("d+lS"),ne=n.n(te),re=n("xcG9"),ie=n.n(re),se=n("K3pB"),ae=n.n(se),oe=n("1XIa"),ue=n.n(oe),le=function(){function e(t,n,r,i,s){var a=this;u()(this,e),this.schema=t,this.db=n,this.state=r||n.getEmptyState(),this.initialState=this.state,this.withMutations=!!i,this.batchToken=s||Object(F.getBatchToken)(),this.modelData={},this.models=t.getModelClasses(),this.sessionBoundModels=this.models.map(function(e){function t(){return ue()(e,arguments,t)}return ae()(t.prototype,e.prototype),ae()(t,e),y()(a,e.modelName,{get:function(){return t}}),t.connect(a),t})}return d()(e,[{key:"getDataForModel",value:function(e){return this.modelData[e]||(this.modelData[e]={}),this.modelData[e]}},{key:"markAccessed",value:function(e,t){var n=this.getDataForModel(e);n.accessedInstances||(n.accessedInstances={}),t.forEach(function(e){n.accessedInstances[e]=!0})}},{key:"markFullTableScanned",value:function(e){this.getDataForModel(e).fullTableScanned=!0}},{key:"applyUpdate",value:function(e){var t=this._getTransaction(e),n=this.db.update(e,t,this.state),r=n.status,i=n.state,s=n.payload;if(r!==x)throw new Error("Applying update failed with status "+r+". Payload: "+s);return this.state=i,s}},{key:"query",value:function(e){var t=this.db.query(e,this.state);return this._markAccessedByQuery(e,t),t}},{key:"_getTransaction",value:function(e){var t=this.withMutations,n=e.action,r=this.batchToken;return[A,I].includes(n)&&(r=Object(F.getBatchToken)()),{batchToken:r,withMutations:t}}},{key:"_markAccessedByQuery",value:function(e,t){var n=e.table,r=e.clauses,i=t.rows,s=this[n].idAttribute,a=new ie.a(i.map(function(e){return e[s]}));r.some(function(e){if(!Y(e,s))return!1;var t=e.payload[s];return a.add(t),!0})?this.markAccessed(n,a):this.markFullTableScanned(n)}},{key:"getNextState",value:function(){return P("`Session.prototype.getNextState` has been deprecated. Access the `Session.prototype.state` property instead."),this.state}},{key:"reduce",value:function(){throw new Error("`Session.prototype.reduce` has been removed. The Redux integration API is now decoupled from ORM and Session - see the 0.9 migration guide in the GitHub repo.")}},{key:"accessedModelInstances",get:function(){var e=this;return this.sessionBoundModels.filter(function(t){var n=t.modelName;return!!e.getDataForModel(n).accessedInstances}).reduce(function(t,n){var r=n.modelName;return Z()({},t,ee()({},r,e.getDataForModel(r).accessedInstances))},{})}},{key:"fullTableScannedModels",get:function(){var e=this;return this.sessionBoundModels.filter(function(t){var n=t.modelName;return!!e.getDataForModel(n).fullTableScanned}).map(function(e){return e.modelName})}}]),e}(),de=n("Q+PB"),ce=n.n(de),he=n("ks7p"),fe=n.n(he),me=n("foaz"),ve=n.n(me),ye=n("hJLR"),pe=n.n(ye);function ge(e,t){return{get:function(){var n=this.getClass().session[t],r=this._fields[e];return n.withId(r)},set:function(t){this.update(ee()({},e,X(t)))}}}function we(e,t,n,r,i){return{get:function(){var s=this.getClass().session,a=s[e],o=s[t],u=s[n],l=i?o:a,d=i?a:o,c=i?r.to:r.from,h=i?r.from:r.to,f=this.getId(),m=u.filter(ee()({},c,f)),v=new ie.a(m.toRefArray().map(function(e){return e[h]})),y=d.filter(function(e){return v.has(e[d.idAttribute])});return y.add=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=new ie.a(t.map(X)),i=m.filter(function(e){return r.has(e[h])});if(i.exists()){var s=i.toRefArray().map(function(e){return e[h]});throw new Error("Tried to add already existing "+d.modelName+" id(s) "+s+" to the "+l.modelName+" instance with id "+f)}r.forEach(function(e){var t;return u.create((t={},ee()(t,h,e),ee()(t,c,f),t))})},y.clear=function(){m.delete()},y.remove=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=new ie.a(t.map(X)),i=m.filter(function(e){return r.has(e[h])});if(i.count()!==r.size){var s=i.toRefArray().map(function(e){return e[h]}),a=[].concat(K()(r)).filter(function(e){return!_()(s,e)});throw new Error("Tried to delete non-existing "+d.modelName+" id(s) "+a+" from the "+l.modelName+" instance with id "+f)}i.delete()},y},set:function(){throw new Error("Tried setting a M2M field. Please use the related QuerySet methods add, remove and clear.")}}}var ke=function(e){function t(){return u()(this,t),fe()(this,(t.__proto__||k()(t)).apply(this,arguments))}return ve()(t,e),d()(t,[{key:"installForwardsDescriptor",value:function(){y()(this.model.prototype,this.fieldName,this.field.createForwardsDescriptor(this.fieldName,this.model,this.toModel,this.throughModel))}},{key:"installForwardsVirtualField",value:function(){this.model.virtualFields[this.fieldName]=this.field.createForwardsVirtualField(this.fieldName,this.model,this.toModel,this.throughModel)}},{key:"installBackwardsDescriptor",value:function(){var e,t,n;if(g()(this.toModel.prototype,this.backwardsFieldName))throw new Error((e=this.model.modelName,t=this.fieldName,n=this.toModel.modelName,["Reverse field "+this.backwardsFieldName+" already defined"," on model "+n+". To fix, set a custom related"," name on "+e+"."+t+"."].join("")));y()(this.toModel.prototype,this.backwardsFieldName,this.field.createBackwardsDescriptor(this.fieldName,this.model,this.toModel,this.throughModel))}},{key:"installBackwardsVirtualField",value:function(){this.toModel.virtualFields[this.backwardsFieldName]=this.field.createBackwardsVirtualField(this.fieldName,this.model,this.toModel,this.throughModel)}}]),t}(function(){function e(t){u()(this,e),this.field=t.field,this.fieldName=t.fieldName,this.model=t.model,this.orm=t.orm,this.field.references(this.model)&&(this.field.toModelName="this")}return d()(e,[{key:"run",value:function(){this.field.installsForwardsDescriptor&&this.installForwardsDescriptor(),this.field.installsForwardsVirtualField&&this.installForwardsVirtualField(),this.field.installsBackwardsDescriptor&&this.installBackwardsDescriptor(),this.field.installsBackwardsVirtualField&&this.installBackwardsVirtualField()}},{key:"toModel",get:function(){if(void 0===this._toModel){var e=this.field.toModelName;this._toModel=e?"this"===e?this.model:this.orm.get(e):null}return this._toModel}},{key:"throughModel",get:function(){if(void 0===this._throughModel){var e=this.field.getThroughModelName(this.fieldName,this.model);this._throughModel=e?this.orm.get(e):null}return this._throughModel}},{key:"backwardsFieldName",get:function(){return this.field.getBackwardsFieldName(this.model)}}]),e}()),be=function(){function e(){u()(this,e)}return d()(e,[{key:"getClass",value:function(){return this.constructor}},{key:"references",value:function(e){return!1}},{key:"getThroughModelName",value:function(e,t){return null}},{key:"installerClass",get:function(){return ke}},{key:"installsForwardsDescriptor",get:function(){return!0}},{key:"installsForwardsVirtualField",get:function(){return!1}},{key:"installsBackwardsDescriptor",get:function(){return!1}},{key:"installsBackwardsVirtualField",get:function(){return!1}}]),e}(),Me=function(e){function t(e){u()(this,t);var n=fe()(this,(t.__proto__||k()(t)).call(this,e));return n.opts=e||{},n.opts.hasOwnProperty("getDefault")&&(n.getDefault=n.opts.getDefault),n}return ve()(t,e),d()(t,[{key:"createForwardsDescriptor",value:function(e,t){return function(e){return{get:function(){return this._fields[e]},set:function(t){return this.set(e,t)},enumerable:!0,configurable:!0}}(e)}}]),t}(be),Ne=function(e){function t(){var e;u()(this,t);for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];var a=fe()(this,(e=t.__proto__||k()(t)).call.apply(e,[this].concat(r)));if(1===r.length&&"object"===i()(r[0])){var o=r[0];a.toModelName=o.to,a.relatedName=o.relatedName,a.through=o.through,a.throughFields=o.throughFields,a.as=o.as}else a.toModelName=r[0],a.relatedName=r[1];return a}return ve()(t,e),d()(t,[{key:"getBackwardsFieldName",value:function(e){return this.relatedName||e.modelName.toLowerCase()+"Set"}},{key:"createBackwardsVirtualField",value:function(e,t,n,r){return new(this.getClass())(t.modelName,e)}},{key:"references",value:function(e){return this.toModelName===e.modelName}},{key:"installsBackwardsVirtualField",get:function(){return!0}},{key:"installsBackwardsDescriptor",get:function(){return!0}},{key:"installerClass",get:function(){return function(e){function t(){return u()(this,t),fe()(this,(t.__proto__||k()(t)).apply(this,arguments))}return ve()(t,e),d()(t,[{key:"installForwardsDescriptor",value:function(){y()(this.model.prototype,this.field.as||this.fieldName,this.field.createForwardsDescriptor(this.fieldName,this.model,this.toModel,this.throughModel))}}]),t}(ke)}}]),t}(be),_e=function(e){function t(){return u()(this,t),fe()(this,(t.__proto__||k()(t)).apply(this,arguments))}return ve()(t,e),d()(t,[{key:"createForwardsDescriptor",value:function(e,t,n,r){return ge(e,n.modelName)}},{key:"createBackwardsDescriptor",value:function(e,t,n,r){return i=e,s=t.modelName,{get:function(){return this.getClass().session[s].filter(ee()({},i,this.getId()))},set:function(){throw new Error("Can't mutate a reverse many-to-one relation.")}};var i,s}}]),t}(Ne),Fe=function(e){function t(){return u()(this,t),fe()(this,(t.__proto__||k()(t)).apply(this,arguments))}return ve()(t,e),d()(t,[{key:"getDefault",value:function(){return[]}},{key:"getThroughModelName",value:function(e,t){return this.through||j(t.modelName,e)}},{key:"createForwardsDescriptor",value:function(e,t,n,r){return we(t.modelName,n.modelName,r.modelName,this.getThroughFields(e,t,n,r),!1)}},{key:"createBackwardsDescriptor",value:function(e,t,n,r){return we(t.modelName,n.modelName,r.modelName,this.getThroughFields(e,t,n,r),!0)}},{key:"createBackwardsVirtualField",value:function(e,t,n,r){return new(this.getClass())({to:t.modelName,relatedName:e,through:r.modelName,throughFields:this.getThroughFields(e,t,n,r)})}},{key:"createForwardsVirtualField",value:function(e,t,n,r){return new(this.getClass())({to:n.modelName,relatedName:e,through:this.through,throughFields:this.getThroughFields(e,t,n,r)})}},{key:"getThroughFields",value:function(e,t,n,r){if(this.throughFields){var i=ce()(this.throughFields,2),s=i[0],a=i[1],o=r.fields[s];return{to:o.references(n)?s:a,from:o.references(n)?a:s}}if(t.modelName===n.modelName)return{to:q(n.modelName),from:U(t.modelName)};var u=function(e){return pe()(r.fields,function(t){return t.references(e)})};return{to:u(n),from:u(t)}}},{key:"installsForwardsVirtualField",get:function(){return!0}}]),t}(Ne),Se=function(e){function t(){return u()(this,t),fe()(this,(t.__proto__||k()(t)).apply(this,arguments))}return ve()(t,e),d()(t,[{key:"getBackwardsFieldName",value:function(e){return this.relatedName||e.modelName.toLowerCase()}},{key:"createForwardsDescriptor",value:function(e,t,n,r){return function(){return ge.apply(void 0,arguments)}(e,n.modelName)}},{key:"createBackwardsDescriptor",value:function(e,t,n,r){return i=e,s=t.modelName,{get:function(){return this.getClass().session[s].get(ee()({},i,this.getId()))},set:function(){throw new Error("Can't mutate a reverse one-to-one relation.")}};var i,s}}]),t}(Ne);function Ee(e){return new Me(e)}function De(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(_e,[null].concat(t)))}function Ce(e){var t=e.getClass(),n=t.idAttribute;return{table:t.modelName,clauses:[{type:B,payload:ee()({},n,e.getId())}]}}var Te=function(){function e(t){u()(this,e),this._initFields(t)}return d()(e,[{key:"_initFields",value:function(e){var t=this;this._fields=Z()({},e),M()(e,function(e,n){n in t||y()(t,n,{get:function(){return t._fields[n]},set:function(e){return t.set(n,e)},configurable:!0,enumerable:!0})})}},{key:"getClass",value:function(){return this.constructor}},{key:"getId",value:function(){return this._fields[this.getClass().idAttribute]}},{key:"toString",value:function(){var e=this,t=this.getClass();return t.modelName+": {"+m()(t.fields).map(function(n){return t.fields[n]instanceof Fe?n+": ["+e[n].toModelArray().map(function(e){return e.getId()}).join(", ")+"]":n+": "+e._fields[n]}).join(", ")+"}"}},{key:"equals",value:function(e){return t=this._fields,n=e._fields,r=0,M()(t,function(e,t){if(!n.hasOwnProperty(t)||n[t]!==e)return!1;r++}),r===m()(n).length;var t,n,r}},{key:"set",value:function(e,t){this.update(ee()({},e,t))}},{key:"update",value:function(e){var t=this,n=this.getClass();if(void 0===n.session)throw new Error(["Tried to update a "+n.modelName+" model instance without a session. ","You cannot call `.update` on an instance that you did not receive from the database."].join(""));var r=Z()({},e),i=n.fields,s=n.virtualFields,a={};for(var o in r){if(i.hasOwnProperty(o)){var u=i[o];u instanceof _e||u instanceof Se?r[o]=X(r[o]):u instanceof Fe&&(a[o]=r[o],delete r[o])}else if(s.hasOwnProperty(o)){s[o]instanceof Fe&&(a[o]=r[o],delete r[o])}}var l=Z()({},this._fields,r),d=new n(this._fields);d._initFields(l),d._refreshMany2Many(a);var c=m()(a).every(function(e){return!G(t[e],d[e])}),h=this.equals(d);h||this._initFields(l),c||this._refreshMany2Many(a),h&&c||n.session.applyUpdate({action:A,query:Ce(this),payload:r})}},{key:"refreshFromState",value:function(){this._initFields(this.ref)}},{key:"delete",value:function(){var e=this.getClass();if(void 0===e.session)throw new Error(["Tried to delete a "+e.modelName+" model instance without a session. ","You cannot call `.delete` on an instance that you did not receive from the database."].join(""));this._onDelete(),e.session.applyUpdate({action:I,query:Ce(this)})}},{key:"_refreshMany2Many",value:function(e){var t=this,n=this.getClass(),r=n.fields,i=n.virtualFields,s=n.modelName;m()(e).forEach(function(a){var o=!r.hasOwnProperty(a),u=i[a],l=e[a];if(!Array.isArray(l))throw new TypeError("Failed to resolve many-to-many relationship: "+s+"["+a+"] must be an array (passed: "+l+")");var d=l.map(X),c=ne()(d);if(d.length!==c.length)throw new Error('Found duplicate id(s) when passing "'+d+'" to '+n.modelName+"."+a+" value");var h=u.through||j(n.modelName,a),f=n.session[h],m=void 0,v=void 0;if(o){var y=u.throughFields;v=y.from,m=y.to}else{var p=u.throughFields;m=p.from,v=p.to}var g=G(f.filter(function(e){return e[m]===t[n.idAttribute]}).toRefArray().map(function(e){return e[v]}),d);if(g){var w,k,b=g.delete,M=g.add;if(b.length>0)(w=t[a]).remove.apply(w,K()(b));if(M.length>0)(k=t[a]).add.apply(k,K()(M))}})}},{key:"_onDelete",value:function(){var e=this.getClass().virtualFields;for(var t in e){var n=e[t];if(n instanceof Fe)this[t].clear();else if(n instanceof _e){var r=this[t];r.exists()&&r.update(ee()({},n.relatedName,null))}else n instanceof Se&&null!==this[t]&&(this[t][n.relatedName]=null)}}},{key:"getNextState",value:function(){throw new Error("`Model.prototype.getNextState` has been removed. See the 0.9 migration guide on the GitHub repo.")}},{key:"ref",get:function(){var e=this.getClass();return e._findDatabaseRows(ee()({},e.idAttribute,this.getId()))[0]}}],[{key:"toString",value:function(){return"ModelClass: "+this.modelName}},{key:"options",value:function(){return{}}},{key:"markAccessed",value:function(e){if(void 0===this._session)throw new Error(["Tried to mark rows of the "+this.modelName+" model as accessed without a session. ","Create a session using `session = orm.session()` and call ",'`session["'+this.modelName+'"].markAccessed` instead.'].join(""));this.session.markAccessed(this.modelName,e)}},{key:"markFullTableScanned",value:function(){if(void 0===this._session)throw new Error(["Tried to mark the "+this.modelName+" model as full table scanned without a session. ","Create a session using `session = orm.session()` and call ",'`session["'+this.modelName+'"].markFullTableScanned` instead.'].join(""));this.session.markFullTableScanned(this.modelName)}},{key:"connect",value:function(e){if(!(e instanceof le))throw new Error("A model can only be connected to instances of Session.");this._session=e}},{key:"getQuerySet",value:function(){return new(0,this.querySetClass)(this)}},{key:"invalidateClassCache",value:function(){this.isSetUp=void 0,this.virtualFields={}}},{key:"_getTableOpts",value:function(){return"function"==typeof this.backend?(P("`Model.backend` has been deprecated. Please rename to `.options`."),this.backend()):this.backend?(P("`Model.backend` has been deprecated. Please rename to `.options`."),this.backend):"function"==typeof this.options?this.options():this.options}},{key:"create",value:function(e){var t=this;if(void 0===this._session)throw new Error(["Tried to create a "+this.modelName+" model instance without a session. ","Create a session using `session = orm.session()` and call ",'`session["'+this.modelName+'"].create` instead.'].join(""));var n=Z()({},e),r={},i=m()(this.fields),s=m()(this.virtualFields);i.forEach(function(i){var s=t.fields[i],a=e.hasOwnProperty(i);if(s instanceof Fe)a&&(r[i]=e[i],delete n[i]);else if(a){var o=e[i];n[i]=X(o)}else s.getDefault&&(n[i]=s.getDefault())}),s.forEach(function(i){if(!r.hasOwnProperty(i)){var s=t.virtualFields[i];e.hasOwnProperty(i)&&s instanceof Fe&&(r[i]=e[i],delete n[i])}});var a=new this(this.session.applyUpdate({action:R,table:this.modelName,payload:n}));return a._refreshMany2Many(r),a}},{key:"upsert",value:function(e){if(void 0===this.session)throw new Error(["Tried to upsert a "+this.modelName+" model instance without a session. ","Create a session using `session = orm.session()` and call ",'`session["'+this.modelName+'"].upsert` instead.'].join(""));var t=this.idAttribute;if(e.hasOwnProperty(t)){var n=e[t];if(this.idExists(n)){var r=this.withId(n);return r.update(e),r}}return this.create(e)}},{key:"withId",value:function(e){return this.get(ee()({},this.idAttribute,e))}},{key:"idExists",value:function(e){return this.exists(ee()({},this.idAttribute,e))}},{key:"exists",value:function(e){if(void 0===this.session)throw new Error(["Tried to check if a "+this.modelName+" model instance exists without a session. ","Create a session using `session = orm.session()` and call ",'`session["'+this.modelName+'"].exists` instead.'].join(""));return Boolean(this._findDatabaseRows(e).length)}},{key:"get",value:function(e){var t=this._findDatabaseRows(e);if(0===t.length)return null;if(t.length>1)throw new Error("Expected to find a single row in `"+this.modelName+".get`. Found "+t.length+".");return new this(t[0])}},{key:"_findDatabaseRows",value:function(e){var t={table:this.modelName};return e&&(t.clauses=[{type:B,payload:e}]),this.session.query(t).rows}},{key:"hasId",value:function(e){return console.warn("`Model.hasId` has been deprecated. Please use `Model.idExists` instead."),this.idExists(e)}},{key:"idAttribute",get:function(){if(void 0===this._session)throw new Error(["Tried to get the "+this.modelName+" model's id attribute without a session. ","Create a session using `session = orm.session()` and access ",'`session["'+this.modelName+'"].idAttribute` instead.'].join(""));return this.session.db.describe(this.modelName).idAttribute}},{key:"session",get:function(){return this._session}},{key:"query",get:function(){return this.getQuerySet()}}]),e}();Te.fields={id:Ee()},Te.virtualFields={},Te.querySetClass=H;var Ae=Te,Ie=n("b1Ea"),Re=n.n(Ie),Be=n("j+bX"),Oe=n.n(Be),xe=n("xzHw"),Pe=n.n(xe),je=n("GHFj"),Ue=n.n(je),qe=n("TKCn"),Ve=n.n(qe),Qe={idAttribute:"id",arrName:"items",mapName:"itemsById"};var Le=function(){function e(t){u()(this,e),a()(this,Qe,t)}return d()(e,[{key:"accessId",value:function(e,t){return e[this.mapName][t]}},{key:"idExists",value:function(e,t){return e[this.mapName].hasOwnProperty(t)}},{key:"accessIdList",value:function(e){return e[this.arrName]}},{key:"accessList",value:function(e){var t=this;return e[this.arrName].map(function(n){return t.accessId(e,n)})}},{key:"getMaxId",value:function(e){return this.getMeta(e,"maxId")}},{key:"setMaxId",value:function(e,t,n){return this.setMeta(e,t,"maxId",n)}},{key:"nextId",value:function(e){return e+1}},{key:"query",value:function(e,t){var n=this;if(0===t.length)return this.accessList(e);var r=this.idAttribute;return Ve()(t,function(e){return Y(e,r)?1:(t=e.type,[B,O].includes(t)?2:3);var t}).reduce(function t(i,s){var a=s.type,o=s.payload;if(!i){if(Y(s,r)){var u=o[r];return n.idExists(e,u)?[n.accessId(e,u)]:[]}return t(n.accessList(e),s)}switch(a){case B:return Pe()(i,o);case O:return Oe()(i,o);case"REDUX_ORM_ORDER_BY":var l=ce()(o,2),d=l[0],c=l[1];return Ue()(i,d,c);default:return i}},void 0)}},{key:"getEmptyState",value:function(){var e;return e={},ee()(e,this.arrName,[]),ee()(e,this.mapName,{}),ee()(e,"meta",{}),e}},{key:"setMeta",value:function(e,t,n,r){var i=e.batchToken;return e.withMutations?S.a.mutable.setIn(["meta",n],r,t):S.a.batch.setIn(i,["meta",n],r,t)}},{key:"getMeta",value:function(e,t){return e.meta[t]}},{key:"insert",value:function(e,t,n){var r,i,s,a,o,u,l,d=e.batchToken,c=e.withMutations,h=n.hasOwnProperty(this.idAttribute),f=(s=this.getMaxId(t),a=n[this.idAttribute],u=void 0,l=void 0,void 0===(o=s)&&(o=-1),void 0===a?l=u=o+1:(u=Math.max(o+1,a),l=a),[u,l]),m=ce()(f,2),v=m[0],y=m[1];i=this.setMaxId(e,t,v);var p=h?n:S.a.batch.set(d,this.idAttribute,y,n);return c?(S.a.mutable.push(y,i[this.arrName]),S.a.mutable.set(y,p,i[this.mapName]),{state:i,created:p}):{state:S.a.batch.merge(d,(r={},ee()(r,this.arrName,S.a.batch.push(d,y,i[this.arrName])),ee()(r,this.mapName,S.a.batch.merge(d,ee()({},y,p),i[this.mapName])),r),i),created:p}}},{key:"update",value:function(e,t,n,r){var i=this,s=e.batchToken,a=e.withMutations,o=this.mapName,u=a?S.a.mutable.set:S.a.batch.set(s),l=n.reduce(function(e,t){var n=function(e){return(a?S.a.mutable.merge:S.a.batch.merge(s))(r,e)}(t);return u(n[i.idAttribute],n,e)},t[o]);return S.a.batch.set(s,o,l,t)}},{key:"delete",value:function(e,t,n){var r,i=this,s=e.batchToken,a=e.withMutations,o=this.arrName,u=this.mapName,l=t[o],d=n.map(function(e){return e[i.idAttribute]});return a?(d.forEach(function(e){var n=l.indexOf(e);-1!==n&&S.a.mutable.splice(n,1,[],l),S.a.mutable.omit(e,t[u])}),t):S.a.batch.merge(s,(r={},ee()(r,o,S.a.batch.filter(s,function(e){return!_()(d,e)},t[o])),ee()(r,u,S.a.batch.omit(s,d,t[u])),r),t)}}]),e}();function Xe(e,t,n){var r=t.table,i=t.clauses;return{rows:e[r].query(n[r],i)}}function Ge(e,t,n,r){var i=t.action,s=t.payload,a=void 0,o=void 0,u=void 0;if(i===R){var l=e[a=t.table],d=r[a],c=l.insert(n,d,s);o=c.state,u=c.created}else{var h=t.query;a=h.table;var f=Xe(e,h,r).rows,m=e[a],v=r[a];if(i===A)o=m.update(n,v,f,s),u=Xe(e,h,r).rows;else{if(i!==I)throw new Error("Database received unknown update type: "+i);o=m.delete(n,v,f),u=f}}var y=function(e,t,n,r){var i=n.batchToken;return n.withMutations?(r[e]=t,r):S.a.batch.set(i,e,t,r)}(a,o,n,r);return{status:x,state:y,payload:u}}var Ye=function(e){var t=e.tables,n=h()(t,function(e){return new Le(e)});return{getEmptyState:function(){return h()(n,function(e){return e.getEmptyState()})},query:Xe.bind(null,n),update:Ge.bind(null,n),describe:function(e){return n[e]}}},ze=n("7jGb"),He=n("9ysj"),Je=n.n(He),Ke=function(e,t){return e===t},We=function(e,t,n){return t.every(function(t,r){return n(t,e[r])})},Ze=function(e,t,n){return e.every(function(e){return t[e]===n[e]})},$e=function(e,t){var n=e.accessedModelInstances;return Je()(n,function(n,r){var i=e.ormState[r].itemsById,s=t[r].itemsById,a=m()(n);return Ze(a,i,s)})},et=function(e,t){return e.fullTableScannedModels.every(function(n){var r,i,s,a,o=e.ormState[n].itemsById,u=t[n].itemsById;return r=o,i=u,s=m()(r),a=m()(i),s.length===a.length&&Ze(s,r,i)&&Ze(a,r,i)})};function tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ke,n=arguments[2],r={result:null,args:null,ormState:null,fullTableScannedModels:[],accessedModelInstances:{}};return function(){for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];var o=s[0],u=s.slice(1);if(r.args&&r.ormState&&We(r.args,u,t)&&$e(r,o)&&et(r,o))return r.result;r.args=u;var l=n.session(o);r.ormState=o;var d=e.apply(void 0,[l].concat(K()(u)));return r.result=d,r.accessedModelInstances=l.accessedModelInstances,r.fullTableScannedModels=l.fullTableScannedModels,d}}function nt(e,t){e.sessionBoundModels.forEach(function(n){"function"==typeof n.reducer&&n.reducer(t,n,e)})}var rt={createDatabase:Ye},it=function(){function e(t){u()(this,e);var n=a()({},rt,t||{}).createDatabase;this.createDatabase=n,this.registry=[],this.implicitThroughModels=[],this.installedFields={}}return d()(e,[{key:"register",value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(t){if(void 0===t.modelName)throw new Error("A model was passed that doesn't have a modelName set");t.invalidateClassCache(),e.registerManyToManyModelsFor(t),e.registry.push(t)})}},{key:"registerManyToManyModelsFor",value:function(e){var t=this,n=e.fields,r=e.modelName;M()(n,function(e,n){if(e instanceof Fe){var i=void 0;i="this"===e.toModelName?r:e.toModelName;var s=r===i,a=U(r),o=q(i);if(e.through){if(s&&!e.throughFields)throw new Error('Self-referencing many-to-many relationship at "'+r+"."+n+'" using custom model "'+e.through+'" has no throughFields key. Cannot determine which fields reference the instances partaking in the relationship.')}else{var l,c=function(e){function t(){return u()(this,t),fe()(this,(t.__proto__||k()(t)).apply(this,arguments))}return ve()(t,e),t}(Ae);c.modelName=j(r,n);var h=function(e){function t(){return u()(this,t),fe()(this,(t.__proto__||k()(t)).apply(this,arguments))}return ve()(t,e),d()(t,[{key:"installsBackwardsVirtualField",get:function(){return!1}},{key:"installsBackwardsDescriptor",get:function(){return!1}}]),t}(_e),f=s?h:_e;c.fields=(l={id:Ee()},ee()(l,a,new f(r)),ee()(l,o,new f(i)),l),c.invalidateClassCache(),t.implicitThroughModels.push(c)}}})}},{key:"get",value:function(e){var t=Re()(this.registry.concat(this.implicitThroughModels),function(t){return t.modelName===e});if(void 0===t)throw new Error("Did not find model "+e+" from registry.");return t}},{key:"getModelClasses",value:function(){return this._setupModelPrototypes(this.registry),this._setupModelPrototypes(this.implicitThroughModels),this.registry.concat(this.implicitThroughModels)}},{key:"generateSchemaSpec",value:function(){return{tables:this.getModelClasses().reduce(function(e,t){var n=t.modelName,r=t._getTableOpts();return e[n]=a()({},{fields:t.fields},r),e},{})}}},{key:"getDatabase",value:function(){return this.db||(this.db=this.createDatabase(this.generateSchemaSpec())),this.db}},{key:"getEmptyState",value:function(){return this.getDatabase().getEmptyState()}},{key:"session",value:function(e){return new le(this,this.getDatabase(),e)}},{key:"mutableSession",value:function(e){return new le(this,this.getDatabase(),e,!0)}},{key:"_setupModelPrototypes",value:function(e){var t=this;e.forEach(function(e){if(!e.isSetUp){var n=e.fields,r=e.modelName,i=e.querySetClass;M()(n,function(n,i){t._isFieldInstalled(r,i)||(t._installField(n,i,e),t._setFieldInstalled(r,i))}),L(e,i),e.isSetUp=!0}})}},{key:"_isFieldInstalled",value:function(e,t){return!!this.installedFields.hasOwnProperty(e)&&!!this.installedFields[e][t]}},{key:"_setFieldInstalled",value:function(e,t){this.installedFields.hasOwnProperty(e)||(this.installedFields[e]={}),this.installedFields[e][t]=!0}},{key:"_installField",value:function(e,t,n){new(0,e.installerClass)({field:e,fieldName:t,model:n,orm:this}).run()}},{key:"withMutations",value:function(e){return P("`ORM.prototype.withMutations` has been deprecated. Use `ORM.prototype.mutableSession` instead."),this.mutableSession(e)}},{key:"from",value:function(e){return P("`ORM.prototype.from` has been deprecated. Use `ORM.prototype.session` instead."),this.session(e)}},{key:"reducer",value:function(){return P("`ORM.prototype.reducer` has been deprecated. Access the `Session.prototype.state` property instead."),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt;return function(n,r){var i=e.session(n||e.getEmptyState());return t(i,r),i.state}}(this)}},{key:"createSelector",value:function(){P("`ORM.prototype.createSelector` has been deprecated. Import `createSelector` from Redux-ORM instead.");for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return 1===n.length?tt(n[0],void 0,e):Object(ze.createSelectorCreator)(tt,void 0,e).apply(void 0,n)}.apply(void 0,[this].concat(t))}},{key:"getDefaultState",value:function(){return P("`ORM.prototype.getDefaultState` has been deprecated. Use `ORM.prototype.getEmptyState` instead."),this.getEmptyState()}},{key:"define",value:function(){throw new Error("`ORM.prototype.define` has been removed. Please define a Model class.")}}]),e}();n.d(t,"a",function(){return Ae}),n.d(t,"b",function(){return it}),n.d(t,"d",function(){return De}),n.d(t,"c",function(){return Ee})}}]);
//# sourceMappingURL=bundle.npm.redux-orm.8d0a60de561e07e85ff8.js.map