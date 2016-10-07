import React, { PropTypes } from 'react';
import MeetingItem from './MeetingItem';

export const EMPTY_MSG = 'Još nema unesenih sastanaka.';

const MeetingList = props => (
  <div className="MeetingList">
    {props.meetings.length ? (
      <ul className="MeetingList">
        {props.meetings.map(meeting => (
          <MeetingItem
            key={meeting.id}
            onDelete={props.onDelete}
            {...meeting}
          />
        ))}
      </ul>
    ) : EMPTY_MSG}
  </div>
);

MeetingList.propTypes = {
  meetings: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MeetingList;
