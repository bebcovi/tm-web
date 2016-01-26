import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import MeetingForm from '../containers/MeetingForm';
import { addMeeting, loadMeetings } from '../redux/modules/meetings';

class MeetingsNew extends React.Component {
  static propTypes = {
    addMeeting: PropTypes.func.isRequired,
    loadMeetings: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  _handleSubmit = (attributes) => {
    return this.props.addMeeting(attributes)
      .then(this.props.loadMeetings)
      .then(this.props.push('/meetings'));
  };

  render() {
    return (
      <MeetingForm
        onSubmit={this._handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  addMeeting,
  loadMeetings,
  ...routeActions,
};

export default connect(
  null,
  mapDispatchToProps,
)(MeetingsNew);
