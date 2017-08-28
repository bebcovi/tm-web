import * as React from 'react';
import Page from '../components/page';
import fetchApi from '../utils/fetch-api';

class Dashboard extends React.Component {
  async componentWillMount() {
    const meetings = await fetchApi({ url: '/meetings' });
    console.log(meetings);
  }

  render() {
    return (
      <Page>
        <h1>Hello World!</h1>
      </Page>
    );
  }
}

export default Dashboard;
