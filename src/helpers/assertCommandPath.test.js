/**
 * @fileoverview Unit tests for assertCommandPath.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import resolveProjectPath from './resolveProjectPath.js';
import getEnvironment from './getEnvironment.js';
import assertCommandPath from './assertCommandPath.js';
describe('assert @imazzine/cli command path assert function',  ()=>{
  beforeAll(()=>{
    getEnvironment();
  });
  test('not existed path shouldn\'t throw', ()=>{
    expect(()=>{
      assertCommandPath(resolveProjectPath('./src/commands/add.js'));
    }).not.toThrow();
  });
  test('existed path should throw', ()=>{
    process.env['ZZ_COMMAND_CMD'] =
      resolveProjectPath('./src/commands/add.js');
    expect(()=>{
      assertCommandPath(resolveProjectPath('./src/commands/add.js'));
    }).toThrow(
      new Error(`Provided path is already registered as a command: ${
        resolveProjectPath('./src/commands/add.js')
      }.`)
    );
  });
});