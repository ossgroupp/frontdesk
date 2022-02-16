"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidators = exports.createSchemas = exports.schemaValidator = void 0;

var schemaValidator = function schemaValidator(schema) {
  return function (data) {
    return schema.validate(data, {
      abortEarly: false
    });
  };
};

exports.schemaValidator = schemaValidator;

var createSchemas = function createSchemas(create, update) {
  return {
    create: create,
    update: update || create
  };
};

exports.createSchemas = createSchemas;

var createValidators = function createValidators(schema) {
  return {
    create: schemaValidator(schema.create),
    update: schemaValidator(schema.update)
  };
};

exports.createValidators = createValidators;