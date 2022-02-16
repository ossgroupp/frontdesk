"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.recurringPrice = exports.initialPrice = void 0;

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialPrice = strict.number().positive();
exports.initialPrice = initialPrice;
const recurringPrice = strict.number().positive();
exports.recurringPrice = recurringPrice;
const schema = (0, _helpers.createSchemas)(strict.object({
  initialPrice: initialPrice.required(),
  recurringPrice: recurringPrice.required()
}), strict.object({
  id: generic.id(),
  initialPrice,
  recurringPrice
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;