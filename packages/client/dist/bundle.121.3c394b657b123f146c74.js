(window.webpackJsonp=window.webpackJsonp||[]).push([[121,10],{"4pgM":function(e,_){function t(e,_){var t=e.length,r=new Array(t),a={},i=t,n=function(e){for(var _=new Map,t=0,r=e.length;t<r;t++){var a=e[t];_.has(a[0])||_.set(a[0],new Set),_.has(a[1])||_.set(a[1],new Set),_.get(a[0]).add(a[1])}return _}(_),s=function(e){for(var _=new Map,t=0,r=e.length;t<r;t++)_.set(e[t],t);return _}(e);for(_.forEach(function(e){if(!s.has(e[0])||!s.has(e[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)a[i]||l(e[i],i,new Set);return r;function l(e,_,i){if(i.has(e)){var o;try{o=", node was:"+JSON.stringify(e)}catch(e){o=""}throw new Error("Cyclic dependency"+o)}if(!s.has(e))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(e));if(!a[_]){a[_]=!0;var u=n.get(e)||new Set;if(_=(u=Array.from(u)).length){i.add(e);do{var c=u[--_];l(c,s.get(c),i)}while(_);i.delete(e)}r[--t]=e}}}e.exports=function(e){return t(function(e){for(var _=new Set,t=0,r=e.length;t<r;t++){var a=e[t];_.add(a[0]),_.add(a[1])}return Array.from(_)}(e),e)},e.exports.array=t},"6TfI":function(e,_,t){"use strict";(function(e){var r;t.d(_,"a",function(){return a}),(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).enterModule)&&r(e),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).enterModule;_&&_(e)}();const a=e=>({actions:{display:"flex",justifyContent:"center",height:"100%",width:"100%"},addButton:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center"},content:{alignItems:"center",display:"flex",flexGrow:1,justifyContent:"center",padding:3*e.spacing.unit},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},editHeader:{alignItems:"center",display:"flex",fontSize:2*e.spacing.unit,fontWeight:400,height:"100%",justifyContent:"center",minHeight:"40px",width:"100%"},errorClass:{boxShadow:`0px 0px 2px 1px ${e.palette.error.main}`,backgroundColor:"white"},errors:{color:e.palette.error.main},formControl:{fontSize:"30px",textAlign:"center"},level:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},title:{alignItems:"center",display:"flex",height:"100%",paddingLeft:"10px",width:"100%"},header:{fontSize:3*e.spacing.unit,fontWeight:400,height:"100%",minHeight:"40px",width:"100%"},headerBody:{padding:"40px"},hero:{padding:" 0 24px "},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{margin:"0 auto",padding:`${8*e.spacing.unit}px 0 ${6*e.spacing.unit}px`},inputHeader:{background:"white",minHeight:"40px"},list:{margin:"0 auto"},root:{margin:"0 auto",width:"100%"},text:{color:"white"}});var i,n;(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).default)&&(i.register(240,"drawerWidth","/var/www/html/utter/packages/client/src/layouts/levels/styles.js"),i.register(a,"styles","/var/www/html/utter/packages/client/src/layouts/levels/styles.js")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).leaveModule)&&n(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).default;e&&(e.register(240,"drawerWidth","/var/www/html/utter/packages/client/src/layouts/levels/styles.js"),e.register(a,"styles","/var/www/html/utter/packages/client/src/layouts/levels/styles.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).leaveModule;_&&_(e)}()}).call(this,t("Ua1F")(e))},"9tVg":function(e,_,t){"use strict";e.exports=function(e){var _=function(){},t=new Promise(function(t,r){_=function(){t=null,r=null},e.then(function(e){t&&t(e)},function(e){r&&r(e)})});return t.trash=_,t}},La77:function(e,_,t){"use strict";(function(e){t.d(_,"a",function(){return s});var r,a=t("X03H");(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).enterModule)&&r(e),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).enterModule;_&&_(e)}();const i="Course name cannot exceed 100 characters",n=a.string().max(255),s=a.object().shape({title:a.string().max(100,i).required("A level title is required")});var l,o;(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).default)&&(l.register("Course titles must be at least 10 characters","titleNotLongEnough","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js"),l.register(i,"nameTooLong","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js"),l.register(n,"registerPasswordValidation","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js"),l.register(s,"courseLevelSchema","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js")),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).leaveModule)&&o(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).default;e&&(e.register("Course titles must be at least 10 characters","titleNotLongEnough","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js"),e.register(i,"nameTooLong","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js"),e.register(n,"registerPasswordValidation","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js"),e.register(s,"courseLevelSchema","/var/www/html/utter/packages/client/src/layouts/yupSchemas.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).leaveModule;_&&_(e)}()}).call(this,t("Ua1F")(e))},h0Wa:function(e,_,t){"use strict";function r(e){return Array.prototype.slice.apply(e)}var a="pending";function i(e){this.status=a,this._continuations=[],this._parent=null,this._paused=!1,e&&e.call(this,this._continueWith.bind(this),this._failWith.bind(this))}function n(e){return e&&"function"==typeof e.then}if(i.prototype={then:function(e,_){var t=i.unresolved()._setParent(this);if(this._isRejected()){if(this._paused)return this._continuations.push({promise:t,nextFn:e,catchFn:_}),t;if(_)try{var r=_(this._error);return n(r)?(this._chainPromiseData(r,t),t):i.resolve(r)._setParent(this)}catch(e){return i.reject(e)._setParent(this)}return i.reject(this._error)._setParent(this)}return this._continuations.push({promise:t,nextFn:e,catchFn:_}),this._runResolutions(),t},catch:function(e){if(this._isResolved())return i.resolve(this._data)._setParent(this);var _=i.unresolved()._setParent(this);return this._continuations.push({promise:_,catchFn:e}),this._runRejections(),_},pause:function(){return this._paused=!0,this},resume:function(){var e=this._findFirstPaused();return e&&(e._paused=!1,e._runResolutions(),e._runRejections()),this},_findAncestry:function(){return this._continuations.reduce(function(e,_){if(_.promise){var t={promise:_.promise,children:_.promise._findAncestry()};e.push(t)}return e},[])},_setParent:function(e){if(this._parent)throw new Error("parent already set");return this._parent=e,this},_continueWith:function(e){var _=this._findFirstPending();_&&(_._data=e,_._setResolved())},_findFirstPending:function(){return this._findFirstAncestor(function(e){return e._isPending&&e._isPending()})},_findFirstPaused:function(){return this._findFirstAncestor(function(e){return e._paused})},_findFirstAncestor:function(e){for(var _,t=this;t;)e(t)&&(_=t),t=t._parent;return _},_failWith:function(e){var _=this._findFirstPending();_&&(_._error=e,_._setRejected())},_takeContinuations:function(){return this._continuations.splice(0,this._continuations.length)},_runRejections:function(){if(!this._paused&&this._isRejected()){var e=this._error,_=this._takeContinuations(),t=this;_.forEach(function(_){if(_.catchFn)try{var r=_.catchFn(e);t._handleUserFunctionResult(r,_.promise)}catch(e){e.message;_.promise.reject(e)}else _.promise.reject(e)})}},_runResolutions:function(){if(!this._paused&&this._isResolved()){var e=this._takeContinuations();if(n(this._data))return this._handleWhenResolvedDataIsPromise(this._data);var _=this._data,t=this;e.forEach(function(e){if(e.nextFn)try{var r=e.nextFn(_);t._handleUserFunctionResult(r,e.promise)}catch(_){t._handleResolutionError(_,e)}else e.promise&&e.promise.resolve(_)})}},_handleResolutionError:function(e,_){if(this._setRejected(),_.catchFn)try{return void _.catchFn(e)}catch(_){e=_}_.promise&&_.promise.reject(e)},_handleWhenResolvedDataIsPromise:function(e){var _=this;return e.then(function(e){_._data=e,_._runResolutions()}).catch(function(e){_._error=e,_._setRejected(),_._runRejections()})},_handleUserFunctionResult:function(e,_){n(e)?this._chainPromiseData(e,_):_.resolve(e)},_chainPromiseData:function(e,_){e.then(function(e){_.resolve(e)}).catch(function(e){_.reject(e)})},_setResolved:function(){this.status="resolved",this._paused||this._runResolutions()},_setRejected:function(){this.status="rejected",this._paused||this._runRejections()},_isPending:function(){return this.status===a},_isResolved:function(){return"resolved"===this.status},_isRejected:function(){return"rejected"===this.status}},i.resolve=function(e){return new i(function(_,t){n(e)?e.then(function(e){_(e)}).catch(function(e){t(e)}):_(e)})},i.reject=function(e){return new i(function(_,t){t(e)})},i.unresolved=function(){return new i(function(e,_){this.resolve=e,this.reject=_})},i.all=function(){var e=r(arguments);return Array.isArray(e[0])&&(e=e[0]),e.length?new i(function(_,t){var r=[],a=0,n=!1;e.forEach(function(s,l){i.resolve(s).then(function(t){r[l]=t,(a+=1)===e.length&&_(r)}).catch(function(e){!function(e){n||(n=!0,t(e))}(e)})})}):i.resolve([])},Promise===i)throw new Error("Please use SynchronousPromise.installGlobally() to install globally");var s=Promise;i.installGlobally=function(e){if(Promise===i)return e;var _=function(e){if(void 0===e||e.__patched)return e;var _=e;return(e=function(){_.apply(this,r(arguments))}).__patched=!0,e}(e);return Promise=i,_},i.uninstallGlobally=function(){Promise===i&&(Promise=s)},e.exports={SynchronousPromise:i}},i5Wl:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("OvAC"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8VmE"),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("r0ML"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_apollo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("3aTW"),formik__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("hycj"),brownies__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("18K1"),brownies__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(brownies__WEBPACK_IMPORTED_MODULE_5__),trashable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("9tVg"),trashable__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(trashable__WEBPACK_IMPORTED_MODULE_6__),_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("sMZn"),_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__),_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("l+3i"),_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8__),_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("yinr"),_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__),_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("8VBE"),_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10__),_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("Nk2r"),_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11__),_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("FYi0"),_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__),_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("N2Es"),_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__),_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("yIe5"),_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14__),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("ketZ"),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__),_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("Ugr7"),_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16__),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("vxHz"),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__),_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("QbUP"),_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("ctQ7"),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("qvsH"),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__),material_table__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("Macc"),material_table__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_21__),_yupSchemas_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("La77"),_components__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("e+cM"),_xhr_js__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("qYHs"),_App_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("SE09"),_styles_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("6TfI"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule,enterModule&&enterModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule;e&&e(module)}();const MuiTableEditRow=({onEditingApproved:e,..._})=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.b,{validationSchema:_yupSchemas_js__WEBPACK_IMPORTED_MODULE_22__.a,initialValues:_.data,onSubmit:t=>{"update"===_.mode&&delete t.tableData,e(_.mode,t,_.data)},render:({submitForm:e})=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_21__.MTableEditRow,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},_,{onEditingApproved:e}))});class LevelsUpdate extends react__WEBPACK_IMPORTED_MODULE_2__.Component{constructor(e){super(e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"_isMounted",!1),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"componentWillUnmount",()=>{this._isMounted=!1,this._addTrash&&this._addTrash.trash(),this._newLevelTrash&&this._newLevelTrash.trash(),this._sortTrash&&this._sortTrash.trash(),this._updateTrash&&this._updateTrash.trash()}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"convertObjIdsToArr",e=>e.map(e=>e._id)),this.state={levels:[]},this.can=null,this.levelsIdsArr=[],this.tableRef=react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef()}componentDidMount(){this._isMounted=!0,this.props.client.query({query:_xhr_js__WEBPACK_IMPORTED_MODULE_24__.b,fetchPolicy:"no-cache",variables:{courseId:brownies__WEBPACK_IMPORTED_MODULE_5__.session.course._id}}).then(e=>{brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels=e.data.getLevels.levels,this._isMounted&&this.setState({levels:e.data.getLevels.levels},()=>{brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr=this.convertObjIdsToArr(this.state.levels)})}).catch(e=>console.log("err: ",e)),brownies__WEBPACK_IMPORTED_MODULE_5__.session.user.username===brownies__WEBPACK_IMPORTED_MODULE_5__.session.course.owner.username?this.can={onRowAdd:async e=>{const _=new Promise(_=>{const{levels:t}=this.state;t.push(e),this._isMounted&&this.setState({levels:t}),_({newData:e,levels:t})});return this._addTrash=trashable__WEBPACK_IMPORTED_MODULE_6___default()(_),this._addTrash.then(e=>{const _=this.props.client.mutate({mutation:_xhr_js__WEBPACK_IMPORTED_MODULE_24__.c,variables:{courseId:brownies__WEBPACK_IMPORTED_MODULE_5__.session.course._id,title:e.newData.title},refetchQueries:[{query:_App_js__WEBPACK_IMPORTED_MODULE_25__.GET_USER_BY_TOKEN,variables:{token:brownies__WEBPACK_IMPORTED_MODULE_5__.cookies._uid}}]});this._newLevelTrash=trashable__WEBPACK_IMPORTED_MODULE_6___default()(_),this._newLevelTrash.then(e=>{if(this._newLevelTrash&&this._isMounted){const _=brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels;return _.push(e.data.levelCreate.level),brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels=_,this._isMounted&&this.setState({levels:_}),_}}).then(e=>{brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr=this.convertObjIdsToArr(e),brownies__WEBPACK_IMPORTED_MODULE_5__.session.level=brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr.length>=1?brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr.length:"";const _=this.props.client.mutate({mutation:_xhr_js__WEBPACK_IMPORTED_MODULE_24__.e,variables:{courseId:brownies__WEBPACK_IMPORTED_MODULE_5__.session.course._id,levelSort:brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr}});this._sortTrash=trashable__WEBPACK_IMPORTED_MODULE_6___default()(_)})}),this._addTrash},onRowUpdate:(e,_)=>{const t=new Promise(t=>{const{levels:r}=this.state,a=r.indexOf(_);r[a]=e,setTimeout(()=>{this.setState({levels:r},()=>{brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels=r,brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr=this.convertObjIdsToArr(r),t()})},1e3),this.props.client.mutate({mutation:_xhr_js__WEBPACK_IMPORTED_MODULE_24__.f,variables:{_id:e._id,title:e.title}})});return this._updateTrash=trashable__WEBPACK_IMPORTED_MODULE_6___default()(t),t},onRowDelete:async e=>{const _=[...brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels],t=await new Promise(t=>{setTimeout(()=>{for(var r=-1,a=0;a<brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels.length;a++)if(brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels[a].title===e.title){r=a;break}var i=_.splice(r,1);t({splicedLevels:_,spliced:i[0],deletedIndex:r})},1e3)}),{splicedLevels:r,spliced:a,deletedIndex:i}=t;this.setState({levels:r},()=>brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels=r),brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr=this.convertObjIdsToArr(r),await this.props.client.mutate({mutation:_xhr_js__WEBPACK_IMPORTED_MODULE_24__.d,variables:{_id:a._id}}),brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels.splice(i,1),this.setState({levels:brownies__WEBPACK_IMPORTED_MODULE_5__.session.levels}),await this.props.client.mutate({mutation:_xhr_js__WEBPACK_IMPORTED_MODULE_24__.e,variables:{courseId:brownies__WEBPACK_IMPORTED_MODULE_5__.session.course._id,levelSort:brownies__WEBPACK_IMPORTED_MODULE_5__.session.levelsIdsArr}})}}:this.can={}}render(){const{classes:e}=this.props;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:e.root},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{className:e.hero,container:!0,justify:"center",direction:"column"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17___default.a,{className:e.header,elevation:1},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a,{className:e.headerBody,variant:"h4",align:"center",gutterBottom:!0},"Course Levels"))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main",{className:e.content},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{container:!0,spacing:24},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{item:!0,xs:12,style:{display:"flex",flexDirection:"column",alignItems:"center"}}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{item:!0,xs:12,align:"center"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{maxWidth:"100%"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_21___default.a,{ref:this.tableRef,icons:{Add:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default.a,null),Check:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8___default.a,null),Clear:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a,null),ResetSearch:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a,null),Delete:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default.a,null),Edit:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default.a,null),FirstPage:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_14___default.a,null),LastPage:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16___default.a,null),NextPage:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11___default.a,null),PreviousPage:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10___default.a,null),Search:()=>react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default.a,null)},columns:[{title:"level",headerStyle:{width:"50px"},readonly:!0,render:e=>e&&e.tableData.id+1},{title:"title",field:"title"}],components:{EditRow:MuiTableEditRow,EditField:_components__WEBPACK_IMPORTED_MODULE_23__.h},data:this.state.levels,options:{actionsColumnIndex:-1,pageSize:5,showTitle:!1,sorting:!1,rowStyle:e=>{if(e.tableData.id%2)return{backgroundColor:"#f2f2f2"}}},editable:this.can}))))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__.f)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__.withStyles)(_styles_js__WEBPACK_IMPORTED_MODULE_26__.a)(LevelsUpdate)),_default2=_default;var reactHotLoader,leaveModule;__webpack_exports__.default=_default2,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default,reactHotLoader&&(reactHotLoader.register(MuiTableEditRow,"MuiTableEditRow","/var/www/html/utter/packages/client/src/layouts/levels/containers/levels-update.js"),reactHotLoader.register(LevelsUpdate,"LevelsUpdate","/var/www/html/utter/packages/client/src/layouts/levels/containers/levels-update.js"),reactHotLoader.register(_default,"default","/var/www/html/utter/packages/client/src/layouts/levels/containers/levels-update.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule,leaveModule&&leaveModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default;e&&(e.register(MuiTableEditRow,"MuiTableEditRow","/var/www/html/utter/packages/client/src/layouts/levels/containers/levels-update.js"),e.register(LevelsUpdate,"LevelsUpdate","/var/www/html/utter/packages/client/src/layouts/levels/containers/levels-update.js"),e.register(_default,"_default","/var/www/html/utter/packages/client/src/layouts/levels/containers/levels-update.js"),e.register(_default2,"default","/var/www/html/utter/packages/client/src/layouts/levels/containers/levels-update.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule;e&&e(module)}()}.call(this,__webpack_require__("Ua1F")(module))},qYHs:function(e,_,t){"use strict";(function(e){t.d(_,"a",function(){return n}),t.d(_,"b",function(){return s}),t.d(_,"c",function(){return l}),t.d(_,"e",function(){return o}),t.d(_,"f",function(){return u}),t.d(_,"d",function(){return c});var r,a=t("ktN7"),i=t.n(a);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).enterModule)&&r(e),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).enterModule;_&&_(e)}();const n=i.a`
  query getLevel($levelId: String!) {
    getLevel(levelId: $levelId) {
        _id
        course
        title
    }
  }
