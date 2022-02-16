"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.percent = exports.name = exports.instanceId = void 0;

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var _helpers = require("./lib/helpers");

var instanceId = generic.id().required();
exports.instanceId = instanceId;
var name = generic.name();
exports.name = name;
var percent = strict.number().integer().min(0);
exports.percent = percent;
var schema = (0, _helpers.createSchemas)(strict.object({
  instanceId: instanceId,
  name: name.required(),
  percent: percent.required()
}), strict.object({
  name: name,
  percent: percent
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;