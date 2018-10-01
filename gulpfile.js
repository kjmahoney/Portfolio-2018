const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('default', ['watch', 'serve']);

gulp.task('sass', () => {
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', () => {
  gulp.watch('public/scss/**/*.scss', ['sass']);
});

gulp.task('serve', ()=> {
  browserSync.init({
    port: 8000,
    proxy: 'localhost:4001'
  })
})
