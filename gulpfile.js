var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

gulp.task('copy', () => {
  return gulp.src('./node_modules/socket.io-client/socket.io.js')
    .pipe(gulp.dest('./public/vendors'));
});

gulp.task('inject', () => {
  //var sources = ;
  return gulp.src('./public/index.html')
    .pipe(wiredep())
    .pipe(inject(gulp.src(['./public/app/**/*.js'], {read: false}), {relative: true}))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['copy', 'inject'], function() {
  console.log('done!');
});
