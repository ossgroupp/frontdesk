"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parent = exports.components = exports.isPublished = exports.name = exports.shapeId = exports.instanceId = void 0;

var component = _interopRequireDefault(require("./component"));

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var instanceId = generic.id();
exports.instanceId = instanceId;
var shapeId = generic.id();
exports.shapeId = shapeId;
var name = generic.name();
exports.name = name;
var isPublished = strict.boolean();
exports.isPublished = isPublished;
var components = strict.array(strict.object({
  name: component.name,
  type: component.type,
  content: component.content
}));
exports.components = components;
var parent = strict.object({
  id: generic.id(),
  childPosition: strict.number().positive().integer()
});
exports.parent = parent;