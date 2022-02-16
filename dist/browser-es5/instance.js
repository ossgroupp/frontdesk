"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.isActive = exports.isTrial = exports.defaultCurrency = exports.defaultLanguage = exports.name = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var vatType = _interopRequireDefault(require("./vat-type"));

var _helpers = require("./lib/helpers");

var name = generic.name();
exports.name = name;
var defaultLanguage = strict.string();
exports.defaultLanguage = defaultLanguage;
var defaultCurrency = strict.string();
exports.defaultCurrency = defaultCurrency;
var isTrial = strict.boolean();
exports.isTrial = isTrial;
var isActive = strict.boolean();
exports.isActive = isActive;
var common = {
  defaultLanguage: defaultLanguage,
  defaultCurrency: defaultCurrency,
  isTrial: isTrial,
  isActive: isActive
};
var schema = (0, _helpers.createSchemas)(strict.object((0, _objectSpread2.default)({}, common, {
  name: name.required(),
  vatTypes: strict.array(strict.object({
    name: vatType.name.required('vatTypes[].name is a required field'),
    percent: vatType.percent.required('vatTypes[].percent is a required field')
  }))
})), strict.object((0, _objectSpread2.default)({}, common, {
  name: name,
  vatTypes: strict.array(strict.object({
    id: generic.id(),
    name: vatType.name,
    percent: vatType.percent
  }))
})));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;