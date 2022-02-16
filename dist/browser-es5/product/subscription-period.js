"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.recurringPeriod = exports.initialPeriod = exports.name = void 0;

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

var period = function period() {
  return strict.number().integer().min(0).max(65535);
};

var name = generic.name();
exports.name = name;
var initialPeriod = period();
exports.initialPeriod = initialPeriod;
var recurringPeriod = period();
exports.recurringPeriod = recurringPeriod;
var schema = (0, _helpers.createSchemas)(strict.object({
  name: name.required(),
  initialPeriod: initialPeriod.required(),
  recurringPeriod: recurringPeriod.required()
}), strict.object({
  id: generic.id(),
  name: name,
  initialPeriod: initialPeriod,
  recurringPeriod: recurringPeriod
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;