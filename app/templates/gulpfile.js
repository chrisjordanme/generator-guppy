'use strict';

// Gulp
var gulp     = require('gulp');
var gutil    = require('gulp-util');
var concat   = require('gulp-concat');
var uglify   = require('gulp-uglify');
var minCSS   = require('gulp-minify-css');
var jsHint   = require('gulp-jshint');

// Server
var http     = require('http');
var connect  = require('connect');
var open     = require('open');

// Server Settings
var base     = '.';
var root     = './app';
var scripts  = root + '/scripts';
var styles   = "";
var port     = 3000;
var host     = 'localhost';
var protocol = 'http';
var dist     = '/dist/';

// todo-cj : make livereload a thing

gulp.task('default', function () {
    gulp.run('server');
});

gulp.task('server', function () {
    var app = connect().use(connect.static(root));

    http.createServer(app).listen(port);
    open(protocol + '://' + host + ':' + port);
});

// todo-cj : roll a 'build' task..
gulp.task('scripts', function () {
    gulp.src('./app/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('uglify', function () {
    gulp.src('./app/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/ugly'))
});

gulp.task('minify-css', function () {
    var opts = {};
    gulp.src('./app/styles/*.css')
        .pipe(minCSS(opts))
        .pipe(gulp.dest('./dist/styles'))
});

// todo-cj : broken..
gulp.task('jshint', function () {
    gulp.src('./app/scripts/*.js')
        .pipe(jsHint())
});