// Copyright 2020 The OpenZipkin Authors; licensed to You under the Apache License, Version 2.0.

const Tracer = require('./');
const ExplicitContext = require('../explicit-context');

module.exports = function createNoopTracer() {
  const recorder = {record() { }};
  const ctxImpl = new ExplicitContext();
  return new Tracer({recorder, ctxImpl});
};
