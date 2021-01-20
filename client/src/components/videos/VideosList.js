import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStreams } from "../../actions";

const VideosList = () => {
  const videosList = useSelector((state) => Object.values(state.videos));
  const { userId: currentUserId, isSignedIn } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const renderAdmin = (video) => {
    if (video.userId === currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui primary inverted button">Edit</button>
          <button className="ui red inverted button">Delete</button>
        </div>
      );
    }
  };
  const renderList = (videosList) => {
    return videosList?.map((video) => {
      return (
        <div className="item" key={video.id}>
          {renderAdmin(video)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {video.title}
            <div className="description">{video.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreateButton = (isSignedIn) => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/videos/new" className="ui large teal button">
            Create your own Stream
          </Link>
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(getStreams());
  }, [dispatch]);

  return (
    <>
      <div className="ui celled list">{renderList(videosList)}</div>
      <div className="ui right floated content">
        {renderCreateButton(isSignedIn)}
      </div>
    </>
  );
};

export default VideosList;
