(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1483:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(58),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(87),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(27),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(29),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(30),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(22),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(31),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(21),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),react_helmet_async__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(405),_containers__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(296),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(48),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(98),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(121),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(45),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(43),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__),brownies__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(32),brownies__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(brownies__WEBPACK_IMPORTED_MODULE_18__),react_apollo__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(81),graphql_tag__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(41),graphql_tag__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_20__),enterModule;function _templateObject(){var _=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9___default()(["\n  mutation courseUpdate($input: CourseUpdated!) {\n    courseUpdate(input: $input) {\n      id\n      courseMode\n    }\n  }\n"]);return _templateObject=function(){return _},_}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;_&&_(module)}();var COURSE_UPDATE=graphql_tag__WEBPACK_IMPORTED_MODULE_20___default()(_templateObject()),styles=function(_){return{content:{flexGrow:1,padding:3*_.spacing.unit},courseMode:{fontSize:3*_.spacing.unit,marginRight:"20px",paddingLeft:"20px",color:"orange"},dangerZone:{color:"red",padding:"16px"},heroUnit:{backgroundColor:_.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*_.spacing.unit,"px 0 ").concat(6*_.spacing.unit,"px")},heroButtons:{marginTop:4*_.spacing.unit},root:{maxWidth:900,margin:"0 auto",width:"100%"}}},CourseSettings=function(_Component){function CourseSettings(){var _,e;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,CourseSettings);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,(_=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(CourseSettings)).call.apply(_,[this].concat(r))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"state",{name:"",email:"",open:!1,submittedName:"",submittedEmail:""}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"handleChange",function(_,t){var r=t.name,a=t.value;return e.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({},r,a))}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"handlePublish",_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _(){var t;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.props.mutate({input:"live"});case 2:t=_.sent,console.log("result: ",t);case 4:case"end":return _.stop()}},_)}))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"handleDeleteModalOpen",function(){e.setState({open:!0})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"handleDeleteModalClose",function(){e.setState({open:!1})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"handleSubmit",function(){var _=e.state,t=_.name,r=_.email;e.setState({submittedName:t,submittedEmail:r})}),e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(CourseSettings,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CourseSettings,[{key:"render",value:function(){var _=this.props.classes,e=brownies__WEBPACK_IMPORTED_MODULE_18__.session.course;return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form",{className:_.root,onSubmit:this.handleSubmit},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_11__.a,null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta",{charset:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta",{name:"description",content:"Affordable language learning"}),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta",{name:"author",content:"Isaac Pak"}),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title",null,"Utterzone | Settings"),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link",{rel:"canonical",href:"https://utter.zone/settings"})),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a,{className:_.hero,container:!0,justify:"center",direction:"column"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a,{className:_.header,elevation:1},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a,{className:_.headerBody,variant:"h4",align:"center",gutterBottom:!0},"Course Settings"))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("main",{className:_.content},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a,{container:!0,spacing:24},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a,{item:!0,xs:12,style:{backgroundColor:"#3e3e3e"}},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a,{variant:"h6",align:"left",className:_.dangerZone,gutterBottom:!0},"Danger Zone"),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a,{variant:"outlined",onClick:this.handleDeleteModalOpen,style:{backgroundColor:"red",color:"white",margin:"12px"}},"Delete Course"),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers__WEBPACK_IMPORTED_MODULE_12__.b,{course:e,open:this.state.open,onClose:this.handleDeleteModalClose})),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"50px 0"}})))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),CourseSettings}(react__WEBPACK_IMPORTED_MODULE_10__.Component),withGraphql=Object(react_apollo__WEBPACK_IMPORTED_MODULE_19__.e)(COURSE_UPDATE)(CourseSettings),_default=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__.withStyles)(styles)(withGraphql),_default2=_default,reactHotLoader,leaveModule;__webpack_exports__.default=_default2,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(COURSE_UPDATE,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(styles,"styles","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(CourseSettings,"CourseSettings","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(withGraphql,"withGraphql","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(_default,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;_&&(_.register(_templateObject,"_templateObject","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(COURSE_UPDATE,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(styles,"styles","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(CourseSettings,"CourseSettings","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(withGraphql,"withGraphql","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default,"_default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default2,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;_&&_(module)}()}.call(this,__webpack_require__(14)(module))}}]);