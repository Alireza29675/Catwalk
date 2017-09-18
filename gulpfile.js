'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const babel = require('gulp-babel');
const electron = require('electron-connect').server.create();

const webpackConfig = require('./webpack.config');

gulp.task('serve', function () {
	babelFiles();
	// Electron Run
	electron.start();
	gulp.watch(['./lib/*.*', './lib/**/*.*'], () => {
		console.log('App Restarted!');
		electron.restart()
	});
	gulp.watch(['./public/*.*', './public/**/*.*'], () => {
		console.log('App Reloaded!');
		electron.reload()
	});
	// Webpack Front-end Watch
	gulp.watch(['./src/*.*', './src/**/*.*'], createWebpackBundle);
	// Babel-Watch Server Side
	gulp.watch(['./app/*.*', './app/**/*.*'], babelFiles);
});

const createWebpackBundle = () => webpack(webpackConfig).run(result => console.log('New Bundle Created!'));
const babelFiles = () => gulp.src('./app/**/*.js').pipe(babel({ presets: ['env'] })).pipe(gulp.dest('lib'));
