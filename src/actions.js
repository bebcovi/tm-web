// helpers

export const action = (type, payload) =>
  typeof payload === 'undefined' ?
    { type } :
    { type, payload };

export const createAction = type =>
  payload => action(type, payload)

export const createRequestTypes = base => {
  const res = {};
  ['REQUEST', 'SUCCESS', 'FAILURE'].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const createActionsFromTypes = actionTypes => {
  const res = {};
  Reflect.ownKeys(actionTypes).forEach(type => {
    res[type.toLowerCase()] = createAction(actionTypes[type]);
  });
  return res;
}

// action types

export const GET_MEETINGS = createRequestTypes('GET_MEETINGS');
export const CREATE_MEETING = createRequestTypes('CREATE_MEETING');
export const DELETE_MEETING = createRequestTypes('DELETE_MEETING');

export const GET_MEMBERS = createRequestTypes('GET_MEMEBERS');
export const UPDATE_MEMBER = createRequestTypes('UPDATE_MEMBER');

// action creators

export const getMeetings = createActionsFromTypes(GET_MEETINGS);
export const createMeeting = createActionsFromTypes(CREATE_MEETING);
export const deleteMeeting = createActionsFromTypes(DELETE_MEETING);

export const getMembers = createActionsFromTypes(GET_MEMBERS);
export const updateMember = createActionsFromTypes(UPDATE_MEMBER);
