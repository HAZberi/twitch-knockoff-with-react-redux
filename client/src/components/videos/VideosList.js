import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStreams } from "../../actions";

const VideosList = () => {

  const videosList = useSelector(state => Object.values(state.videos));
  const dispatch = useDispatch();

  const renderList = (videosList) => {
    return videosList?.map((video) => {
      return(
        <div className="item" key={video.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {video.title}
            <div className="description">
              {video.description}
            </div>
          </div>
        </div>
        )
    }
    )
  }

  useEffect(()=>{
    dispatch(getStreams());
  },[dispatch]);

  return (
    <div className="ui celled list">{renderList(videosList)}</div>
  );
};

export default VideosList;
