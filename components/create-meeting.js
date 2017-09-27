// @flow
import * as React from 'react'
import styled from 'react-emotion/macro'
import { Typography, TextField, Button, CircularProgress } from 'material-ui'
import type { MeetingAttributes } from '../types'

const Form = styled.form`
  margin-bottom: 2rem;
`
const Title = styled(Typography)`
  margin-bottom: 1rem;
`
const StyledTextField = styled(TextField)`
  display: block;
  width: 100%;
`
const StyledButton = styled(Button)`
  margin-top: 1rem;
`
const Actions = styled.div`
  display: flex;
`
const Spinner = styled(CircularProgress)`
  margin-left: 1rem;
`

type Props = {
  onSubmit: (MeetingAttributes) => Promise<*>,
}

type State = {
  date: string,
  note: string,
  loading: boolean,
}

class CreateMeeting extends React.Component<Props, State> {
  state = {
    date: '',
    note: '',
    loading: false,
  }

  render() {
    const { date, note, loading } = this.state
    return (
      <Form onSubmit={this._handleSubmit}>
        <Title type="display1">
          Create Meeting
        </Title>
        <StyledTextField
          required
          type="date"
          label="Date"
          margin="normal"
          value={date}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this._handleChangeDate}
        />
        <StyledTextField
          multiline
          label="Note"
          margin="normal"
          value={note}
          onChange={this._handleChangeNote}
        />
        <Actions>
          <StyledButton
            raised
            onClick={this._handleSubmit}
          >
            Create
          </StyledButton>
          {loading
            ? <Spinner />
            : null}
        </Actions>
      </Form>
    )
  }

  _handleChangeDate = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ date: event.target.value })
  }

  _handleChangeNote = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ note: event.target.value })
  }

  _handleSubmit = (event: SyntheticEvent<HTMLElement>) => {
    const { onSubmit } = this.props
    const { date, note } = this.state
    event.preventDefault()
    this.setState({ loading: true })
    onSubmit({ date, note })
      .then(this._resetForm)
  }

  _resetForm = () => {
    this.setState({
      date: '',
      note: '',
      loading: false,
    })
  }
}

export default CreateMeeting
