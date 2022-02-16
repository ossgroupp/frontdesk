"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.meta = exports.name = exports.identifier = exports.instanceId = void 0;

var row = _interopRequireDefault(require("./row"));

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

var instanceId = generic.id();
exports.instanceId = instanceId;
var identifier = strict.string();
exports.identifier = identifier;
var name = generic.name();
exports.name = name;
var meta = generic.meta();
exports.meta = meta;
var schema = (0, _helpers.createSchemas)(strict.object({
  instanceId: instanceId.required(),
  identifier: identifier.required(),
  name: name,
  meta: meta,
  rows: strict.array(row.schema.create).required()
}), strict.object({
  identifier: identifier,
  name: name,
  meta: meta,
  rows: strict.array(row.schema.update)
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;