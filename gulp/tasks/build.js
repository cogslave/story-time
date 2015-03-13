var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var browserify = require('browserify');
var config = require('../config').bundle;

gulp.task('build', ['clean'], function () {
    browserify(config.source)
        .transform(reactify)
        .bundle()
        .pipe(source(config.output))
        .pipe(gulp.dest(config.destination));
});