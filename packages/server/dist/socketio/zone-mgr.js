"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _zone = _interopRequireDefault(require("./zone"));

var _zoneModel = _interopRequireDefault(require("../api/zone/zone-model"));

var _zones = _interopRequireDefault(require("./zones"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee4() {
  var queryDB, removeClient, getZoneById, serializeZones;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // mapping of all available zones
          queryDB =
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var id,
                  doc,
                  _args = arguments;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      id = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                      _context.next = 3;
                      return _zoneModel.default.find({
                        _id: id
                      }).limit(12).sort({
                        _id: -1
                      }).exec();

                    case 3:
                      doc = _context.sent;

                      if (!(0, _isEmpty.default)(doc)) {
                        _context.next = 8;
                        break;
                      }

                      console.log("no zones created.");
                      _context.next = 9;
                      break;

                    case 8:
                      return _context.abrupt("return", new Map(doc.map(function (c) {
                        return [c.id, (0, _zone.default)(c)];
                      })));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function queryDB() {
              return _ref2.apply(this, arguments);
            };
          }();

          removeClient = function removeClient(client) {
            zones.forEach(function (c) {
              return c.removeUser(client);
            });
          };

          getZoneById =
          /*#__PURE__*/
          function () {
            var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2(id) {
              var zones;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return queryDB(id);

                    case 2:
                      zones = _context2.sent;
                      return _context2.abrupt("return", zones.get(id));

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function getZoneById(_x) {
              return _ref3.apply(this, arguments);
            };
          }();

          serializeZones =
          /*#__PURE__*/
          function () {
            var _ref4 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var zones;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return queryDB();

                    case 2:
                      zones = _context3.sent;
                      return _context3.abrupt("return", Array.from(zones.values()).map(function (c) {
                        return c.serialize();
                      }));

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            return function serializeZones() {
              return _ref4.apply(this, arguments);
            };
          }();

          return _context4.abrupt("return", {
            removeClient: removeClient,
            getZoneById: getZoneById,
            serializeZones: serializeZones
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
}));

exports.default = _default;