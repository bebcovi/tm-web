import webpack from 'webpack';
import { resolve } from 'path';
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
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
      __API_KEY__: JSON.stringify(env.API_KEY)
    })
	],
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json']
    }]
  },
  postcss() {
    return [autoprefixer];
  }
};
