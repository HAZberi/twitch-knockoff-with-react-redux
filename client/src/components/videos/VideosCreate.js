import React from "react";
import VideosForm from "./VideosForm";
import { useDispatch } from "react-redux";
import { createStream } from "../../actions";

const VideosCreate = () => {

    const dispatch = useDispatch();

    const onSubmit = formValues => {
        dispatch(createStream(formValues));
    }


    return (
        <div>
            <h2>Create Stream</h2>
            <VideosForm onSubmit={onSubmit} />
        </div>
    )
}

export default VideosCreate;