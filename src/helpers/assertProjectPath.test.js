/**
 * @fileoverview Unit tests for assertProjectPath.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import resolveProjectPath from './resolveProjectPath.js';
import getEnvironment from './getEnvironment.js';
import assertProjectPath from './assertProjectPath.js';
describe('assert @imazzine/cli command path assert function',  ()=>{
  beforeAll(()=>{
    getEnvironment();
  });
  test('non existed path shouldn\'t throw', ()=>{
    expect(()=>{
      assertProjectPath(resolveProjectPath('./src/commands/add.js'));
    }).not.toThrow();
  });
  test('existed path should throw', ()=>{
    process.env['ZZ_PROJECT_CMD'] =
      resolveProjectPath('./src/commands/add.js');
    expect(()=>{
      assertProjectPath(resolveProjectPath('./src/commands/add.js'));
    }).toThrow(
      new Error(`Provided path is already registered as a project: ${
        resolveProjectPath('./src/commands/add.js')
      }.`)
    );
  });
});