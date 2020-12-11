/**
 * @fileoverview Assertion function to check Node.js version (v14+).
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

export default function () {
  if (process.version[0] !== 'v' || 14 > Number.parseInt(
    process.version
      .toLocaleLowerCase()
      .split('.')[0]
      .split('v')[1]
  )) {
    throw new Error(`Unsupported Node.js version: ${process.version}`);
  }
}
