import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import fetchApi from '../../utils/fetch-api'

// action types

export const GET_MEETING = 'GET_MEETING'
export const GET_MEETINGS = 'GET_MEETINGS'
export const CREATE_MEETING = 'CREATE_MEETING'

// action creators

export const getMeeting = ({ id }) => dispatch =>
  fetchApi({
    url: `/meetings/${id}`,
    method: 'get',
  }).then((response) => {
    dispatch({
      type: GET_MEETING,
      payload: response.data,
    })
  })

export const getMeetings = () => dispatch =>
  fetchApi({
    url: '/meetings',
    method: 'get',
  }).then((response) => {
    dispatch({
      type: GET_MEETINGS,
      payload: response.data,
    })
  })

export const createMeeting = attributes => dispatch =>
  fetchApi({
    url: '/meetings',
    method: 'post',
    body: {
      data: {
        type: 'meetings',
        attributes,
      },
    },
  }).then((response) => {
    dispatch({
      type: CREATE_MEETING,
      payload: response.data,
    })
  })

// reducers

const list = (state = [], action) => {
  switch (action.type) {
    case GET_MEETINGS:
      return action.payload
    case CREATE_MEETING:
      return state.concat(action.payload)
    default:
      return state
  }
}

const current = (state = null, action) => {
  switch (action.type) {
    case GET_MEETING:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  list,
  current,
})

// selectors

const selectMeetings = state =>
  state.meetings

export const selectMeetingsList = createSelector(
  selectMeetings,
  meetings => meetings.list,
)

export const selectCurrentMeeting = createSelector(
  selectMeetings,
  meetings => meetings.current,
)
