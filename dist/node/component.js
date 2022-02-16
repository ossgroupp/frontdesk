"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.content = exports.type = exports.name = void 0;

var yup = _interopRequireDefault(require("yup"));

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = generic.name().required();
exports.name = name;
const type = strict.string().oneOf(['single_line', 'multi_line', 'image', 'paragraph_collection', 'video', 'properties_table']).required();
exports.type = type;
const content = yup.mixed();
exports.content = content;