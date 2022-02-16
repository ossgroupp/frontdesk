"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.isDefault = exports.attributes = exports.stock = exports.price = exports.sku = exports.name = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var yup = _interopRequireDefault(require("yup"));

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var subscriptionPlan = _interopRequireDefault(require("./subscription-plan"));

var _helpers = require("../lib/helpers");

var name = generic.name();
exports.name = name;
var sku = strict.string();
exports.sku = sku;
var price = strict.number().positive();
exports.price = price;
var stock = strict.number().integer().min(0);
exports.stock = stock;
var attributes = yup.object({});
exports.attributes = attributes;
var isDefault = strict.boolean();
exports.isDefault = isDefault;
var schema = (0, _helpers.createSchemas)(strict.object({
  name: name.required(),
  sku: sku.required(),
  price: price,
  stock: stock,
  attributes: attributes,
  isDefault: isDefault,
  subscriptionPlans: strict.array(yup.lazy(function (value) {
    if ((0, _typeof2.default)(value) === 'object') {
      return subscriptionPlan.schema.create;
    }

    return strict.boolean();
  }))
}), strict.object({
  id: generic.id(),
  name: name,
  sku: sku,
  price: price,
  stock: stock,
  attributes: attributes,
  isDefault: isDefault,
  subscriptionPlans: strict.array(yup.lazy(function (value) {
    if ((0, _typeof2.default)(value) === 'object') {
      return subscriptionPlan.schema.update;
    }

    return strict.boolean();
  }))
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;