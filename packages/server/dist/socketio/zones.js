"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _zoneModel = _interopRequireDefault(require("../api/zone/zone-model"));

var result = _zoneModel.default.find({});

var _default = result;
/* export default [ */

/*   { */

/*     name: "Terminus", */

/*     image: "chatrooms/terminus.jpg" */

/*   }, */

/*   { */

/*     name: "Alexandria", */

/*     image: "chatrooms/alexandria.jpg" */

/*   }, */

/*   { */

/*     name: "Sanctuary", */

/*     image: "chatrooms/sanctuary.jpg" */

/*   }, */

/*   { */

/*     name: "Hilltop", */

/*     image: "chatrooms/hilltop.jpg" */

/*   } */

/* ] */

exports.default = _default;