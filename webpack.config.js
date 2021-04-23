/**
 * @fileoverview Provides webpack configuration for the module.
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

const path = require('path');
const Terser = require('terser-webpack-plugin');
const TypeChecker = require('fork-ts-checker-webpack-plugin');

function getConfig() {
  const entry = {
    runner: './src/runner.ts',
  };
  const exclude = [/\.test\.js$/, /(node_modules)/];
  const externals = ['os', 'fs', 'path', 'module', 'resolve', 'resolve-global'];
  const output = {
    path: path.resolve('./lib'),
    filename: '[name].js',
    library: '@imazzine/cli',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  };
  const params = {
    rules: [
      {
        loader: require.resolve('babel-loader'),
        test: /\.(ts)$/,
        exclude: exclude,
        options: {
          cacheDirectory: false,
        },
      },
    ],
  };
  const config = {
    entry: entry,
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: output,
    target: 'node',
    externals: externals,
    mode: 'production', // development | production
    devtool: 'source-map',
    module: params,
    optimization: {
      minimize: true,
      minimizer: [
        new Terser({
          // test: /\.js(\?.*)?$/i,
          // include
          // exclude
          // minify
          parallel: true,
          extractComments: {
            condition: /@module/i,
            filename: (fileData) => {
              return `${fileData.filename}.info`;
            },
            banner: (licenseFile) => {
              return `Additional information can be found in ${licenseFile}`;
            },
          },
          terserOptions: {
            module: false, // true for ES6 modules
            mangle: false, // obfuscate
            output: {
              comments: false,
            },
          },
        })
      ],
    },
    plugins: [
      new TypeChecker(),
    ],
  };
  return config;
};
module.exports = getConfig();
