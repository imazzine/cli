/**
 * @fileoverview Configure "add" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import { addGlobally } from '../helpers/dotenvStorage.js';
export default function(program) {
  program
    .command('add <subject> <path>')
    .description(
      'add specified <subject> ' +
      '(either "command" or "project") ' +
      'to @imazzine/cli')
    .storeOptionsAsProperties(false)
    .action(addGlobally);
}
