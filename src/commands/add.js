/**
 * @fileoverview Configure "add" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import * as fs from 'fs';
import { program } from 'commander';
import paths from './../helpers/paths.js';
program
  .command('add <subject>')
  .description(
    'Add specified <subject>, either "command" or "project".'
  )
  .storeOptionsAsProperties(false)
  .requiredOption('-n, --name <val>', 'specified <subject>\'s name value')
  .requiredOption('-p, --path <val>', 'specified <subject>\'s path value')
  .action((subject, command) => {
    const name = `CMD_${command.opts().name.toUpperCase()}`;
    if (subject === 'command' && !process.env[name]) {
      fs.writeFileSync(
        paths.default.dotenv,
        `${
          fs.readFileSync(paths.default.dotenv)
        }\n${
          name
        }="${
          command.opts().path
        }"`
      );
    } else {
      throw new Error(`Can't add command '${
        command.opts().name
      }': process.env.${
        name
      } is already registered.`);
    }
  });
