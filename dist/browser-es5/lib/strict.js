"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.object = exports.array = exports.boolean = exports.string = exports.number = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var yup = _interopRequireDefault(require("yup"));

var number = function number() {
  return yup.number().strict().nullable(false);
};

exports.number = number;

var string = function string() {
  return yup.string().strict().nullable(false);
};

exports.string = string;

var boolean = function boolean() {
  return yup.boolean().strict().nullable(false);
};

exports.boolean = boolean;

var array = function array(shape) {
  return yup.array(shape).strict().nullable(false);
};

exports.array = array;

var object = function object(shape) {
  return yup.object(shape).strict().test('unknown-properties', '', function (value) {
    if (!value || (0, _typeof2.default)(value) !== 'object') {
      return true;
    }

    var props = Object.keys(value);
    var allowed = Object.keys(this.schema.fields);
    var invalid = props.filter(function (prop) {
      return !allowed.includes(prop);
    });

    if (invalid.length > 0) {
      return this.createError({
        message: "Invalid properties specified: ".concat(invalid.map(function (v) {
          return "\"".concat(v, "\"");
        }).join(', '), ".")
      });
    }

    return true;
  });
};

exports.object = object;