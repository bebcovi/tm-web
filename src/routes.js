import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import * as Views from './views';

export default (
  <Router history={createHistory()}>
    <Route path="/" component={Views.App}>
      <IndexRoute component={Views.Meetings} />
    </Route>
  </Router>
);
