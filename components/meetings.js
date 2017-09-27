// @flow
import * as React from 'react'
import styled from 'react-emotion/macro'
import { Typography, List, ListItem, ListItemText } from 'material-ui'
import type { Meeting } from '../types'

const Container = styled.div``

type Props = {
  list: Meeting[],
}

const Meetings = ({ list }: Props) =>
  <Container>
    <Typography type="title">
      Meetings
    </Typography>
    <List>
      {list.map(meeting =>
        <ListItem
          key={meeting.id}
          button
        >
          <ListItemText
            primary={meeting.attributes.date}
            secondary={meeting.attributes.note}
          />
        </ListItem>)}
    </List>
  </Container>

export default Meetings
