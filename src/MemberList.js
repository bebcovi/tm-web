import React, { PropTypes } from 'react';
import MemberItem from './MemberItem';

export const EMPTY_MSG = 'Još nema unesenih članova.';

const MemberList = props => (
  <div className="MemberList">
    {props.members.length ? (
      <ul className="MemberList">
        {props.members.map(member => (
          <MemberItem
            key={member.id}
            member={member}
            onUpdate={props.onUpdate}
          />
        ))}
      </ul>
    ) : EMPTY_MSG}
  </div>
);

MemberList.propTypes = {
  members: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemberList;
