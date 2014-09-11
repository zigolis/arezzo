var gulp       = require('gulp');
var jade       = require('gulp-jade');
var sass       = require('gulp-sass');
var minifycss  = require('gulp-minify-css');
var coffee     = require('gulp-coffee');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var imagemin   = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var serve      = require('gulp-serve');
var watch      = require('gulp-watch');
var livereload = require('gulp-livereload');

var paths = {
    markup:  ['src/jade/*.jade', '!build/html/*.html'],
    styles:  ['src/scss/*.scss', 'src/scss/*.sass', '!build/css/*.scss'],
    scripts: ['src/coffeescript/*.coffee', '!build/js/*.coffee'],
    images:   'src/img/**/*'
};

gulp.task('markup', function() {
    gulp.src(paths.markup)
            .pipe(jade({
                locals: paths.markup,
                pretty: true
            }))
            .pipe(gulp.dest('build/html/'))
            .pipe(livereload());
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
            .pipe(sass())
            .pipe(concat('arezzo.min.css'))
            .pipe(minifycss())
            .pipe(gulp.dest('build/css/'))
            .pipe(livereload());
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
            .pipe(sourcemaps.init())
            .pipe(coffee())
            .pipe(uglify())
            .pipe(concat('arezzo.min.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('build/js/'))
            .pipe(livereload());
});

gulp.task('images', function() {
    return gulp.src(paths.images)
            .pipe(imagemin({ optimizationLevel: 5 }))
            .pipe(gulp.dest('build/img/'))
            .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();

    gulp.watch(paths.markup, ['markup']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts,['scripts']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('serve', serve('build'));
gulp.task('default', ['watch']);
gulp.task('build', ['markup', 'styles', 'scripts', 'images']);
