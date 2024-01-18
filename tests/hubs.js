'use strict';

// Dependencies
const assert = require('assert');
const fetch = require('cross-fetch');
const Fabric = require('@fabric/core');
const Hub = require('@fabric/hub');

// Fabric Hubs
const HUBS = [
  'https://hub.fabric.pub',
  'https://labs.fabric.pub'
];

// Tests
describe('META', function () {
  describe('Fabric', function () {
    it('is a function', function () {
      assert.strictEqual(Fabric instanceof Function, true);
    });
  });

  describe('Hub', function () {
    it('is a function', function () {
      assert.strictEqual(Hub instanceof Function, true);
    });
  });

  describe('Sensemaker', function () {
    xit('is a function', function () {
      assert.strictEqual(Sensemaker instanceof Function, true);
    });
  });
});

describe('Fabric Hubs', function () {
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
