"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userResolvers = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _lodash = require("lodash");

var yup = _interopRequireWildcard(require("yup"));

var _config = _interopRequireDefault(require("../../config"));

var _auth = require("../../auth");

var _errorMessages = require("../shared/error-messages.js");

var _createConfirmationEmailLink = require("../../utils/create-confirmation-email-link.js");

var _createForgotPasswordLink = require("../../utils/create-forgot-password-link.js");

var _constants = require("../../constants");

var _formatYupError = require("../../utils/format-yup-error.js");

var _mail = require("../../mail/mail");

var _userModel = _interopRequireDefault(require("./user-model.js"));

var _resolverFunctions = require("../shared/resolver-functions.js");

var _common = require("@utterzone/common");

/* eslint-enable no-unused-vars */
var me =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_, __, _ref) {
    var req;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;

            if (req.session.userId) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", null);

          case 3:
            console.log("user: ", _userModel.default.findById(req.session.userId).lean());
            return _context.abrupt("return", _userModel.default.findById(req.session.userId).lean());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function me(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var confirmEmail =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_, args, _ref3) {
    var redis, url, redisToken, redisKey, userId;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            redis = _ref3.redis, url = _ref3.url;
            redisToken = args.input.token;
            redisKey = "".concat(_constants.confirmEmailPrefix).concat(redisToken);
            _context2.next = 5;
            return redis.get(redisKey);

          case 5:
            userId = _context2.sent;

            if (userId) {
              _context2.next = 10;
              break;
            }

            console.log("no user");
            arrayOfErrors.push({
              path: "password",
              message: _errorMessages.expiredKeyError
            });
            return _context2.abrupt("return", {
              token: null,
              error: arrayOfErrors
            });

          case 10:
            console.log("args: ", args); // change confirm to true

            /* User.updateOne(). */

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function confirmEmail(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var contact =
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(_, args, _ref5) {
    var redis, url, email;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            redis = _ref5.redis, url = _ref5.url;
            _context3.next = 3;
            return (0, _mail.sendContactEmail)(args);

          case 3:
            email = _context3.sent;
            return _context3.abrupt("return", {
              success: email.accepted,
              errors: email.rejected
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function contact(_x7, _x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();

var changePassword =
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(_, args, _ref7) {
    var redis, url, token, arrayOfErrors, redisToken, redisKey, userId, user, hashedPassword, updatePromise, deleteKeyPromise;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            redis = _ref7.redis, url = _ref7.url;
            token = null;
            arrayOfErrors = [];
            redisToken = args.input.token;
            redisKey = "".concat(_constants.forgotPasswordPrefix).concat(redisToken);
            _context4.next = 7;
            return redis.get(redisKey);

          case 7:
            userId = _context4.sent;

            if (userId) {
              _context4.next = 12;
              break;
            }

            console.log("no user");
            arrayOfErrors.push({
              path: "password",
              message: _errorMessages.expiredKeyError
            });
            return _context4.abrupt("return", {
              token: null,
              error: arrayOfErrors
            });

          case 12:
            _context4.prev = 12;
            args.input["password confirmation"] = args.input.passwordConfirmation;
            _context4.next = 16;
            return _common.changePasswordSchema.validate(args.input, {
              abortEarly: false
            });

          case 16:
            _context4.next = 23;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](12);

            if (!_context4.t0) {
              _context4.next = 23;
              break;
            }

            arrayOfErrors = (0, _formatYupError.formatYupError)(_context4.t0);
            return _context4.abrupt("return", {
              error: arrayOfErrors
            });

          case 23:
            _context4.next = 25;
            return _userModel.default.findById(userId).exec();

          case 25:
            user = _context4.sent;
            hashedPassword = user.encryptPassword(args.input.password);
            updatePromise = _userModel.default.findByIdAndUpdate(userId, {
              $set: {
                forgotPasswordLocked: false,
                password: hashedPassword
              }
            });
            token = (0, _auth.signToken)(user._id);
            deleteKeyPromise = redis.del(redisKey);
            _context4.next = 32;
            return Promise.all([updatePromise, deleteKeyPromise]);

          case 32:
            return _context4.abrupt("return", {
              token: token,
              error: []
            });

          case 33:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[12, 18]]);
  }));

  return function changePassword(_x10, _x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();

var signup =
/*#__PURE__*/
function () {
  var _ref10 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(_, args, _ref9, info) {
    var redis, url, token, arrayOfErrors, _args$input, username, email, password, foundDupeEmail, foundDupeUsername, error, newUser;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            redis = _ref9.redis, url = _ref9.url;
            args.input["password confirmation"] = args.input.passwordConfirmation;
            token = null;
            arrayOfErrors = [];
            _context6.prev = 4;
            _context6.next = 7;
            return _common.signupSchema.validate(args.input, {
              abortEarly: false
            });

          case 7:
            _context6.next = 12;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](4);

            if (_context6.t0) {
              arrayOfErrors = (0, _formatYupError.formatYupError)(_context6.t0);
            }

          case 12:
            _args$input = args.input, username = _args$input.username, email = _args$input.email, password = _args$input.password;
            _context6.next = 15;
            return _userModel.default.findOne({
              email: email
            }).exec();

          case 15:
            foundDupeEmail = _context6.sent;
            _context6.next = 18;
            return _userModel.default.findOne({
              username: username
            }).exec();

          case 18:
            foundDupeUsername = _context6.sent;

            if (foundDupeUsername !== null) {
              error = {
                path: "username",
                message: _errorMessages.duplicateUsername
              };
              arrayOfErrors.push(error);
            }

            if (foundDupeEmail !== null) {
              error = {
                path: "email",
                message: _errorMessages.duplicateEmail
              };
              arrayOfErrors.push(error);
            } // Valid with unique email


            if (!(foundDupeEmail === null && (0, _lodash.isEmpty)(arrayOfErrors))) {
              _context6.next = 24;
              break;
            }

            newUser = new _userModel.default(args.input);
            return _context6.abrupt("return", newUser.save().then(
            /*#__PURE__*/
            function () {
              var _ref11 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee5(result) {
                return _regenerator.default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        token = (0, _auth.signToken)(newUser._id);
                        result.password = null;
                        _context5.t0 = _mail.sendConfirmEmail;
                        _context5.t1 = newUser.email;
                        _context5.next = 6;
                        return (0, _createConfirmationEmailLink.createEmailConfirmLink)(url, newUser._id, redis);

                      case 6:
                        _context5.t2 = _context5.sent;
                        (0, _context5.t0)(_context5.t1, _context5.t2);
                        return _context5.abrupt("return", {
                          token: token,
                          user: result,
                          error: arrayOfErrors
                        });

                      case 9:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x17) {
                return _ref11.apply(this, arguments);
              };
            }()).catch(function (err) {
              throw err;
            }));

          case 24:
            return _context6.abrupt("return", {
              error: arrayOfErrors
            });

          case 25:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[4, 9]]);
  }));

  return function signup(_x13, _x14, _x15, _x16) {
    return _ref10.apply(this, arguments);
  };
}();

