import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { getStream, editStream } from "../../actions";
import VideosForm from "./VideosForm";
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
      <div>
        <h2>Edit Stream</h2>
        {/*At this point we are passing the entire video object, which work fine for the 
        purposes of this application. But for complex applications its not how its done.
        we should avoid updating/replacing properities that will not changes
        once the inital stream has been created. So its always recommended to just make the 
        changes to properties that we actually need to change, a good example would be use lodash
        _.pick method which select specified properties of an object and return a new object
        with selected properties like so*/}
        <VideosForm onSubmit={onSubmit} initialValues={_.pick(videoToEdit, "title", "description")}/>
      </div>
    )
  }
  useEffect(()=>{
    dispatch(getStream(videoId))
  },[dispatch, videoId])

  const onSubmit = (formValues) => {
    dispatch(editStream(videoId, formValues));
  }

  //console.log(props, videoToEdit);
  return (
    <>
      {renderEditForm(videoToEdit)}
    </>
  )
};

export default VideosEdit;
