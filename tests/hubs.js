'use strict';

// Dependencies
const assert = require('assert');
const fetch = require('cross-fetch');
const Fabric = require('@fabric/core');

// Fabric Hubs
const HUBS = [
  'https://hub.fabric.pub',
  'https://beta.jeeves.dev',
];

describe('Fabric Hubs', function () {
  describe('Hub', function () {
    it('is a function', function () {
      assert.strictEqual(Fabric instanceof Function, true);
    });
  });

  describe('Fabric Core', function () {
    it('is accessible', async function () {
      const result = await fetch(`${HUBS[0]}/`);
      assert.strictEqual(result.status, 200);
    });
  });

  describe('Sensemaker', function () {
    it('is accessible', async function () {
      const result = await fetch(`https://sensemaker.io/`);
      assert.strictEqual(result.status, 200);
    });
  });
});
