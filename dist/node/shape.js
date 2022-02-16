"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.componentStructure = exports.name = exports.shapeTypeId = exports.instanceId = void 0;

var component = _interopRequireDefault(require("./component"));

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var _helpers = require("./lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instanceId = generic.id();
exports.instanceId = instanceId;
const shapeTypeId = strict.string().oneOf(['document', 'folder', 'product']);
exports.shapeTypeId = shapeTypeId;
const name = generic.name();
exports.name = name;
const componentStructure = strict.array(strict.object({
  name: component.name,
  type: component.type
}));
exports.componentStructure = componentStructure;
const schema = (0, _helpers.createSchemas)(strict.object({
  instanceId: instanceId.required(),
  shapeTypeId: shapeTypeId.required(),
  name: name.required(),
  componentStructure: componentStructure.min(0)
}), strict.object({
  shapeTypeId,
  name,
  componentStructure
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;