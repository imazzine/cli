/**
 * @fileoverview Provides basic execution logic for CLI commands.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import { program } from 'commander';
import assertNodeJS from './asserts/node.js';
import assertEnvironment from './asserts/environment.js';
import paths from './helpers/paths.js';
import resolveDefault from './helpers/resolveCliPath.js';
import resolvePackageJson from './helpers/resolvePackageJson.js';

function assert() {
  assertNodeJS();
  assertEnvironment();
}

export default async function() {
  assert();
  program
    .version(resolvePackageJson(paths.default.packageJson).version);
  if (process.env.ENV_PATH === paths.default.base) {
    await import(resolveDefault(process.env.CMD_ADD));
    await import(resolveDefault(process.env.CMD_LIST));
    await import(resolveDefault(process.env.CMD_REMOVE));
    program.parse(process.argv);
  }
};
