(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+EG4":function(e,t,a){"use strict";var r=a("jxvI");Object.defineProperty(t,"__esModule",{value:!0}),t.contactSchema=void 0;var o=r(a("vrZp")),n=o.object().shape({name:o.string().max(255),subject:o.string().max(255),email:o.string().max(255).email("email must be a valid email"),message:o.string().max(3e3)});t.contactSchema=n},"+LZS":function(e,t,a){"use strict";var r=a("jxvI"),o=a("u0ku");Object.defineProperty(t,"__esModule",{value:!0}),t.courseSchema=t.courseCreateSchema=t.nameTooLong=t.descriptionTooLong=t.descriptionNotLongEnough=t.titleNotLongEnough=void 0;var n=o(a("qtOx")),s=r(a("vrZp")),i="Course titles must be at least 10 characters";t.titleNotLongEnough=i;var l="Course description must be at least 100 characters";t.descriptionNotLongEnough=l;var c="Course description cannot exceed 350 characters";t.descriptionTooLong=c;var u="Course name cannot exceed 100 characters";t.nameTooLong=u;var d=s.object().shape((0,n.default)({title:s.string().min(10,i).max(100,u).required("A course title is required"),courseDescription:s.string().min(100,l).max(350,c).required("A course description is required"),topics:s.array().min(3,"Pick at least 3 tags").of(s.object().shape({label:s.string().required(),value:s.string().required()})),usingLang:s.array().min(1,"Pick at least 1 language").of(s.object().shape({label:s.string().required(),value:s.string().required()})).required("This field is required.")},"courseDescription",s));t.courseCreateSchema=d;var m=s.object().shape({title:s.string().required("A course title is required").min(10,i).max(100,u),courseDescription:s.string().min(100,l).max(350,c).required("A course description is required")});t.courseSchema=m},"38+B":function(e,t,a){"use strict";var r=a("jxvI");Object.defineProperty(t,"__esModule",{value:!0}),t.vocabularySchema=void 0;var o=r(a("vrZp")),n=o.object().shape({level:o.number().typeError("You must pick a level or create one.").moreThan(0,"Levels need to be more than 0").required("A level is required."),word:o.string().typeError("Words must be letters.").max(100,"Words are limited to 100 characters.").required(),translation:o.string().typeError("Translations must be letters.").max(100,"Translations are limited to 100 characters.").required()});t.vocabularySchema=n},"4pgM":function(e,t){function a(e,t){var a=e.length,r=new Array(a),o={},n=a,s=function(e){for(var t=new Map,a=0,r=e.length;a<r;a++){var o=e[a];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}(t),i=function(e){for(var t=new Map,a=0,r=e.length;a<r;a++)t.set(e[a],a);return t}(e);for(t.forEach(function(e){if(!i.has(e[0])||!i.has(e[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});n--;)o[n]||l(e[n],n,new Set);return r;function l(e,t,n){if(n.has(e)){var c;try{c=", node was:"+JSON.stringify(e)}catch(e){c=""}throw new Error("Cyclic dependency"+c)}if(!i.has(e))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(e));if(!o[t]){o[t]=!0;var u=s.get(e)||new Set;if(t=(u=Array.from(u)).length){n.add(e);do{var d=u[--t];l(d,i.get(d),n)}while(t);n.delete(e)}r[--a]=e}}}e.exports=function(e){return a(function(e){for(var t=new Set,a=0,r=e.length;a<r;a++){var o=e[a];t.add(o[0]),t.add(o[1])}return Array.from(t)}(e),e)},e.exports.array=a},"5Hmi":function(e,t,a){"use strict";a.r(t),function(e){var r,o=a("r0ML"),n=a.n(o),s=a("h815"),i=a("9tfQ"),l=a("dYXW"),c=a("mm5l"),u=a.n(c),d=a("ketZ"),m=a.n(d),p=a("vxHz"),g=a.n(p),f=a("ctQ7"),h=a.n(f),w=a("qvsH"),v=a("Q33P"),b=a.n(v),y=a("Pc05"),_=a.n(y),E=a("kued"),L=a.n(E),H=a("18K1"),x=a("ktN7"),k=a.n(x),G=a("3aTW"),D=a("e+cM"),j=a("xlMD"),S=a("iZLL");(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;t&&t(e)}();const C=k.a`
  query getCourse($_id: ID!) {
    getCourse(_id: $_id) {
      _id
      title
      courseDescription
    }
  }
`,z=k.a`
  mutation subscribe($courseId: String!) {
    subscribe(courseId: $courseId) {
      _id
      title
    }
  }
`,M=k.a`
  mutation unsubscribe($courseId: String!) {
    unsubscribe(courseId: $courseId)
  }
`,N=k.a`
  mutation courseUpdate($_id: ID, $title: String, $courseDescription: String) {
    courseUpdate(
      input: {_id: $_id, title: $title, courseDescription: $courseDescription}
    ) {
      courseDescription
      courseImage
      courseMode
      title
      _id
      levels {
        _id
      }
      owner {
        _id
        username
      }
      resource
      subscribers
      teachingLang
      usingLang
    }
  }
`,q=e=>{const{user:t,course:a}=H.session,{classes:r,client:c}=e,[d,p]=Object(o.useState)({formErrors:{errors:[]},courseId:a._id,courseDescription:a.courseDescription,name:"",email:"",loading:!1,subscribed:!1,submittedName:"",submittedEmail:"",title:a.title});Object(o.useEffect)(()=>{H.session.user&&H.session.user.subscriptions.find(e=>e._id===H.session.course._id)&&p({...d,subscribed:!0})},[d]);const f=()=>{const{course:e,user:t}=H.session,a=t;a.subscriptions.push({_id:e._id,title:e.title}),H.session.user=a},w=async t=>{t.preventDefault();const a=await i.courseSchema.validate(d).catch(e=>{if(e)return console.log("err: ",e),p({...d,formErrors:{errors:e}}),console.log("state: ",d),e});if(b()(a.errors)){p({...d,loading:!0});const t=await e.client.mutate({mutation:N,variables:{_id:d.courseId,title:d.title,courseDescription:d.courseDescription},refetchQueries:[{query:j.b,variables:{usingLang:"",teachingLang:""}}]});t&&(console.log("updated: ",t),H.session.course=t.data.courseUpdate,l.toast.success("Your changes were saved.",{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0})),p({...d,formErrors:{errors:["hi"]},loading:!1})}},v=_()({errorClass:"courseDescription"===d.formErrors.path&&!b()(d.formErrors.errors)}),y=_()({errorClass:"title"===d.formErrors.path&&!b()(d.formErrors.errors)});return n.a.createElement(G.c,{query:C,variables:{_id:a._id}},({loading:e,error:o})=>e?n.a.createElement(m.a,{container:!0,alignContent:"center",justify:"center",style:{height:"300px"}},n.a.createElement(u.a,{style:{color:"grey"}})):o?(console.log("err: ",o),n.a.createElement(m.a,null,n.a.createElement("p",null,o.graphQLErrors.map(({message:e},t)=>n.a.createElement("p",{style:{fontSize:"1.3em",color:"red",margin:"30px",padding:"30px",textAlign:"center"},key:t},e))))):n.a.createElement("form",{onSubmit:w},n.a.createElement(s.a,null,n.a.createElement("meta",{charset:"utf-8"}),n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),n.a.createElement("meta",{name:"description",content:"Affordable language learning"}),n.a.createElement("meta",{name:"author",content:"Isaac Pak"}),n.a.createElement("title",null,"Utterzone | Course Introduction"),n.a.createElement("link",{rel:"canonical",href:"https://utter.zone/course/course-introduction"})),n.a.createElement(m.a,{className:r.hero,container:!0,justify:"center",direction:"column"},n.a.createElement(g.a,{className:r.header,elevation:1},n.a.createElement(h.a,{className:r.headerBody,variant:"h4",align:"center",gutterBottom:!0},"Course Introduction"))),n.a.createElement("main",{className:r.content},n.a.createElement(m.a,{container:!0,spacing:24},n.a.createElement(m.a,{item:!0,xs:12,style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement(D.m,{margin:"40px",src:a.courseImage}))),n.a.createElement(m.a,{item:!0,xs:12,align:"center"},n.a.createElement(G.b,{mutation:z,onCompleted:f},(e,{loading:t})=>n.a.createElement(D.r,{loading:t,disabled:t,color:!0===d.subscribed?"secondary":"primary",variant:"contained",onClick:()=>{d.subscribed&&(c.mutate({mutation:M,variables:{courseId:a._id}}),p({...d,subscribed:!1}),(()=>{const{user:e}=H.session,t=e.subscriptions.filter(e=>e._id!==H.session.course._id);e.subscriptions=t,H.session.user=e})()),d.subscribed||(e({variables:{courseId:a._id}}),p({...d,subscribed:!0}))},size:"large"},n.a.createElement(h.a,null,d.subscribed?"unsubscribe":"subscribe")))),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(h.a,{variant:"h6",align:"left",gutterBottom:!0},"General Information"),n.a.createElement(L.a,{className:`${r[y]} ${r.inputHeader}`,fullWidth:!0,disabled:d.loading,label:"Course Title",margin:"normal",name:"title",onChange:e=>p({...d,title:e.target.value}),placeholder:"And it's title here.",type:"text",variant:"outlined",value:d.title}),"title"===d.formErrors.path&&n.a.createElement("div",{style:{color:"#f44336"}},d.formErrors.errors[0]),n.a.createElement(L.a,{className:`${r[v]} ${r.inputHeader}`,disabled:d.loading,fullWidth:!0,name:"courseDescription",label:"Course Description",type:"text",onChange:e=>p({...d,courseDescription:e.target.value}),margin:"normal",multiline:!0,variant:"outlined",rowsMax:"12",value:d.courseDescription}),"courseDescription"===d.formErrors.path&&n.a.createElement("div",{style:{color:"#f44336"}},d.formErrors.errors[0])),n.a.createElement(m.a,{item:!0,xs:12},n.a.createElement(h.a,{variant:"h6",align:"left",gutterBottom:!0},"Course Details"),n.a.createElement(h.a,{variant:"body1",align:"left",gutterBottom:!0},"Course Author:"," ",n.a.createElement("span",{style:{fontWeight:900}},a.owner.username)),n.a.createElement(h.a,{variant:"body1",align:"left",gutterBottom:!0},"Resource:"," ",n.a.createElement("span",{style:{fontWeight:900}},a.resource||"none")),n.a.createElement(h.a,{variant:"body1",align:"left",gutterBottom:!0},"Using Language:"," ",n.a.createElement("span",{style:{fontWeight:900}},a.usingLang)),n.a.createElement(h.a,{variant:"body1",align:"left",gutterBottom:!0},"Teaching Language:"," ",n.a.createElement("span",{style:{fontWeight:900}},a.teachingLang))),n.a.createElement(m.a,{container:!0,style:{margin:"50px auto"}},n.a.createElement(D.c,{roles:t&&t.roles,perform:"course:update-introduction",id:t&&t.username,matchingID:a.owner.username,yes:()=>n.a.createElement(m.a,{item:!0,xs:12,align:"center"},n.a.createElement(D.r,{variant:"contained",loading:d.loading,disabled:d.loading,type:"submit",color:"secondary"},"Save Changes")),no:()=>null}))))))},T=Object(G.d)(G.f,Object(w.withStyles)(S.a))(q),$=T;var I,O;t.default=$,(I=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(I.register(C,"GET_COURSE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),I.register(z,"SUBSCRIBE_MUTATION","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),I.register(M,"UNSUBSCRIBE_MUTATION","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),I.register(N,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),I.register(q,"CourseIntroduction","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),I.register(T,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js")),(O=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&O(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;e&&(e.register(C,"GET_COURSE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),e.register(z,"SUBSCRIBE_MUTATION","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),e.register(M,"UNSUBSCRIBE_MUTATION","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),e.register(N,"COURSE_UPDATE","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),e.register(q,"CourseIntroduction","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),e.register(T,"_default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"),e.register($,"default","/var/www/html/utter/packages/client/src/layouts/courses/containers/course-introduction.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;t&&t(e)}()}.call(this,a("Ua1F")(e))},"6csj":function(e,t,a){"use strict";(function(e){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;t&&t(e)}();const o=[{value:"carousel",label:"Carousel",className:"appHeader",disabled:!1},{value:"chat",label:"General Chat",className:"appHeader",disabled:!1}],n=o;var s,i;t.a=n,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&s.register(o,"default","/var/www/html/utter/packages/client/src/data/appData.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&i(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;e&&(e.register(o,"_default","/var/www/html/utter/packages/client/src/data/appData.js"),e.register(n,"default","/var/www/html/utter/packages/client/src/data/appData.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;t&&t(e)}()}).call(this,a("Ua1F")(e))},"7YX4":function(e,t,a){"use strict";(function(e){var r;a.d(t,"a",function(){return o}),(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;t&&t(e)}();const o=e=>({actions:{display:"flex",justifyContent:"flex-end"},appBar:{zIndex:e.zIndex.drawer+1},card2:{height:"370px",maxWidth:"300px",display:"flex",flexDirection:"column"},card:{backgroundColor:"red",minHeight:"240px",maxHeight:"240px",display:"flex",flexDirection:"column"},cardDescription:{height:"70px",lineHeight:"1em",overflow:"auto",wordBreak:"break-all"},cardGrid:{padding:`${8*e.spacing.unit}px 0`},cardMedia:{paddingTop:"56.25%","&:hover":{cursor:"pointer"}},cardContent:{flexGrow:1},cardTitle:{height:"54px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},cardTitle2:{height:"52px",lineHeight:"1.2em",overflow:"hidden",wordBreak:"break-word"},cardUsername:{whiteSpace:"nowrap",width:"200px",overflow:"hidden",textOverflow:"ellipsis"},content:{flexGrow:1,padding:3*e.spacing.unit},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},formControl:{margin:e.spacing.unit,minWidth:120},heading:{color:"white"},heroUnit:{backgroundColor:e.palette.background.paper},heroUnitZoneCreate:{backgroundColor:"#502bae"},heroContentZoneCreate:{maxWidth:960,margin:"0 auto",padding:`${8*e.spacing.unit}px ${6*e.spacing.unit}px ${6*e.spacing.unit}px`},heroContent:{margin:"0 auto",padding:`${8*e.spacing.unit}px 0 ${6*e.spacing.unit}px`},heroButtons:{marginTop:4*e.spacing.unit},layout:{width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,[e.breakpoints.up(1240+3*e.spacing.unit*2)]:{width:1240,marginLeft:"auto",marginRight:"auto"}},root:{display:"flex",flexGrow:1,width:"100%"},rootZoneCreate:{maxWidth:960,margin:"0 auto"},saveButton:{margin:"50px"},select:{width:"80% !important",margin:"10px auto !important"},selectEmpty:{marginTop:2*e.spacing.unit},searchField:{marginTop:"7px"},showMore:{position:"absolute",bottom:-50,left:"50%",webkitTransform:"translateX(-50%)",transform:"translateX(-50%)",whiteSpace:"nowrap"},subHeading:{color:"black",marginTop:"40px",position:"relative"}});var n,s;(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(n.register(240,"drawerWidth","/var/www/html/utter/packages/client/src/layouts/zones/styles.js"),n.register(o,"styles","/var/www/html/utter/packages/client/src/layouts/zones/styles.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&s(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;e&&(e.register(240,"drawerWidth","/var/www/html/utter/packages/client/src/layouts/zones/styles.js"),e.register(o,"styles","/var/www/html/utter/packages/client/src/layouts/zones/styles.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;t&&t(e)}()}).call(this,a("Ua1F")(e))},"9tfQ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Yrs3");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=a("+EG4");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var n=a("+LZS");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var s=a("uRA1");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var i=a("38+B");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var l=a("SA3D");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},SA3D:function(e,t,a){"use strict";var r=a("jxvI");Object.defineProperty(t,"__esModule",{value:!0}),t.zoneCreateSchema=void 0;var o=r(a("vrZp")),n=o.object().shape({app:o.string().required("An app is required"),course:o.string().required("A course you subscribe to is required"),courseLevel:o.string().required("A course level is required"),ageGroup:o.string().required("Age restrictions are required"),zoneName:o.string().min(3,"Zone names must be at least 6 characters").max(40,"Zone names cannot exceed 20 characters").required("A zone name is required"),zoneDescription:o.string().min(30,"Zone descriptions must be at least 30 characters").max(110,"Zone descriptions cannot exceed 110 characters").required("A zone description is required")});t.zoneCreateSchema=n},TuDy:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return ZoneCtrl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("r0ML"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_zones_create_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("Yg3t"),enterModule,reactHotLoader,leaveModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule,enterModule&&enterModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).enterModule;e&&e(module)}();class ZoneCtrl extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_zones_create_js__WEBPACK_IMPORTED_MODULE_1__.a,null)}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default,reactHotLoader&&reactHotLoader.register(ZoneCtrl,"ZoneCtrl","/var/www/html/utter/packages/client/src/layouts/zones/containers/zone-controller.js"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule,leaveModule&&leaveModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).default;e&&e.register(ZoneCtrl,"ZoneCtrl","/var/www/html/utter/packages/client/src/layouts/zones/containers/zone-controller.js")}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("DQwH")).leaveModule;e&&e(module)}()}.call(this,__webpack_require__("Ua1F")(module))},Yg3t:function(e,t,a){"use strict";(function(e){var r,o=a("8VmE"),n=a.n(o),s=a("r0ML"),i=a.n(s),l=a("h815"),c=a("ZSWU"),u=a("ketZ"),d=a.n(u),m=a("ctQ7"),p=a.n(m),g=a("qvsH"),f=a("3aTW"),h=a("dYXW"),w=a("hycj"),v=a("xPkE"),b=a("9tfQ"),y=a("6csj"),_=a("e+cM"),E=a("rf6I"),L=a("qYHs"),H=a("18K1"),x=a("7YX4");(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;t&&t(e)}();const k=v.b.div`
  font-size: 0.8rem;
  position: absolute;
  right: 2%;
  top: 6px;

  @media (min-width: 330px) {
    right: 10%;
  }

  @media (min-width: 640px) {
    right: 2%;
  }

  @media (min-width: 740px) {
    right: 10%;
  }
`,G=Object(v.b)(_.v)`
  display: none;
  font-size: 0.6rem;
  padding: 0 0 0 10px;

  @media (min-width: 640px) {
    display: ${e=>e.display640};
  }
`,D=e=>{const t=H.session.user&&H.session.user.subscriptions?H.session.user.subscriptions.map(e=>({value:e._id,label:e.title})):[{}],{classes:a,handleSubmit:r,isSubmitting:o}=e,{zoneName:s,zoneDescription:c}=e.values;return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:a.rootZoneCreate,onSubmit:r},i.a.createElement(l.a,null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),i.a.createElement("meta",{name:"description",content:"Create a zone and practice speaking a new language!"}),i.a.createElement("meta",{name:"author",content:"Isaac Pak"}),i.a.createElement("title",null,"Utterzone | Create a Zone"),i.a.createElement("link",{rel:"canonical",href:"https://utterzone.com/zone/create"})),i.a.createElement("div",{className:a.heroUnitZoneCreate},i.a.createElement("div",{className:a.heroContentZoneCreate},i.a.createElement(d.a,{container:!0,justify:"center",direction:"column"},i.a.createElement(p.a,{align:"center",variant:"h4",className:a.heading,gutterBottom:!0},"Host a Zone"),i.a.createElement(p.a,{align:"center",variant:"h6",className:a.heading,gutterBottom:!0},"Create a zone where you and others can practice speaking on focused subjects that will help build your level of fluency in speaking your new language.")))),i.a.createElement("main",{className:a.content},i.a.createElement(d.a,{container:!0,spacing:24},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(p.a,{align:"left",variant:"h6",className:a.subHeading,gutterBottom:!0},"Zone Name",i.a.createElement(G,{display640:"inline-block"},"(3-40 chars.)"),i.a.createElement(k,null,s.length)),i.a.createElement(w.a,{fullWidth:!0,id:"outlined-search",name:"zoneName",label:"Zone Name",type:"text",className:a.searchField,component:_.g,margin:"normal",variant:"outlined"}),i.a.createElement(p.a,{align:"left",variant:"h6",className:a.subHeading,gutterBottom:!0},"Zone Description",i.a.createElement(G,{display640:"inline-block"}," ","(30-110 chars.)"),i.a.createElement(k,null,c.length)),i.a.createElement(w.a,{fullWidth:!0,id:"outlined-search",name:"zoneDescription",label:"Zone Description",type:"text",className:a.searchField,component:_.j,margin:"normal",variant:"outlined"})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(p.a,{align:"left",variant:"h6",className:a.subHeading,gutterBottom:!0},"Apps"),i.a.createElement(w.a,n()({name:"app",type:"text",options:y.a,component:_.i},e))),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(p.a,{align:"left",variant:"h6",className:a.subHeading,gutterBottom:!0},"Subscribed Courses"),i.a.createElement(w.a,n()({name:"course",type:"text",component:_.i},e,{options:t})),i.a.createElement(p.a,{align:"left",variant:"h6",className:a.subHeading,gutterBottom:!0},"Set Level"),i.a.createElement("p",{style:{padding:"10px"}},"Apps will use the course information from this level."),i.a.createElement(w.a,{name:"courseLevel",type:"text",component:_.g,style:{width:"80px"}})),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(p.a,{align:"left",variant:"h6",className:a.subHeading,gutterBottom:!0},"Age Restrictions"),i.a.createElement("p",{style:{padding:"10px"}},"Pick an appropriate age setting or a specific age demographic. Conversations are still not to involve any sexual misconduct or vulgar behaviour. Account bans/suspensions are duly enforced."),i.a.createElement(w.a,n()({name:"ageGroup",type:"text",component:_.i},e,{options:[{value:"any age",label:"any age",className:"ageHeader",disabled:!1},{value:"ages 0-2",label:"ages 0-2",className:"ageHeader",disabled:!1},{value:"ages 3+",label:"ages 3+",className:"ageHeader",disabled:!1},{value:"ages 7+",label:"ages 7+",className:"ageHeader",disabled:!1},{value:"ages 12+",label:"ages 12+",className:"ageHeader",disabled:!1},{value:"ages 16+",label:"ages 16+",className:"ageHeader",disabled:!1},{value:"ages 18+",label:"ages 18+",className:"ageHeader",disabled:!1},{value:"ages 18+",label:"ages 18+",className:"ageHeader",disabled:!1},{value:"ages 30+",label:"ages 30+",className:"ageHeader",disabled:!1},{value:"ages 40+",label:"ages 40+",className:"ageHeader",disabled:!1},{value:"ages 50+",label:"ages 50+",className:"ageHeader",disabled:!1},{value:"ages 60+",label:"ages 60+",className:"ageHeader",disabled:!1}]}))),i.a.createElement(d.a,{item:!0,xs:12,align:"center"},i.a.createElement(_.r,{variant:"contained",color:"secondary",type:"submit",size:"large",loading:o,disabled:o},"Create Zone"))))))},j=Object(f.d)(f.f,Object(f.e)(E.b,{name:"zoneCreate"}),c.a,Object(w.d)({validationSchema:b.zoneCreateSchema,validateOnChange:!1,validateOnBlur:!1,mapPropsToValues:()=>({ageGroup:"",app:"",appLevel:1,course:"",courseLevel:"",owner:H.session.user._id,zoneName:"",zoneDescription:""}),handleSubmit:async(e,{props:t,setErrors:a,setSubmitting:r})=>{try{const o=await t.client.query({query:L.b,variables:{courseId:e.course}}),{levels:n}=o.data.getLevels;if(console.log("levle: ",n),!n[parseInt(e.courseLevel,10)-1])return a({courseLevel:"This course does not contain a level with this number"}),r(!1),null;const s=await t.client.query({query:L.a,variables:{levelId:n[e.courseLevel-1]._id}});console.log("leve blahl: ",n[e.courseLevel-1]._id),console.log("course lvel :",s);const i=await t.zoneCreate({variables:{ageGroup:e.ageGroup,app:e.app,appLevel:e.appLevel,course:e.course,courseLevel:e.courseLevel,owner:e.owner,zoneName:e.zoneName,zoneDescription:e.zoneDescription}}),l=e=>{H.session.zone=e.data.zoneCreate,t.history.push({pathname:`/zone/${e.data.zoneCreate._id}`,state:{zoneId:e.data.zoneCreate._id}})};i?(l(i),h.toast.success("You have successfully created a zone.",{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0})):(a(i.ZONE_CREATE_MUTATION.errors),h.toast.success("Could not create a zone, please try again.",{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0}))}catch(e){return console.log("errors: ",e),e.message.indexOf("Cast to ObjectId failed for value")&&a({courseLevel:"This course does not contain a level with this number"}),r(!1),null}}}),Object(g.withStyles)(x.a))(D),S=j;var C,z;t.a=S,(C=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(C.register(k,"DisplayCount","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),C.register(G,"StyledSpan","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),C.register(D,"ZoneCreate","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),C.register(j,"default","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js")),(z=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&z(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;e&&(e.register(k,"DisplayCount","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),e.register(G,"StyledSpan","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),e.register(D,"ZoneCreate","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),e.register(j,"_default","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"),e.register(S,"default","/var/www/html/utter/packages/client/src/layouts/zones/containers/zones-create.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;t&&t(e)}()}).call(this,a("Ua1F")(e))},Yrs3:function(e,t,a){"use strict";var r=a("jxvI");Object.defineProperty(t,"__esModule",{value:!0}),t.signupSchema=t.loginSchema=t.changePasswordSchema=t.PasswordValidation=t.passwordNotLongEnough=t.emailNotLongEnough=t.invalidEmail=void 0;var o=r(a("vrZp"));t.invalidEmail="email must be a valid email";t.emailNotLongEnough="email must be at least 3 characters";t.passwordNotLongEnough="password must be at least 8 characters";var n=o.string().min(8,"password must be at least 8 characters").max(255).matches(/[a-z]/,"One lowercase character is required.").matches(/[A-Z]/,"One uppercase character is required.").matches(/[a-zA-Z]+[^a-zA-Z\s]+/,"A number or special char (@,!,#, etc) is required.").required("Password is required");t.PasswordValidation=n;var s=o.object().shape({password:n,"password confirmation":o.string().oneOf([o.ref("password"),null],"Passwords do not match").required("Password confirmation is required")});t.changePasswordSchema=s;var i=o.object().shape({"username or email":o.string().min(3,"invalid login").max(255,"invalid login").required("Username or Email is required"),password:n});t.loginSchema=i;var l=o.object().shape({username:o.string().min(3).max(255).required("Username is required"),email:o.string().min(3,"email must be at least 3 characters").max(255).email("email must be a valid email").required("Email is required"),password:n,"password confirmation":o.string().oneOf([o.ref("password"),null],"Passwords do not match").required("Password confirmation is required")});t.signupSchema=l},iZLL:function(e,t,a){"use strict";(function(e){var r;a.d(t,"a",function(){return o}),(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;t&&t(e)}();const o=e=>({actions:{display:"flex",justifyContent:"flex-end"},appBar:{zIndex:e.zIndex.drawer+1},card:{minHeight:"240px",display:"flex",flexDirection:"column"},cardGrid:{padding:`${8*e.spacing.unit}px 0`},cardMedia:{paddingTop:"56.25%","&:hover":{cursor:"pointer"}},cardContent:{flexGrow:1},cardTitle:{height:"54px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},cardUsername:{whiteSpace:"nowrap",width:"200px",overflow:"hidden",textOverflow:"ellipsis"},content:{flexGrow:1,padding:3*e.spacing.unit,width:"100%"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},errorClass:{boxShadow:`0px 0px 2px 1px ${e.palette.error.main}`,backgroundColor:"white"},errors:{color:e.palette.error.main},formControl:{margin:e.spacing.unit,minWidth:120},gridActions:{display:"flex",justifyContent:"space-between"},gridTitle:{height:"40px",lineHeight:"1em",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-word"},header:{fontSize:3*e.spacing.unit,fontWeight:400,height:"100%",minHeight:"40px",width:"100%"},headerBody:{padding:"40px"},hero:{padding:"0 24px "},heroUnit:{},heroContent:{margin:"0 auto",padding:`${16*e.spacing.unit}px 0 0 0`},heroButtons:{marginTop:4*e.spacing.unit},inputHeader:{background:"white",minHeight:"40px"},layout:{width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,[e.breakpoints.up(1240+3*e.spacing.unit*2)]:{width:1240,marginLeft:"auto",marginRight:"auto"}},root:{display:"flex",flexGrow:1,width:"100%"},selectEmpty:{marginTop:2*e.spacing.unit},searchField:{marginTop:"7px"},showMore:{position:"absolute",bottom:-50,left:"50%",webkitTransform:"translateX(-50%)",transform:"translateX(-50%)"}});var n,s;(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(n.register(240,"drawerWidth","/var/www/html/utter/packages/client/src/layouts/courses/styles.js"),n.register(o,"styles","/var/www/html/utter/packages/client/src/layouts/courses/styles.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&s(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;e&&(e.register(240,"drawerWidth","/var/www/html/utter/packages/client/src/layouts/courses/styles.js"),e.register(o,"styles","/var/www/html/utter/packages/client/src/layouts/courses/styles.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;t&&t(e)}()}).call(this,a("Ua1F")(e))},qYHs:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return l}),a.d(t,"e",function(){return c}),a.d(t,"f",function(){return u}),a.d(t,"d",function(){return d});var r,o=a("ktN7"),n=a.n(o);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;t&&t(e)}();const s=n.a`
  query getLevel($levelId: String!) {
    getLevel(levelId: $levelId) {
        _id
        course
        title
    }
  }
`,i=n.a`
  query getLevels($courseId: String!) {
    getLevels(courseId: $courseId) {
      levels {
        _id
        course
        title
      }
    }
  }
`,l=n.a`
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
`,c=n.a`
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
`,u=n.a`
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
`,d=n.a`
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
`;var m,p;(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(m.register(s,"GET_LEVEL","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),m.register(i,"GET_LEVELS","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),m.register(l,"LEVEL_CREATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),m.register(c,"LEVEL_SORT","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),m.register(u,"LEVEL_UPDATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),m.register(d,"LEVEL_DELETE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js")),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&p(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;e&&(e.register(s,"GET_LEVEL","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(i,"GET_LEVELS","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(l,"LEVEL_CREATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(c,"LEVEL_SORT","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(u,"LEVEL_UPDATE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"),e.register(d,"LEVEL_DELETE","/var/www/html/utter/packages/client/src/layouts/levels/xhr.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;t&&t(e)}()}).call(this,a("Ua1F")(e))},rf6I:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i});var r,o=a("ktN7"),n=a.n(o);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;t&&t(e)}();const s=n.a`
  query getZones(
    $app: String
    $subscriptions: String
    $cursor: String
    $searchInput: String
    $selectionBox: String
    $teachingLang: String!
    $usingLang: String!
  ) {
    getZones(
      input: {
        app: $app
        subscriptions: $subscriptions
        cursor: $cursor
        searchInput: $searchInput
        selectionBox: $selectionBox
        teachingLang: $teachingLang
        usingLang: $usingLang
      }
    ) {
      cursor
      more
      zones {
        ageGroup
        app
        zoneCourse {
          title
          usingLang
          teachingLang
        }
        course {
          _id
        }
        courseLevel
        _id
        owner {
          _id
        }
        ownerCourse {
          _id
          username
        }
        teachingLang
        usingLang
        zoneDescription
        zoneImage
        zoneName
      }
    }
  }
`,i=n.a`
  mutation zoneCreate(
    $ageGroup: String!
    $app: String
    $course: String
    $courseLevel: String
    $owner: String!
    $zoneName: String!
    $zoneDescription: String
    $teachingLang: String
    $usingLang: String
  ) {
    zoneCreate(
      input: {
        ageGroup: $ageGroup
        app: $app
        course: $course
        courseLevel: $courseLevel
        owner: $owner
        zoneName: $zoneName
        zoneDescription: $zoneDescription
        teachingLang: $teachingLang
        usingLang: $usingLang
      }
    ) {
      _id
      app
      courseLevel
      ageGroup
      zoneName
      zoneDescription
      owner {
        username
      }
    }
  }
`;var l,c;(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(l.register(s,"GET_ZONES","/var/www/html/utter/packages/client/src/layouts/zones/zone-queries.js"),l.register(i,"ZONE_CREATE_MUTATION","/var/www/html/utter/packages/client/src/layouts/zones/zone-queries.js")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&c(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;e&&(e.register(s,"GET_ZONES","/var/www/html/utter/packages/client/src/layouts/zones/zone-queries.js"),e.register(i,"ZONE_CREATE_MUTATION","/var/www/html/utter/packages/client/src/layouts/zones/zone-queries.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;t&&t(e)}()}).call(this,a("Ua1F")(e))},uRA1:function(e,t,a){"use strict";var r=a("jxvI");Object.defineProperty(t,"__esModule",{value:!0}),t.levelSchema=void 0;var o=r(a("vrZp")),n=o.object().shape({level:o.number().typeError("Levels must be whole numbers.").max(1e3,"Courses are limited to 1000 levels.").moreThan(0,"Levels need to be more than 0").required("A level is required."),title:o.string().typeError("Titles must be letters.").max(100,"Titles are limited to 100 characters.").required()});t.levelSchema=n}}]);
//# sourceMappingURL=bundle.course-introduction.67ead8d8ace27bea3346.js.map