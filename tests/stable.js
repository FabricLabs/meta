'use strict';

// Testing
const assert = require('assert');
const Fabric = require('@fabric/core');

describe('NPM Packages', function () {
  describe('@fabric/core', function () {
    it('is a function', function () {
      assert.strictEqual(Fabric instanceof Function, true);
    });
  });
});
