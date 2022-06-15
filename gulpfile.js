const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('gulp-cssnano')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')

gulp.task('reset', () => {
    return del(['dist/**', '!dist'])
})

gulp.task('transpile', () => {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('minify', () => {
    return gulp.src('./dist/css/index.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('fonts', () => {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'))
})

gulp.task('images', () => {
    return gulp.src('./src/assets/*.+(png|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('./dist/assets'))
})

gulp.task('default', () =>
    gulp.watch('src/**/*.scss', 
        gulp.series(
            'reset', 
            'transpile', 
            'minify',
            'fonts',
            'images'
        )
    )
)