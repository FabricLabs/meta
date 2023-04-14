'use strict';

// Testing
const assert = require('assert');
const Fabric = require('@fabric/core');
const FabricHTTP = require('@fabric/http');

// const Sandbox = require('@fabric/http/types/sandbox');
// const browser = new Sandbox();

describe('NPM Packages', function () {
  describe('@fabric/core', function () {
    it('is a function', function () {
      assert.strictEqual(Fabric instanceof Function, true);
    });
  });

  describe('@fabric/http', function () {
    xit('is a function', function () {
      assert.strictEqual(FabricHTTP instanceof Function, true);
    });
  });
});

describe('World Wide Web', function () {
  before(async function () {
    // browser.start();
  });

  after(async function () {
    // browser.stop();
  });

  describe('fabric.fm', function () {
    xit('exists', async function () {
      const response = await browser._navigateTo('https://fabric.fm');
      console.log('response:', response);
      assert.ok(response);
    });
  });

  describe('fabric.pub', function () {
    xit('exists', async function () {
      const response = await browser._navigateTo('https://fabric.pub');
      console.log('response:', response);
      assert.ok(response);
    });
  });
});
