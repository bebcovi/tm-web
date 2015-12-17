import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: [
    './src'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
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
      include: path.join(__dirname, '..', 'src')
    }, {
      test: /\.json$/,
      loaders: ['json']
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};
