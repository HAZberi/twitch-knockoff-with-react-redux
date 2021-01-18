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

    const onSubmit = formValues => {
        console.log(formValues);
    }

    return (
        <Form onSubmit={onSubmit}>
            {(props)=>{
                console.log("The <Form> Props", props);
                return (
                    <form className="ui form" onSubmit={props.handleSubmit}>
                        <Field name="title" render={renderInput} label="Channel Title"/>
                        <Field name="description" render={renderInput} label="Description"/>
                        <button className="ui red large button">Submit</button>
                    </form>                
                )
            }}
        </Form>
    )
}

export default VideosCreate;