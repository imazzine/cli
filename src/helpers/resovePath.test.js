import { execSync } from 'child_process';
import resolveProjectPath from './resolveProjectPath';
import resolvePath from './resovePath';
let globalRoot;
let localRoot;
describe('assert @imazzine/cli path resolver',  ()=>{
  beforeAll(()=>{
    globalRoot = execSync('npm root -g').toString().split('\n')[0];
    localRoot = execSync('npm root').toString().split('\n')[0]
      .split('/node_modules')[0];
  });
  test('globally installed package should be resolved', ()=>{
    expect(resolvePath('@imazzine/tmp'))
      .toEqual(`${globalRoot}/@imazzine/tmp/tmp.js`);
  });
  test('existed file path should be resolved', ()=>{
    expect(resolvePath('../../.env'))
      .toEqual(`${localRoot}/.env`);
  });
  test('existed file path (rel) shouldn\'t throw', ()=>{
    expect(()=>{resolvePath('../../.env')}).not.toThrow();
  });
  test('existed file path (abs) shouldn\'t throw', ()=>{
    expect(()=>{resolvePath(`${localRoot}/.env`)}).not.toThrow();
  });
  test('non existed file path (rel) shouldn throw', ()=>{
    expect(()=>{resolvePath('./.env')}).toThrow();
  });
  test('non existed file path (abs) shouldn throw', ()=>{
    expect(()=>{resolvePath(`${localRoot}/src/.env`)}).toThrow();
  });
  afterAll(()=>{
    globalRoot = undefined;
    localRoot = undefined;
  });
});