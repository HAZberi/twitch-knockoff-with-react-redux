import React, { useEffect, useRef } from "react";
import flv from "flv.js";

/* flv.js acts like axios or fetch it get the data from a remote server
  and injects the video in our html 5 video player Simple!!
*/





import { useSelector, useDispatch } from "react-redux";
import { getStream } from "../../actions";

const VideosShow = (props) => {
  const videoId = props.match.params.id;
  const videoToShow = useSelector((state) => state.videos[videoId]);
  const dispatch = useDispatch();

  const videoPlayer = useRef();

  const render = (video) => {
    if (!video) return <div>Loading...</div>;
    return (
      <div>
        <video ref={videoPlayer} style={{width: "100%"}} controls />
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
