import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./actionTypes";

import streams from "../apis/streams";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/videos", formValues);

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const getStreams = () => async (dispatch) => {
  const response = await streams.get("/videos");

  dispatch({type: GET_STREAMS, payload: response.data});
}

export const getStream = id => async dispatch => {
  const response = await streams.get(`/videos/${id}`);

  dispatch({type: GET_STREAM, payload: response.data});
}

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/videos/${id}`, formValues);

  dispatch({type: EDIT_STREAM, payload: response.data});
}

export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`/videos/${id}`);

  dispatch({type: DELETE_STREAM, payload: response.data});
}