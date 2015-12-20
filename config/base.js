import webpack from 'webpack';
import { resolve } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  resolve: {
    root: resolve('./src')
  },
  entry: [
    './src'
  ],
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
	plugins: [
		new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      // https://gist.github.com/Couto/b29676dd1ab8714a818f
      'Promise': 'exports?global.Promise!es6-promise',
      'window.fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
	],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: resolve('./src')
    }, {
      test: /\.json$/,
      loaders: ['json']
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};
