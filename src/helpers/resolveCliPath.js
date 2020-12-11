/**
 * @fileoverview Declare CLI path resolver function.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as url from 'url';
import * as path from 'path';

export default function(pth) {
  return path.resolve(
    path.dirname(url.fileURLToPath(import.meta.url)),
    `./../../${pth}`
  );
}
