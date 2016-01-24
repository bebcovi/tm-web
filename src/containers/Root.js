import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import * as View from '../views';

export class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const { props } = this;

    return (
      <Provider store={props.store}>
        <Router history={props.history}>
          <Route path="/" component={View.App}>
            <Route path="meetings" component={View.MeetingsBase}>
              <IndexRoute component={View.MeetingsList} />
              <Route path="new" component={View.MeetingsNew} />
            </Route>
            <IndexRedirect to="meetings" />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
