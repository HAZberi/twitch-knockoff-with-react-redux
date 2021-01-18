import React from "react";
import { Form, Field } from "react-final-form";

const VideosCreate = () => {

    const renderInput = () => {
        return (
            <input />
        );
    }


    return (
        <Form onSubmit={()=>console.log('form has been submitted')}>
            {(props)=>{
                console.log(props);
                return (
                    <form onSubmit={()=>console.log("Replace this function")}>
                        <Field name="title" render={renderInput}/>
                        <Field name="description" render={renderInput}/>
                    </form>                
                )
            }}
        </Form>
    )
}

export default VideosCreate;