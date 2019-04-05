'use strict';

const buntstift = require('buntstift');

const restart = {
  async getOptionDefinitions () {
    return [];
  },

  async run () {
    buntstift.warn(`The command 'restart' is deprecated, use 'application restart' instead.`);
  }
};

module.exports = restart;
