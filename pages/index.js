// @flow
import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import { createSelector } from 'reselect'
import { Divider } from 'semantic-ui-react'
import Page from '../components/page'
import CreateMeeting from '../components/create-meeting'
import Meetings from '../components/meetings'
import type { Meeting, MeetingAttrs } from '../utils/types'
import configureStore from '../store'
import { getMeetings, createMeeting, selectMeetingsList } from '../store/ducks/meetings'

type Props = {
  createMeeting: (MeetingAttrs) => Promise<any>,
  getMeetings: () => Promise<any>,
  meetings: Meeting[],
}

class Dashboard extends React.Component<Props> {
  componentDidMount() {
    this.props.getMeetings()
  }

  render() {
    return (
      <Page>
        <CreateMeeting
          onSubmit={this.props.createMeeting}
        />
        <Divider />
        <Meetings
          list={this.props.meetings}
        />
      </Page>
    )
  }
}

const mapStateToProps = createSelector(
  selectMeetingsList,
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
