import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { App, Meetings } from 'views';

const Routes = (props) => (
  <Router history={props.history}>
    <Route path="/" component={App}>
      <IndexRoute component={Meetings} />
    </Route>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
