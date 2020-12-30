import * as path from 'path';
export default function(program) {

  program
    .command('tmp')
    .description('tmp')
    .action((subject, command) => {
      console.log('cmd tmp!');
    });
}
