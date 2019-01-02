"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LevelsConnector = exports.L = undefined;

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  mutation levelCreate(\n    $levelName: String!\n    $levelImage: String\n    $levelDescription: String\n    $levelMode: String\n    $teachingLang: String\n    $usingLang: String\n  ) {\n    levelCreate(\n      input: {\n        levelName: $levelName\n        levelImage: $levelImage\n        levelDescription: $levelDescription\n        levelMode: $levelMode\n        teachingLang: $teachingLang\n        usingLang: $usingLang\n      }\n    ) {\n      id\n      levelName\n      levelAuthor {\n        username\n      }\n      levelDescription\n      levelMode\n    }\n  }\n"], ["\n  mutation levelCreate(\n    $levelName: String!\n    $levelImage: String\n    $levelDescription: String\n    $levelMode: String\n    $teachingLang: String\n    $usingLang: String\n  ) {\n    levelCreate(\n      input: {\n        levelName: $levelName\n        levelImage: $levelImage\n        levelDescription: $levelDescription\n        levelMode: $levelMode\n        teachingLang: $teachingLang\n        usingLang: $usingLang\n      }\n    ) {\n      id\n      levelName\n      levelAuthor {\n        username\n      }\n      levelDescription\n      levelMode\n    }\n  }\n"]); /* eslint no-unused-vars: 0 */

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
var L = exports.L = function (_PureComponent) {
  (0, _inherits3.default)(L, _PureComponent);

  function L() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, L);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = L.__proto__ || Object.getPrototypeOf(L)).call.apply(_ref, [this].concat(args))), _this), _this.submit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(values) {
        var _ref3, levelCreate;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.props.mutate({
                  variables: {
                    levelName: values.levelName,
                    levelDescription: values.levelDescription,
                    levelImage: values.levelImage,
                    levelMode: values.levelMode,
                    teachingLang: values.teachingLang,
                    usingLang: values.usingLang
                  }
                });

              case 3:
                _ref3 = _context.sent;
                levelCreate = _ref3.data;

                if (!levelCreate) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", levelCreate);

              case 7:
                if (!error) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", (0, _normalizeErrors.normalizeErrors)(error));

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

                console.log("err: ", _context.t0);

              case 14:
                return _context.abrupt("return", null);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(L, [{
    key: "render",
    value: function render() {
      return this.props.children({ submit: this.submit });
    }
  }]);
  return L;
}(_react.PureComponent);

var LevelCreateMutation = (0, _graphqlTag2.default)(_templateObject);

var LevelsConnector = exports.LevelsConnector = (0, _reactApollo.graphql)(LevelCreateMutation)(L);
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(L, "L", "src/connectors/levels-connector.js");
  reactHotLoader.register(LevelsConnector, "LevelsConnector", "src/connectors/levels-connector.js");
  reactHotLoader.register(LevelCreateMutation, "LevelCreateMutation", "src/connectors/levels-connector.js");
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

  reactHotLoader.register(L, "L", "src/connectors/levels-connector.js");
  reactHotLoader.register(LevelsConnector, "LevelsConnector", "src/connectors/levels-connector.js");
  reactHotLoader.register(LevelCreateMutation, "LevelCreateMutation", "src/connectors/levels-connector.js");
  leaveModule(module);
})();

;