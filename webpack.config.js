var glob = require("glob");

module.exports = {
  context: __dirname,
  //entry: glob.sync('./tmp/**/*.js'),
  entry: './.tmp/index.js',
  output: {
    path: './dist',
    filename: 'vaow.js'
  }
};
