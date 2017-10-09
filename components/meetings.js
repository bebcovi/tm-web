// @flow
import * as React from 'react'
import Link from 'next/link'
import styled from 'react-emotion/macro'
import { Header, List } from 'semantic-ui-react'
import type { Meeting } from '../utils/types'

const Container = styled.div``
const ListHeader = styled(List.Header)`
  font-weight: 400;
`

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
          <Link
            as={`/meetings/${meeting.id}`}
            href={`/meeting?id=${meeting.id}`}
          >
            <ListHeader as="a">
              {meeting.attributes.date}
            </ListHeader>
          </Link>
          <List.Description>
            {meeting.attributes.note}
          </List.Description>
        </List.Item>)}
    </List>
  </Container>

export default Meetings
