import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { getStream, deleteStream } from "../../actions";

const VideosDestroy = (props) => {
  const videoId = props.match.params.id;
  const videoToDelete = useSelector((state) => state.videos[videoId]);
  const dispatch = useDispatch();

  const renderActions = (
    <>
      <button
        className="ui red button"
        onClick={() => dispatch(deleteStream(videoId))}
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = (video) => {
    if (!video) return "Are you sure you want to delete this stream?";
    return (
      <div>
        Are you sure you want to delete the stream with the title of: <br />
        <br />
        {video.title}
      </div>
    );
  };

  useEffect(() => {
    dispatch(getStream(videoId));
  }, [dispatch, videoId]);

  console.log(renderContent(videoToDelete));
  return (
    <div>
      <Modal
        title="Delete Stream"
        content={renderContent(videoToDelete)}
        actions={renderActions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default VideosDestroy;
