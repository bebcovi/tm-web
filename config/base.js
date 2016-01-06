import webpack from 'webpack';
import { resolve } from 'path';
import fontMagician from 'postcss-font-magician';
import autoprefixer from 'autoprefixer';
import env from '../env';

export default {
  resolve: {
    root: resolve(__dirname, '../src')
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env['NODE_ENV'])
      },
      __API_URL__: JSON.stringify(process.env['NODE_ENV'] ? 'http://api.toastmasters.hr' : 'http://localhost:9292'),
      __API_KEY__: JSON.stringify(env['API_KEY'])
    }),
    // https://github.com/webpack/webpack/issues/59#issuecomment-12923514
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en$/)
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json']
    }]
  },
  postcss() {
    return [
      fontMagician,
      autoprefixer
    ];
  }
};
