"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.meta = exports.name = exports.identifier = exports.instanceId = void 0;

var row = _interopRequireDefault(require("./row"));

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instanceId = generic.id();
exports.instanceId = instanceId;
const identifier = strict.string();
exports.identifier = identifier;
const name = generic.name();
exports.name = name;
const meta = generic.meta();
exports.meta = meta;
const schema = (0, _helpers.createSchemas)(strict.object({
  instanceId: instanceId.required(),
  identifier: identifier.required(),
  name,
  meta,
  rows: strict.array(row.schema.create).required()
}), strict.object({
  identifier,
  name,
  meta,
  rows: strict.array(row.schema.update)
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;