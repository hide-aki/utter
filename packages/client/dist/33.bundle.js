(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1257:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return ZoneCtrl});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_zones_create_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1435),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;e&&e(module)}();var ZoneCtrl=function(_PureComponent){function ZoneCtrl(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,ZoneCtrl),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ZoneCtrl).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ZoneCtrl,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ZoneCtrl,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_zones_create_js__WEBPACK_IMPORTED_MODULE_6__.a,null)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ZoneCtrl}(react__WEBPACK_IMPORTED_MODULE_5__.PureComponent),reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&reactHotLoader.register(ZoneCtrl,"ZoneCtrl","/var/www/html/utter/packages/client/src/layouts/zones/containers/zone-controller.js"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;e&&e.register(ZoneCtrl,"ZoneCtrl","/var/www/html/utter/packages/client/src/layouts/zones/containers/zone-controller.js")}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;e&&e(module)}()}.call(this,__webpack_require__(18)(module))},1396:function(e,a,t){"use strict";(function(e){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule;a&&a(e)}();var n,o,l=[{value:"Carousel",label:"Carousel",className:"appHeader",disabled:!1}],s=l;a.a=s,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&n.register(l,"default","/var/www/html/utter/packages/client/src/data/appData.js"),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&o(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default;e&&(e.register(l,"_default","/var/www/html/utter/packages/client/src/data/appData.js"),e.register(s,"default","/var/www/html/utter/packages/client/src/data/appData.js"))}(),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule;a&&a(e)}()}).call(this,t(18)(e))},1435:function(e,a,t){"use strict";(function(e){var r,n=t(62),o=t.n(n),l=t(86),s=t.n(l),i=t(2),_=t.n(i),c=t(0),u=t.n(c),d=t(381),p=t(653),m=t(100),b=t.n(m),f=t(52),g=t.n(f),v=t(43),h=t(80),E=t(172),w=t(171),L=t(1360),y=t(1396),C=t(26),H=t(1381),M=t(173),P=t(1368),O=t(1436),k=t(1437),G=t(33),D=t(1367);t(1399);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule;a&&a(e)}();var z,I,N=function(e){var a=G.session.user&&G.session.user.subscriptions?G.session.user.subscriptions.map(function(e){return{value:e._id,label:e.title}}):[{}],t=e.classes,r=e.handleSubmit,n=e.isSubmitting,o=e.values,l=o.zoneName,s=o.zoneDescription;return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{className:t.rootZoneCreate,onSubmit:r},u.a.createElement(d.a,null,u.a.createElement("meta",{charset:"utf-8"}),u.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),u.a.createElement("meta",{name:"description",content:"Create a zone and practice speaking a new language!"}),u.a.createElement("meta",{name:"author",content:"Isaac Pak"}),u.a.createElement("title",null,"Utterzone | Create a Zone"),u.a.createElement("link",{rel:"canonical",href:"https://utterzone.com/zone/create"})),u.a.createElement("div",{className:t.heroUnitZoneCreate},u.a.createElement("div",{className:t.heroContentZoneCreate},u.a.createElement(b.a,{container:!0,justify:"center",direction:"column"},u.a.createElement(g.a,{align:"center",variant:"h4",className:t.heading,gutterBottom:!0},"Host a Zone"),u.a.createElement(g.a,{align:"center",variant:"h6",className:t.heading,gutterBottom:!0},"Create a zone where you and others can practice speaking on focused subjects that will help build your level of fluency in speaking your new language.")))),u.a.createElement("main",{className:t.content},u.a.createElement(b.a,{container:!0,spacing:24},u.a.createElement(b.a,{item:!0,xs:12},u.a.createElement(g.a,{align:"left",variant:"h6",className:t.subHeading,gutterBottom:!0},"Zone Name",u.a.createElement(D.b,{display640:"inline-block"},"(3-40 chars.)"),u.a.createElement(D.a,null,l.length)),u.a.createElement(w.a,{fullWidth:!0,id:"outlined-search",name:"zoneName",label:"Zone Name",type:"text",className:t.searchField,component:C.g,margin:"normal",variant:"outlined"}),u.a.createElement(g.a,{align:"left",variant:"h6",className:t.subHeading,gutterBottom:!0},"Zone Description",u.a.createElement(D.b,{display640:"inline-block"}," ","(30-110 chars.)"),u.a.createElement(D.a,null,s.length)),u.a.createElement(w.a,{fullWidth:!0,id:"outlined-search",name:"zoneDescription",label:"Zone Description",type:"text",className:t.searchField,component:C.j,margin:"normal",variant:"outlined"})),u.a.createElement(b.a,{item:!0,xs:12},u.a.createElement(g.a,{align:"left",variant:"h6",className:t.subHeading,gutterBottom:!0},"Apps"),u.a.createElement(w.a,_()({name:"app",type:"text",options:y.a,component:C.i},e))),u.a.createElement(b.a,{item:!0,xs:12},u.a.createElement(g.a,{align:"left",variant:"h6",className:t.subHeading,gutterBottom:!0},"Subscribed Courses"),u.a.createElement(w.a,_()({name:"course",type:"text",component:C.i},e,{options:a})),u.a.createElement(g.a,{align:"left",variant:"h6",className:t.subHeading,gutterBottom:!0},"Set Level"),u.a.createElement("p",{style:{padding:"10px"}},"Apps will use the course information from this level."),u.a.createElement(w.a,{className:"custom_input",name:"courseLevel",type:"text",component:C.g,style:{width:"100px"}})),u.a.createElement(b.a,{item:!0,xs:12},u.a.createElement(g.a,{align:"left",variant:"h6",className:t.subHeading,gutterBottom:!0},"Age Restrictions"),u.a.createElement("p",{style:{padding:"10px"}},"Pick an appropriate age setting or a specific age demographic. Conversations are still not to involve any sexual misconduct or vulgar behaviour. Account bans/suspensions are duly enforced."),u.a.createElement(w.a,_()({name:"ageGroup",type:"text",component:C.i},e,{options:k.a}))),u.a.createElement(b.a,{item:!0,xs:12,align:"center"},u.a.createElement(C.s,{variant:"contained",color:"secondary",type:"submit",size:"large",loading:n,disabled:n},"Create Zone"))))))},B=Object(h.compose)(h.withApollo,p.a,Object(w.d)({validationSchema:L.zoneCreateSchema,validateOnChange:!1,validateOnBlur:!1,mapPropsToValues:function(){return{ageGroup:"",app:"",appLevel:1,course:"",courseLevel:"",owner:G.session.user._id,private:!1,password:"",zoneName:"",zoneDescription:""}},handleSubmit:function(){var e=s()(o.a.mark(function e(a,t){var r,n,l,i,_,c,u,d,p,m,b;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props,n=t.setErrors,l=t.setSubmitting,e.prev=1,e.next=4,r.client.query({fetchPolicy:"network-only",query:P.b,variables:{courseId:a.course}});case 4:if(i=e.sent,_=i.data.getLevels.levels,c=parseInt(a.courseLevel,10),G.session.level=c,_[c-1]){e.next=12;break}return n({courseLevel:"This course does not contain a level with this number"}),l(!1),e.abrupt("return");case 12:return e.next=14,r.client.query({query:P.a,variables:{levelId:_[a.courseLevel-1]._id}});case 14:return u=e.sent,G.session.vocabulary=u.data.getLevel.vocabulary,G.session.modifier=u.data.getLevel.modifier,e.next=19,r.client.mutate({mutation:H.a,variables:{ageGroup:a.ageGroup,app:a.app,appLevel:a.appLevel,course:a.course,courseLevel:a.courseLevel,owner:a.owner,private:a.private,password:a.password,zoneName:a.zoneName,zoneDescription:a.zoneDescription}});case 19:d=e.sent,p=function(){var e=s()(o.a.mark(function e(t){var n,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=G.session.user).hostedZone=t.data.zoneCreate,G.session.user=n,G.session.zone=t.data.zoneCreate,e.next=6,r.client.mutate({mutation:O.a,variables:{app:t.data.zoneCreate.app,host:n._id,levelId:_[a.courseLevel-1]._id,modifier:G.session.modifier,zoneId:t.data.zoneCreate._id}});case 6:l=e.sent,console.log("app: ",l),r.history.push({pathname:"/zone/".concat(t.data.zoneCreate._id),state:{zoneId:t.data.zoneCreate._id}});case 9:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),d?p(d):(n(d.ZONE_CREATE_MUTATION.errors),E.toast.success("Could not create a zone, please try again.",{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0})),e.next=38;break;case 24:if(e.prev=24,e.t0=e.catch(1),m=e.t0.message.replace("GraphQL error:","").trim(),-1===e.t0.message.indexOf("was not found")){e.next=35;break}return e.next=30,r.client.mutate({mutation:M.h,variables:{subscribedCourse:a.course}});case 30:b=e.sent,G.session.user=b.data.removeSubscription,E.toast.warn(m,{autoClose:15e3,className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0}),e.next=36;break;case 35:-1!==e.t0.message.indexOf("You can only host")?(r.history.push({pathname:"/zones/rezone"}),E.toast.warn(m,{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0})):-1!==e.t0.message.indexOf("Cast to ObjectId failed for value")&&(console.log("nope"),n({courseLevel:"This course does not contain a level with this number"}));case 36:return l(!1),e.abrupt("return",null);case 38:case"end":return e.stop()}},e,null,[[1,24]])}));return function(a,t){return e.apply(this,arguments)}}()}),Object(v.withStyles)(D.c))(N),A=B;a.a=A,(z=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&(z.register(N,"ZoneCreate","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),z.register(B,"default","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js")),(I=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&I(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default;e&&(e.register(N,"ZoneCreate","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),e.register(B,"_default","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),e.register(A,"default","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"))}(),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule;a&&a(e)}()}).call(this,t(18)(e))},1436:function(e,a,t){"use strict";(function(e){t.d(a,"a",function(){return u});var r,n=t(10),o=t.n(n),l=t(40),s=t.n(l);function i(){var e=o()(["\n  mutation appInit(\n    $app: String\n    $host: String\n    $levelId: String\n    $modifier: String\n    $zoneId: String\n  ) {\n    appInit(\n      input: {\n        app: $app\n        host: $host\n        levelId: $levelId\n        modifier: $modifier\n        zoneId: $zoneId\n      }\n    ) {\n      _id\n      level\n      gender\n      keyword\n      partsOfSpeech\n      translation\n      word\n      webformatHeight\n      webformatWidth\n      webformatURL\n    }\n  }\n"]);return i=function(){return e},e}(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule;a&&a(e)}();var _,c,u=s()(i());(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&_.register(u,"APP_INIT","/var/www/html/utter/packages/client/src/graphql/mutations/app-mutations.js"),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&c(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default;e&&(e.register(i,"_templateObject","/var/www/html/utter/packages/client/src/graphql/mutations/app-mutations.js"),e.register(u,"APP_INIT","/var/www/html/utter/packages/client/src/graphql/mutations/app-mutations.js"))}(),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule;a&&a(e)}()}).call(this,t(18)(e))},1437:function(e,a,t){"use strict";(function(e){var r;t.d(a,"a",function(){return l}),(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule)&&r(e),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).enterModule;a&&a(e)}();var n,o,l=[{value:"any age",label:"any age",className:"ageHeader",disabled:!1},{value:"ages 0-2",label:"ages 0-2",className:"ageHeader",disabled:!1},{value:"ages 3+",label:"ages 3+",className:"ageHeader",disabled:!1},{value:"ages 7+",label:"ages 7+",className:"ageHeader",disabled:!1},{value:"ages 12+",label:"ages 12+",className:"ageHeader",disabled:!1},{value:"ages 16+",label:"ages 16+",className:"ageHeader",disabled:!1},{value:"ages 18+",label:"ages 18+",className:"ageHeader",disabled:!1},{value:"ages 30+",label:"ages 30+",className:"ageHeader",disabled:!1},{value:"ages 40+",label:"ages 40+",className:"ageHeader",disabled:!1},{value:"ages 50+",label:"ages 50+",className:"ageHeader",disabled:!1},{value:"ages 60+",label:"ages 60+",className:"ageHeader",disabled:!1}];(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default)&&n.register(l,"options","/var/www/html/utter/packages/client/src/layouts/zones/options.js"),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule)&&o(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).default;e&&e.register(l,"options","/var/www/html/utter/packages/client/src/layouts/zones/options.js")}(),function(){var a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(1)).leaveModule;a&&a(e)}()}).call(this,t(18)(e))}}]);