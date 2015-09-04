var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
//var WebpackDevServer = require('webpack-dev-server');
var glob = require('glob');
var paths = require('../paths');

console.log(__dirname);

var webpackConfig = {
  context: __dirname,
  entry: path.join('../../', paths.tmp, 'index.js'),
  output: {
    path: paths.output,
    filename: 'vaow.js'
  }
};

gulp.task('webpack', function(callback) {
  // run webpack
  webpack(webpackConfig, function(err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});
