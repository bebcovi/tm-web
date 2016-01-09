export const ADD_MEETING = 'ADD_MEETING';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_MEETING:
      return [
        {
          id: state.reduce((maxId, meeting) => Math.max(meeting.id, maxId), -1) + 1,
          date: action.date,
          note: action.note,
        },
        ...state,
      ];
    default:
      return state;
  }
}

export const addMeeting = ({ date, note }) => ({
  type: ADD_MEETING,
  date,
  note,
});
