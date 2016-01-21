import React, { PropTypes } from 'react';

export class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded m-b-2">
          <div className="container">
            <a className="navbar-brand" href="#">Toastmasters</a>
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
