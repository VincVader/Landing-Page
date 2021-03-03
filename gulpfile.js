const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
  return src("./styles/**/*.scss")
          .pipe(sass().on('error', sass.logError))
          .pipe(dest('./styles'))
          .pipe(browserSync.stream());
};

function watcher() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch("./styles/**/*.scss", style);
  watch("./*.html").on('change', browserSync.reload);
  watch("./scripts/**/*.js").on('change', browserSync.reload);
};

exports.style = style;
exports.watch = watcher;
