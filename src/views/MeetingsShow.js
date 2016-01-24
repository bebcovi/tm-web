import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Meetings from '../containers/Meetings';
import { loadList as loadMeetings } from '../redux/modules/meetings';
import * as Icon from '../components/icons';

export class MeetingsShow extends React.Component {
  static propTypes = {
    loadMeetings: PropTypes.func.isRequired,
    meetings: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { props } = this;
    props.loadMeetings();
  }

  render() {
    const { props } = this;

    return (
      <div>
        <Link
          className="btn btn-primary-outline m-b-1"
          to="/meetings/new"
        >
          <Icon.Plus />
          {'Dodaj sastanak'}
        </Link>
        <Meetings {...props.meetings} />
      </div>
    );
  }
}

function mapStateToProps({ meetings }) {
  return {
    meetings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadMeetings,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetingsShow);
