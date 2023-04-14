'use strict';

const Service = requrie('@fabric/core/types/service');
const HTTPServer = require('@fabric/http/types/server');

class Meta extends Service {
  constructor (settings = {}) {
    super(settings);

    this.settings = Object.assign({
      http: {
        hostname: 'localhost',
        interface: '0.0.0.0',
        port: 10000
      },
      state: {}
    }, settings);

    this.http = new HTTPServer(this.settings.http);

    this._state = {
      content: this.settings.state
    };

    return this;
  }
}

module.exports = Meta;
