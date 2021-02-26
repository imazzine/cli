/**
 * @fileoverview Function for determine calculated paths.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import resolveCliPath from './resolveCliPath.js';
import resolveProjectPath from './resolveProjectPath.js';
export default function() {
  return {
    cli: {
      BASE: resolveCliPath('.'),
      DOT_ENV: resolveCliPath('.env'),
      PACKAGE_JSON: resolveCliPath('package.json'),
      COMMAND_ADD: resolveCliPath('./src/commands/add.js'),
      COMMAND_REMOVE: resolveCliPath('./src/commands/remove.js'),
    },
    project: {
      BASE: resolveProjectPath('.'),
      SRC: resolveProjectPath('src'),
      DIST: resolveProjectPath('dist'),
      PUBLIC: resolveProjectPath('public'),
      DOC: resolveProjectPath('doc'),
      COVERAGE: resolveProjectPath('coverage'),
      NODE_MODULES: resolveProjectPath('node_modules'),
      DOT_ENV: resolveProjectPath('.env'),
      PACKAGE_JSON: resolveProjectPath('package.json'),
      TSCONFIG_JSON: resolveProjectPath('tsconfig.json'),
    }
  }
};
