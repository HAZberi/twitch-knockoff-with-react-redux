import React, { useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = () => {
  //useCallback Hook is used to wrap the callback function to minimize re-renders
  //Important concept or trick regarding useCallback Hook as follows
  //Whenever a callback function is set as a dependency of useEffect
  //Its a good idea to wrap the callback function with useCallback Hook
  //Snippet from article: When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
  
  //Connect is replaced by two separate functions
  //useSelector is somewhat equivalent to mapStateToProps
  //useSelector uses strict comparisions (===) instead (==) as done with mapStateToProps
  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  //useDispatch basically manually dispatches the actions to reducers
  const dispatch = useDispatch();

  
  const onChangeAuth = useCallback(
    (isSignedIn) => {
      if (isSignedIn) {
        //This is how we get the google id of current user
        dispatch(signIn(googleAuthObject.current.currentUser.get().getId()));
      } else {
        dispatch(signOut());
      }
    },
    [dispatch]
  );

  //whenever we want a value to persist in our component we use the 'useRef' Hook
  //In this case the googleAuth object is received aysnchronously and we want to use
  //its value throughout the component in callbacks and helpers
  //a very good use case for using useRef Hook
  const googleAuthObject = useRef({});

  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "749031414634-8af1nvge4p1qnd6dgjhj13s8sptfksgo.apps.googleusercontent.com",
          scope: "email",
        })
        .then((authentication) => {
          googleAuthObject.current = authentication;
          //the argument name in this function is The GoogleAuth Object
          //authentication = window.gapi.auth2.getAuthInstance();
          onChangeAuth(googleAuthObject.current.isSignedIn.get());
          googleAuthObject.current.isSignedIn.listen(onChangeAuth);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, [onChangeAuth]);

  function onSignInClick() {
    googleAuthObject.current.signIn();
  }
  function onSignOutClick() {
    googleAuthObject.current.signOut();
  }

  const renderSignInStatus = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          onClick={onSignOutClick}
          style={{ marginTop: "0.2em" }}
          className="ui blue google button small"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (!isSignedIn) {
      return (
        <button
          onClick={onSignInClick}
          style={{ marginTop: "0.2em" }}
          className="ui blue google button small"
        >
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    } else {
      return "No authentication Exists";
    }
  };

  return <div>{renderSignInStatus()}</div>;
};

export default GoogleAuth;
