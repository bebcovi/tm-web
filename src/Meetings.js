import React, { PropTypes } from 'react';
import MeetingForm from './MeetingForm';
import MeetingList from './MeetingList';

const Meetings = props => (
  <div className="Meetings">
    <h2>{'Sastanci'}</h2>
    <MeetingForm onSubmit={props.onCreate} />
    <MeetingList onDelete={props.onDelete} meetings={props.meetings} />
  </div>
);

Meetings.propTypes = {
  meetings: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Meetings;
