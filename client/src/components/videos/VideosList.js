import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStreams } from "../../actions";

const VideosList = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getStreams());
  },[dispatch])

  return <div>VideosList</div>;
};

export default VideosList;