var login =
/*#__PURE__*/
function () {
  var _ref12 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(parent, args, ctx, info) {
    var _args$input2, identifier, password, token, arrayOfErrors, username, email, criteria, user;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log("ctx: ", ctx.req); // decipher identifier

            _args$input2 = args.input, identifier = _args$input2.identifier, password = _args$input2.password;
            token = "";
            arrayOfErrors = [];
            criteria = identifier.indexOf("@") === -1 ? {
              username: identifier
            } : {
              email: identifier
            };

            if (!identifier || !password) {
              arrayOfErrors.push({
                path: "identifier",
                message: "username/email or password cannot be blank"
              });
            } // check if passwords match


            _context7.next = 8;
            return _userModel.default.findOne(criteria).populate("subscriptions").exec();

          case 8:
            user = _context7.sent;

            /* const subscriptions = user.subscriptions.map(course => { */

            /* return */

            /*     levels: course.find() */

            /*   } */

            /* }) */
            console.log("user: ", user);

            if (user) {
              _context7.next = 14;
              break;
            }

            arrayOfErrors.push({
              path: "identifier",
              message: "invalid username or email"
            });
            _context7.next = 26;
            break;

          case 14:
            if (user.authenticate(password)) {
              _context7.next = 18;
              break;
            }

            // use authenticate() on user.doc, pass in the posted password, hash it and check
            arrayOfErrors.push({
              path: "password",
              message: "Invalid Password"
            });
            _context7.next = 26;
            break;

          case 18:
            if (!user.forgotPasswordLocked) {
              _context7.next = 22;
              break;
            }

            arrayOfErrors.push({
              path: "identifier",
              message: _errorMessages.passwordLocked
            });
            _context7.next = 26;
            break;

          case 22:
            if (!user) {
              _context7.next = 26;
              break;
            }

            _context7.next = 25;
            return (0, _auth.signToken)(user._id);

          case 25:
            token = _context7.sent;

          case 26:
            console.log("user: ", user);
            ctx.req.session.userId = user._id;
            return _context7.abrupt("return", {
              token: token,
              user: user,
              error: arrayOfErrors
            });

          case 29:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function login(_x18, _x19, _x20, _x21) {
    return _ref12.apply(this, arguments);
  };
}();

var getUserByToken =
/*#__PURE__*/
function () {
  var _ref13 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8(_, args, ctx, info) {
    var token, result, _userId, user;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            token = args.token;

            if (!token) {
              _context8.next = 17;
              break;
            }

            _context8.next = 5;
            return _jsonwebtoken.default.verify(token, _config.default.env.JWT);

          case 5:
            result = _context8.sent;

            if (!result) {
              _context8.next = 14;
              break;
            }

            _userId = result._id;
            _context8.next = 10;
            return _userModel.default.findById(_userId).populate("subscriptions").lean();

          case 10:
            user = _context8.sent;
            return _context8.abrupt("return", user);

          case 14:
            return _context8.abrupt("return", {
              username: ""
            });

          case 15:
            console.log("result: ", result);
            return _context8.abrupt("return", result);

          case 17:
            _context8.next = 22;
            break;

          case 19:
            _context8.prev = 19;
            _context8.t0 = _context8["catch"](0);
            throw _context8.t0;

          case 22:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 19]]);
  }));

  return function getUserByToken(_x22, _x23, _x24, _x25) {
    return _ref13.apply(this, arguments);
  };
}();

