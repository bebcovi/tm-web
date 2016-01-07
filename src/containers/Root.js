import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { App, Meetings } from 'views';

class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  render() {
    const { props } = this;

    return (
      <Provider store={props.store}>
        <Router history={props.history}>
          <Route path="/" component={App}>
            <IndexRoute component={Meetings} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
