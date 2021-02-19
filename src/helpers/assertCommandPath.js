/**
 * @fileoverview Function for assert command path.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

export default function(path) {
  Object.keys(process.env).forEach((key) => {
    if (key.indexOf('ZZ_COMMAND_') === 0
      && process.env[key] === path) {
      throw new Error(
        `Provided path is already registered as a command: ${path}.`
      );
    }
  });
};
