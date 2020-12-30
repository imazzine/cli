/**
 * @fileoverview Provides basic execution logic for CLI commands.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import { program } from 'commander';
import { readFileSync } from 'fs';
import assertNodejsVersion from './asserts/nodejsVersion.js';
import getEnvironment from './helpers/getEnvironment.js';

export default async function() {

  // Asserting stuff:
  assertNodejsVersion();

  // Loading environment:
  getEnvironment();

  // Configuring cli version:
  program.version(
    JSON.parse(readFileSync(process.env['ZZ_PATHS_CLI_PACKAGE_JSON'])).version
  );

  // Configuring basic cli commands:
  const add = await import(process.env['ZZ_PATHS_CLI_COMMAND_ADD']);
  const remove = await import(process.env['ZZ_PATHS_CLI_COMMAND_REMOVE']);
  add.default(program);
  remove.default(program);

  // Getting list of commands and projects from process.env:
  const commands = Object.keys(process.env).filter((key) => {
    return key.indexOf('ZZ_COMMAND_') === 0
  });
  
  // Configuring dynamic commands:
  let cmd;
  for(let i = 0; i < commands.length; i++) {
    cmd = await import(process.env[commands[i]]);
    if (cmd && cmd.default && typeof cmd.default === 'function') {
      cmd.default(program);
    } else {
      console.warn(`Warning: registered command <${
        commands[i].split('ZZ_COMMAND_')[1]
      }> doesn't match @imazzine/cli command's API - ignored.`);
    }
  }

  // Executing cli command:
  program.parse(process.argv);
};
