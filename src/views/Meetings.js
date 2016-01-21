import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MeetingForm from 'components/MeetingForm';
import { loadList as loadMeetings, addItem as addMeeting } from 'flux/modules/meetings';

export class Meetings extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    meetings: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.loadMeetings();
  }

  render() {
    const { props } = this;

    return (
      <div>
        <MeetingForm
          onSubmit={props.actions.addMeeting}
        />
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>Datum</th>
            </tr>
          </thead>
          <tbody>
            {props.meetings.list.map((meeting, i) => (
              <tr key={i}>
                <td>{`#${i + 1}`}</td>
                <td>{meeting.attributes.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ meetings }) => ({
  meetings,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    loadMeetings,
    addMeeting,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetings);
