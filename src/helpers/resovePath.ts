/**
 * @fileoverview Assert module path function.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as resolve from 'resolve';
import * as resolveGlobal from 'resolve-global';

/**
 * Resolve path to locally/globally installed npm
 * module or file specified in path param.
 * @throws
 */
function resovePath(path: string): string {
    let subjectPath = resolveGlobal.silent(path);
    if (!subjectPath) {
        subjectPath = resolve.sync(path);
    }
    return subjectPath;
}
export default resovePath;
