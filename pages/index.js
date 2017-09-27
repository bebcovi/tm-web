// @flow
import * as React from 'react'
import styled from 'react-emotion/macro'
import { css } from 'emotion/macro'
import { Typography, Button, TextField, List, ListItem, ListItemText } from 'material-ui'
import Page from '../components/page'
import fetchApi from '../utils/fetch-api'
import type { Meeting } from '../types'

const Container = styled.div`
  maxWidth: 50rem;
  height: 100vh;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  margin-bottom: 2rem;
`

const field: string = css`
  display: block;
  width: 100%;
`

const button: string = css`
  margin-top: 1rem;
`

type State = {
  meetings: Meeting[],
  date: string,
  note: string,
};

class Dashboard extends React.Component<{}, State> {
  state = {
    meetings: [],
    date: '',
    note: '',
  }

  componentWillMount() {
    fetchApi({ url: '/meetings' })
      .then(({ data: meetings }: {
        // eslint-disable-next-line react/no-unused-prop-types
        data: Meeting[],
      }) => {
        this.setState({ meetings })
      })
  }

  _handleCreateMeeting = () => {
    const { date, note } = this.state
    fetchApi({
      url: '/meetings',
      method: 'post',
      body: {
        data: {
          type: 'meetings',
          attributes: {
            date,
            note,
          },
        },
      },
    })
    this.setState(state => ({
      meetings: state.meetings.concat({
        id: Math.round(Math.random() * 100).toString(),
        attributes: {
          date,
          note,
        },
      }),
      date: '',
      note: '',
    }))
  }

  render() {
    const { meetings, date, note } = this.state
    return (
      <Page>
        <Container>
          <Form>
            <Typography type="display1">
              Create a Meeting
            </Typography>
            <TextField
              required
              className={field}
              type="date"
              label="Date"
              margin="normal"
              value={date}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                this.setState({ date: event.target.value })
              }}
            />
            <TextField
              className={field}
              multiline
              label="Note"
              margin="normal"
              value={note}
              onChange={(event) => {
                this.setState({ note: event.target.value })
              }}
            />
            <Button
              className={button}
              raised
              onClick={this._handleCreateMeeting}
            >
              Create
            </Button>
          </Form>
          <Typography type="title">
            Meetings
          </Typography>
          <List>
            {meetings.map(meeting =>
              <ListItem
                key={meeting.id}
                button
              >
                <ListItemText
                  primary="Toastmasters sastanak"
                  secondary={meeting.attributes.date}
                />
              </ListItem>)}
          </List>
        </Container>
      </Page>
    )
  }
}

export default Dashboard
