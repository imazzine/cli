/**
 * @fileoverview Configure "remove" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as fs from 'fs';
import resovePath from '../helpers/resovePath.js';
export default function(program) {
  program
    .command('remove <subject> <path>')
    .description(
      'remove specified <subject> ' +
      '(either "command" or "project") ' +
      'from @imazzine/cli')
    .storeOptionsAsProperties(false)
    .action((subject, path, command) => {
      const subjectPath = resovePath(path);
      let dotenv = fs.readFileSync(
        process.env['ZZ_PATHS_CLI_DOT_ENV'], 'utf8'
      ).split('\n');
      dotenv.forEach((entry, index) => {
        if (entry.length
          && entry.split('=').length === 2
          && ~entry.split('=')[0].indexOf('ZZ_COMMAND_')
          && ~entry.split('=')[1].indexOf(subjectPath)) {
          dotenv.splice(index, 1);
          fs.writeFileSync(
            process.env['ZZ_PATHS_CLI_DOT_ENV'],
            dotenv.join('\n'),
            'utf8'
          );
        }
      });
    });
}
