/**
 * @fileoverview Configure "add" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import * as fs from 'fs';
import * as path from 'path';
import assertModulePath from './../asserts/modulePath.js';
export default function(program) {

  program
    .command('add <subject>')
    .description(
      'add specified <subject> (either "command" or "project") ' +
      'to @imazzine/cli'
    )
    .storeOptionsAsProperties(false)
    .requiredOption('-n, --name <value>', '<subject>\'s name')
    .requiredOption('-p, --path <value>', '<subject>\'s path')
    .action((subject, command) => {

      // Calculating fullname:
      let fullname;
      switch (subject) {
        case 'command':
          fullname = `ZZ_COMMAND_${command.opts().name}`;
          break;
        case 'project':
          fullname = `ZZ_PROJECT_${command.opts().name}`;
          break;
        default:
          // Asserting subject value:
          throw new TypeError(`wrong <subject> value: "${
            subject
          }". Should be either "command" or "project".`);
      }

      // Asserting fullname accessibility:
      if (process.env[fullname]) {
        throw new Error(`can't add ${subject} '${
          command.opts().name
        }': ${
          fullname
        } is already registered.`);
      }

      // Asserting path:
      const subjectPath = assertModulePath(command.opts().path);

      // Updating .env file:
      fs.writeFileSync(
        process.env['ZZ_PATHS_CLI_DOT_ENV'],
        `${
          fs.readFileSync(process.env['ZZ_PATHS_CLI_DOT_ENV'])
        }\n${
          fullname
        }="${
          subjectPath
        }"`
      );
    });
}
