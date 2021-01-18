import {
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/actionTypes";

import _ from "lodash";

export default function streamReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
