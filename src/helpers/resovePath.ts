/**
 * @fileoverview Assert module path function.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as resolveGlobal from 'resolve-global';
// import * as mod from 'module';
// const resolveLocal = mod.createRequire(import.meta.url).resolve;
const resolveLocal = require.resolve;
function resovePath(path: string) {
    let subjectPath = resolveGlobal.silent(path);
    if (!subjectPath) {
        console.log('global');
        subjectPath = resolveLocal(path);
    }
    return subjectPath;
}
export default resovePath;
