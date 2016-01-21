import { CALL_API } from '../middleware/api';

const LIST_LOAD_REQUEST = 'app/meetings/LIST_LOAD_REQUEST';
const LIST_LOAD_SUCCESS = 'app/meetings/LIST_LOAD_SUCCESS';
const LIST_LOAD_ERROR = 'app/meetings/LIST_LOAD_ERROR';

function fetchList() {
  return {
    [CALL_API]: {
      types: [LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_ERROR],
      endpoint: '/meetings',
    },
  };
}

export const loadList = () => {
  return (dispatch) => {
    return dispatch(fetchList());
  };
};


const ITEM_ADD_REQUEST = 'app/meetings/ITEM_ADD_REQUEST';
const ITEM_ADD_SUCCESS = 'app/meetings/ITEM_ADD_SUCCESS';
const ITEM_ADD_ERROR = 'app/meetings/ITEM_ADD_ERROR';

function postItem(attributes) {
  return {
    attributes,
    [CALL_API]: {
      types: [ITEM_ADD_REQUEST, ITEM_ADD_SUCCESS, ITEM_ADD_ERROR],
      endpoint: '/meetings',
      method: 'post',
      body: {
        data: {
          type: 'meetings',
          attributes,
        },
      },
    },
  };
}

export const addItem = (attributes) => {
  return (dispatch) => {
    return dispatch(postItem(attributes));
  };
};


export default function reducer(state = {
  isFetching: false,
  list: [],
}, action) {
  switch (action.type) {
    case ITEM_ADD_REQUEST:
      return {
        ...state,
        list: [
          {
            id: state.list.reduce((maxId, meeting) => Math.max(meeting.id, maxId), -1) + 1,
            attributes: action.attributes,
          },
          ...state.list,
        ],
      };

    case LIST_LOAD_SUCCESS:
      return {
        ...state,
        list: action.response.data,
      };

    default:
      return state;
  }
}
