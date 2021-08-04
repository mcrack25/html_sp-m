var gulp = require('gulp'),
    njkRender = require('gulp-nunjucks-render'),
    prettify = require('gulp-html-prettify');

// создаем gulp задачу на компиляцию всех nunjucks шаблонов в текущей директории
gulp.task('nunjucks', function () {
            return gulp.src('./*.njk')
                .pipe(njkRender())
                .pipe(prettify({
                        indent_size: 4 // размер отступа - 4 пробела
                    }))
                    .pipe(gulp.dest('./'));
                });
        // используем gulp.watch для автоматической перекомпиляции шаблонов после изменения
        gulp.task('watch', function () {
            gulp.watch('./**/*.njk', gulp.series('nunjucks'));
        });
        // при запуске выполняем компиляцию и начинаем следить за изменениями
        gulp.task('default', gulp.series('nunjucks', 'watch'));
