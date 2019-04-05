'use strict';

const buntstift = require('buntstift');

const stop = {
  async getOptionDefinitions () {
    return [];
  },

  async run () {
    buntstift.warn(`The command 'stop' is deprecated, use 'application stop' instead.`);
  }
};

module.exports = stop;
