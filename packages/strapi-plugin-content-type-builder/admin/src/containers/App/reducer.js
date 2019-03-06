/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_DATA_SUCCEEDED,
} from './constants';

export const initialState = fromJS({
  initialData: {},
  models: [],
  modifiedData: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCEEDED:
      return state
        .update('initialData', () => action.initialData)
        .update('modifiedData', () => action.initialData)
        .update('models', () => action.models);
    default:
      return state;
  }
}

export default appReducer;
