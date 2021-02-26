# Contributing

## Reporting Security Issues

`@imazzine/cli` doesn't supposed to be web facing by it's design. However, any security issues are the top priority for us. Please contact us privately via `imazzine.development.kit@gmail.com` if you have any security concerns.

## Reporting General Issues

[Github issues](https://github.com/imazzine/cli/issues) looks like the right place for any general purpose issues. But, please, make sure that the issue you are reporting is strictly related to the `@imazzine/cli`.

## Feature Requests

If you want to propose new features to the `@imazzine/cli`, you need to clearly state new feature. Feature request should be added to the [Github issues](https://github.com/imazzine/cli/issues) and provide various examples, API suggestions and references to support idea behind it.

## Bugs Fixes and New Features

All contributions are accepted as a [PRs](https://github.com/imazzine/cli/pulls), ideally linked with the related [Github issues](https://github.com/imazzine/cli/issues).

## Improving Documentation

If you want to improve or expand our documentation you can create [PRs](https://github.com/imazzine/cli/pulls) with the appropriate changes.

# Development Environment

## Prerequisites

In order to run tests properly you will need to install `docker` on your local development machine. General `node.js v14+` constraint is actual for development environment as well.

## Preparing environment

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

## Running tests

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