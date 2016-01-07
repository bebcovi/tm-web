import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/routes';
import DevTools from 'containers/DevTools';

class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Routes history={history} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default Root;
