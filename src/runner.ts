/**
 * @module @imazzine/cli
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

// import { program } from 'commander';
// import { readFileSync } from 'fs';
import resovePath from './helpers/resovePath';
export default function run(): void {
  // import(
  //   /* webpackChunkName: "resovePath" */
  //   './helpers/resovePath'
  // ).then((resovePath)=>{
  //   console.log(resovePath.default('uuid'));
  // });
  console.log(resovePath('uuid'));
}
