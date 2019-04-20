'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	gulpConnect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer'),
	babel = require('gulp-babel'),
	cssbeautify = require('gulp-cssbeautify');

gulp.task('sass-build', function () {
	gulp.src('src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('dist/css'))
		.pipe(gulpConnect.reload());
});

gulp.task('html-build', function () {
	gulp.src('src/html/*.html')
		.pipe(gulp.dest('dist/html/'))
		.pipe(gulpConnect.reload());
});

// Add es6 preset
gulp.task('js-build', function () {
	gulp.src(['src/js/**/*.js'])
		.pipe(
			babel({
				presets: ['es2015'],
			})
		)
		.pipe(gulp.dest('dist/js'))
		.pipe(gulpConnect.reload());
});

/* watch and exporting asset images */
gulp.task('image-build', function () {
	gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
		.pipe(gulp.dest('dist/img'))
		.pipe(gulpConnect.reload());
});

/* watch and exporting asset fonts */
gulp.task('font-build', function () {
	gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
		.pipe(gulpConnect.reload());
});

/* watch and exporting lib css */
gulp.task('lib-css-build', function () {
	gulp.src('src/lib/css/**/*.css')
		.pipe(gulp.dest('dist/lib/css'))
		.pipe(gulpConnect.reload());
});

/* watch and exporting lib js */
gulp.task('lib-js-build', function () {
	gulp.src('src/lib/js/**/*.js')
		.pipe(gulp.dest('dist/lib/js'))
		.pipe(gulpConnect.reload());
});

gulp.task('server', function () {
	gulpConnect.server({
		root: 'dist',
		port: 8000,
		livereload: true,
		// host:'172.31.52.61'
	});
});

gulp.task('watch', function () {
	gulp.watch(['src/html/*.html'], ['html-build']);
	gulp.watch(['src/scss/**/*.scss'], ['sass-build']);
	gulp.watch(['src/img/**/*'], ['image-build']);
	gulp.watch(['src/js/**/*.js'], ['js-build']);
	gulp.watch(['src/fonts/**/*'], ['font-build']);
	gulp.watch(['src/lib/css/**/*.css'], ['lib-css-build']);
	gulp.watch(['src/lib/js/**/*.js'], ['lib-js-build']);
});

gulp.task('default', ['server', 'watch', 'html-build', 'sass-build', 'image-build', 'js-build', 'font-build', 'lib-css-build', 'lib-js-build']);
