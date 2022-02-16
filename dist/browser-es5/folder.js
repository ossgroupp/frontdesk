"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.isPublished = exports.components = exports.name = exports.shapeId = exports.instanceId = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var item = _interopRequireDefault(require("./item"));

var strict = _interopRequireDefault(require("./lib/strict"));

var _helpers = require("./lib/helpers");

var instanceId = item.instanceId;
exports.instanceId = instanceId;
var shapeId = item.shapeId;
exports.shapeId = shapeId;
var name = item.name;
exports.name = name;
var components = item.components;
exports.components = components;
var isPublished = item.isPublished;
exports.isPublished = isPublished;
var common = {
  shapeId: shapeId,
  name: name,
  components: components,
  isPublished: isPublished
};
var schema = (0, _helpers.createSchemas)(strict.object((0, _objectSpread2.default)({}, common, {
  instanceId: instanceId.required(),
  name: name.required(),
  parent: item.parent
})), strict.object((0, _objectSpread2.default)({}, common)));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;