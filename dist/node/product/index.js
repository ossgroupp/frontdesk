"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.isSubscriptionOnly = exports.isVirtual = exports.isPublished = exports.components = exports.name = exports.vatTypeId = exports.shapeId = exports.instanceId = void 0;

var generic = _interopRequireDefault(require("../lib/generic"));

var item = _interopRequireDefault(require("../item"));

var strict = _interopRequireDefault(require("../lib/strict"));

var subscriptionPeriod = _interopRequireDefault(require("./subscription-period"));

var variant = _interopRequireDefault(require("./variant"));

var _helpers = require("../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instanceId = item.instanceId;
exports.instanceId = instanceId;
const shapeId = item.shapeId;
exports.shapeId = shapeId;
const vatTypeId = generic.id();
exports.vatTypeId = vatTypeId;
const name = item.name;
exports.name = name;
const components = item.components;
exports.components = components;
const isPublished = item.isPublished;
exports.isPublished = isPublished;
const isVirtual = strict.boolean();
exports.isVirtual = isVirtual;
const isSubscriptionOnly = strict.boolean();
exports.isSubscriptionOnly = isSubscriptionOnly;
const schema = (0, _helpers.createSchemas)(strict.object({
  instanceId: instanceId.required(),
  shapeId,
  vatTypeId: vatTypeId.required(),
  name: name.required(),
  components,
  isPublished,
  isVirtual,
  isSubscriptionOnly,
  variants: strict.array(variant.schema.create).required(),
  subscriptionPeriods: strict.array(subscriptionPeriod.schema.create),
  parent: item.parent
}), strict.object({
  shapeId,
  vatTypeId,
  name,
  components,
  isPublished,
  isVirtual,
  isSubscriptionOnly,
  variants: strict.array(variant.schema.update),
  subscriptionPeriods: strict.array(subscriptionPeriod.schema.update)
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;