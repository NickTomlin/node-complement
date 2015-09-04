'use strict';

var assert = require('assert');
var complement = require('./index');

function isDog (string) {
  return string === 'dog'
}

assert(isDog('dog'), 'sanity check for isDog failed');

var isNotDog = complement(isDog);

assert.equal(isNotDog('dog'), false, 'complement did not invert predicate');
