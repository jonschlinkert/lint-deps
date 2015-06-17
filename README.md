# lint-deps [![NPM version](https://badge.fury.io/js/lint-deps.png)](http://badge.fury.io/js/lint-deps)

> CLI tool that tells you when dependencies are missing from package.json and offers you a choice to install them. Also tells you when dependencies are listed in package.json but are not being used anywhere in your project. Node.js command line tool and API.

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm i -g lint-deps
```

## CLI

In the command line, run:

```bash
deps
```

### Commands

* `-r` | `--report`: save a report to disk. By default `report.json` is saved. To change the path do: `-r foo.json`
* `-e` | `--exclude`: comma-separated list of files or directories to exclude. Example: `deps -e test,lib`

## Examples

If everything is good, you'll see something like this:

[![image](https://cloud.githubusercontent.com/assets/383994/5220675/bbef28da-7636-11e4-9014-86ca0e43ea46.png)](https://www.npmjs.com/)

### Install missing packages

If packages are missing, you'll see a prompt like this (also shows which files require the package):

![image](https://cloud.githubusercontent.com/assets/383994/5220685/f2a0292e-7636-11e4-844a-2166f68862d4.png)

**If you choose <kbd>yes</kbd>:**

![image](https://cloud.githubusercontent.com/assets/383994/5220711/535b5f68-7637-11e4-9457-9280f7457d95.png)

**choose dependencies**

Works the same way for `devDependencies`:

![image](https://cloud.githubusercontent.com/assets/383994/2775421/43a349be-cac5-11e3-9cc6-20e9a3ae7f26.png)

**choose "nothing, just install"**

![image](https://cloud.githubusercontent.com/assets/383994/5220757/d1135eba-7637-11e4-8ea4-2542af1b564e.png)

Now hit <kbd>enter</kbd> and everything that was checked will be installed.

**If you choose <kbd>no</kbd>:**

![image](https://cloud.githubusercontent.com/assets/383994/5220760/ecbe1fec-7637-11e4-9eb2-b8881c66e7af.png)

Done.

## API

```js
var deps = require('lint-deps');

// pass the directory to scan
console.log(deps('lib'));
```

## Manually define dependencies

When dependencies are defined in a format that isn't recognized by lint-deps, like with grunt tasks (e.g. `grunt.loadNpmTasks()`), you can manually specify these dependencies in code comments, similar to jshint commands.

**Example**:

Make sure `deps` is the first thing, and pass a space separated list of module names:

```js
/** deps: foo bar baz */
```

If you use [verb](https://github.com/assemble/verb), you can use HTML code comments in your `.verb.md` file:

```html
{%= reflinks() %}
<!-- deps: helper-reflinks -->
```

## Related projects

* [lookup-deps](https://github.com/jonschlinkert/lookup-deps): Simple API for getting metadata from locally installed npm packages (in `node_modules`).
* [list-deps](https://github.com/jonschlinkert/list-deps): List the dependencies in the package.json of the current project.
* [resolve-dep](https://github.com/jonschlinkert/resolve-dep): Return an array of resolved filepaths for require-able local or named npm modules. Wildcard (glob)… [more](https://github.com/jonschlinkert/resolve-dep)
* [spawn-commands](https://github.com/jonschlinkert/spawn-commands): Launches a new process with the given command, with command line arguments in `args`. Should… [more](https://github.com/jonschlinkert/spawn-commands)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/lint-deps/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2014-2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 13, 2015._
