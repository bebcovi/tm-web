import { CALL_API } from '../middleware/api';

const LIST_LOAD_REQUEST = 'app/members/LIST_LOAD_REQUEST';
const LIST_LOAD_SUCCESS = 'app/members/LIST_LOAD_SUCCESS';
const LIST_LOAD_FAILURE = 'app/members/LIST_LOAD_FAILURE';

export function loadMembers() {
  return {
    [CALL_API]: {
      types: [LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE],
      endpoint: '/members',
    },
  };
}

const ITEM_ADD_REQUEST = 'app/members/ITEM_ADD_REQUEST';
const ITEM_ADD_SUCCESS = 'app/members/ITEM_ADD_SUCCESS';
const ITEM_ADD_FAILURE = 'app/members/ITEM_ADD_FAILURE';

export function addMember(attributes) {
  return {
    attributes,
    [CALL_API]: {
      types: [ITEM_ADD_REQUEST, ITEM_ADD_SUCCESS, ITEM_ADD_FAILURE],
      endpoint: '/members',
      method: 'post',
      body: {
        data: {
          type: 'members',
          attributes,
        },
      },
    },
  };
}

const ITEM_DELETE_PROMPT = 'app/members/ITEM_DELETE_PROMPT';

export function deleteMemberPrompt(id) {
  return {
    type: ITEM_DELETE_PROMPT,
    id,
  };
}

const ITEM_DELETE_CANCEL = 'app/members/ITEM_DELETE_CANCEL';

export function deleteMemberCancel(id) {
  return {
    type: ITEM_DELETE_CANCEL,
    id,
  };
}

const ITEM_DELETE_REQUEST = 'app/members/ITEM_DELETE_REQUEST';
const ITEM_DELETE_SUCCESS = 'app/members/ITEM_DELETE_SUCCESS';
const ITEM_DELETE_FAILURE = 'app/members/ITEM_DELETE_FAILURE';

export function deleteMember(id) {
  return {
    id,
    [CALL_API]: {
      types: [ITEM_DELETE_REQUEST, ITEM_DELETE_SUCCESS, ITEM_DELETE_FAILURE],
      endpoint: '/members/' + id,
      method: 'delete',
    },
  };
}

const initialState = {
  isFetching: false,
  isDeleting: false,
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
          ...state.list,
          {
            attributes: action.attributes,
          },
        ],
      };

    case ITEM_DELETE_PROMPT:
      return {
        ...state,
        isDeleting: true,
      };
    case ITEM_DELETE_CANCEL:
      return {
        ...state,
        isDeleting: false,
      };
    case ITEM_DELETE_REQUEST:
      return {
        ...state,
        isDeleting: false,
        list: state.list.reduce((p, c) => {
          return c.id === action.id ? [...p] : [...p, c];
        }, []),
      };

    default:
      return state;
  }
}
