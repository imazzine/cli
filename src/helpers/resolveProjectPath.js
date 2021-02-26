/**
 * @fileoverview Declare project path resolver function.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as fs from 'fs';
import * as path from 'path';
export default function(pth) {
  return path.resolve(fs.realpathSync(process.cwd()), `./${pth || ''}`);
}
