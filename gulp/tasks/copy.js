var gulp = require('gulp');
var config = require('../config').copy;

gulp.task('copy', ['clean'], function () {
    gulp.src(config.source, config.base)
        .pipe(gulp.dest(config.destination));
});