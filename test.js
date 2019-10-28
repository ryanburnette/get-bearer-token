'use strict';

var getBearerToken = require('./');

var fake = {
  headers: {
    authorization: 'Bearer Foo'
  }
};

if (getBearerToken()) {
  throw new Error('should not return anything');
}

if (getBearerToken(fake) != 'Foo') {
  throw new Error('should return "Foo"');
}

console.log('TESTS PASSED');
