import React, { PropTypes } from 'react';

const App = React.createClass({
	propTypes: {
		children: PropTypes.node
	},

	render() {
		return this.props.children;
	}
});

export default App;
