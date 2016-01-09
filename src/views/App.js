import React, { PropTypes } from 'react';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default App;
