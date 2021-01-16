import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

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
          setIsSignedIn(authentication.isSignedIn.get());
          authentication.isSignedIn.listen(onChangeAuth);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, []);

  const onChangeAuth = () => {
    setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };
  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

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
