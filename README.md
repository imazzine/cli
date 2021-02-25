# @imazzine/cli

[![npm version](https://img.shields.io/npm/v/@imazzine/cli)](https://www.npmjs.com/package/@imazzine/cli)
[![Build Status](https://travis-ci.com/imazzine/cli.svg?branch=master)](https://travis-ci.com/imazzine/cli)
[![Coverage Status](https://coveralls.io/repos/github/imazzine/cli/badge.svg?branch=master)](https://coveralls.io/github/imazzine/cli?branch=master)
[![NPM Downloads](https://img.shields.io/npm/dm/@imazzine/cli.svg?style=flat)](https://npmcharts.com/compare/@imazzine/cli?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=@imazzine/cli)](https://packagephobia.now.sh/result?p=@imazzine/cli)

The core module of the `zz` command-line interface. It brings `zz add` and `zz remove` commands to the terminal which allows you to plugged-in/out any other compatible command under `zz` namespace to build your custom CLI toolset.

`@imazzine/cli` built with the `JavaScript` and uses the [`commander.js`](https://github.com/tj/commander.js/blob/master/Readme.md) API under the hood, which means that pluggable commands needs to be implemented with the one of the most popular command-line interface solution for the node.js.

## Prerequisites

`@imazzine/cli` uses `ES6 Modules` internally, so it depends on `node.js v14+`. No any other requirements or constraints are provided.

## Installation

`@imazzine/cli` was designed as a globally installed utility. You can perform installation via `npm`:

```
$ npm i -g @imazzine/cli
```

or `yarn`:

```
$ yarn global add @imazzine/cli
```

## Pluggable commands interface

As already was mentioned, `@imazzine/cli` uses [`commander.js`](https://github.com/tj/commander.js/blob/master/Readme.md) under the hood.

Command, pluggable to the `@imazzine/cli` -- is a simple `JavaScript` module (in general just a simple `.js` file) which exports as a `default` (in terms of `ES6 Modules`) valid `JavaScript` function.

This function will be called with the single parameter -- `program`, which is an instance of [`commander.js program`](https://github.com/tj/commander.js/blob/master/Readme.md#declaring-program-variable) interface.

Internally this function should perform any operations with the [`program`](https://github.com/tj/commander.js/blob/master/Readme.md#declaring-program-variable) interface according to the official documentation to configure additional CLI commands.

So, the simplest example could looks like this:

```javascript
// ~/zz-plugins/tmp.js
export default function(program) {
  program
    .command('tmp')
    .description('tmp')
    .action((subject, command) => {
      console.log('cmd tmp!');
    });
}
```

## Usage

After installation you can run `zz help` command in you terminal.

```
$ zz help
zz [options] [command]

Options:
  -V, --version            output the version number
  -h, --help               display help for command

Commands:
  add <subject> <path>     add specified <subject> (either "command" or "project") to @imazzine/cli
  remove <subject> <path>  remove specified <subject> (either "command" or "project") from @imazzine/cli
  help [command]           display help for command
```

To add `tmp` command from the example above, you should run:

```
$ zz add command ~/zz-plugins/tmp.js
```

`zz add` command will resolve absolute path and locally and globally installed node modules. So, your plugins could be distributed in a different ways.

After your command was plugged-in, you are able to use it:

```
$ zz tmp
cmd tmp!
```