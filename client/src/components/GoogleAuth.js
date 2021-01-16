import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  //useCallback Hook is used to wrap the callback function to minimize re-renders
  //Important concept or trick regarding useCallback Hook as follows
  //Whenever a callback function is set as a dependency of useEffect
  //Its a good idea to wrap the callback function with useCallback Hook
  //Snippet from article: When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
  const onChangeAuth = useCallback(
    (isSignedIn) => {
      if (isSignedIn) {
        signIn();
      } else {
        signOut();
      }
    },
    [signIn, signOut]
  );

  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "749031414634-8af1nvge4p1qnd6dgjhj13s8sptfksgo.apps.googleusercontent.com",
          scope: "email",
        })
        .then((authentication) => {
          //the argument name in this function is The GoogleAuth Object
          //authentication = window.gapi.auth2.getAuthInstance();
          onChangeAuth(authentication.isSignedIn.get());
          authentication.isSignedIn.listen(onChangeAuth);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, [onChangeAuth]);

  function onSignInClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }
  function onSignOutClick() {
    window.gapi.auth2.getAuthInstance().signOut();
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

const mapStateToProps = (state) => {
  console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
