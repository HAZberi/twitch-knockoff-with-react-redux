import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStream } from "../../actions"
//Route params are variables in our pathname like :id -- see <Router />
//In order to access params with access default props.
//Since the component is linked with Router TAG we automatically recieve some
//default props
//these default props has properties like match, history, pathname etc.
//toggle the console.log to see default props

//At this point we are only able to retrieve the videotoedit if we
//have been redirected from videoList Homepage where all the data loading
//actually happens for the first time
//So if we just refresh the edit page we have to re-fetch data from the db
//So the main point to remeber is
//With React=Router, each component needs to be designed to work in isolation
//(fetch its own data)
const VideosEdit = (props) => {
  const videoId = props.match.params.id;
  const videoToEdit = useSelector(
    (state) => state.videos[videoId]
  );
  const dispatch = useDispatch();

  const renderEditForm = (video) => {
    if(!video) return <div>Loading...</div>
    return (
      <div>{video.title}</div>
    )
  }
  useEffect(()=>{
    dispatch(getStream(videoId))
  },[dispatch, videoId])

  //console.log(props, videoToEdit);
  return (
    <>
      {renderEditForm(videoToEdit)}
    </>
  )
};

export default VideosEdit;
