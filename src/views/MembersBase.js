import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadMembers } from '../redux/modules/members';

class MembersBase extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    loadMembers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadMembers();
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = {
  loadMembers,
};

export default connect(
  null,
  mapDispatchToProps,
)(MembersBase);
