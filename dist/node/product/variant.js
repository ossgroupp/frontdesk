"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.isDefault = exports.attributes = exports.stock = exports.price = exports.sku = exports.name = void 0;

var yup = _interopRequireDefault(require("yup"));

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var subscriptionPlan = _interopRequireDefault(require("./subscription-plan"));

var _helpers = require("../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = generic.name();
exports.name = name;
const sku = strict.string();
exports.sku = sku;
const price = strict.number().positive();
exports.price = price;
const stock = strict.number().integer().min(0);
exports.stock = stock;
const attributes = yup.object({});
exports.attributes = attributes;
const isDefault = strict.boolean();
exports.isDefault = isDefault;
const schema = (0, _helpers.createSchemas)(strict.object({
  name: name.required(),
  sku: sku.required(),
  price: price,
  stock: stock,
  attributes: attributes,
  isDefault: isDefault,
  subscriptionPlans: strict.array(yup.lazy(value => {
    if (typeof value === 'object') {
      return subscriptionPlan.schema.create;
    }

    return strict.boolean();
  }))
}), strict.object({
  id: generic.id(),
  name,
  sku,
  price,
  stock,
  attributes,
  isDefault,
  subscriptionPlans: strict.array(yup.lazy(value => {
    if (typeof value === 'object') {
      return subscriptionPlan.schema.update;
    }

    return strict.boolean();
  }))
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;