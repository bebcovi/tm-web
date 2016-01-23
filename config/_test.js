import { resolve } from 'path';

export default {
  devtool: 'eval-source-map',
  target: 'node',
  resolve: {
    root: resolve(__dirname, '../src'),
  },
  entry: [
    './test',
  ],
  output: {
    path: resolve(__dirname, '../.tmp'),
    filename: 'test.js',
    publicPath: '/',
  },
  plugins: [],
  module: {
    // https://github.com/webpack/webpack/issues/198#issuecomment-37306725
    // require(expr)
    exprContextRegExp: /$^/,
    exprContextCritical: false,
    loaders: [
      {
        test: /\.(s?css|jpe?g|png|gif|svg)$/,
        loaders: ['null'],
      },
    ],
  },
};
