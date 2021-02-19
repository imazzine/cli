/**
 * @fileoverview Function to add key/value pair to .env.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as fs from 'fs';
export default function(key, value) {
  fs.writeFileSync(
    process.env['ZZ_PATHS_CLI_DOT_ENV'],
    `${fs.readFileSync(process.env['ZZ_PATHS_CLI_DOT_ENV'])}\n${
      key
    }="${
      value
    }"`
  );
};
