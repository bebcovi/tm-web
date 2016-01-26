import moment from 'moment';
import { CALL_API } from '../middleware/api';

const LIST_LOAD_REQUEST = 'app/meetings/LIST_LOAD_REQUEST';
const LIST_LOAD_SUCCESS = 'app/meetings/LIST_LOAD_SUCCESS';
const LIST_LOAD_ERROR = 'app/meetings/LIST_LOAD_ERROR';

export function loadMeetings() {
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

export function addMeeting(attributes) {
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

function deleteMeeting(id) {
  return {
    id,
    [CALL_API]: {
      types: [ITEM_DELETE_REQUEST, ITEM_DELETE_SUCCESS, ITEM_DELETE_ERROR],
      endpoint: '/meetings/' + id,
      method: 'delete',
    },
  };
}

const PROMPT_ITEM_DELETE = 'app/meetings/PROMPT_ITEM_DELETE';

export function promptDeleteMeeting() {
  return {
    type: PROMPT_ITEM_DELETE,
  };
}

const CANCEL_ITEM_DELETE = 'app/meetings/CANCEL_ITEM_DELETE';

export function cancelDeleteMeeting() {
  return {
    type: CANCEL_ITEM_DELETE,
  };
}

const CONFIRM_ITEM_DELETE = 'app/meetings/CONFIRM_ITEM_DELETE';

export function confirmDeleteMeeting(id) {
  return (dispatch) => {
    dispatch({
      type: CONFIRM_ITEM_DELETE,
    });
    return dispatch(deleteMeeting(id));
  };
}

const initialState = {
  isFetching: false,
  deletePrompt: false,
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
      let added = false;
      return {
        ...state,
        list: state.list.reduce((p, c, i, a) => {
          if (!added) {
            if (moment(c.attributes.date).isSameOrBefore(action.attributes.date)) {
              added = true;
              return p.concat({ attributes: action.attributes }, c);
            } else if (i === a.length - 1) {
              added = true;
              return p.concat(c, { attributes: action.attributes });
            }
          }
          return p.concat(c);
        }, []),
      };

    case PROMPT_ITEM_DELETE:
      return {
        ...state,
        deletePrompt: true,
      };

    case CANCEL_ITEM_DELETE:
    case CONFIRM_ITEM_DELETE:
      return {
        ...state,
        deletePrompt: false,
      };

    case ITEM_DELETE_REQUEST:
      return {
        ...state,
        list: state.list.reduce((p, c) => {
          return c.id === action.id ? p : p.concat(c);
        }, []),
      };

    default:
      return state;
  }
}
