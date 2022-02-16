"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.object = exports.array = exports.boolean = exports.string = exports.number = void 0;

var yup = _interopRequireDefault(require("yup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const number = () => yup.number().strict().nullable(false);

exports.number = number;

const string = () => yup.string().strict().nullable(false);

exports.string = string;

const boolean = () => yup.boolean().strict().nullable(false);

exports.boolean = boolean;

const array = shape => yup.array(shape).strict().nullable(false);

exports.array = array;

const object = shape => yup.object(shape).strict().test('unknown-properties', '', function (value) {
  if (!value || typeof value !== 'object') {
    return true;
  }

  const props = Object.keys(value);
  const allowed = Object.keys(this.schema.fields);
  const invalid = props.filter(prop => !allowed.includes(prop));

  if (invalid.length > 0) {
    return this.createError({
      message: `Invalid properties specified: ${invalid.map(v => `"${v}"`).join(', ')}.`
    });
  }

  return true;
});

exports.object = object;