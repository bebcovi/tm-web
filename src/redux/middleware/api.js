import { BEGIN, COMMIT, REVERT } from 'redux-optimist';
import { camelizeKeys, decamelizeKeys } from 'humps';
import fetch from '../../helpers/fetch-api';

export const CALL_API = Symbol('Call API');

let nextTransactionID = 0;

// API calls + optimistic updates
export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const transactionID = nextTransactionID++;

  let { endpoint } = callAPI;
  const { method, body } = callAPI;
  const [requestType, successType, failureType] = callAPI.types;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  function actionWith(data) {
    const finalAction = {
      ...action,
      ...data,
    };
    delete finalAction[CALL_API];
    return finalAction;
  }

  next(actionWith({
    type: requestType,
    optimist: {
      type: BEGIN,
      id: transactionID,
    },
  }));

  return fetch(endpoint, {
    method: method || 'get',
    body: JSON.stringify(decamelizeKeys(body)),
  }).then(
    response => next(actionWith({
      type: successType,
      response: camelizeKeys(response),
      optimist: {
        type: COMMIT,
        id: transactionID,
      },
    })),
    error => next(actionWith({
      type: failureType,
      error: camelizeKeys(error),
      optimist: {
        type: REVERT,
        id: transactionID,
      },
    }))
  );
};
