/**
 * @fileoverview Declare package.json resolver function.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as fs from 'fs';
export default function(pth) {
  return JSON.parse(fs.readFileSync(pth));
}
