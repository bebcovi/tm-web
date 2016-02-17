import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';

import App from '../views/App';

import MeetingsBase from '../views/MeetingsBase';
import MeetingsShow from '../views/MeetingsShow';
import MeetingsNew from '../views/MeetingsNew';
import MeetingShow from '../views/MeetingShow';

import MembersBase from '../views/MembersBase';
import MembersShow from '../views/MembersShow';
import MembersNew from '../views/MembersNew';
import MemberShow from '../views/MemberShow';

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
          <Route path="/" component={App}>
            <Route path="meetings" component={MeetingsBase}>
              <IndexRoute component={MeetingsShow} />
              <Route path="new" component={MeetingsNew} />
              <Route path=":id" component={MeetingShow} />
            </Route>
            <Route path="members" component={MembersBase}>
              <IndexRoute component={MembersShow} />
              <Route path="new" component={MembersNew} />
              <Route path=":id" component={MemberShow} />
            </Route>
            <IndexRedirect to="meetings" />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
