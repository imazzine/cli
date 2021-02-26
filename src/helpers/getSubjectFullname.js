/**
 * @fileoverview Function for calculate subject full name.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as uuid from 'uuid';
export default function(subject) {
  let fullname;
  switch (subject) {
    case 'command':
      fullname = `ZZ_COMMAND_${uuid.v5(uuid.v1(), uuid.v1())}`;
      break;
    case 'project':
      fullname = `ZZ_PROJECT_${uuid.v5(uuid.v1(), uuid.v1())}`;
      break;
    default:
      throw new Error(
        `Wrong <subject> value: "${
          subject
        }". Should be either "command" or "project".`
      );
  }
  return fullname;
};
