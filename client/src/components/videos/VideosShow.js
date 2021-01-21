import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStream } from "../../actions";

const VideosShow = (props) => {
  const videoId = props.match.params.id;
  const videoToShow = useSelector((state) => state.videos[videoId]);
  const dispatch = useDispatch();

  const render = (video) => {
    if (!video) return <div>Loading...</div>;
    return (
      <div>
        <h1>{video.title}</h1>
        <h4>{video.description}</h4>
      </div>
    );
  };

  useEffect(() => {
    dispatch(getStream(videoId));
  }, [dispatch, videoId]);
  return <div>{render(videoToShow)}</div>;
};

export default VideosShow;
