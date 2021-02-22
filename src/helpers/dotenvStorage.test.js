import * as fs from 'fs';
import getEnvironment from './getEnvironment.js';
import resovePath from './resovePath.js';
import { addGlobally, removeGlobally } from './dotenvStorage.js';
let dotenvContent;
describe('assert dotenvStorage removeGlobally method',  ()=>{
  beforeAll(()=>{
    getEnvironment();
    dotenvContent = fs.readFileSync(process.env['ZZ_PATHS_CLI_DOT_ENV']);
  });
  test('removeGlobally should throw if path can not be resolved', ()=>{
    expect(()=>{removeGlobally('command', '@imazzine/tmp1')}).toThrow();
  });
  test('removeGlobally should throw if subject name is wrong', ()=>{
    expect(()=>{removeGlobally('wrongvalue', '@imazzine/tmp')}).toThrow();
  });
  test('removeGlobally should throw if resolved path is not registered', ()=>{
    expect(()=>{removeGlobally('command', '@imazzine/tmp')}).toThrow();
  });
  test('removeGlobally shouldn\'t throw if subject and path are correct', ()=>{
    addGlobally('command', '@imazzine/tmp');
    expect(()=>{removeGlobally('command', '@imazzine/tmp')}).not.toThrow();
  });
  test('removeGlobally should remove resolved path from .env', ()=>{
    let fullpath = resovePath('@imazzine/tmp');
    addGlobally('command', '@imazzine/tmp');
    removeGlobally('command', '@imazzine/tmp');
    const env = fs
      .readFileSync(process.env['ZZ_PATHS_CLI_DOT_ENV'])
      .toString();
    expect(!~env.indexOf(fullpath)).toBeTruthy();
  });
});
describe('assert dotenvStorage addGlobally method',  ()=>{
  beforeAll(()=>{
    getEnvironment();
    dotenvContent = fs.readFileSync(process.env['ZZ_PATHS_CLI_DOT_ENV']);
  });
  afterEach(()=>{
    fs.writeFileSync(
      process.env['ZZ_PATHS_CLI_DOT_ENV'], dotenvContent, 'utf8'
    );
  });
  test('addGlobally should throw if path can not be resolved', ()=>{
    expect(()=>{addGlobally('command', '@imazzine/tmp1')}).toThrow();
  });
  test('addGlobally should throw if subject name is wrong', ()=>{
    expect(()=>{addGlobally('wrongvalue', '@imazzine/tmp')}).toThrow();
  });
  test('addGlobally shouldn\'t throw if subject and path are correct', ()=>{
    expect(()=>{addGlobally('command', '@imazzine/tmp')}).not.toThrow();
  });
  test('@imazzine/tmp full path should be added to .env file', ()=>{
    let fullpath = resovePath('@imazzine/tmp');
    addGlobally('command', fullpath);
    const env = fs
      .readFileSync(process.env['ZZ_PATHS_CLI_DOT_ENV'])
      .toString();
    expect(!!~env.indexOf(fullpath)).toBeTruthy();
  });
  test('addGlobally should throw if subject path was already registered', ()=>{
    addGlobally('command', '@imazzine/tmp');
    getEnvironment();
    expect(()=>{
      addGlobally('command', '@imazzine/tmp');
    }).toThrow();
  });
});
