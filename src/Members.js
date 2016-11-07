import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MemberList from './MemberList';
import { updateMember } from './actions';

const Members = props => (
  <div className="Members">
    <h2>{'Članovi'}</h2>
    <MemberList members={props.members} onUpdate={props.onUpdate} />
  </div>
);

Members.propTypes = {
  members: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default connect(state => ({
  members: state.members,
}), {
  onUpdate: updateMember.request,
})(Members);
