import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

module.exports = {
  entry: [
    './src',
  ],
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.ProvidePlugin({
      // https://gist.github.com/Couto/b29676dd1ab8714a818f
      'Promise': 'exports?global.Promise!es6-promise',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style', 'css?modules', 'postcss', 'sass'],
        include: resolve(__dirname, '../src/styles'),
      }, {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: resolve(__dirname, '../node_modules'),
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url?limit=10000&name=[name].[ext]', 'image-webpack'],
      },
    ],
  },
};
