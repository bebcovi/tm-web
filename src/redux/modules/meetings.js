import { CALL_API } from '../middleware/api';

const LIST_LOAD_REQUEST = 'app/meetings/LIST_LOAD_REQUEST';
const LIST_LOAD_SUCCESS = 'app/meetings/LIST_LOAD_SUCCESS';
const LIST_LOAD_ERROR = 'app/meetings/LIST_LOAD_ERROR';

export function loadList() {
  return {
    [CALL_API]: {
      types: [LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_ERROR],
      endpoint: '/meetings',
    },
  };
}

const ITEM_ADD_REQUEST = 'app/meetings/ITEM_ADD_REQUEST';
const ITEM_ADD_SUCCESS = 'app/meetings/ITEM_ADD_SUCCESS';
const ITEM_ADD_ERROR = 'app/meetings/ITEM_ADD_ERROR';

export function addItem(attributes) {
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

const ITEM_DELETE_REQUEST = 'app/meetings/ITEM_DELETE_REQUEST';
const ITEM_DELETE_SUCCESS = 'app/meetings/ITEM_DELETE_SUCCESS';
const ITEM_DELETE_ERROR = 'app/meetings/ITEM_DELETE_ERROR';

export function deleteItem(id) {
  return {
    [CALL_API]: {
      types: [ITEM_DELETE_REQUEST, ITEM_DELETE_SUCCESS, ITEM_DELETE_ERROR],
      endpoint: '/meetings/' + id,
      method: 'delete',
    },
  };
}

const initialState = {
  isFetching: false,
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_LOAD_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case LIST_LOAD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.response.data,
      };

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

    default:
      return state;
  }
}
