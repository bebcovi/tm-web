import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MeetingForm from 'components/MeetingForm';
import { addMeeting } from 'ducks/meetings';

class Dashboard extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    meetings: PropTypes.array.isRequired,
  };

  render() {
    const { props } = this;

    return (
      <div>
        <MeetingForm
          onSubmit={props.actions.addMeeting}
        />
        <ul>
          {props.meetings.map((meeting, i) => (
            <li key={i}>
              {meeting.date},
              {meeting.note}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  meetings: state.meetings,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    addMeeting,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
