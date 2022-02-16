"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schema = exports.meta = void 0;

var column = _interopRequireDefault(require("./column"));

var generic = _interopRequireDefault(require("../lib/generic"));

var strict = _interopRequireDefault(require("../lib/strict"));

var _helpers = require("../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const meta = generic.meta();
exports.meta = meta;
const schema = (0, _helpers.createSchemas)(strict.object({
  meta,
  columns: strict.array(column.schema.create).required()
}), strict.object({
  id: generic.id(),
  meta,
  columns: strict.array(column.schema.update)
}));
exports.schema = schema;
const validate = (0, _helpers.createValidators)(schema);
exports.validate = validate;