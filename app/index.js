'use strict';
var util   = require('util');
var path   = require('path');
var chalk  = require('chalk');
var yeoman = require('yeoman-generator');




var theGulpster= chalk.cyan('\n|\\   \\\\__     o') +
          chalk.cyan('\n| \\_/    o \\    o  ') +
          chalk.cyan('\n> _   (( <_ oo o o ' + chalk.yellow('... gulp')) +
          chalk.cyan('\n| / \\__+___/') +
          chalk.cyan('\n|/     |/') +
          chalk.cyan('\n\'');

var GuppyGenerator = module.exports = function GuppyGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(GuppyGenerator, yeoman.generators.Base);

GuppyGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // have the gulpster greet the user.
  console.log(theGulpster);

  var prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'Guppy rolls your Yeoman app using gulp.js. What is the name of your app?'
      },
      {
          type: 'checkbox',
          name: 'features',
          message: 'What libraries & frameworks would you like?',
          choices: [{
              name: 'Sass with Compass',
              value: 'includeCompass',
              checked: false
          }, {
              name: 'Bootstrap',
              value: 'includeBootstrap',
              checked: true
          }, {
              name: 'Modernizr',
              value: 'includeModernizr',
              checked: false
          }, {
              name: 'jQuery',
              value: 'includeJQ',
              checked: true
          }]
      }
  ];

  this.prompt(prompts, function (props) {
    this.appname    = props.appname;
      var features = props.features;

      function hasFeature(feat) { return features.indexOf(feat) !== -1; }

      // manually deal with the response, get back and store the results.
      // we change a bit this way of doing to automatically do this in the self.prompt() method.
      this.includeCompass = hasFeature('includeCompass');
      this.includeBootstrap = hasFeature('includeBootstrap');
      this.includeModernizr = hasFeature('includeModernizr');
      this.includeJQ = hasFeature('includeJQ');

    cb();
  }.bind(this));
};

GuppyGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('dist');

  this.template('index.html', 'app/index.html');
  this.template('main.js', 'app/scripts/main.js');
  this.template('styles.css', 'app/styles/styles.css');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');

    console.log(this);
};

GuppyGenerator

GuppyGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

GuppyGenerator.prototype.gulpfile = function gulpfile() {
    this.template('gulpfile.js');
};
