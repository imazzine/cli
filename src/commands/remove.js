/**
 * @fileoverview Configure "remove" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as fs from 'fs';
import { removeGlobally } from '../helpers/dotenvStorage.js';
import resovePath from '../helpers/resovePath.js';
export default function(program) {
  program
    .command('remove <subject> <path>')
    .description(
      'remove specified <subject> ' +
      '(either "command" or "project") ' +
      'from @imazzine/cli')
    .storeOptionsAsProperties(false)
    .action((subject, path) => {
      removeGlobally(subject, path);
    });
}
