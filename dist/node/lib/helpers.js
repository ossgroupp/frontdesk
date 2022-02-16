"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidators = exports.createSchemas = exports.schemaValidator = void 0;

const schemaValidator = schema => data => schema.validate(data, {
  abortEarly: false
});

exports.schemaValidator = schemaValidator;

const createSchemas = (create, update) => ({
  create,
  update: update || create
});

exports.createSchemas = createSchemas;

const createValidators = schema => ({
  create: schemaValidator(schema.create),
  update: schemaValidator(schema.update)
});

exports.createValidators = createValidators;