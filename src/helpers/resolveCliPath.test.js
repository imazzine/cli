import { execSync } from 'child_process';
import resolveCliPath from './resolveCliPath';
let root;
describe('assert @imazzine/cli cli path resolver',  ()=>{
  beforeAll(()=>{
    root = execSync('npm root')
      .toString()
      .split('\n')[0]
      .split('/node_modules')[0];
  });
  test('no parameters', ()=>{
    expect(resolveCliPath()).toEqual(root);
  });
  test('empty string', ()=>{
    expect(resolveCliPath('')).toEqual(root);
  });
  test('.', ()=>{
    expect(resolveCliPath('.')).toEqual(root);
  });
  test('/', ()=>{
    expect(resolveCliPath('/')).toEqual(root);
  });
  test('./', ()=>{
    expect(resolveCliPath('./')).toEqual(root);
  });
  test('./.', ()=>{
    expect(resolveCliPath('./.')).toEqual(root);
  });
  test('//', ()=>{
    expect(resolveCliPath('//')).toEqual(root);
  });
  test('/cli.js', ()=>{
    expect(resolveCliPath('/cli.js')).toEqual(`${root}/cli.js`);
  });
  test('/src', ()=>{
    expect(resolveCliPath('/src')).toEqual(`${root}/src`);
  });
  test('/src/', ()=>{
    expect(resolveCliPath('/src/')).toEqual(`${root}/src`);
  });
  afterAll(()=>{
    root = undefined;
  });
});
