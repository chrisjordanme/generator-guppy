# generator-guppy [![Build Status](https://secure.travis-ci.org/chrisjordanme/generator-guppy.png?branch=master)](https://travis-ci.org/chrisjordanme/generator-guppy)

## gulp + Yeoman = guppy

A webapp generator for [Yeoman](http://yeoman.io) that leverages the [gulp streaming build system](http://gulpjs.com/).

This is my first Yeoman generator so it was built primarily so I could learn about writing generators, and I'm also intrigued to learn more about gulp.  

This simple generator allows a user to quickly standup an app and begin using the gulpfile immediately. The app runs on a *very* simple connect server. 

## Getting Started

1. Install the generator:

  ```
  $ npm install -g generator-guppy
  ```

2. Navigate to the folder where you'd like to scaffold your project and run the generator:

  ```
  $ yo guppy
  ```

3. Run gulp's default task which launches the server. Other tasks included in the gulpfile will need to be run separately.

  ```
  $ gulp
  ```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
