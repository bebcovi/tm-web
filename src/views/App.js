import React, { PropTypes } from 'react';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return this.props.children;
  }
}

export default App;
