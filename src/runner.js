/**
 * @fileoverview Provides execution logic for CLI commands.
 * @module @imazzine/cli
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import { program } from 'commander';
import { readFileSync } from 'fs';
import assertNodeJsVersion from './helpers/assertNodeJsVersion.js';
import getEnvironment from './helpers/getEnvironment.js';
export default async function() {

  // Asserting stuff:
  assertNodeJsVersion();

  // Loading environment:
  getEnvironment();

  // Configuring cli version:
  program.version(
    JSON.parse(
      readFileSync(
        process.env['ZZ_PATHS_CLI_PACKAGE_JSON']
      )
    ).version
  );

  // Configuring add/remove cli commands:
  (await import(process.env['ZZ_PATHS_CLI_COMMAND_ADD'])).default(program);
  (await import(process.env['ZZ_PATHS_CLI_COMMAND_REMOVE'])).default(program);

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
      console.warn('Warning: path registered as a command doesn\'t match ' +
       `@imazzine/cli command's API. Ignored: ${process.env[commands[i]]}`);
    }
  }

  // Executing cli command:
  try {
    program.parse(process.argv);
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
};
