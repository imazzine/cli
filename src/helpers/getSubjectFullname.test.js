import getSubjectFullname from './getSubjectFullname.js';
describe('assert getSubjectFullname function',  ()=>{
  test('test "command" subject', ()=>{
    expect(getSubjectFullname('command')).toMatch(/^ZZ_COMMAND_[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });
  test('test "project" subject', ()=>{
    expect(getSubjectFullname('project')).toMatch(/^ZZ_PROJECT_[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });
  test('test inconsistent subject', ()=>{
    expect(()=>{getSubjectFullname('test');})
      .toThrow(
        new Error(
          'Wrong <subject> value: "test". ' +
          'Should be either "command" or "project".'
        )
      );
  });
});
