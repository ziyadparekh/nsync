/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const path = require('path');
const glob = require('glob');
const host = (process.env.HOST || 'localhost');
const deepcopy = require('deepcopy');
const port = parseInt(process.env.PORT) + 1 || 8901;

let entries = {};

let g = new glob.Glob('./src/js/entries/**/*.js', {
  sync: true
});

g.found.forEach(function (file) {
  let outputFile = file.replace('./src/js/entries/', '').replace('.js', '');
  let HMR = 'webpack-dev-server/client?http://' + host + ':' + port + '/';
  entries[outputFile] = [ HMR, "webpack/hot/dev-server", path.resolve(__dirname, file) ];
  //entries[outputFile] = path.resolve(__dirname, file)
});

// Dont mutate baseConfig
const devConfig = deepcopy(baseConfig);

devConfig.devtool = 'inline-source-map';
devConfig.debug = true;
devConfig.entry = entries;

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
);

devConfig.output.publicPath = 'http://' + host + ':' + port + '/';

module.exports = devConfig;



