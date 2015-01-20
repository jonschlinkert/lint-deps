# lint-deps [![NPM version](https://badge.fury.io/js/lint-deps.png)](http://badge.fury.io/js/lint-deps)

> CLI tool that tells you when dependencies are missing from package.json and offers you a choice to install them. Also tells you when dependencies are listed in package.json but are not being used anywhere in your project. Node.js command line tool and API.

## Install globally with [npm](npmjs.org):

```bash
npm i -g lint-deps
```

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
[ansi-regex]: https://github.com/sindresorhus/ansi-regex
[ansi-styles]: https://github.com/sindresorhus/ansi-styles
[arr-diff]: https://github.com/jonschlinkert/arr-diff
[arr-filter]: https://github.com/jonschlinkert/arr-filter
[arr-flatten]: https://github.com/jonschlinkert/arr-flatten
[arr-union]: https://github.com/jonschlinkert/arr-union
[array-differ]: https://github.com/sindresorhus/array-differ
[array-slice]: null
[array-union]: null
[array-uniq]: https://github.com/sindresorhus/array-uniq
[array-unique]: https://github.com/jonschlinkert/array-unique
[async]: null
[braces]: https://github.com/jonschlinkert/braces
[chalk]: null
[cli-color]: https://github.com/medikoo/cli-color
[commandments]: https://github.com/jonschlinkert/commandments
[cwd]: https://github.com/jonschlinkert/cwd
[d]: https://github.com/medikoo/d
[debug]: https://github.com/visionmedia/debug
[es5-ext]: null
[es6-iterator]: null
[es6-symbol]: null
[es6-weak-map]: https://github.com/medikoo/es6-weak-map
[esprima]: http://esprima.org
[esprima-extract-comments]: https://github.com/jonschlinkert/esprima-extract-comments
[event-emitter]: https://github.com/medikoo/event-emitter
[expand-range]: https://github.com/jonschlinkert/expand-range
[extend-shallow]: null
[figures]: https://github.com/sindresorhus/figures
[filename-regex]: https://github.com/regexps/filename-regex
[fill-range]: https://github.com/jonschlinkert/fill-range
[filter-keys]: https://github.com/jonschlinkert/filter-keys
[filter-object]: https://github.com/jonschlinkert/filter-object
[filter-values]: https://github.com/jonschlinkert/filter-values
[for-in]: https://github.com/jonschlinkert/for-in
[for-own]: null
[glob]: https://github.com/isaacs/node-glob
[globby]: null
[has-color]: https://github.com/sindresorhus/has-color
[inflight]: https://github.com/isaacs/inflight
[inherits]: https://github.com/isaacs/inherits
[inquirer]: https://github.com/SBoudrias/Inquirer.js
[is-number]: https://github.com/jonschlinkert/is-number
[kind-of]: https://github.com/jonschlinkert/kind-of
[load-pkg]: https://github.com/jonschlinkert/load-pkg
[lodash]: null
[log-symbols]: https://github.com/sindresorhus/log-symbols
[look-up]: https://github.com/jonschlinkert/look-up
[lru-cache]: https://github.com/isaacs/node-lru-cache
[lru-queue]: https://github.com/medikoo/lru-queue
[make-iterator]: null
[map-files]: https://github.com/jonschlinkert/map-files
[match-requires]: https://github.com/jonschlinkert/match-requires
[memoizee]: https://github.com/medikoo/memoize
[micromatch]: null
[minimatch]: null
[minimist]: null
[ms]: https://github.com/guille/ms.js
[multimatch]: https://github.com/sindresorhus/multimatch
[mute-stream]: https://github.com/isaacs/mute-stream
[next-tick]: null
[normalize-path]: null
[once]: null
[preserve]: https://github.com/jonschlinkert/preserve
[randomatic]: https://github.com/jonschlinkert/randomatic
[readline2]: https://github.com/SBoudrias/readline2
[relative]: https://github.com/jonschlinkert/relative
[repeat-element]: https://github.com/jonschlinkert/repeat-element
[repeat-string]: https://github.com/jonschlinkert/repeat-string
[requires-regex]: https://github.com/jonschlinkert/requires-regex
[rx]: https://github.com/Reactive-Extensions/RxJS
[sigmund]: https://github.com/isaacs/sigmund
[sort-asc]: https://github.com/jonschlinkert/sort-asc
[sort-desc]: https://github.com/jonschlinkert/sort-desc
[sort-object]: https://github.com/helpers/sort-object
[spawn-commands]: https://github.com/jonschlinkert/spawn-commands
[strip-ansi]: https://github.com/sindresorhus/strip-ansi
[strip-comments]: https://github.com/jonschlinkert/strip-comments
[through]: http://github.com/dominictarr/through
[timers-ext]: null
[unixify]: https://github.com/jonschlinkert/unixify
[verbalize]: https://github.com/jonschlinkert/verbalize
[word-wrap]: https://github.com/jonschlinkert/word-wrap
[wrappy]: null
[write-json]: https://github.com/jonschlinkert/write-json

