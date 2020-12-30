/**
 * @fileoverview Assert module path function.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

import { createRequire } from 'module';
export default createRequire(import.meta.url).resolve;