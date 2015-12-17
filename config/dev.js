import webpack from 'webpack';

export default {
	devtool: 'eval',
	entry: [
    'webpack-hot-middleware/client'
  ],
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true)
    })
  ],
	module: {
		loaders: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['url?limit=10000&name=[name].[ext]']
    }]
	}
};
