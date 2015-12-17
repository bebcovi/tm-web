import webpack from 'webpack';

module.exports = {
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(true)
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
	],
	module: {
		loaders: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['url?limit=10000&name=[name].[ext]', 'image-webpack']
    }]
	}
};
