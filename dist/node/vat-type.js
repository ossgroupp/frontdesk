"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.percent = exports.name = exports.instanceId = void 0;

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var _helpers = require("./lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instanceId = generic.id().required();
exports.instanceId = instanceId;
const name = generic.name();
exports.name = name;
const percent = strict.number().integer().min(0);
exports.percent = percent;
const schema = (0, _helpers.createSchemas)(strict.object({
  instanceId,
  name: name.required(),
  percent: percent.required()
}), strict.object({
  name,
  percent
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;