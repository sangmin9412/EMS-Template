var gulp = require('gulp');
var concat = require('gulp-concat');
var inlineCss = require('gulp-inline-css');

var build = "build/";

var dev = "dev/";
var paths = {
    js: dev + "js/*.js",
    css: dev + "css/*.css",
    html: dev + "html/*.html"
}

gulp.task('inlineCss', function() {
    return gulp.src(dev + 'html/index.html')
        .pipe(inlineCss())
        .pipe(gulp.dest(build + 'html'));
});

gulp.task('watch', function() {
    gulp.watch(paths.css, gulp.series(['inlineCss']));
    gulp.watch(paths.html, gulp.series(['inlineCss']));
});

gulp.task('default', gulp.series(['inlineCss', 'watch']));