import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MemberForm from '../containers/MemberForm';
import { routeActions } from 'react-router-redux';
import { addMember, loadMembers } from '../redux/modules/members';

class MembersNew extends React.Component {
  static propTypes = {
    addMember: PropTypes.func.isRequired,
    loadMembers: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  _handleSubmit = (attributes) => {
    this.props.addMember(attributes)
      .then(this.props.loadMembers)
      .then(this.props.push('/members'));
  };

  render() {
    return (
      <MemberForm
        onSubmit={this._handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  ...routeActions,
  addMember,
  loadMembers,
};

export default connect(
  null,
  mapDispatchToProps,
)(MembersNew);
