import fetchApi from '../../utils/fetch-api'

// action types

export const GET_MEETINGS = 'GET_MEETINGS'
export const CREATE_MEETING = 'CREATE_MEETING'

// action creators

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

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETINGS:
      return action.payload
    case CREATE_MEETING:
      return state.concat(action.payload)
    default:
      return state
  }
}

export default reducer

// selectors

export const selectMeetings = state =>
  state.meetings

