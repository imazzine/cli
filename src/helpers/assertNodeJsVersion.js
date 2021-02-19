/**
 * @fileoverview Assert function to check Node.js version (should be v14+).
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

export default function () {
  if (process.version[0] !== 'v' ||
    Number.parseInt(
      process.version
        .toLocaleLowerCase()
        .split('.')[0]
        .split('v')[1]
    ) < 14 ||
    process.version.split('.').length !== 3
  ) {
    throw new Error(`Unsupported Node.js version: ${process.version}`);
  }
}