`,s=i.a`
  query getLevels($courseId: String!) {
    getLevels(courseId: $courseId) {
      levels {
        _id
        course
        title
      }
    }
  }
`,l=i.a`
  mutation levelCreate($courseId: String, $title: String) {
    levelCreate(input: {courseId: $courseId, title: $title}) {
      level {
        course
        _id
        title
      }
      errors {
        message
      }
    }
  }
`,o=i.a`
  mutation levelSort($courseId: String, $levelSort: [String]) {
    levelSort(input: {courseId: $courseId, levelSort: $levelSort}) {
      level {
        _id
      }
      errors {
        message
      }
    }
  }
`,u=i.a`
  mutation levelUpdate($_id: ID, $title: String) {
    levelUpdate(input: {_id: $_id, title: $title}) {
      level {
        course
        _id
        title
      }
      errors {
        message
      }
    }
  }
`,c=i.a`
  mutation levelDelete($_id: ID) {
    levelDelete(_id: $_id) {
      level {
        _id
      }
      errors {
        path
        message
      }
    }
  }
`;var E,d;(E=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).default)&&(E.register(n,"GET_LEVEL","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),E.register(s,"GET_LEVELS","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),E.register(l,"LEVEL_CREATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),E.register(o,"LEVEL_SORT","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),E.register(u,"LEVEL_UPDATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),E.register(c,"LEVEL_DELETE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).leaveModule)&&d(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).default;e&&(e.register(n,"GET_LEVEL","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(s,"GET_LEVELS","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(l,"LEVEL_CREATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(o,"LEVEL_SORT","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(u,"LEVEL_UPDATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(c,"LEVEL_DELETE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("DQwH")).leaveModule;_&&_(e)}()}).call(this,t("Ua1F")(e))},ySrW:function(e,_,t){"use strict";function r(e){this._maxSize=e,this.clear()}r.prototype.clear=function(){this._size=0,this._values={}},r.prototype.get=function(e){return this._values[e]},r.prototype.set=function(e,_){return this._size>=this._maxSize&&this.clear(),this._values.hasOwnProperty(e)||this._size++,this._values[e]=_};var a=/[^.^\]^[]+|(?=\[\]|\.\.)/g,i=/^\d+$/,n=/^\d/,s=/[~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g,l=/^\s*(['"]?)(.*?)(\1)\s*$/,o=!1,u=new r(512),c=new r(512),E=new r(512);try{new Function("")}catch(e){o=!0}function d(e){return u.get(e)||u.set(e,h(e).map(function(e){return e.replace(l,"$2")}))}function h(e){return e.match(a)}function P(e,_,t){return"string"==typeof _&&(t=_,_=!1),t=t||"data",(e=e||"")&&"["!==e.charAt(0)&&(e="."+e),_?function(e,_){var t,r=_,a=h(e);return f(a,function(e,_,a,i,n){t=i===n.length-1,r+=(e=_||a?"["+e+"]":"."+e)+(t?")":" || {})")}),new Array(a.length+1).join("(")+r}(e,t):t+e}function f(e,_,t){var r,a,i,n,s=e.length;for(a=0;a<s;a++)(r=e[a])&&(M(r)&&(r='"'+r+'"'),i=!(n=D(r))&&/^\d+$/.test(r),_.call(t,r,n,i,a,e))}function D(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}function M(e){return!D(e)&&(function(e){return e.match(n)&&!e.match(i)}(e)||function(e){return s.test(e)}(e))}e.exports={Cache:r,expr:P,split:h,normalizePath:d,setter:o?function(e){var _=d(e);return function(e,t){return function(e,_,t){var r=0,a=e.length;for(;r<a-1;)_=_[e[r++]];_[e[r]]=t}(_,e,t)}}:function(e){return c.get(e)||c.set(e,new Function("data, value",P(e,"data")+" = value"))},getter:o?function(e,_){var t=d(e);return function(e){return function(e,_,t){var r=0,a=e.length;for(;r<a;){if(null==t&&_)return;t=t[e[r++]]}return t}(t,_,e)}}:function(e,_){var t=e+"_"+_;return E.get(t)||E.set(t,new Function("data","return "+P(e,_,"data")))},join:function(e){return e.reduce(function(e,_){return e+(D(_)||i.test(_)?"["+_+"]":(e?".":"")+_)},"")},forEach:function(e,_,t){f(h(e),_,t)}}}}]);
//# sourceMappingURL=bundle.121.3c394b657b123f146c74.js.map