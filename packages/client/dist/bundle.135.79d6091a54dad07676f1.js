(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{"+RqY":function(_,e,r){var a=r("T7pF");"string"==typeof a&&(a=[[_.i,a,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0},o=r("x0aW")(a,t);a.locals&&(_.exports=a.locals),_.hot.accept("T7pF",function(){var e=r("T7pF");if("string"==typeof e&&(e=[[_.i,e,""]]),!function(_,e){var r,a=0;for(r in _){if(!e||_[r]!==e[r])return!1;a++}for(r in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)}),_.hot.dispose(function(){o()})},"/cJ2":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return Pixabay});var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("NthX"),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("gki9"),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fFdx"),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("SDJZ"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("NToG"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("K4DB"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("+IV6"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("eef+"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__),_photo_abstract_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("fvBX"),brownies__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("18K1"),brownies__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(brownies__WEBPACK_IMPORTED_MODULE_9__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule,enterModule&&enterModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule;_&&_(module)}();var Pixabay=function(_PhotoAbstract){function Pixabay(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this,Pixabay),(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Pixabay).call(this,_))).data=_,e.loading=!1,e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Pixabay,_PhotoAbstract),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Pixabay,[{key:"fetchPics",value:function(){var _=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _(e){var r,a,t;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return this.loading=!0,r=_photo_abstract_js__WEBPACK_IMPORTED_MODULE_8__.a.convertData(e.vocabulary),console.log("word: ",r),_.next=5,e.vocabulary.map(function(){var _=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _(r){var a;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a=r.keyword?r.keyword:r.translation,console.log("keyword: ",a),_.abrupt("return",new Promise(function(_){e.modifier;setTimeout(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(){var t,o,l,n;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://pixabay.com/api/?key=".concat("12284340-ae329c7f48e191cb0c76643cd","&q=").concat(a,"&image_type=photo&pretty=true&per_page=").concat(encodeURIComponent(10),"&safesearch=true"),console.log("url: ",t),e.next=4,fetch(t);case 4:return o=e.sent,e.next=7,o.json();case 7:l=e.sent,console.log("fetched: ",l),n=l.hits.map(function(_){return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({},r,_)}),_(n);case 11:case"end":return e.stop()}},e)})),1e3)}));case 3:case"end":return _.stop()}},_)}));return function(e){return _.apply(this,arguments)}}());case 5:return a=_.sent,_.next=8,Promise.all(a);case 8:return t=_.sent,this.loading=!1,_.abrupt("return",t);case 11:case"end":return _.stop()}},_,this)}));return function(e){return _.apply(this,arguments)}}()},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Pixabay}(_photo_abstract_js__WEBPACK_IMPORTED_MODULE_8__.a),reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default,reactHotLoader&&reactHotLoader.register(Pixabay,"Pixabay","/var/www/html/utter/packages/client/src/services/photos/pixabay.js"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule,leaveModule&&leaveModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default;_&&_.register(Pixabay,"Pixabay","/var/www/html/utter/packages/client/src/services/photos/pixabay.js")}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule;_&&_(module)}()}).call(this,__webpack_require__("Ua1F")(module))},M0hV:function(_,e,r){"use strict";(function(_){r.d(e,"a",function(){return u});var a,t=r("mAfo"),o=r.n(t);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).enterModule)&&a(_),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).enterModule;e&&e(_)}();var l,n,u=function(_){return{appTitle:{color:"white",padding:"15px 15px 0 0"},actions:{display:"flex"},avatar:{backgroundColor:o.a[500]},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:_.transitions.create("transform",{duration:_.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},card:{margin:"30px auto 0",marginBottom:30,maxWidth:600},cardActions:{display:"flex",justifyContent:"center"},cardMedia:{paddingTop:"46.25%","&:hover":{cursor:"pointer"}},cardContent:{flexGrow:1},cardTitle:{height:"100%"},media:{height:0,paddingTop:"56.25%"},root:{backgroundColor:"#3e3e3e"}}};(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).default)&&l.register(u,"styles","/var/www/html/utter/packages/client/src/apps/carousel/styles.js"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).leaveModule)&&n(_),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).default;_&&_.register(u,"styles","/var/www/html/utter/packages/client/src/apps/carousel/styles.js")}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).leaveModule;e&&e(_)}()}).call(this,r("Ua1F")(_))},MGhr:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return PhotoAdapter});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("SDJZ"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("NToG"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_pixabay_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("/cJ2"),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule,enterModule&&enterModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule;_&&_(module)}();var PhotoAdapter=function(){function PhotoAdapter(_){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,PhotoAdapter);var e=new _pixabay_js__WEBPACK_IMPORTED_MODULE_2__.a(_);this.functions=function(r){if("fetchPixabay"===r)return e.fetchPics(_)}}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotoAdapter,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PhotoAdapter}(),reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default,reactHotLoader&&reactHotLoader.register(PhotoAdapter,"PhotoAdapter","/var/www/html/utter/packages/client/src/services/photos/adapter.js"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule,leaveModule&&leaveModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default;_&&_.register(PhotoAdapter,"PhotoAdapter","/var/www/html/utter/packages/client/src/services/photos/adapter.js")}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule;_&&_(module)}()}).call(this,__webpack_require__("Ua1F")(module))},Qi1R:function(_,e,r){"use strict";var a=r("SMlj");r.d(e,"a",function(){return a.a});var t=r("w2Rx");r.d(e,"b",function(){return t.a})},SMlj:function(_,e,r){"use strict";(function(_){var a;r.d(e,"a",function(){return l}),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).enterModule)&&a(_),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).enterModule;e&&e(_)}();var t,o,l=function(_,e){return _._id===e.owner._id||_.username===e.owner.username},n=function(_,e){return e.some(function(e){return _.rights.includes(e)})},u=function(_,e){return e.some(function(e){return _.roles.includes(e)})};(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).default)&&(t.register(l,"isOwner","/var/www/html/utter/packages/client/src/utils/auth.js"),t.register(n,"hasRights","/var/www/html/utter/packages/client/src/utils/auth.js"),t.register(u,"hasRole","/var/www/html/utter/packages/client/src/utils/auth.js")),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).leaveModule)&&o(_),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).default;_&&(_.register(l,"isOwner","/var/www/html/utter/packages/client/src/utils/auth.js"),_.register(n,"hasRights","/var/www/html/utter/packages/client/src/utils/auth.js"),_.register(u,"hasRole","/var/www/html/utter/packages/client/src/utils/auth.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).leaveModule;e&&e(_)}()}).call(this,r("Ua1F")(_))},T4Jp:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("8VmE"),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("NthX"),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fFdx"),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("SDJZ"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("NToG"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("K4DB"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("+IV6"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("T1e2"),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("eef+"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("OvAC"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("gki9"),_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_10__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("nxTg"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__),react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("r0ML"),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),brownies__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("18K1"),brownies__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(brownies__WEBPACK_IMPORTED_MODULE_13__),_services_photos_adapter_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("MGhr"),_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("SaKb"),_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_15__),_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("/6Xe"),_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("yVZo"),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__),_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("5M77"),_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__),_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("C5B4"),_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__),_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("VJdU"),_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("ketZ"),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__),_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("Deeg"),_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_22___default=__webpack_require__.n(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_22__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("qvsH"),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("ctQ7"),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24___default=__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24__),react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("tjw+"),react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_25___default=__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_25__),react_responsive_carousel__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("9RXC"),react_responsive_carousel__WEBPACK_IMPORTED_MODULE_26___default=__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_26__),_utils__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("Qi1R"),_components__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("e+cM"),_styles_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("M0hV"),_overrides_css__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("+RqY"),_overrides_css__WEBPACK_IMPORTED_MODULE_30___default=__webpack_require__.n(_overrides_css__WEBPACK_IMPORTED_MODULE_30__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule,enterModule&&enterModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule;_&&_(module)}();var RandomCard=function(_){var e=_.audioUrl,r=_.classes,a=_.partsOfSpeech,t=_.translation,o=_.word,l=_.phrase,n=_.question,u=_.webformatURL,i=Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)({state:{translation:t,expanded:!1}}),s=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(i,2),c=s[0],E=s[1];if("alphabet"===a||"vowel"===a||"consonant"===a)var d=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1",null,o);else d=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default.a,{className:r.media,image:u,title:"Paella dish"});return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18___default.a,{className:r.card},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_15___default.a,{avatar:react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a,{"aria-label":"level",className:r.avatar},brownies__WEBPACK_IMPORTED_MODULE_13__.session.level),title:o||l||n,subheader:a}),d,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default.a,null,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{style:{display:"flex",flexGrow:1,flexDirection:"column",justifycontent:"center"}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a,{onClick:function(){new Audio(e).play(),E(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_10___default()({},c,{translation:t})),setTimeout(function(){E(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_10___default()({},c,{translation:!1}))},1e4)}},c.translation?c.translation:react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_22___default.a,null)))))},HostControls=function(_PureComponent){function HostControls(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this,HostControls),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(HostControls).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(e),"resetOwner",function(){setTimeout(function(){return e.setState({isOwner:!0,loading:!1})},3e3)}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(e),"shufflePics",function(){var _=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _(r){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:0===r&&e.setState({isOwner:!1,loading:!0},function(){var _=brownies__WEBPACK_IMPORTED_MODULE_13__.session.carousel;console.log("newCarousel: ",_);var r=_.map(function(_){return Object(_utils__WEBPACK_IMPORTED_MODULE_27__.b)(_)});console.log("shuffledArray: ",r),e.setState({randomVocabulary:r}),e.resetOwner()});case 1:case"end":return _.stop()}},_)}));return function(e){return _.apply(this,arguments)}}()),e.state={count:0,loading:!0,isOwner:Object(_utils__WEBPACK_IMPORTED_MODULE_27__.a)(brownies__WEBPACK_IMPORTED_MODULE_13__.session.user,brownies__WEBPACK_IMPORTED_MODULE_13__.session.zone),randomVocabulary:brownies__WEBPACK_IMPORTED_MODULE_13__.session.carousel},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(HostControls,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HostControls,[{key:"componentDidMount",value:function(){var _=this;new _services_photos_adapter_js__WEBPACK_IMPORTED_MODULE_14__.a({vocabulary:brownies__WEBPACK_IMPORTED_MODULE_13__.session.vocabulary,modifier:brownies__WEBPACK_IMPORTED_MODULE_13__.session.modifier}).functions("fetchPixabay").then(function(e){brownies__WEBPACK_IMPORTED_MODULE_13__.session.carousel=e,_.setState({randomVocabulary:e,loading:!1})})}},{key:"render",value:function(){var _=this;return console.log("random: ",this.state.randomVocabulary),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_26__.Carousel,{infiniteLoop:!0,onChange:function(e){return _.shufflePics(e)},showThumbs:!1,showIndicators:!1,showArrows:this.state.isOwner,showStatus:!0},this.state.loading&&react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18___default.a,{className:this.props.classes.card},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default.a,null,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{style:{display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"center",alignItems:"center",height:"547px"}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24___default.a,{gutterBottom:!0,variant:"h6"},"Loading Pictures"),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_28__.r,null)))),!this.state.loading&&this.state.randomVocabulary.map(function(e,r){var a=Object(_utils__WEBPACK_IMPORTED_MODULE_27__.b)(e);return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{key:r},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(RandomCard,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},a[0],_.props)))})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HostControls}(react__WEBPACK_IMPORTED_MODULE_12__.PureComponent),CarouselContainer=function(_PureComponent2){function CarouselContainer(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this,CarouselContainer),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(CarouselContainer).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(CarouselContainer,_PureComponent2),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(CarouselContainer,[{key:"render",value:function(){var _=this.props.classes;return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21___default.a,{container:!0,className:_.root},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21___default.a,{item:!0,xs:12,align:"right"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24___default.a,{className:_.appTitle,gutterBottom:!0,component:"p"},"Carousel")),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21___default.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HostControls,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},this.props,this.state))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),CarouselContainer}(react__WEBPACK_IMPORTED_MODULE_12__.PureComponent),_default=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23__.withStyles)(_styles_js__WEBPACK_IMPORTED_MODULE_29__.a)(CarouselContainer),_default2=_default,reactHotLoader,leaveModule;__webpack_exports__.default=_default2,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default,reactHotLoader&&(reactHotLoader.register(RandomCard,"RandomCard","/var/www/html/utter/packages/client/src/apps/carousel/index.js"),reactHotLoader.register(HostControls,"HostControls","/var/www/html/utter/packages/client/src/apps/carousel/index.js"),reactHotLoader.register(CarouselContainer,"CarouselContainer","/var/www/html/utter/packages/client/src/apps/carousel/index.js"),reactHotLoader.register(_default,"default","/var/www/html/utter/packages/client/src/apps/carousel/index.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule,leaveModule&&leaveModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default;_&&(_.register(RandomCard,"RandomCard","/var/www/html/utter/packages/client/src/apps/carousel/index.js"),_.register(HostControls,"HostControls","/var/www/html/utter/packages/client/src/apps/carousel/index.js"),_.register(CarouselContainer,"CarouselContainer","/var/www/html/utter/packages/client/src/apps/carousel/index.js"),_.register(_default,"_default","/var/www/html/utter/packages/client/src/apps/carousel/index.js"),_.register(_default2,"default","/var/www/html/utter/packages/client/src/apps/carousel/index.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule;_&&_(module)}()}.call(this,__webpack_require__("Ua1F")(module))},T7pF:function(_,e,r){(_.exports=r("VNgF")(!1)).push([_.i,".carousel .control-prev.control-arrow:before {\n\t  transform: rotate(135deg);\n\t  -webkit-transform: rotate(135deg);\n\t  margin-left: 15px;\n}\n\n.carousel .control-next.control-arrow:before {\n\t  transform: rotate(-45deg);\n\t  -webkit-transform: rotate(-45deg);\n\t  margin-right: 15px;\n}\n\n.carousel.carousel-slider .control-arrow:before {\n\t  display: inline-block;\n\t  border-top: none;\n\t  border-right: 5px solid #fff;\n\t  border-bottom: 5px solid #fff;\n\t  border-left: none;\n\t  padding: 8px;\n\t  content: '';\n}\n",""])},fvBX:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return PhotoAbstract});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("SDJZ"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("NToG"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule,enterModule&&enterModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule;_&&_(module)}();var PhotoAbstract=function(){function PhotoAbstract(){if(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,PhotoAbstract),(this instanceof PhotoAbstract?this.constructor:void 0)===PhotoAbstract)throw new TypeError("This is an abstract class and cannot be instantiated.")}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotoAbstract,[{key:"fetchPics",value:function(){throw new TypeError("fetchPics cannot be used from the abstract class.  It must be overridden")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"convertData",value:function(_){return _.map(function(_){return _.word})}}]),PhotoAbstract}(),reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default,reactHotLoader&&reactHotLoader.register(PhotoAbstract,"PhotoAbstract","/var/www/html/utter/packages/client/src/services/photos/photo-abstract.js"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule,leaveModule&&leaveModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default;_&&_.register(PhotoAbstract,"PhotoAbstract","/var/www/html/utter/packages/client/src/services/photos/photo-abstract.js")}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule;_&&_(module)}()}).call(this,__webpack_require__("Ua1F")(module))},w2Rx:function(_,e,r){"use strict";(function(_){var a;r.d(e,"a",function(){return l}),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).enterModule)&&a(_),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).enterModule;e&&e(_)}();var t,o,l=function(_){if(!_)return[{partsOfSpeech:"alphabet",word:"no entry"}];for(var e=_.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),a=[_[r],_[e]];_[e]=a[0],_[r]=a[1]}return _},n=function(_){return _.map(function(_){return{sort:Math.random(),value:_}}).sort(function(_,e){return _.sort-e.sort}).map(function(_){return _.value}),_};(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).default)&&(t.register(l,"shuffleArray","/var/www/html/utter/packages/client/src/utils/shuffle-array.js"),t.register(n,"shuffleArray2","/var/www/html/utter/packages/client/src/utils/shuffle-array.js")),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).leaveModule)&&o(_),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).default;_&&(_.register(l,"shuffleArray","/var/www/html/utter/packages/client/src/utils/shuffle-array.js"),_.register(n,"shuffleArray2","/var/www/html/utter/packages/client/src/utils/shuffle-array.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("DQwH")).leaveModule;e&&e(_)}()}).call(this,r("Ua1F")(_))}}]);
//# sourceMappingURL=bundle.135.79d6091a54dad07676f1.js.map