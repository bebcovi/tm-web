import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/routes';

class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    );
  }
}

export default Root;
