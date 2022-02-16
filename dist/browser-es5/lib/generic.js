"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meta = exports.name = exports.multilanguageObject = exports.id = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var yup = _interopRequireDefault(require("yup"));

var strict = _interopRequireDefault(require("./strict"));

var id = function id() {
  return strict.number().integer().min(1);
};

exports.id = id;

var multilanguageObject = function multilanguageObject(propName, messages) {
  return yup.object().nullable(false).typeError("".concat(propName, " cannot be null and must be an object.")).test(propName, messages.notEmpty, function (v) {
    return typeof v === 'undefined' || (0, _typeof2.default)(v) === 'object' && v !== null && Object.keys(v).length > 0;
  }).test("".concat(propName, "-strings"), messages.stringsOnly, function (obj) {
    if (!obj || (0, _typeof2.default)(obj) !== 'object') {
      return true;
    }

    return Object.values(obj).reduce(function (valid, value) {
      if (!valid) {
        return valid;
      }

      return typeof value === 'string' && value.length > 0;
    }, true);
  });
};

exports.multilanguageObject = multilanguageObject;

var name = function name() {
  return multilanguageObject('name', {
    notEmpty: 'You must specify an object with a name in at least one language',
    stringsOnly: 'All names must be strings and they cannot be empty.'
  });
};

exports.name = name;

var meta = function meta() {
  return yup.object();
};

exports.meta = meta;