<!-- deps: helper-reflinks -->
```

## CLI

In the command line, run:

```bash
deps
```

### Commands

 - `-r` | `--report`: save a report to disk. By default `report.json` is saved. To change the path do: `-r foo.json`
 - `-e` | `--exclude`: comma-separated list of files or directories to exclude. Example: `deps -e test,lib`


## Examples

If everything is good, you'll see something like this:

![image](https://cloud.githubusercontent.com/assets/383994/5220675/bbef28da-7636-11e4-9014-86ca0e43ea46.png)

### Install missing packages

If packages are missing, you'll see a prompt like this (also shows which files require the package):

![image](https://cloud.githubusercontent.com/assets/383994/5220685/f2a0292e-7636-11e4-844a-2166f68862d4.png)

**If you choose <kbd>yes</kbd>:**

![image](https://cloud.githubusercontent.com/assets/383994/5220711/535b5f68-7637-11e4-9457-9280f7457d95.png)

**choose dependencies**

Workds the same way for `devDependencies`:

![image](https://cloud.githubusercontent.com/assets/383994/2775421/43a349be-cac5-11e3-9cc6-20e9a3ae7f26.png)

**choose "nothing, just install"**

![image](https://cloud.githubusercontent.com/assets/383994/5220757/d1135eba-7637-11e4-8ea4-2542af1b564e.png)

Now hit <kbd>enter</kbd> and everything that was checked will be installed.

**If you choose <kbd>no</kbd>:**

![image](https://cloud.githubusercontent.com/assets/383994/5220760/ecbe1fec-7637-11e4-9eb2-b8881c66e7af.png)

Done.

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 20, 2015._

[ansi-regex]: https://github.com/sindresorhus/ansi-regex
[ansi-styles]: https://github.com/sindresorhus/ansi-styles
[arr-diff]: https://github.com/jonschlinkert/arr-diff
[arr-filter]: https://github.com/jonschlinkert/arr-filter
[arr-flatten]: https://github.com/jonschlinkert/arr-flatten
[arr-union]: https://github.com/jonschlinkert/arr-union
[array-differ]: https://github.com/sindresorhus/array-differ
[array-slice]: null
[array-union]: null
[array-uniq]: https://github.com/sindresorhus/array-uniq
[array-unique]: https://github.com/jonschlinkert/array-unique
[async]: null
[braces]: https://github.com/jonschlinkert/braces
[chalk]: null
[cli-color]: https://github.com/medikoo/cli-color
[commandments]: https://github.com/jonschlinkert/commandments
[cwd]: https://github.com/jonschlinkert/cwd
[d]: https://github.com/medikoo/d
[debug]: https://github.com/visionmedia/debug
[es5-ext]: null
[es6-iterator]: null
[es6-symbol]: null
[es6-weak-map]: https://github.com/medikoo/es6-weak-map
[esprima]: http://esprima.org
[esprima-extract-comments]: https://github.com/jonschlinkert/esprima-extract-comments
[event-emitter]: https://github.com/medikoo/event-emitter
[expand-range]: https://github.com/jonschlinkert/expand-range
[extend-shallow]: null
[figures]: https://github.com/sindresorhus/figures
[filename-regex]: https://github.com/regexps/filename-regex
[fill-range]: https://github.com/jonschlinkert/fill-range
[filter-keys]: https://github.com/jonschlinkert/filter-keys
[filter-object]: https://github.com/jonschlinkert/filter-object
[filter-values]: https://github.com/jonschlinkert/filter-values
[for-in]: https://github.com/jonschlinkert/for-in
[for-own]: null
[glob]: https://github.com/isaacs/node-glob
[globby]: null
[has-color]: https://github.com/sindresorhus/has-color
[inflight]: https://github.com/isaacs/inflight
[inherits]: https://github.com/isaacs/inherits
[inquirer]: https://github.com/SBoudrias/Inquirer.js
[is-number]: https://github.com/jonschlinkert/is-number
[kind-of]: https://github.com/jonschlinkert/kind-of
[load-pkg]: https://github.com/jonschlinkert/load-pkg
[lodash]: null
[log-symbols]: https://github.com/sindresorhus/log-symbols
[look-up]: https://github.com/jonschlinkert/look-up
[lru-cache]: https://github.com/isaacs/node-lru-cache
[lru-queue]: https://github.com/medikoo/lru-queue
[make-iterator]: null
[map-files]: https://github.com/jonschlinkert/map-files
[match-requires]: https://github.com/jonschlinkert/match-requires
[memoizee]: https://github.com/medikoo/memoize
[micromatch]: null
[minimatch]: null
[minimist]: null
[ms]: https://github.com/guille/ms.js
[multimatch]: https://github.com/sindresorhus/multimatch
[mute-stream]: https://github.com/isaacs/mute-stream
[next-tick]: null
[normalize-path]: null
[once]: null
[preserve]: https://github.com/jonschlinkert/preserve
[randomatic]: https://github.com/jonschlinkert/randomatic
[readline2]: https://github.com/SBoudrias/readline2
[relative]: https://github.com/jonschlinkert/relative
[repeat-element]: https://github.com/jonschlinkert/repeat-element
[repeat-string]: https://github.com/jonschlinkert/repeat-string
[requires-regex]: https://github.com/jonschlinkert/requires-regex
[rx]: https://github.com/Reactive-Extensions/RxJS
[sigmund]: https://github.com/isaacs/sigmund
[sort-asc]: https://github.com/jonschlinkert/sort-asc
[sort-desc]: https://github.com/jonschlinkert/sort-desc
[sort-object]: https://github.com/helpers/sort-object
[spawn-commands]: https://github.com/jonschlinkert/spawn-commands
[strip-ansi]: https://github.com/sindresorhus/strip-ansi
[strip-comments]: https://github.com/jonschlinkert/strip-comments
[through]: http://github.com/dominictarr/through
[timers-ext]: null
[unixify]: https://github.com/jonschlinkert/unixify
[verbalize]: https://github.com/jonschlinkert/verbalize
[word-wrap]: https://github.com/jonschlinkert/word-wrap
[wrappy]: null
[write-json]: https://github.com/jonschlinkert/write-json


<!-- deps: helper-reflinks -->
