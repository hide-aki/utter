(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{jr8t:function(t,e,a){"use strict";a.r(e),function(t){var n,r=a("r0ML"),o=a.n(r),c=a("3aTW"),l=a("yVZo"),s=a.n(l),u=a("ketZ"),i=a.n(u),d=a("18K1"),w=a("ctQ7"),g=a.n(w),m=a("qvsH"),f=a("6K+6"),p=a("q4Vz");function h(t){var e=t.classes;console.log("props: ",t);var a=function(e){return function(){e();var a=d.session.user,n=d.session.user.roles.filter(function(t){return"payMonthly"!==t});a.isCanceled=!0,a.roles=n,d.session.user=a,delete d.cookies._uid,delete d.session.user,t.history.push("/login",{notification:"Your account has been deactivated",type:"success"})}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("main",{className:e.settingsContent},o.a.createElement("div",{className:e.heroUnit},o.a.createElement("div",{className:e.heroContent},o.a.createElement(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Account Settings"),o.a.createElement("div",{className:e.heroButtons}))),!1===d.session.user.isCanceled&&o.a.createElement("div",null,o.a.createElement(g.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Your account will be deactivated. You will not be able to login with your current credentials."),o.a.createElement(i.a,{container:!0,spacing:16,justify:"center"},o.a.createElement(i.a,{item:!0},o.a.createElement(c.b,{mutation:p.a},function(t){return o.a.createElement(s.a,{variant:"contained",color:"secondary",onClick:a(t)},"Cancel My Account")}))))))}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&n(t),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;e&&e(t)}();var v,H,y=Object(m.withStyles)(f.a)(h),L=y;e.default=L,(v=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(v.register(h,"AccountSettings","/var/www/html/utter/packages/client/src/layouts/account/account-settings.js"),v.register(y,"default","/var/www/html/utter/packages/client/src/layouts/account/account-settings.js")),(H=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&H(t),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;t&&(t.register(h,"AccountSettings","/var/www/html/utter/packages/client/src/layouts/account/account-settings.js"),t.register(y,"_default","/var/www/html/utter/packages/client/src/layouts/account/account-settings.js"),t.register(L,"default","/var/www/html/utter/packages/client/src/layouts/account/account-settings.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;e&&e(t)}()}.call(this,a("Ua1F")(t))},q4Vz:function(t,e,a){"use strict";(function(t){a.d(e,"a",function(){return m});var n,r=a("hc4W"),o=a.n(r),c=a("ktN7"),l=a.n(c),s=a("vEV+");function u(){var t=o()(["\n  mutation changeCreditCard($source: String!, $ccLast4: String) {\n    changeCreditCard(source: $source, ccLast4: $ccLast4) {\n      ...UserInfo\n    }\n  }\n\n  ","\n"]);return u=function(){return t},t}function i(){var t=o()(["\n  mutation createPayMonthly($source: String!, $ccLast4: String) {\n    createPayMonthly(source: $source, ccLast4: $ccLast4) {\n      ...UserInfo\n    }\n  }\n\n  ","\n"]);return i=function(){return t},t}function d(){var t=o()(["\n  mutation cancelPayMonthly {\n    cancelPayMonthly {\n      ...UserInfo\n    }\n  }\n\n  ","\n"]);return d=function(){return t},t}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule)&&n(t),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).enterModule;e&&e(t)}();var w,g,m=l()(d(),s.a),f=l()(i(),s.a),p=l()(u(),s.a);(w=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default)&&(w.register(m,"CANCEL_PAY_MONTHLY","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"),w.register(f,"CREATE_PAY_MONTHLY","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"),w.register(p,"CHANGE_CREDIT_CARD","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js")),(g=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule)&&g(t),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).default;t&&(t.register(u,"_templateObject3","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"),t.register(i,"_templateObject2","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"),t.register(d,"_templateObject","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"),t.register(m,"CANCEL_PAY_MONTHLY","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"),t.register(f,"CREATE_PAY_MONTHLY","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"),t.register(p,"CHANGE_CREDIT_CARD","/var/www/html/utter/packages/client/src/graphql/mutations/account-mutations.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a("DQwH")).leaveModule;e&&e(t)}()}).call(this,a("Ua1F")(t))}}]);
//# sourceMappingURL=bundle.account-settings.f2bad062c2ae06f45495.js.map