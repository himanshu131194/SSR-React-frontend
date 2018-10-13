const fs = require('fs');
const isDev = require('isdev');
const webpack = require('webpack');
const SYSPATH = require('@config/syspath');
const webpackCommon = require('./common');

const commonConfig = webpackCommon('server', isDev);

// custom externals for node
const externalRegExp = /\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/;
const nodeExternals = fs
  .readdirSync(`${SYSPATH['ROOT']}/node_modules`)
  .filter(x => !externalRegExp.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});

module.exports = {
  target: 'node',
  name: 'server',
  mode: commonConfig.mode,
  context: commonConfig.context,
  devtool: commonConfig.devtool,
  resolve: commonConfig.resolve,
  externals: nodeExternals,
  entry: { m: ['regenerator-runtime/runtime', './app/renderer.js'] },
  output: {
    path: `${SYSPATH['SRC']}/app`,
    libraryTarget: 'commonjs2',
    filename: 'rendererBuilt.js'
  },
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      ...commonConfig.babelRule(),
      ...commonConfig.fileRule(),
      ...commonConfig.cssModulesRule(),
      ...commonConfig.globalStylesRule()
    ]
  },
  plugins: [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })]
};
