(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{ID01:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("z6db"),babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("UOUS"),babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__),babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("WoSP"),babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__),babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("TBCP"),babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__),babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("Yjcn"),babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__),babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("ks7p"),babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__),babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("foaz"),babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__),babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("y/c7"),babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("r0ML"),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),react_redux__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("g0xT"),react_helmet__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("pYe9"),react_helmet__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__),_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("e+cM"),_containers__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("ynM+"),_core_schema__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("fwMv"),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("yVZo"),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("ketZ"),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("ctQ7"),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("qvsH"),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__),brownies__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("18K1"),brownies__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(brownies__WEBPACK_IMPORTED_MODULE_18__),react_apollo__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("QZJQ"),react_apollo__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_19__),graphql_tag__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("ktN7"),graphql_tag__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_20__),_core_actions_toggle_footer_action_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("VWAz"),enterModule;enterModule=__webpack_require__("DQwH").enterModule,enterModule&&enterModule(module),function(){var _=__webpack_require__("DQwH").enterModule;_&&_(module)}();var _templateObject=babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7___default()(["\n  mutation courseUpdate($input: CourseUpdated!) {\n    courseUpdate(input: $input) {\n      id\n      courseMode\n    }\n  }\n"],["\n  mutation courseUpdate($input: CourseUpdated!) {\n    courseUpdate(input: $input) {\n      id\n      courseMode\n    }\n  }\n"]);!function(){var _=__webpack_require__("DQwH").enterModule;_&&_(module)}(),function(){var _=__webpack_require__("DQwH").enterModule;_&&_(module)}();var COURSE_UPDATE=graphql_tag__WEBPACK_IMPORTED_MODULE_20___default()(_templateObject),styles=function(_){return{content:{flexGrow:1,padding:3*_.spacing.unit},courseMode:{fontSize:3*_.spacing.unit,marginRight:"20px",paddingLeft:"20px",color:"orange"},dangerZone:{color:"red",padding:"16px"},heroUnit:{backgroundColor:_.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:8*_.spacing.unit+"px 0 "+6*_.spacing.unit+"px"},heroButtons:{marginTop:4*_.spacing.unit},root:{maxWidth:900,margin:"0 auto"}}},CourseSettings=function(_Component){function CourseSettings(){var _,e,t,r,a=this;babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this,CourseSettings);for(var s=arguments.length,n=Array(s),l=0;l<s;l++)n[l]=arguments[l];return e=t=babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,(_=CourseSettings.__proto__||Object.getPrototypeOf(CourseSettings)).call.apply(_,[this].concat(n))),t.state={name:"",email:"",open:!1,submittedName:"",submittedEmail:""},t.handleChange=function(_,e){var r=e.name,a=e.value;return t.setState(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({},r,a))},t.handlePublish=babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _(){var e;return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,t.props.mutate({input:"live"});case 2:e=_.sent,console.log("result: ",e);case 4:case"end":return _.stop()}},_,a)})),t.handleDeleteModalOpen=function(){t.setState({open:!0})},t.handleDeleteModalClose=function(){t.setState({open:!1})},t.handleSubmit=function(){var _=t.state,e=_.name,r=_.email;t.setState({submittedName:e,submittedEmail:r})},r=e,babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(t,r)}return babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CourseSettings,_Component),babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(CourseSettings,[{key:"componentDidMount",value:function(){this.props.toggleFooter(!1)}},{key:"render",value:function(){var _=this,e=this.props,t=e.classes,r=e.user,a=brownies__WEBPACK_IMPORTED_MODULE_18__.session.course;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.d,{roles:r.roles,perform:"course:read-settings",id:r.username,matchingID:a.owner.username,yes:function(){return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form",{className:t.root,onSubmit:_.handleSubmit},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_10___default.a,null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta",{charset:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta",{name:"description",content:"Affordable language learning"}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta",{name:"author",content:"Isaac Pak"}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title",null,"Utterzone | Settings"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link",{rel:"canonical",href:"https://utter.zone/settings"})),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:t.heroUnit},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:t.heroContent},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{container:!0,justify:"center",direction:"column"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a,{variant:"h4",align:"center",gutterBottom:!0},"Settings")))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main",{className:t.content},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{container:!0,spacing:24},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{style:{display:"flex",flexDirection:"row",margin:"100px 0"}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a,{variant:"h5",align:"left",noWrap:!0},"Course Mode:"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a,{align:"center",className:t.courseMode},a.courseMode),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a,{variant:"outlined",style:{backgroundColor:"orange",color:"white"},onClick:_.handlePublish},"draft"===a.courseMode?"edit":"publish"))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{item:!0,xs:12,style:{backgroundColor:"#3e3e3e"}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a,{variant:"h6",align:"left",className:t.dangerZone,gutterBottom:!0},"Danger Zone"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a,{variant:"outlined",onClick:_.handleDeleteModalOpen,style:{backgroundColor:"red",color:"white",margin:"12px"}},"Delete Course"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers__WEBPACK_IMPORTED_MODULE_12__.b,{course:a,open:_.state.open,onClose:_.handleDeleteModalClose})),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"50px 0"}})))))},no:function(){return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1",null,"wtf")}})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),CourseSettings}(react__WEBPACK_IMPORTED_MODULE_8__.Component),mapStateToProps=function(_){return{user:_core_schema__WEBPACK_IMPORTED_MODULE_13__.a.session(_.apiReducer).User.all().toRefArray()[0]}},actions={toggleFooter:_core_actions_toggle_footer_action_js__WEBPACK_IMPORTED_MODULE_21__.a},withGraphql=Object(react_apollo__WEBPACK_IMPORTED_MODULE_19__.graphql)(COURSE_UPDATE)(CourseSettings),_default=Object(react_redux__WEBPACK_IMPORTED_MODULE_9__.connect)(mapStateToProps,actions)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__.withStyles)(styles)(withGraphql)),_default2=_default,_default3=_default2,_default4=_default3,reactHotLoader,leaveModule;__webpack_exports__.default=_default4,reactHotLoader=__webpack_require__("DQwH").default,leaveModule=__webpack_require__("DQwH").leaveModule,reactHotLoader&&(reactHotLoader.register(COURSE_UPDATE,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(styles,"styles","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(CourseSettings,"CourseSettings","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(actions,"actions","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(withGraphql,"withGraphql","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),reactHotLoader.register(_default,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),leaveModule(module)),function(){var _=__webpack_require__("DQwH").default,e=__webpack_require__("DQwH").leaveModule;_&&(_.register(COURSE_UPDATE,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(styles,"styles","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(CourseSettings,"CourseSettings","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(mapStateToProps,"mapStateToProps","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(actions,"actions","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(withGraphql,"withGraphql","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default2,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),e(module))}(),function(){var _=__webpack_require__("DQwH").default,e=__webpack_require__("DQwH").leaveModule;_&&(_.register(_templateObject,"_templateObject","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(COURSE_UPDATE,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(styles,"styles","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(CourseSettings,"CourseSettings","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(mapStateToProps,"mapStateToProps","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(actions,"actions","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(withGraphql,"withGraphql","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default,"_default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default2,"_default2","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default3,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),e(module))}(),function(){var _=__webpack_require__("DQwH").default,e=__webpack_require__("DQwH").leaveModule;_&&(_.register(_templateObject,"_templateObject","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(COURSE_UPDATE,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(styles,"styles","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(CourseSettings,"CourseSettings","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(mapStateToProps,"mapStateToProps","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(actions,"actions","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(withGraphql,"withGraphql","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default,"_default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default2,"_default2","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),_.register(_default4,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-settings.js"),e(module))}()}.call(this,__webpack_require__("Ua1F")(module))}}]);
//# sourceMappingURL=bundle.153.7cc9e92174eaa80085aa.js.map