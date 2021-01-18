import React from "react";
import { Form, Field } from "react-final-form";

const VideosCreate = () => {

    const renderInput = (props) => {
        console.log("The <Field> Props", props);
        return (
            <div className="field">
                <label>{props.label}</label>
                <input {...props.input}/>
            </div>
        );
    }


    return (
        <Form onSubmit={()=>console.log('form has been submitted')}>
            {(props)=>{
                console.log("The <Form> Props", props);
                return (
                    <form className="ui form" onSubmit={()=>console.log("Replace this function")}>
                        <Field name="title" render={renderInput} label="Channel Title"/>
                        <Field name="description" render={renderInput} label="Description"/>
                    </form>                
                )
            }}
        </Form>
    )
}

export default VideosCreate;