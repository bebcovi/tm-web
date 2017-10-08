// @flow
import * as React from 'react'
import styled from 'react-emotion/macro'
import withRedux from 'next-redux-wrapper'
import { createSelector } from 'reselect'
import { Divider } from 'semantic-ui-react'
import Page from '../components/page'
import CreateMeeting from '../components/create-meeting'
import Meetings from '../components/meetings'
import type { Meeting, MeetingAttributes } from '../types'
import configureStore from '../store'
import { getMeetings, createMeeting, selectMeetings } from '../store/ducks/meetings'

const Container = styled.div`
  width: 50rem;
  maxWidth: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem 1rem;
`

type Props = {
  meetings: Meeting[],
  getMeetings: () => Promise<any>,
  createMeeting: (MeetingAttributes) => Promise<any>,
}

class Dashboard extends React.Component<Props> {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.props.getMeetings()
    }
  }

  render() {
    return (
      <Page>
        <Container>
          <CreateMeeting
            onSubmit={this.props.createMeeting}
          />
          <Divider />
          <Meetings
            list={this.props.meetings}
          />
        </Container>
      </Page>
    )
  }
}

const mapStateToProps = createSelector(
  selectMeetings,
  meetings => ({
    meetings,
  }),
)

const mapDispatchToProps = {
  getMeetings,
  createMeeting,
}

export default withRedux(
  configureStore,
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
