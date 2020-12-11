/**
 * @fileoverview Declare runtime environment loader function (.env).
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import * as fs from 'fs';
import * as dotenv from 'dotenv';
import paths from './paths.js';

export default function () {
  if (fs.existsSync(paths.project.dotenv)) {
    process.env['ENV_PATH'] = paths.project.base;
    dotenv.config({ path: paths.project.dotenv });
  } else {
    process.env['ENV_PATH'] = paths.default.base;
    dotenv.config({ path: paths.default.dotenv});
  }
}
