import * as config from './config';

const env = process.env['NODE_ENV'] || 'development';

export default {
	...config.base,
	...config[env],
	plugins: [
		...config.base.plugins,
		...config[env].plugins
	],
	module: {
		loaders: [
			...config.base.module.loaders,
			...config[env].module.loaders
		]
	}
};
