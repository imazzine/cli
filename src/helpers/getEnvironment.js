/**
 * @fileoverview Runtime environment loader function (.env).
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as dotenv from 'dotenv';
import getPaths from './getPaths.js';
export default function () {

  // Loading paths:
  const paths = getPaths();

  // Declaring cli paths environment variables:
  Object.keys(paths.cli).forEach((key) => {
    process.env[`ZZ_PATHS_CLI_${key.toUpperCase()}`] = paths.cli[key];
  });

  // Declaring project paths environment variables:
  Object.keys(paths.project).forEach((key) => {
    process.env[`ZZ_PATHS_PROJECT_${key.toUpperCase()}`] = paths.project[key];
  });

  // Loading .env variables:
  dotenv.config({
    path: process.env['ZZ_PATHS_PROJECT_DOT_ENV'],
  });
  dotenv.config({
    path: process.env['ZZ_PATHS_CLI_DOT_ENV'],
  });
}
