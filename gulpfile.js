var gulp = require('gulp')
var webpack = require('gulp-webpack')
var uglify = require('gulp-uglifyjs')
var header = require('gulp-header')
var meta = require('./package.json')

var banner = ['/**',
              '* Mux.js v${version}',
              '* (c) 2014 ${author}',
              '* Released under the ${license} License.',
              '*/',
              ''].join('\n')
var bannerVars = { 
        version : meta.version,
        author: 'guankaishe',
        license: 'MIT'
    }

gulp.task('default', function() {
    return gulp.src('index.js')
        .pipe(webpack({
            output: {
                library: 'Mux',
                libraryTarget: 'umd',
                filename: 'mux.js'
            }
        }))
        .pipe(header(banner, bannerVars))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify('mux.min.js', {
            mangle: true,
            compress: true
        }))
        .pipe(header(banner, bannerVars))
        .pipe(gulp.dest('dist/'))
});
