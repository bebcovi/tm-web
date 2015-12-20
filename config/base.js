import webpack from 'webpack';
import { resolve } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import env from '../env';

export default {
  resolve: {
    root: resolve(__dirname, '../src')
  },
  entry: [
    './src'
  ],
  output: {
    path: resolve(__dirname, '../dist'),
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
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      __API_KEY__: JSON.stringify(env.API_KEY)
    })
	],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: resolve(__dirname, '../src')
    }, {
      test: /\.json$/,
      loaders: ['json']
    }, {
      test: /\.s?css$/,
      // https://github.com/webpack/css-loader/tree/1298d2b38c4770dbf853ff1eed632fe239881cc2#css-modules
      loaders: ['style', 'css?modules', 'postcss', 'sass'],
      include: resolve(__dirname, '../src/styles')
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass'],
      exclude: resolve(__dirname, '../src/styles')
    }]
  },
  postcss() {
    return [autoprefixer];
  }
};
