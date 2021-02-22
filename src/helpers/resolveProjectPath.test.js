import { execSync } from 'child_process';
import fs from 'fs';
import resolveProjectPath from './resolveProjectPath';
let root;
describe('assert @imazzine/cli path resolver',  ()=>{
  beforeAll(()=>{
    root = fs.realpathSync(process.cwd());
  });
  test('no parameters', ()=>{
    expect(resolveProjectPath()).toEqual(root);
  });
  test('empty string', ()=>{
    expect(resolveProjectPath('')).toEqual(root);
  });
  test('.', ()=>{
    expect(resolveProjectPath('.')).toEqual(root);
  });
  test('/', ()=>{
    expect(resolveProjectPath('/')).toEqual(root);
  });
  test('./', ()=>{
    expect(resolveProjectPath('./')).toEqual(root);
  });
  test('./.', ()=>{
    expect(resolveProjectPath('./.')).toEqual(root);
  });
  test('//', ()=>{
    expect(resolveProjectPath('//')).toEqual(root);
  });
  test('/cli.js', ()=>{
    expect(resolveProjectPath('/cli.js')).toEqual(`${root}/cli.js`);
  });
  test('/src', ()=>{
    expect(resolveProjectPath('/src')).toEqual(`${root}/src`);
  });
  test('/src/', ()=>{
    expect(resolveProjectPath('/src/')).toEqual(`${root}/src`);
  });
  afterAll(()=>{
    root = undefined;
  });
});