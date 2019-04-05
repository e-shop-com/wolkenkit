'use strict';

const kebabCase = require('lodash/kebabCase'),
      mapKeys = require('lodash/mapKeys'),
      requireDir = require('require-dir');

const application = require('./application'),
      infrastructure = require('./infrastructure'),
      runtime = require('./runtime');

/* eslint-disable global-require */
const commands = mapKeys(
  { application, infrastructure, runtime, ...requireDir(__dirname) },
  (value, key) => kebabCase(key)
);
/* eslint-enable global-require */

// const commands = {};
//
// for (const command of Object.keys(commandDefinitions)) {
//   const commandDefinition = commandDefinitions[command];
//   const { subCommands } = commandDefinition;
//
//   if (!subCommands) {
//     commands[command] = commandDefinition;
//
//     continue;
//   }
//
//   if (!subCommands.help) {
//     throw new Error(`Sub command 'help' is missing.`);
//   }
//
//   commands[command] = subCommands.help;
//
//   for (const subCommand of Object.keys(subCommands)) {
//     const subCommandDefinition = subCommands[subCommand];
//
//     commands[`${command} ${subCommand}`] = subCommandDefinition;
//   }
// }

module.exports = commands;
