/**
 * @fileoverview Configure "add" command.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import getSubjectFullname from '../helpers/getSubjectFullname.js';
import resovePath from '../helpers/resovePath.js';
import resolveCommandPath from '../helpers/resolveCommandPath.js';
import addToDotEnv from '../helpers/addToDotEnv.js';
export default function(program) {
  program
    .command('add <subject> <path>')
    .description(
      'add specified <subject> ' +
      '(either "command" or "project") ' +
      'to @imazzine/cli')
    .storeOptionsAsProperties(false)
    .action((subject, path, command) => {
      const fullname = getSubjectFullname(subject);
      const subjectPath = resovePath(path);
      if (subject === 'command') {
        resolveCommandPath(subjectPath);
      }
      addToDotEnv(fullname, subjectPath);
    });
}
