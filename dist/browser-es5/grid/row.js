"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.meta = void 0;

var column = _interopRequireDefault(require("./column"));

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

var meta = generic.meta();
exports.meta = meta;
var schema = (0, _helpers.createSchemas)(strict.object({
  meta: meta,
  columns: strict.array(column.schema.create).required()
}), strict.object({
  id: generic.id(),
  meta: meta,
  columns: strict.array(column.schema.update)
}));
exports.schema = schema;
var validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;