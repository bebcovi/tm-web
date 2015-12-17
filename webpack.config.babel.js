import base from './config/base';
import dev from './config/dev';
import prod from './config/prod';

const config = process.env['NODE_ENV'] === 'production' ? prod : dev;

export default {
	...base,
	...config,
	entry: [
		...base.entry,
		...config.entry
	],
	plugins: [
		...base.plugins,
		...config.plugins
	],
	module: {
		loaders: [
			...base.module.loaders,
			...config.module.loaders
		]
	}
};
