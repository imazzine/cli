import { execSync } from 'child_process';

describe('e2e tests for @imazzine/cli',  ()=>{
  test('"zz --help" shouldn\'t fail', ()=>{
    expect(()=>{execSync('zz --help')}).not.toThrow();
  });
  test('"zz help add" shouldn\'t fail', ()=>{
    expect(()=>{execSync('zz help add')}).not.toThrow();
  });
  test('"zz add" should fail', ()=>{
    expect(()=>{execSync('zz add')}).toThrow();
  });
  test('"zz add command" should fail', ()=>{
    expect(()=>{execSync('zz add command')}).toThrow();
  });
  test('"zz add @imazzine/tmp" should fail', ()=>{
    expect(()=>{execSync('zz add command')}).toThrow();
  });
  test('"zz add command @imazzine/tmp1" should fail', ()=>{
    expect(()=>{execSync('zz add command @imazzine/tmp1')}).toThrow();
  });
  test('"zz add project @imazzine/tmp1" should fail', ()=>{
    expect(()=>{execSync('zz add project @imazzine/tmp1')}).toThrow();
  });
  test('"zz add notsubject @imazzine/tmp" should fail', ()=>{
    expect(()=>{execSync('zz add notsubject @imazzine/tmp')}).toThrow();
  });
  test('"zz tmp" should fail until it was added', ()=>{
    expect(()=>{execSync('zz tmp')}).toThrow();
  });
  test('"zz add command @imazzine/tmp" shouldn\'t fail', ()=>{
    expect(()=>{execSync('zz add command @imazzine/tmp')}).not.toThrow();
  });
  test('"zz add command @imazzine/tmp" should fail second time', ()=>{
    expect(()=>{execSync('zz add command @imazzine/tmp')}).toThrow();
  });
  test('"zz add project @imazzine/tmp" shouldn\'t fail', ()=>{
    expect(()=>{execSync('zz add project @imazzine/tmp')}).not.toThrow();
  });
  test('"zz add project @imazzine/tmp" should fail second time', ()=>{
    expect(()=>{execSync('zz add project @imazzine/tmp')}).toThrow();
  });
  test('"zz tmp" shouldn\'t fail after it was added', ()=>{
    expect(()=>{execSync('zz tmp')}).not.toThrow();
  });
  test('"zz remove" should fail', ()=>{
    expect(()=>{execSync('zz remove')}).toThrow();
  });
  test('"zz remove @imazzine/tmp" should fail', ()=>{
    expect(()=>{execSync('zz remove @imazzine/tmp')}).toThrow();
  });
  test('"zz remove command @imazzine/tmp1" should fail', ()=>{
    expect(()=>{execSync('zz remove command @imazzine/tmp1')}).toThrow();
  });
  test('"zz remove project @imazzine/tmp1" should fail', ()=>{
    expect(()=>{execSync('zz remove project @imazzine/tmp1')}).toThrow();
  });
  test('"zz remove notsubject @imazzine/tmp" should fail', ()=>{
    expect(()=>{execSync('zz remove notsubject @imazzine/tmp')}).toThrow();
  });
  test('"zz remove command @imazzine/tmp" shouldn\'t fail first time', ()=>{
    expect(()=>{execSync('zz remove command @imazzine/tmp')}).not.toThrow();
  });
  test('"zz remove command @imazzine/tmp" should fail second time', ()=>{
    expect(()=>{execSync('zz remove command @imazzine/tmp')}).toThrow();
  });
  test('"zz tmp" should fail after it was removed', ()=>{
    expect(()=>{execSync('zz tmp')}).toThrow();
  });
  test('"zz remove project @imazzine/tmp" shouldn\'t fail first time', ()=>{
    expect(()=>{execSync('zz remove project @imazzine/tmp')}).not.toThrow();
  });
  test('"zz remove project @imazzine/tmp" should fail second time', ()=>{
    expect(()=>{execSync('zz remove project @imazzine/tmp')}).toThrow();
  });
});
