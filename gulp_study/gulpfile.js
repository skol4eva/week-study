/**
 * Created by USER on 2016-08-06.
 */

// Modules 호출
var gulp = require('gulp'); // Gulp 모듈 호출

var concat = require('gulp-concat');

gulp.task('concat:js', function(){
    return gulp.src(['project/src/js/**/*.js'])
        .pipe(concat('conbined.js'))
        .pipe(gulp.dest('project/dist/js'));
});

gulp.task('default', ['concat:js']);