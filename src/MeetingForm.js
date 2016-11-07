import React, { PureComponent, PropTypes } from 'react';

class MeetingForm extends PureComponent {
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

MeetingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MeetingForm;
