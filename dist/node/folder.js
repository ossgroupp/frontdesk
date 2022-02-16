"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.isPublished = exports.components = exports.name = exports.shapeId = exports.instanceId = void 0;

var item = _interopRequireDefault(require("./item"));

var strict = _interopRequireDefault(require("./lib/strict"));

var _helpers = require("./lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instanceId = item.instanceId;
exports.instanceId = instanceId;
const shapeId = item.shapeId;
exports.shapeId = shapeId;
const name = item.name;
exports.name = name;
const components = item.components;
exports.components = components;
const isPublished = item.isPublished;
exports.isPublished = isPublished;
const common = {
  shapeId,
  name,
  components,
  isPublished
};
const schema = (0, _helpers.createSchemas)(strict.object({ ...common,
  instanceId: instanceId.required(),
  name: name.required(),
  parent: item.parent
}), strict.object({ ...common
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;