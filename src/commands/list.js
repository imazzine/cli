/**
 * @fileoverview Configure "list" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import { program } from 'commander';
program
  .command('list')
  .description('Description')
  .action((...args) => {
    console.log(args);
  });