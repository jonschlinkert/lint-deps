'use strict';

const fs = require('fs');
const path = require('path');
const get = require('get-value');
const find = require('find-pkg');
const utils = require('./utils');

/**
 * Intialize LintDeps defaults. Visit the readme to learn how to
 * override defaults.
 */

module.exports = (options = {}) => {
  return app => {
    app.option(options);

    /**
     * package.json
     */

    const pkgPath = find.sync(app.cwd);
    if (!pkgPath) {
      console.log('no package.json');
      process.exit(1);
    }

    const str = fs.readFileSync(pkgPath, 'utf8');
    const pkg = JSON.parse(str);
    const files = pkg.files || [];
    const config = pkg.lintDeps || {};

    /**
     * Update cwd (when cwd is changed, an event is fired for logging)
     */

    const dir = path.dirname(pkgPath);
    if (dir !== app.cwd) {
      app.cwd = dir;
    }

    /**
     * Prime options and patterns for:
     *   - matching modules
     *   - globbing files for each dependency type
     */

    const common = {
      alias: {},
      lock: {},
      modules: { whitelist: [], exclude: [] },
      files: {
        options: {
          cwd: app.cwd,
          nocase: true,
          ignore: [
            '**/.git/**',
            '**/.github/**',
            '**/_gh_pages/**',
            '**/dist/**',
            '**/actual/**',
            '**/node_modules/**',
            '**/fixtures/**',
            '**/temp/**',
            '**/tmp/**',
            '**/vendor/**'
          ]
        },
        patterns: []
      }
    };

    /**
     * Defaults for dependencies
     */

    app.option('dependencies', utils.merge({}, common, {
      files: {
        patterns: utils.union([], files.slice(), get(config, 'dependencies.files.patterns'), [
          'bin/**/*',
          'cli.js',
          'index.js',
          '{app,lib,src}/**/*.js',
          'utils.js',

          // TODO: externalize
          'updatefile.js',
          'generator.js'
        ])
      }
    }));

    /**
     * Defaults for devDependencies
     */

    app.option('devDependencies', utils.merge({}, common, {
      files: {
        patterns: utils.union([], get(config, 'devDendencies.files.patterns'), [
          'bench{,mark}{s,}.js',
          'benchmark/*.js',
          'bench/*.js',
          '{benchmark/,}code/**/*.js',
          'build/**/*.js',
          'examples/**/*.js',
          'example{,s}.js',
          'test.js',
          'test/*.js',
          'test/support/*.js',

          // TODO: externalize
          'lintdeps.js',
          'assemblefile.js',
          'Gruntfile.js',
          'rollup.config.js',
          'gulpfile.js',
          'verbfile.js',
          '!index.js'
        ])
      }
    }));

    /**
     * Defaults for optionalDependencies and peerDependencies
     */

    app.option('optionalDependencies', utils.clone(common));
    app.option('peerDependencies', utils.clone(common));
  };
};
