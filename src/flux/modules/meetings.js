import { CALL_API } from '../middleware/api';

const LIST_REQUEST = 'app/meetings/LIST_REQUEST';
const LIST_SUCCESS = 'app/meetings/LIST_SUCCESS';
const LIST_ERROR = 'app/meetings/LIST_ERROR';

function fetchList() {
  return {
    [CALL_API]: {
      types: [LIST_REQUEST, LIST_SUCCESS, LIST_ERROR],
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

export const add = (attributes) => {
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

    case LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.response.data,
      };

    default:
      return state;
  }
}
