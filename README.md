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

Internally your plugin could perform any operations with the [`program`](https://github.com/tj/commander.js/blob/master/Readme.md#declaring-program-variable) interface according to the official documentation to configure additional CLI commands.

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

To remove previously added command you need to run:

```
$ zz remove command ~/zz-plugins/tmp.js
```

## Contributing

`@imazzine/cli` is mostly driven by the maintainers and definitely needed community contributions. Any contribution helps us keeping this project running.

### Reporting Security Issues

`@imazzine/cli` doesn't supposed to be web facing by it's design. However, any security issues are the top priority for us. Please contact us privately via `imazzine.development.kit@gmail.com` if you have any security concerns.

### Reporting General Issues

[Github issues](https://github.com/imazzine/cli/issues) looks like the right place for any general purpose issues. But, please, make sure that the issue you are reporting is strictly related to the `@imazzine/cli`.

### Feature Requests

If you want to propose new features to the `@imazzine/cli`, you need to clearly state new feature. Feature request should be added to the [Github issues](https://github.com/imazzine/cli/issues) and provide various examples, API suggestions and references to support idea behind it.

### Bugs Fixes and New Features

All contributions are accepted as a [PRs](https://github.com/imazzine/cli/pulls), ideally linked with the related [Github issues](https://github.com/imazzine/cli/issues).

### Improving Documentation

If you want to improve or expand our documentation you can create [PRs](https://github.com/imazzine/cli/pulls) with the appropriate changes.

## Development Environment

### Prerequisites

In order to run tests properly you will need to install `docker` on your local development machine. General `node.js v14+` constraint is actual for development environment as well.

### Preparing environment

Start with cloning `@imazzine/cli` repo (assuming you will use `~/cli` directory for it) and installing `node.js` dependencies:

```
$ git clone git@github.com:imazzine/cli.git ~/cli
$ cd ~/cli
$ npm i
```

Install the `@imazzine/cli` and the `@imazzine/tmp` globally:

```
$ npm i -g @imazzine/cli@0.0.0
$ npm i -g @imazzine/tmp@0.0.0
```

Run following commands to link your globally installed package with the local git repository:

```
$ rm -rf $(npm root --global)/@imazzine/cli
$ rm -rf $(npm bin --global)/zz
$ ln -s ~/cli $(npm root --global)/@imazzine/cli
$ ln -s ~/cli/cli.js $(npm bin --global)/zz
```

After these steps `zz` command will use your cloned repository `cli.js` script as an entry point. This will allows you to test your changes in the real time, run debugging tools, etc.

### Running tests

If your environment was configured correctly, you can run tests locally without coverage report:

```
$ npm run test
```

or with coverage report:

```
$ npm run test:lcov
```

If for some reason you don't want to configure your local development environment, you still can run tests with the `docker`:

```
$ cd ~/cli
$ docker build -t zz:cli-test .
$ docker run -v "$(pwd)"/coverage:/cli/coverage -t zz:cli-test
```

In this case tests will be executed with the coverage report. And for both cases with the coverage, report will be available under the `~/cli/coverage` directory.