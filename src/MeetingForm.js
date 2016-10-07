import React, { Component, PropTypes } from 'react';

class MeetingForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    date: '',
  };

  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };

  handleSubmit = event => {
    this.props.onSubmit({
      type: 'meetings',
      attributes: this.state,
    });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="date"
          onChange={this.handleDateChange}
          value={this.state.date}
        />
        <button type="submit">
          {'Add meeting'}
        </button>
      </form>
    );
  }
}

export default MeetingForm;
