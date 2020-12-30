/**
 * @fileoverview Function for determine calculated paths.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import resolveCliPath from './resolveCliPath.js';
import resolveProject from './resolveProjectPath.js';

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
      BASE: resolveProject('.'),
      SRC: resolveProject('src'),
      DIST: resolveProject('dist'),
      PUBLIC: resolveProject('public'),
      DOC: resolveProject('doc'),
      COVERAGE: resolveProject('coverage'),
      NODE_MODULES: resolveProject('node_modules'),
      DOT_ENV: resolveProject('.env'),
      PACKAGE_JSON: resolveProject('package.json'),
      TSCONFIG_JSON: resolveProject('tsconfig.json'),
    }
  }
};
