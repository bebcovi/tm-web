import React from 'react';
import fetch from 'helpers/fetch-api';

class Dashboard extends React.Component {
  componentDidMount() {
    this._fetchMeetings();
  }

  _fetchMeetings() {
    return fetch('/meetings')
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <h1>{'Hello World!'}</h1>
    );
  }
}

export default Dashboard;
