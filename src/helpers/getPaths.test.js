/**
 * @fileoverview Unit tests for getPaths.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import getPaths from './getPaths.js';
import resolveCliPath from './resolveCliPath.js';
import resolveProjectPath from './resolveProjectPath.js';
const paths = getPaths();
describe('assert @imazzine/cli getPaths function',  ()=>{
  test('paths.cli key is exist and is ixpected object', ()=>{
    expect(Object.keys(paths)).toContain('cli');
    expect(paths.cli).toMatchObject({
      BASE: resolveCliPath('.'),
      DOT_ENV: resolveCliPath('.env'),
      PACKAGE_JSON: resolveCliPath('package.json'),
      COMMAND_ADD: resolveCliPath('./src/commands/add.js'),
      COMMAND_REMOVE: resolveCliPath('./src/commands/remove.js'),
    });
  });
  test('paths.project key is exist and is expected object', ()=>{
    expect(Object.keys(paths)).toContain('project');
    expect(paths.project).toMatchObject({
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
    });
  });
});
