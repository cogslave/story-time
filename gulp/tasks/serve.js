var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('../config').nodemon;

gulp.task('serve', ['clean', 'build', 'copy'], function () {
    nodemon(config)
        .on('restart', function () {
            console.log('restarted!')
        });
});