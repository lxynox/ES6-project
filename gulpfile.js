var gulp = require('gulp');
var webserver = require('gulp-webserver');

// top to bottom task declaration
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(webserver({
      host: '0.0.0.0',
      path: '/',
      port: 4003,
      fallback: 'index.html',
      livereload: false 
    }));
});
