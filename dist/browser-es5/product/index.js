"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var instanceId = item.instanceId;
exports.instanceId = instanceId;
var shapeId = item.shapeId;
exports.shapeId = shapeId;
var vatTypeId = generic.id();
exports.vatTypeId = vatTypeId;
var name = item.name;
exports.name = name;
var components = item.components;
exports.components = components;
var isPublished = item.isPublished;
exports.isPublished = isPublished;
var isVirtual = strict.boolean();
exports.isVirtual = isVirtual;
var isSubscriptionOnly = strict.boolean();
exports.isSubscriptionOnly = isSubscriptionOnly;
var schema = (0, _helpers.createSchemas)(strict.object({
  instanceId: instanceId.required(),
  shapeId: shapeId,
  vatTypeId: vatTypeId.required(),
  name: name.required(),
  components: components,
  isPublished: isPublished,
  isVirtual: isVirtual,
  isSubscriptionOnly: isSubscriptionOnly,
  variants: strict.array(variant.schema.create).required(),
  subscriptionPeriods: strict.array(subscriptionPeriod.schema.create),
  parent: item.parent
}), strict.object({
  shapeId: shapeId,
  vatTypeId: vatTypeId,
  name: name,
  components: components,
  isPublished: isPublished,
  isVirtual: isVirtual,
  isSubscriptionOnly: isSubscriptionOnly,
  variants: strict.array(variant.schema.update),
  subscriptionPeriods: strict.array(subscriptionPeriod.schema.update)
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;