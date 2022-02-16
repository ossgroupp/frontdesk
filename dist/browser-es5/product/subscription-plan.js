"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.recurringPrice = exports.initialPrice = void 0;

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

var initialPrice = strict.number().positive();
exports.initialPrice = initialPrice;
var recurringPrice = strict.number().positive();
exports.recurringPrice = recurringPrice;
var schema = (0, _helpers.createSchemas)(strict.object({
  initialPrice: initialPrice.required(),
  recurringPrice: recurringPrice.required()
}), strict.object({
  id: generic.id(),
  initialPrice: initialPrice,
  recurringPrice: recurringPrice
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;