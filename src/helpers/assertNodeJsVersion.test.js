import { jest } from '@jest/globals';
import assertNodeJsVersion from './assertNodeJsVersion';
let original;
describe('assert node.js version',  ()=>{
  beforeAll(()=>{
    original = process.platform;
  });
  test('inconsistent node.js version (14.0.0) should throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: '14.0.0'
    });
    expect(()=>{assertNodeJsVersion()}).toThrow(
      new Error(`Unsupported Node.js version: 14.0.0`)
    );
  });
  test('inconsistent node.js version (w14.0.0) should throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: 'w14.0.0'
    });
    expect(()=>{assertNodeJsVersion()}).toThrow(
      new Error(`Unsupported Node.js version: w14.0.0`)
    );
  });
  test('inconsistent node.js version (v14) should throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: 'v14'
    });
    expect(()=>{assertNodeJsVersion()}).toThrow(
      new Error(`Unsupported Node.js version: v14`)
    );
  });
  test('inconsistent node.js version (v14.0) should throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: 'v14.0'
    });
    expect(()=>{assertNodeJsVersion()}).toThrow(
      new Error(`Unsupported Node.js version: v14.0`)
    );
  });
  test('inconsistent node.js version (v14.0.0.0) should throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: 'v14.0.0.0'
    });
    expect(()=>{assertNodeJsVersion()}).toThrow(
      new Error(`Unsupported Node.js version: v14.0.0.0`)
    );
  });
  test('node.js version less than v14 (v12.0.0) should throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: 'v12.0.0'
    });
    expect(()=>{assertNodeJsVersion()}).toThrow(
      new Error(`Unsupported Node.js version: v12.0.0`)
    );
  });
  test('node.js version equal v14 (v14.15.4) shouldn\'t throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: 'v14.15.4'
    });
    expect(()=>{assertNodeJsVersion()}).not.toThrow();
  });
  test('node.js version larger than v14 (v15.0.0) shouldn\'t throw', ()=>{
    Object.defineProperty(process, 'version', {
      value: 'v15.0.0'
    });
    expect(()=>{assertNodeJsVersion()}).not.toThrow();
  });
  afterAll(()=>{
    Object.defineProperty(process, 'version', {
      value: original
    });
  });
});
