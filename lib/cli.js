'use strict';

var commands = require('./commands');
var utils = require('./utils');

/**
 * API for the lint-deps CLI.
 *
 * The `app.cli` method allows custom mappings to be defined,
 * in addition to the built-in mappings provided by the `base-cli`
 * plugin.
 */

module.exports = function(options) {
  return function(app) {
    if (!app.cli) {
      app.use(utils.cli());
    }

    /**
     * Help and information-related
     */

    app.cli
      .map('ask', commands.init(app))
      .map('init', commands.init(app))
      .map('help', commands.help(app))
      .map('open', commands.open(app))
      .map('show', commands.show(app))
      .map('lint', function(patterns) {
        console.log('lint >', patterns);
        app.lint(patterns);
      })
      .map('diff', function(val) {
        app.option('diff', val);
      });

    /**
     * Options, settings and context related
     */

    app.cli
      .map('cwd', commands.cwd(app))
      .map('save', commands.save(app))
      .map('data', function(val) {
        app.data(val);
      })
      .map('option', function(val) {
        app.option(val);
      })
      .map('config', function(val) {
        app.config.process({
          update: val
        });
      });

    /**
     * Task-related
     */

    app.cli
      .map('choose', function(key) {
        app.enable('tasks.choose');
      })
      .map('tasks', function(key) {
        app.enable('tasks.display');
      });

  };
};
