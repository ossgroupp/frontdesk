"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.recurringPeriod = exports.initialPeriod = exports.name = void 0;

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const period = () => strict.number().integer().min(0).max(65535);

const name = generic.name();
exports.name = name;
const initialPeriod = period();
exports.initialPeriod = initialPeriod;
const recurringPeriod = period();
exports.recurringPeriod = recurringPeriod;
const schema = (0, _helpers.createSchemas)(strict.object({
  name: name.required(),
  initialPeriod: initialPeriod.required(),
  recurringPeriod: recurringPeriod.required()
}), strict.object({
  id: generic.id(),
  name,
  initialPeriod,
  recurringPeriod
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;