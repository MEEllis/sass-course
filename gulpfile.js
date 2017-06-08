var gulp = require('gulp');
var del = require('del');
var compass = require('gulp-compass');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');


gulp.task('clean', function(){
    return del.sync(['dist/**/*' ]);
});

gulp.task('compass', function() {
    gulp.src('./sass/*.scss')
        .pipe(plumber())
        .pipe(compass({
            config_file: './config.rb',
            css:"dist/lib/css"
        }))
});



gulp.task('task-name', function() {
    runSequence(['clean'],['compass']);
});

// Watchers
gulp.task('watch', function() {
    gulp.watch([
        'sass/**/*.scss',
    ],['task-name']);
});


//gulp images
gulp.task('default', ['task-name','watch']);