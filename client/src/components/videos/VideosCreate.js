import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { createStream } from "../../actions";

const VideosCreate = () => {

    const dispatch = useDispatch();

    const renderInput = (props) => {
        //console.log("The <Field> Props", props);
        const classNames = `field ${props.meta.error && props.meta.touched ? "error" : ""}`
        return (
            <div className={classNames}>
                <label>{props.label}</label>
                <input {...props.input} autoComplete="off"/>
                {renderError(props.meta)}
            </div>
        );
    }

    const renderError = ({error, touched}) => {
        if(touched && error){
            return (
                <div className="">
                    <div className="ui pointing red basic label">{error}</div>
                </div>
            )
        }
    }

    const onSubmit = formValues => {
        dispatch(createStream(formValues));
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
                //console.log("The <Form> Props", props);
                return (
                    //if error class is not added then errors will not display 
                    //this would be sementic ui
                    <form className="ui form error" onSubmit={props.handleSubmit}>
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