var getUserById =
/*#__PURE__*/
function () {
  var _ref14 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9(_, args, ctx, info) {
    var result;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _userModel.default.findById({
              _id: args._id
            });

          case 2:
            result = _context9.sent;
            return _context9.abrupt("return", result);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getUserById(_x26, _x27, _x28, _x29) {
    return _ref14.apply(this, arguments);
  };
}();

var getUserByUsername =
/*#__PURE__*/
function () {
  var _ref15 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee10(_, args, ctx, info) {
    var result;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _userModel.default.findOne({
              username: args.input
            });

          case 2:
            result = _context10.sent;
            return _context10.abrupt("return", result);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function getUserByUsername(_x30, _x31, _x32, _x33) {
    return _ref15.apply(this, arguments);
  };
}();

var forgotPassword =
/*#__PURE__*/
function () {
  var _ref18 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11(_, _ref16, _ref17) {
    var email, redis, url, user, link;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            email = _ref16.email;
            redis = _ref17.redis, url = _ref17.url;
            _context11.next = 4;
            return _userModel.default.findOne({
              email: email
            });

          case 4:
            user = _context11.sent;
            _context11.t0 = _mail.sendForgotPasswordEmail;
            _context11.t1 = user.email;
            _context11.next = 9;
            return (0, _createForgotPasswordLink.createForgotPasswordLink)(url, user._id, redis);

          case 9:
            _context11.t2 = _context11.sent;
            _context11.next = 12;
            return (0, _context11.t0)(_context11.t1, _context11.t2);

          case 12:
            link = _context11.sent;
            return _context11.abrupt("return", true);

          case 14:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function forgotPassword(_x34, _x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

var updateMe = function updateMe(_, _ref19, _ref20) {
  var input = _ref19.input;
  var user = _ref20.user;
  merge(user, input);
  return user.save();
};

var getSubscriptions =
/*#__PURE__*/
function () {
  var _ref22 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee12(_, args, _ref21) {
    var user, subscriptions;
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            user = _ref21.user;
            _context12.prev = 1;
            _context12.next = 4;
            return _userModel.default.findById(userId);

          case 4:
            subscriptions = _context12.sent;
            return _context12.abrupt("return", (0, _objectSpread2.default)({}, subscriptions._doc, {
              _id: subscriptions.id
            }));

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](1);
            throw _context12.t0;

          case 11:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 8]]);
  }));

  return function getSubscriptions(_x37, _x38, _x39) {
    return _ref22.apply(this, arguments);
  };
}();

var userResolvers = {
  Query: {
    getSubscriptions: getSubscriptions,
    getUserById: getUserById,
    getUserByToken: getUserByToken,
    getUserByUsername: getUserByUsername,
    hello: function hello(_, _ref23) {
      var name = _ref23.name;
      return "Hello ".concat(name || "World");
    },
    me: me
  },
  User: {
    contacts: function contacts(user) {
      console.log("friends"); // TODO: Query db for contacts

      return ["Tom", "Bob", "Harry"];
    }
  },
  Mutation: {
    changePassword: changePassword,
    confirmEmail: confirmEmail,
    contact: contact,
    forgotPassword: forgotPassword,
    signup: signup,
    login: login,
    updateMe: updateMe
  }
};
exports.userResolvers = userResolvers;