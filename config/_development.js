import webpack from 'webpack';
import { resolve } from 'path';

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src',
  ],
  plugins: [
    new webpack.ProvidePlugin({
      // https://gist.github.com/Couto/b29676dd1ab8714a818f
      'Promise': 'exports?global.Promise!es6-promise',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style', 'css?modules', 'postcss', 'sass'],
        include: resolve(__dirname, '../src/styles'),
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: resolve(__dirname, '../node_modules'),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url?limit=10000&name=[name].[ext]'],
      },
    ],
  },
};
