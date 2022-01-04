// import packages
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var log = require('fancy-log');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const babel = require('gulp-babel');;
const rename = require('gulp-rename');
const connect = require('gulp-connect');

// ========== Design Tasks ========== //
// task: processing html
gulp.task('html', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./'))
        .on('end', function () { log('>> [F5] Reload Web') })
        .pipe(connect.reload());
});

// task: processing scss -> css
gulp.task('css', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .on('end', function () { log('>> [F5] Reload Web') })
        .pipe(connect.reload());
});

// task: processing js
gulp.task('js', function() {
    return gulp.src('./js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(babel({
          presets: [['@babel/env', {modules:false}]]
        }))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./js'))
        .on('end', function () { log('>> [F5] Reload Web') })
        .pipe(connect.reload());
});

// task: create a webserver
gulp.task('webserver', function() {
    connect.server({
        root: './',
        livereload: true, // auto-reload
        // port: 2333 
    });
});

// ========== Set Gulp-Task ========== //
gulp.task('watch_files', function() {
    gulp.watch('./index.html', gulp.series('html'));
    gulp.watch('./scss/styles.scss', gulp.series('css'));
    gulp.watch('./js/scripts.js', gulp.series('js'));
});

gulp.task('watch', gulp.parallel('webserver', 'watch_files'));