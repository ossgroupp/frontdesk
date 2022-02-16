"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meta = exports.name = exports.multilanguageObject = exports.id = void 0;

var yup = _interopRequireDefault(require("yup"));

var strict = _interopRequireDefault(require("./strict"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const id = () => strict.number().integer().min(1);

exports.id = id;

const multilanguageObject = (propName, messages) => {
  return yup.object().nullable(false).typeError(`${propName} cannot be null and must be an object.`).test(propName, messages.notEmpty, v => typeof v === 'undefined' || typeof v === 'object' && v !== null && Object.keys(v).length > 0).test(`${propName}-strings`, messages.stringsOnly, obj => {
    if (!obj || typeof obj !== 'object') {
      return true;
    }

    return Object.values(obj).reduce((valid, value) => {
      if (!valid) {
        return valid;
      }

      return typeof value === 'string' && value.length > 0;
    }, true);
  });
};

exports.multilanguageObject = multilanguageObject;

const name = () => multilanguageObject('name', {
  notEmpty: 'You must specify an object with a name in at least one language',
  stringsOnly: 'All names must be strings and they cannot be empty.'
});

exports.name = name;

const meta = () => yup.object();

exports.meta = meta;