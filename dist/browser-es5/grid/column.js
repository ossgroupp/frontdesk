"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.content = exports.layout = exports.meta = void 0;

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

var meta = generic.meta();
exports.meta = meta;
var layout = strict.object({
  colspan: strict.number().integer().min(1),
  rowspan: strict.number().integer().min(1)
});
exports.layout = layout;
var content = strict.object({
  ref: strict.object({
    itemId: generic.id()
  })
}).nullable(true);
exports.content = content;
var schema = (0, _helpers.createSchemas)(strict.object({
  layout: layout,
  meta: meta,
  content: content
}), strict.object({
  id: generic.id(),
  layout: layout,
  meta: meta,
  content: content
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;