"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parent = exports.components = exports.isPublished = exports.name = exports.shapeId = exports.instanceId = void 0;

var component = _interopRequireDefault(require("./component"));

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instanceId = generic.id();
exports.instanceId = instanceId;
const shapeId = generic.id();
exports.shapeId = shapeId;
const name = generic.name();
exports.name = name;
const isPublished = strict.boolean();
exports.isPublished = isPublished;
const components = strict.array(strict.object({
  name: component.name,
  type: component.type,
  content: component.content
}));
exports.components = components;
const parent = strict.object({
  id: generic.id(),
  childPosition: strict.number().positive().integer()
});
exports.parent = parent;