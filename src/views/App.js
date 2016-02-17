import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Navigation from '../containers/Navigation';

export class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded m-b-2">
          <div className="container">
            <Link
              className="navbar-brand"
              to="/"
            >
              {'Toastmasters'}
            </Link>
            <Navigation
              items={[
                {
                  pathname: '/meetings',
                  name: 'Sastanci',
                },
                {
                  pathname: '/members',
                  name: 'Članovi',
                },
              ]}
            />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
