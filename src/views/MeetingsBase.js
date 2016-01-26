import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadMeetings } from '../redux/modules/meetings';

class MeetingsBase extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    loadMeetings: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadMeetings();
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = {
  loadMeetings,
};

export default connect(
  null,
  mapDispatchToProps,
)(MeetingsBase);
