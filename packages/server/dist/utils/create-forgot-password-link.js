"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForgotPasswordLink = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _uuid = require("uuid");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createForgotPasswordLink = exports.createForgotPasswordLink = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, userId, redis) {
    var id;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = (0, _uuid.v4)();
            _context.next = 3;
            return redis.set("" + _constants.forgotPasswordPrefix + id, userId, "ex", 60 * 20);

          case 3:
            // 20 mins
            if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") {
              url = process.env.REACT_APP_CLIENT_URL;
            }
            return _context.abrupt("return", url + "/change-password/" + id);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function createForgotPasswordLink(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();