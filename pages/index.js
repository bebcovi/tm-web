// @flow
import * as React from 'react'
import Page from '../components/page'
import fetchApi from '../utils/fetch-api'
import type { Meeting } from '../types'

type State = {
  meetings?: Meeting[],
};

class Dashboard extends React.Component<{}, State> {
  state = {}

  componentWillMount() {
    fetchApi({ url: '/meetings' }).then(({ data: meetings }: {
      // eslint-disable-next-line react/no-unused-prop-types
      data: Meeting[],
    }) => {
      this.setState({ meetings })
    })
  }

  render() {
    return (
      <Page>
        <h1>Hello World!</h1>
      </Page>
    )
  }
}

export default Dashboard
