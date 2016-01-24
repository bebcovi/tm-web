import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
