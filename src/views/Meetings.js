import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MeetingForm from '../components/MeetingForm';
import MeetingList from '../containers/Meetings';
import { loadList as loadMeetings, addItem as addMeeting } from '../redux/modules/meetings';

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
        <MeetingList {...props.meetings} />
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
