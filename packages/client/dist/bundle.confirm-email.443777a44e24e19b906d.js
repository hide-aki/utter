(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1096:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(301);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\n\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n/* import gql from "graphql-tag" */\n\n\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      backgroundColor: "black",\n      height: "100%"\n    },\n    text: {\n      color: "white"\n    },\n    masthead: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({\n      padding: theme.spacing.unit * 1,\n      margin: "auto",\n      maxWidth: 900\n    }, "@media (max-width:770px)", {\n      flexDirection: "column"\n    }),\n    section: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({\n      padding: theme.spacing.unit * 1,\n      height: "100vh",\n      maxWidth: 900\n    }, "@media (max-width:770px)", {\n      flexDirection: "column"\n    })\n  };\n};\n\nvar ConfirmEmail =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ConfirmEmail, _Component);\n\n  function ConfirmEmail() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ConfirmEmail);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ConfirmEmail)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {\n      confirmation: ""\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "componentDidMount",\n    /*#__PURE__*/\n    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var apiUrl, controller, signal, fetchPromise, timeoutId;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              apiUrl = "https://api.utterzone.com";\n\n              if (true) {\n                controller = new AbortController();\n                signal = controller.signal;\n                fetchPromise = fetch("".concat(apiUrl, "/api/users/confirm/").concat(_this.props.match.params.token)); // 5 second timeout:\n\n                timeoutId = setTimeout(function () {\n                  return controller.abort();\n                }, 5000);\n                fetchPromise.then(\n                /*#__PURE__*/\n                function () {\n                  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n                  /*#__PURE__*/\n                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {\n                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            _context.t0 = _this;\n                            _context.next = 3;\n                            return res.text();\n\n                          case 3:\n                            _context.t1 = _context.sent;\n                            _context.t2 = {\n                              confirmation: _context.t1\n                            };\n\n                            _context.t0.setState.call(_context.t0, _context.t2); // If you only wanted to timeout the request, not the response, add:\n\n\n                            clearTimeout(timeoutId);\n\n                          case 7:\n                          case "end":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function (_x) {\n                    return _ref2.apply(this, arguments);\n                  };\n                }());\n              } else {}\n\n            case 2:\n            case "end":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    })));\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ConfirmEmail, [{\n    key: "render",\n    value: function render() {\n      var classes = this.props.classes;\n      var confirmation = this.state.confirmation;\n      /* Your email account has been confirmed. */\n\n      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_10__[/* Helmet */ "a"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {\n        charset: "utf-8"\n      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {\n        name: "viewport",\n        content: "width=device-width, initial-scale=1, shrink-to-fit=no"\n      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {\n        name: "author",\n        content: "Isaac Pak"\n      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", null, "Utterzone | Confirm Email"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {\n        rel: "canonical",\n        href: "https://utterzone/confirm-email"\n      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_14__[/* Container */ "e"], {\n        className: classes.root\n      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_14__[/* Section */ "u"], {\n        className: classes.section\n      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {\n        variant: "h6",\n        align: "center",\n        className: classes.text,\n        gutterBottom: true\n      }, confirmation))));\n    }\n  }, {\n    key: "__reactstandin__regenerateByEval",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return ConfirmEmail;\n}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);\n\nvar _default = Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__[/* compose */ "d"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__[/* withApollo */ "f"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(styles))(ConfirmEmail);\n\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__["default"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, "styles", "/var/www/html/utter/packages/client/src/layouts/confirm-email.js");\n  reactHotLoader.register(ConfirmEmail, "ConfirmEmail", "/var/www/html/utter/packages/client/src/layouts/confirm-email.js");\n  reactHotLoader.register(_default, "default", "/var/www/html/utter/packages/client/src/layouts/confirm-email.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, "styles", "/var/www/html/utter/packages/client/src/layouts/confirm-email.js");\n  reactHotLoader.register(ConfirmEmail, "ConfirmEmail", "/var/www/html/utter/packages/client/src/layouts/confirm-email.js");\n  reactHotLoader.register(_default, "_default", "/var/www/html/utter/packages/client/src/layouts/confirm-email.js");\n  reactHotLoader.register(_default2, "default", "/var/www/html/utter/packages/client/src/layouts/confirm-email.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))\n\n//# sourceURL=webpack:///./layouts/confirm-email.js?')}}]);