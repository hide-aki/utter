"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _courseCtrl = _interopRequireDefault(require("./course-ctrl.js"));

var _createRoutes = _interopRequireDefault(require("../../utils/create-routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route("/faker").get(_courseCtrl.default.faker);
(0, _createRoutes.default)(_courseCtrl.default, router); // get teaching courses

router.route("/my-courses/:owner").get(_courseCtrl.default.getTeachingCourses); // custom routes

router.route("/unique").post(_courseCtrl.default.unique); // get current teaching course

router.route("/:authId/:owner/:courseId/:courseName").get(_courseCtrl.default.getOne).delete(_courseCtrl.default.deleteCourse).put(_courseCtrl.default.updateOne); // delete course level

router.route("/my-courses/:owner/:courseId/:courseName/:levelId").delete(_courseCtrl.default.deleteLevel); // .put(controller.update)

var _default = router;
exports.default = _default;