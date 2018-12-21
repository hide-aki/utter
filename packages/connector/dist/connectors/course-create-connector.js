"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseCreateConnector = exports.CC = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  mutation CourseCreateMutation(\n    $id: ID!\n    $courseId: String\n    $courseName: String!\n    $description: String\n    $courseMode: String\n    $favorite: Boolean\n  ) {\n    courseCreate(\n      input: {\n        id: $id\n        courseId: $courseId\n        courseName: $courseName\n        description: $description\n        courseMode: $courseMode\n        favorite: $favorite\n      }\n    ) {\n      course\n      error {\n        path\n        message\n      }\n    }\n  }\n"], ["\n  mutation CourseCreateMutation(\n    $id: ID!\n    $courseId: String\n    $courseName: String!\n    $description: String\n    $courseMode: String\n    $favorite: Boolean\n  ) {\n    courseCreate(\n      input: {\n        id: $id\n        courseId: $courseId\n        courseName: $courseName\n        description: $description\n        courseMode: $courseMode\n        favorite: $favorite\n      }\n    ) {\n      course\n      error {\n        path\n        message\n      }\n    }\n  }\n"]); /* eslint no-unused-vars: 0 */

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _normalizeErrors = require("../utils/normalizeErrors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* NOTE: Since this will file will be used by both client and app, it cannot use React or React Native Commands ie. <div> <View> */
var CC = exports.CC = function (_PureComponent) {
  (0, _inherits3.default)(CC, _PureComponent);

  function CC() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CC);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CC.__proto__ || Object.getPrototypeOf(CC)).call.apply(_ref, [this].concat(args))), _this), _this.submit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(values) {
        var _ref3, error, course;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.props.mutate({
                  variables: {
                    id: values.id,
                    courseId: values.courseId,
                    courseName: values.courseName,
                    description: values.description,
                    courseMode: values.courseMode,
                    favorite: values.favorite
                  }
                });

              case 3:
                _ref3 = _context.sent;
                error = _ref3.data.courseCreate.error;
                course = _ref3.data.courseCreate.course;

                if (!(course !== null)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", course);

              case 8:
                if (!error) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", (0, _normalizeErrors.normalizeErrors)(error));

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);

                console.log("err: ", _context.t0);

              case 15:
                return _context.abrupt("return", null);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CC, [{
    key: "render",
    value: function render() {
      return this.props.children({ submit: this.submit });
    }
  }]);
  return CC;
}(_react.PureComponent);

var CourseCreateMutation = (0, _graphqlTag2.default)(_templateObject);

var CourseCreateConnector = exports.CourseCreateConnector = (0, _reactApollo.graphql)(CourseCreateMutation)(CC);
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CC, "CC", "src/connectors/course-create-connector.js");
  reactHotLoader.register(CourseCreateConnector, "CourseCreateConnector", "src/connectors/course-create-connector.js");
  reactHotLoader.register(CourseCreateMutation, "CourseCreateMutation", "src/connectors/course-create-connector.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CC, "CC", "src/connectors/course-create-connector.js");
  reactHotLoader.register(CourseCreateConnector, "CourseCreateConnector", "src/connectors/course-create-connector.js");
  reactHotLoader.register(CourseCreateMutation, "CourseCreateMutation", "src/connectors/course-create-connector.js");
  leaveModule(module);
})();

;