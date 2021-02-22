import resolveProjectPath from './resolveProjectPath';
import getEnvironment from './getEnvironment';
import assertCommandPath from './assertCommandPath';
import addToDotenv from './addToDotEnv';
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