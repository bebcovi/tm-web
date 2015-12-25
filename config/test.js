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
  plugins: [],
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
