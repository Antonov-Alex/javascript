'use strict';
gulp.task('task-name', function () {
    return gulp.src('source-files') // Взять файлы с помощью gulp.src
      .pipe(aGulpPlugin()) // Пропустить их через gulp-плагин
      .pipe(gulp.dest('destination folder')); // Положить результат в указаную папку
  });