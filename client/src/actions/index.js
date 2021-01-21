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

//For programmatic navigation we have to use the history object
// what about trying to access the history object from outside of a component?
//The technique includes manually creating our own history object
//And then use <Router history={history} /> to wrap all the routes in App.js
//we cannot use Browser Router
//Rest of the stuff is pretty same
//We can use useHistory hook to access the browserRouter's history object
//within a react component.
//The approach we are using in this application requries to access history object outside react
//https://brandoncantello.medium.com/using-history-to-navigate-your-react-app-from-outside-a-component-40ea74ba4402

import history from "../history";

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

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/videos", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });

  history.push("/");
};

export const getStreams = () => async (dispatch) => {
  const response = await streams.get("/videos");

  dispatch({ type: GET_STREAMS, payload: response.data });
};

export const getStream = (id) => async (dispatch) => {
  const response = await streams.get(`/videos/${id}`);

  dispatch({ type: GET_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/videos/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });

  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await streams.delete(`/videos/${id}`);

  dispatch({ type: DELETE_STREAM, payload: response.data });
};
