var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';
var tmpRoot = '.tmp/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  output: outputRoot,
  doc:'./doc',
  tmp: tmpRoot
};
