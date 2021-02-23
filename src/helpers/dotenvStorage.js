/**
 * @fileoverview Set of functions for update imazzine .env files.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as fs from 'fs';
import getSubjectFullname from '../helpers/getSubjectFullname.js';
import resovePath from './resovePath.js';
import assertCommandPath from './assertCommandPath.js';
import assertProjectPath from './assertProjectPath.js';
function addGlobally(subject, path) {
  const fullpath = resovePath(path);
  switch (subject) {
    case 'command':
      assertCommandPath(fullpath);
      break;
    case 'project':
      assertProjectPath(fullpath);
      break;
    default:
      throw new Error(
        `Wrong <subject> value: "${
          subject
        }". Should be either "command" or "project".`
      );
  }
  fs.writeFileSync(
    process.env['ZZ_PATHS_CLI_DOT_ENV'],
    `${fs.readFileSync(process.env['ZZ_PATHS_CLI_DOT_ENV'])}\n${
      getSubjectFullname(subject)
    }="${
      fullpath
    }"`
  );
};
function removeGlobally(subject, path) {
  const subjectPath = resovePath(path);
  switch (subject) {
    case 'command':
      break;
    case 'project':
      break;
    default:
      throw new Error(
        `Wrong <subject> value: "${
          subject
        }". Should be either "command" or "project".`
      );
  }
  let dotenvList = fs.readFileSync(
    process.env['ZZ_PATHS_CLI_DOT_ENV'], 'utf8'
  ).split('\n');
  let error = true;
  dotenvList.forEach((entry, index) => {
    if (entry.length
      && entry.split('=').length === 2
      && ~entry.split('=')[0]
        .indexOf(subject === 'command' ? 'ZZ_COMMAND_' : 'ZZ_PROJECT_')
      && ~entry.split('=')[1].indexOf(subjectPath)) {
      dotenvList.splice(index, 1);
      fs.writeFileSync(
        process.env['ZZ_PATHS_CLI_DOT_ENV'],
        dotenvList.join('\n'),
        'utf8'
      );
      error = false;
    } 
  });
  if (error) {
    throw new Error(`Resolved path doesn't registered as a ${subject}: "${
      subjectPath
    }".`);
  }
}
export {
  addGlobally,
  removeGlobally,
};