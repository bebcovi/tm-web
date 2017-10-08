// @flow
import * as React from 'react'
import styled from 'react-emotion/macro'
import { Header, List } from 'semantic-ui-react'
import type { Meeting } from '../utils/types'

const Container = styled.div``

type Props = {
  list: Meeting[],
}

const Meetings = ({ list }: Props) =>
  <Container>
    <Header as="h2">
      Meetings
    </Header>
    <List>
      {list.map(meeting =>
        <List.Item key={meeting.id}>
          <List.Header>
            {meeting.attributes.date}
          </List.Header>
          <List.Description>
            {meeting.attributes.note}
          </List.Description>
        </List.Item>)}
    </List>
  </Container>

export default Meetings
