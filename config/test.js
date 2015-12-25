import webpack from 'webpack';
import { resolve } from 'path';

export default {
  devtool: 'source-map',
  target: 'node',
  resolve: {
    root: [
      resolve(__dirname, '../src'),
      resolve(__dirname, '../test')
    ]
  },
  entry: [
    './test'
  ],
  output: {
    path: resolve(__dirname, '../.tmp'),
    filename: 'test.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false)
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        resolve(__dirname, '../src'),
        resolve(__dirname, '../test')
      ]
    }, {
      test: /\.(s?css|jpe?g|png|gif|svg)$/,
      loaders: ['null']
    }]
  }
};
