import React from 'react';
import fetch from 'helpers/fetch-api';

const Dashboard = React.createClass({
	componentDidMount() {
		this._fetchMeetings();
	},

	_fetchMeetings() {
		fetch('/meetings')
			.then((res) => {
				console.log(res);
			});
	},

	render() {
		return (
			<h1>{'Hello World!'}</h1>
		);
	}
});

export default Dashboard;
