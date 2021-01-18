import React from "react";
import { Form, Field } from "react-final-form";

const VideosCreate = () => {

    const renderInput = (props) => {
        console.log("The <Field> Props", props);
        return (
            <div className="field">
                <label>{props.label}</label>
                <input {...props.input} autoComplete="off"/>
                <div>{props.meta.error}</div>
            </div>
        );
    }

    const onSubmit = formValues => {
        console.log(formValues);
    }

    const validate = formValues => {
        const errors = {};
        if(!formValues.title){
            //if user hasn't entered any title then this will run
            errors.title = "You must enter a title";
        }
        if(!formValues.description){
            errors.description = "You must enter some description"
        }
        return errors;
    }

    return (
        <Form onSubmit={onSubmit} validate={validate}>
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