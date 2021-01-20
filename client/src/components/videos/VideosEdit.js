import React from "react";

//Route params are variables in our pathname like :id -- see <Router />
//In order to access params with access default props.
//Since the component is linked with Router TAG we automatically recieve some
//default props
//these default props has properties like match, history, pathname etc. 
//toggle the console.log to see default props
const VideosEdit = (props) => {
  console.log(props);
  return <div>VideosEdit</div>;
};

export default VideosEdit;
