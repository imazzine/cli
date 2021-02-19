/**
 * @fileoverview Assert module path function.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import { createRequire } from 'module';
import resolveGlobal from 'resolve-global';
const resolvePath = createRequire(import.meta.url).resolve;
function resovePath(path) {
    let subjectPath = resolveGlobal.silent(path);
    if (!subjectPath) {
        subjectPath = resolvePath(path);
    }
    return subjectPath;
}
export default resovePath;
