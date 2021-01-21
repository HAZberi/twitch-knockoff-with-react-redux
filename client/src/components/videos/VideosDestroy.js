import React from "react";
import Modal from "../Modal";
import history from "../../history"

const VideosDestroy = () => {
  const renderActions = (
    <>
      <button className="ui red button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={renderActions}
        onDismiss={()=>history.push("/")}
      />
    </div>
  );
};

export default VideosDestroy;
