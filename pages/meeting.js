// @flow
import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import { createSelector } from 'reselect'
import { Header, Icon } from 'semantic-ui-react'
import { format } from 'date-fns'
import Page from '../components/page'
import configureStore from '../store'
import { getMeeting, selectCurrentMeeting } from '../store/ducks/meetings'
import type { Meeting as MeetingType } from '../utils/types'

type Props = {
  meeting: MeetingType,
  url: { query: { id: string } },
  getMeeting: ({ id: string }) => void,
}

class Meeting extends React.Component<Props> {
  componentDidMount() {
    this.props.getMeeting({
      id: this.props.url.query.id,
    })
  }

  render() {
    const { meeting } = this.props
    return (
      <Page title="Meeting">
        <Link href="/">
          <a>
            <Icon name="long arrow left" />
            Back
          </a>
        </Link>
        <Header as="h2">
          Meeting
          <Header.Subheader>
            {meeting == null
              ? 'Loading…'
              : format(meeting.attributes.date, 'MMMM Do, YYYY')}
          </Header.Subheader>
        </Header>
        <p>
          <b>Note</b>{': '}
          {meeting == null
            ? null
            : meeting.attributes.note}
        </p>
      </Page>
    )
  }
}

const mapStateToProps = createSelector(
  selectCurrentMeeting,
  meeting => ({
    meeting,
  }),
)

const mapDispatchToProps = {
  getMeeting,
}

export default withRedux(
  configureStore,
  mapStateToProps,
  mapDispatchToProps,
)(Meeting)
