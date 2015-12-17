import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import {
	App,
	Dashboard
} from './views';

export default (
	<Router history={createHistory()}>
		<Route path="/" component={App}>
			<IndexRoute component={Dashboard} />
		</Route>
	</Router>
);
