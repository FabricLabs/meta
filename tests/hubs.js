'use strict';

// Dependencies
const assert = require('assert');
const fetch = require('cross-fetch');
const Fabric = require('@fabric/core');

// Fabric Hubs
const HUBS = [
  'https://hub.fabric.pub'
];

// Tests
describe('Fabric Hubs', function () {
  describe('Hub', function () {
    it('is a function', function () {
      assert.strictEqual(Fabric instanceof Function, true);
    });
  });

  describe('hub.fabric.pub', function () {
    it('is accessible', async function () {
      const result = await fetch(`https://hub.fabric.pub/`);
      assert.strictEqual(result.status, 200);
    });
  });

  describe('sensemaker.io', function () {
    it('is accessible', async function () {
      const result = await fetch(`https://sensemaker.io/`);
      assert.strictEqual(result.status, 200);
    });
  });
});
