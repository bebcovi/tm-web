import { resolve } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  resolve: {
    root: resolve('../src')
  },
  entry: [
    './src'
  ],
  output: {
    path: resolve('../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
	plugins: [
		new HTMLWebpackPlugin({
      template: 'src/index.html'
    })
	],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: resolve('../src')
    }, {
      test: /\.json$/,
      loaders: ['json']
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};
