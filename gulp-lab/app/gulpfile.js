var gulp = require('gulp');
var uglify = require('gulp-uglify');
// TODO 6.3a - include browserSync

gulp.task('minify', function() {
  gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});

// TODO 6.1 - add default tasks

// TODO 6.2 - watch files

// TODO 6.3b - run a local server
