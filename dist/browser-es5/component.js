"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.content = exports.type = exports.name = void 0;

var yup = _interopRequireDefault(require("yup"));

var generic = _interopRequireDefault(require("./lib/generic"));

var strict = _interopRequireDefault(require("./lib/strict"));

var name = generic.name().required();
exports.name = name;
var type = strict.string().oneOf(['single_line', 'multi_line', 'image', 'paragraph_collection', 'video', 'properties_table']).required();
exports.type = type;
var content = yup.mixed();
exports.content = content;