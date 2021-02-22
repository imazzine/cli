import getEnvironment from './getEnvironment.js';
import resolveCliPath from './resolveCliPath.js';
import resolveProjectPath from './resolveProjectPath.js';
describe('assert @imazzine/cli environment object',  ()=>{
  beforeAll(()=>{
    getEnvironment();
  });
  test('process.env should contain ZZ_CLI value', ()=>{
    expect(process.env).toMatchObject({
      ZZ_CLI: 'ZZ_CLI',
    });
  });
  test('process.env should contain cli paths', ()=>{
    expect(process.env).toMatchObject({
      ZZ_PATHS_CLI_BASE: resolveCliPath('.'),
      ZZ_PATHS_CLI_DOT_ENV: resolveCliPath('.env'),
      ZZ_PATHS_CLI_PACKAGE_JSON: resolveCliPath('package.json'),
      ZZ_PATHS_CLI_COMMAND_ADD: resolveCliPath('./src/commands/add.js'),
      ZZ_PATHS_CLI_COMMAND_REMOVE: resolveCliPath('./src/commands/remove.js'),
    });
  });
  test('process.env should contain project paths', ()=>{
    expect(process.env).toMatchObject({
      ZZ_PATHS_PROJECT_BASE: resolveProjectPath('.'),
      ZZ_PATHS_PROJECT_SRC: resolveProjectPath('src'),
      ZZ_PATHS_PROJECT_DIST: resolveProjectPath('dist'),
      ZZ_PATHS_PROJECT_PUBLIC: resolveProjectPath('public'),
      ZZ_PATHS_PROJECT_DOC: resolveProjectPath('doc'),
      ZZ_PATHS_PROJECT_COVERAGE: resolveProjectPath('coverage'),
      ZZ_PATHS_PROJECT_NODE_MODULES: resolveProjectPath('node_modules'),
      ZZ_PATHS_PROJECT_DOT_ENV: resolveProjectPath('.env'),
      ZZ_PATHS_PROJECT_PACKAGE_JSON: resolveProjectPath('package.json'),
      ZZ_PATHS_PROJECT_TSCONFIG_JSON: resolveProjectPath('tsconfig.json'),
    });
  });
});
