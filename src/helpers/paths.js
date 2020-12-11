/**
 * @fileoverview Exports calculated paths.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import resolveCli from './resolveCliPath.js';
import resolveProject from './resolveProjectPath.js';

const paths = {
  default: {
    base: resolveCli('.'),
    dotenv: resolveCli('.env'),
    packageJson: resolveCli('package.json'),
  },
  project: {
    base: resolveProject('.'),
    src: resolveProject('src'),
    dist: resolveProject('dist'),
    public: resolveProject('public'),
    doc: resolveProject('doc'),
    coverage: resolveProject('coverage'),
    node_modules: resolveProject('node_modules'),
    dotenv: resolveProject('.env'),
    packageJson: resolveProject('package.json'),
    tsconfigJson: resolveProject('tsconfig.json'),
  }
};

export default paths;
