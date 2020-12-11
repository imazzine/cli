/**
 * @fileoverview Configure "remove" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import { program } from 'commander';
program
  .command('remove')
  .description('Description')
  .action((...args) => {
    console.log(args);
  });
