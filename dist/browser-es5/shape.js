"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.componentStructure = exports.name = exports.shapeTypeId = exports.instanceId = void 0;

var component = _interopRequireDefault(require("./component"));

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var _helpers = require("./lib/helpers");

var instanceId = generic.id();
exports.instanceId = instanceId;
var shapeTypeId = strict.string().oneOf(['document', 'folder', 'product']);
exports.shapeTypeId = shapeTypeId;
var name = generic.name();
exports.name = name;
var componentStructure = strict.array(strict.object({
  name: component.name,
  type: component.type
}));
exports.componentStructure = componentStructure;
var schema = (0, _helpers.createSchemas)(strict.object({
  instanceId: instanceId.required(),
  shapeTypeId: shapeTypeId.required(),
  name: name.required(),
  componentStructure: componentStructure.min(0)
}), strict.object({
  shapeTypeId: shapeTypeId,
  name: name,
  componentStructure: componentStructure
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;