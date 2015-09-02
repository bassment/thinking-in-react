var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'build.js'
  },
  module: {
    loaders: [
    {
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: path.resolve(ROOT_PATH, 'app')
    }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React Tutorial'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  });
}
