/**
 * @fileoverview Assertion function to check runtime environment.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import loadEnvironment from './../helpers/environment.js';

export default function() {
  loadEnvironment();
  if (!process.env.CMD_ADD) {
    throw new Error(
      'Runtime environment error: CMD_ADD variable is required.'
    );
  }
  if (!process.env.CMD_LIST) {
    throw new Error(
      'Runtime environment error: CMD_LIST variable is required.'
    );
  }
  if (!process.env.CMD_REMOVE) {
    throw new Error(
      'Runtime environment error: CMD_REMOVE variable is required.'
    );
  }
}
