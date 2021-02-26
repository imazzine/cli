/**
 * @fileoverview Assert module path function.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import { createRequire } from 'module';
import resolveGlobal from 'resolve-global';
const resolveLocal = createRequire(import.meta.url).resolve;
function resovePath(path) {
    let subjectPath = resolveGlobal.silent(path);
    if (!subjectPath) {
        subjectPath = resolveLocal(path);
    }
    return subjectPath;
}
export default resovePath;
