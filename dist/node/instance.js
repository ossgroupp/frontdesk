"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.isActive = exports.isTrial = exports.defaultCurrency = exports.defaultLanguage = exports.name = void 0;

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var vatType = _interopRequireDefault(require("./vat-type"));

var _helpers = require("./lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = generic.name();
exports.name = name;
const defaultLanguage = strict.string();
exports.defaultLanguage = defaultLanguage;
const defaultCurrency = strict.string();
exports.defaultCurrency = defaultCurrency;
const isTrial = strict.boolean();
exports.isTrial = isTrial;
const isActive = strict.boolean();
exports.isActive = isActive;
const common = {
  defaultLanguage,
  defaultCurrency,
  isTrial,
  isActive
};
const schema = (0, _helpers.createSchemas)(strict.object({ ...common,
  name: name.required(),
  vatTypes: strict.array(strict.object({
    name: vatType.name.required('vatTypes[].name is a required field'),
    percent: vatType.percent.required('vatTypes[].percent is a required field')
  }))
}), strict.object({ ...common,
  name,
  vatTypes: strict.array(strict.object({
    id: generic.id(),
    name: vatType.name,
    percent: vatType.percent
  }))
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;