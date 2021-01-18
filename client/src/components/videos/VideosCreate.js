import React from "react";
import { Form, Field } from "react-final-form";

const VideosCreate = () => {
    return (
        <Form onSubmit={()=>console.log('form has been submitted')}>
            {(props)=>{
                console.log(props)
            }}
        </Form>
    )
}

export default VideosCreate;