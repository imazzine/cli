/**
 * @fileoverview Configure "remove" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

export default function(program) {
  program
    .command('remove')
    .description('Description')
    .action((...args) => {
      console.log(args);
    });
}
