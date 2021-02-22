import fs from 'fs';
import resolveProjectPath from './resolveProjectPath.js';
let root;
describe('assert @imazzine/cli project path resolver',  ()=>{
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