"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
  var id = _ref.id,
      zoneName = _ref.zoneName,
      image = _ref.image;

  var members = new Map();
  var zoneHistory = [];

  function broadcastMessage(message) {
    console.log("message: ", message);
    console.log("members: ", members);
    members.forEach(function (m) {
      return m.emit("message", message);
    });
  }

  function addEntry(entry) {
    zoneHistory = zoneHistory.concat(entry);
  }

  function getZoneHistory() {
    return zoneHistory.slice();
  }

  function addUser(zone) {
    members.set(zone.id, zone);
  }

  function removeUser(zone) {
    members.delete(zone.id);
  }

  function serialize() {
    return {
      id: id,
      zoneName: zoneName,
      image: image,
      numMembers: members.size
    };
  }

  return {
    broadcastMessage: broadcastMessage,
    addEntry: addEntry,
    getZoneHistory: getZoneHistory,
    addUser: addUser,
    removeUser: removeUser,
    serialize: serialize
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "src/socketio/zone.js");
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

  reactHotLoader.register(_default2, "default", "src/socketio/zone.js");
  leaveModule(module);
})();

;