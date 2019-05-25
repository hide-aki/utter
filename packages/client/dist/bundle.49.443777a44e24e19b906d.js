(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1112:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(602);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(104);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(133);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(132);\n/* harmony import */ var _utterzone_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1128);\n/* harmony import */ var _utterzone_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utterzone_common__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);\n/* harmony import */ var _graphql_mutations_zone_mutaions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1322);\n/* harmony import */ var _graphql_queries_level_queries_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1187);\n/* harmony import */ var brownies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38);\n/* harmony import */ var brownies__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(brownies__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1184);\n/* harmony import */ var _overrides_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1442);\n/* harmony import */ var _overrides_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_overrides_css__WEBPACK_IMPORTED_MODULE_16__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;\n  enterModule && enterModule(module);\n})();\n/* import React, {useState} from "react" */\n\n\n\n\n\n\n\n\n\n\n/* import cuid from "cuid" */\n\n\n\n\n\n\n\n\n\nvar ZoneCreate = function ZoneCreate(props) {\n  /* const [state, changeState] = useState({ */\n\n  /*   public: true, */\n\n  /*   private: false */\n\n  /* }) */\n\n  /* const handleChange = name => event => { */\n\n  /*   changeState({ */\n\n  /*     ...state, */\n\n  /*     [name]: event.target.checked */\n\n  /*   }) */\n\n  /*   props.setFieldValue("private", event.target.checked) */\n\n  /* } */\n  var classes = props.classes,\n      handleSubmit = props.handleSubmit,\n      isSubmitting = props.isSubmitting;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {\n    className: classes.rootZoneCreate,\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: classes.heroUnitZoneCreate\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: classes.heroContentZoneCreate\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    container: true,\n    justify: "center",\n    direction: "column"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    align: "center",\n    variant: "h4",\n    className: classes.heading,\n    gutterBottom: true\n  }, "Enter a Private Zone"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    align: "center",\n    variant: "h6",\n    className: classes.heading,\n    gutterBottom: true\n  }, "Private zones are made available for people who want a learn with people they choose. Private rooms are not listed on the website zones list so you must inform the people you want to joint your username and a password if you required one. All public rules apply to private rooms.")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {\n    className: classes.content\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    container: true,\n    spacing: 24,\n    justify: "center",\n    alignContent: "center"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    align: "left",\n    variant: "h6",\n    className: classes.subHeading,\n    gutterBottom: true\n  }, "Enter host name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__[/* Field */ "a"], {\n    className: "custom_input",\n    name: "username",\n    type: "text",\n    component: _components__WEBPACK_IMPORTED_MODULE_11__[/* FormikInput */ "g"],\n    style: {\n      width: "100px"\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    align: "left",\n    variant: "h6",\n    className: classes.subHeading,\n    gutterBottom: true\n  }, "Enter Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__[/* Field */ "a"], {\n    className: "custom_input",\n    name: "password",\n    type: "text",\n    component: _components__WEBPACK_IMPORTED_MODULE_11__[/* FormikInput */ "g"],\n    style: {\n      width: "100px"\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    item: true,\n    xs: 12,\n    align: "center"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__[/* LoadingButton */ "s"], {\n    variant: "contained",\n    color: "secondary",\n    type: "submit",\n    size: "large",\n    loading: isSubmitting,\n    disabled: isSubmitting\n  }, "Enter Zone"))))));\n};\n\nvar _default = Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__[/* compose */ "d"])(react_apollo__WEBPACK_IMPORTED_MODULE_7__[/* withApollo */ "f"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__[/* graphql */ "e"])(_graphql_mutations_zone_mutaions_js__WEBPACK_IMPORTED_MODULE_12__[/* ZONE_CREATE_MUTATION */ "a"], {\n  name: "zoneCreate"\n}), react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(formik__WEBPACK_IMPORTED_MODULE_9__[/* withFormik */ "d"])({\n  validationSchema: _utterzone_common__WEBPACK_IMPORTED_MODULE_10__["zoneCreateSchema"],\n  validateOnChange: false,\n  validateOnBlur: false,\n  mapPropsToValues: function mapPropsToValues() {\n    return {\n      ageGroup: "",\n      app: "",\n      appLevel: 1,\n      course: "",\n      courseLevel: "",\n      owner: brownies__WEBPACK_IMPORTED_MODULE_14__["session"].user._id,\n      private: false,\n      password: "",\n      zoneName: "",\n      zoneDescription: ""\n    };\n  },\n  handleSubmit: function () {\n    var _handleSubmit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref) {\n      var props, setErrors, setSubmitting, courseLevels, levels, index, courseLevel, result, onComplete;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              props = _ref.props, setErrors = _ref.setErrors, setSubmitting = _ref.setSubmitting;\n              _context.prev = 1;\n              _context.next = 4;\n              return props.client.query({\n                query: _graphql_queries_level_queries_js__WEBPACK_IMPORTED_MODULE_13__[/* GET_LEVELS */ "b"],\n                variables: {\n                  courseId: values.course\n                }\n              });\n\n            case 4:\n              courseLevels = _context.sent;\n              levels = courseLevels.data.getLevels.levels;\n              index = parseInt(values.courseLevel, 10);\n              brownies__WEBPACK_IMPORTED_MODULE_14__["session"].level = index;\n\n              if (levels[index - 1]) {\n                _context.next = 12;\n                break;\n              }\n\n              setErrors({\n                courseLevel: "This course does not contain a level with this number"\n              });\n              setSubmitting(false);\n              return _context.abrupt("return", null);\n\n            case 12:\n              _context.next = 14;\n              return props.client.query({\n                query: _graphql_queries_level_queries_js__WEBPACK_IMPORTED_MODULE_13__[/* GET_LEVEL */ "a"],\n                variables: {\n                  levelId: levels[values.courseLevel - 1]._id\n                }\n              });\n\n            case 14:\n              courseLevel = _context.sent;\n              brownies__WEBPACK_IMPORTED_MODULE_14__["session"].vocabulary = courseLevel.data.getLevel.vocabulary;\n              console.log("values; ", values);\n              _context.next = 19;\n              return props.zoneCreate({\n                variables: {\n                  ageGroup: values.ageGroup,\n                  app: values.app,\n                  appLevel: values.appLevel,\n                  course: values.course,\n                  courseLevel: values.courseLevel,\n                  owner: values.owner,\n                  private: values.private,\n                  password: values.password,\n                  zoneName: values.zoneName,\n                  zoneDescription: values.zoneDescription\n                }\n              });\n\n            case 19:\n              result = _context.sent;\n\n              onComplete = function onComplete(zone) {\n                brownies__WEBPACK_IMPORTED_MODULE_14__["session"].zone = zone.data.zoneCreate;\n                props.history.push({\n                  pathname: "/zone/".concat(zone.data.zoneCreate._id),\n                  state: {\n                    zoneId: zone.data.zoneCreate._id\n                  }\n                });\n              }; // if result is legit\n\n\n              if (result) {\n                onComplete(result);\n                react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].success("You have successfully created a zone.", {\n                  className: "toasty",\n                  bodyClassName: "toasty-body",\n                  hideProgressBar: true\n                });\n              } else {\n                setErrors(result.ZONE_CREATE_MUTATION.errors);\n                react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].success("Could not create a zone, please try again.", {\n                  className: "toasty",\n                  bodyClassName: "toasty-body",\n                  hideProgressBar: true\n                });\n              }\n\n              _context.next = 29;\n              break;\n\n            case 24:\n              _context.prev = 24;\n              _context.t0 = _context["catch"](1);\n              console.log("errors: ", _context.t0); // TODO: uncomment when launching\n\n              /* /1* console.error("TEST ERR =>", err.graphQLErrors.map(x => x.message)); *1/ */\n\n              /* const msg = err.message.replace("GraphQL error:", "").trim() */\n\n              /* if (err.message.indexOf("You can only host")) { */\n\n              /*   props.history.push({ */\n\n              /*     pathname: "/zones/rezone" */\n\n              /*     /1* state: {courseId: course.data.courseCreate._id} *1/ */\n\n              /*   }) */\n\n              /*   toast.warn(msg, { */\n\n              /*     className: "toasty", */\n\n              /*     bodyClassName: "toasty-body", */\n\n              /*     hideProgressBar: true */\n\n              /*   }) */\n\n              /* } else if (err.message.indexOf("Cast to ObjectId failed for value")) { */\n\n              /*   setErrors({ */\n\n              /*     courseLevel: "This course does not contain a level with this number" */\n\n              /*   }) */\n\n              /* } */\n\n              setSubmitting(false);\n              return _context.abrupt("return", null);\n\n            case 29:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 24]]);\n    }));\n\n    function handleSubmit(_x, _x2) {\n      return _handleSubmit.apply(this, arguments);\n    }\n\n    return handleSubmit;\n  }()\n}), Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(_styles_js__WEBPACK_IMPORTED_MODULE_15__[/* styles */ "c"]))(ZoneCreate);\n\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__["default"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ZoneCreate, "ZoneCreate", "/var/www/html/utter/packages/client/src/layouts/zones/components/private-zone.js");\n  reactHotLoader.register(_default, "default", "/var/www/html/utter/packages/client/src/layouts/zones/components/private-zone.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ZoneCreate, "ZoneCreate", "/var/www/html/utter/packages/client/src/layouts/zones/components/private-zone.js");\n  reactHotLoader.register(_default, "_default", "/var/www/html/utter/packages/client/src/layouts/zones/components/private-zone.js");\n  reactHotLoader.register(_default2, "default", "/var/www/html/utter/packages/client/src/layouts/zones/components/private-zone.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))\n\n//# sourceURL=webpack:///./layouts/zones/components/private-zone.js?')}}]);