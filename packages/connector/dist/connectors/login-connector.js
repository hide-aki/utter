"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginConnector = exports.D = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reactApollo = require("react-apollo");

var _react = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _normalizeErrors = require("../utils/normalize-errors");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  mutation loginMutation($identifier: String!, $password: String!) {\n    login(input: {identifier: $identifier, password: $password}) {\n      token\n      user {\n        _id\n        username\n        roles\n        rights\n        subscriptions {\n          _id\n          title\n          levels {\n            _id\n          }\n        }\n      }\n      error {\n        path\n        message\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* NOTE: Since this will file will be used by both client and app, it cannot use React or React Native Commands ie. <div> <View> */
var D =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(D, _Component);

  function D() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, D);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(D)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "submit",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values) {
        var response, error, token;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.props.mutate({
                  variables: {
                    identifier: values["username or email"],
                    password: values.password
                  }
                });

              case 3:
                response = _context.sent;
                error = response.data.login.error;
                token = response.data.login.token;

                if ((0, _isEmpty.default)(error)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", (0, _normalizeErrors.normalizeErrors)(error));

              case 8:
                return _context.abrupt("return", (0, _objectSpread2.default)({}, response.data.login, {
                  token: token,
                  error: error
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log("err: ", _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return _this;
  }

  (0, _createClass2.default)(D, [{
    key: "render",
    value: function render() {
      return this.props.children({
        submit: this.submit
      });
    }
  }]);
  return D;
}(_react.Component);

exports.D = D;
var loginMutation = (0, _graphqlTag.default)(_templateObject());
var LoginConnector = (0, _reactApollo.graphql)(loginMutation)(D);
exports.LoginConnector = LoginConnector;