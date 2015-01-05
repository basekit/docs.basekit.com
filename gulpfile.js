// Create gulp variables
var gulp		= require('gulp');
var bower		= require('main-bower-files');
var rename		= require('gulp-rename');
var filter		= require('gulp-filter');
var uglify		= require('gulp-uglify');
var svgstore	= require('gulp-svgstore');
var svgmin		= require('gulp-svgmin');
var cheerio		= require('gulp-cheerio');
var raster		= require('gulp-raster');
var mainfiles	= bower();

// Asset filter variables
var cssfilter 	= filter('*.css')
var scssfilter 	= filter('*.scss')
var jsfilter 	= filter('*.js')

// CSS components task
gulp.task('cssconvert', function() {

	return gulp.src(mainfiles)

		.pipe(cssfilter)
		.pipe(rename({
			prefix: "_",
			extname: ".scss"
		}))
		.pipe(gulp.dest('_sass'));

});

// SASS components task
gulp.task('sassinsert', function() {

	return gulp.src(mainfiles)

		.pipe(scssfilter)
		.pipe(rename({
			prefix: "_"
		}))
		.pipe(gulp.dest('_sass'));

});

// Styles task
gulp.task('styles', ['cssconvert', 'sassinsert'])


// JavaScript components task
gulp.task('jscompile', function() {

	mainfiles.push('_scripts/*.js')

	return gulp.src(mainfiles)

		.pipe(jsfilter)
		.pipe(uglify())
		.pipe(gulp.dest('js'));

});

// SVG compiling task
gulp.task('svgcompile', function () {
    return gulp
        .src('_icons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({ fileName: 'icons.svg', prefix: 'icon-', inlineSvg: true }))
        .pipe(cheerio(function ($) {
            $('svg').attr('style', 'display:none');
            $('path').attr('fill', null);
            $('symbol').attr('fill', '#777');
        }))
        .pipe(gulp.dest('_includes'));
});

// PNG rastering task
gulp.task('pngconvert', function () {
	return gulp
	.src('_icons/*.svg')
	.pipe(raster())
	.pipe(rename({extname: '.png'}))
	.pipe(gulp.dest('assets/icons'))
});

// Icons task
gulp.task('icons', ['svgcompile', 'pngconvert'])


// All assets task
gulp.task('assets', ['styles', 'icons', 'jscompile'])
