"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.content = exports.layout = exports.meta = void 0;

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const meta = generic.meta();
exports.meta = meta;
const layout = strict.object({
  colspan: strict.number().integer().min(1),
  rowspan: strict.number().integer().min(1)
});
exports.layout = layout;
const content = strict.object({
  ref: strict.object({
    itemId: generic.id()
  })
}).nullable(true);
exports.content = content;
const schema = (0, _helpers.createSchemas)(strict.object({
  layout,
  meta,
  content
}), strict.object({
  id: generic.id(),
  layout,
  meta,
  content
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;