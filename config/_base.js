import webpack from 'webpack';
import { resolve } from 'path';
import fontMagician from 'postcss-font-magician';
import autoprefixer from 'autoprefixer';
import env from '../env';

const IS_DEV = !process.env['NODE_ENV'];
const API_URL = IS_DEV ?
  'http://localhost:9292' :
  'http://api.toastmasters.hr';

export default {
  resolve: {
    root: resolve(__dirname, '../src'),
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(IS_DEV),
      __API_URL__: JSON.stringify(API_URL),
      __API_KEY__: JSON.stringify(env['API_KEY']),
    }),
    // https://github.com/webpack/webpack/issues/59#issuecomment-12923514
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /hr$/),
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json'],
    }],
  },
  postcss() {
    return [
      fontMagician,
      autoprefixer,
    ];
  },
};
