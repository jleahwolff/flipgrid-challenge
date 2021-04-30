import React, { useState, useEffect } from 'react';
import '../App.css';
import Button from './reusableComponents/Button';
import { useHistory } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = ({values, errors, touched, status}) => {
    
    // console.log('values', values);
    // console.log('errors', errors);
    // console.log('touched', touched);

    // local state that holds form submission data
    const [login, setLogin] = useState([]);

    useEffect(() => {
        console.log('input has changed!', status);
        status && setLogin(login => [...login, status]);
    }, [status]);


// Push the form to Success Page after form submit
    // const history = useHistory()

    // const onSuccess = (e) => {
    //     e.preventDefault();
    //     history.push('/success')
    //     // alert('success');
    // }

    return(
        <div className='login-box'>
        <div className='header'>
        <h2>Let's</h2>
        <h1>Sign Up</h1>
        </div>
        <div>
            <p>
                Use the form below to sign up for this super awesome service. You're only a few steps away!
            </p>
        </div>
        <div className='form'>
            {/* <Form onSubmit={onSuccess}> */}
            <Form>
            <div className='form-input'>
                <label className='label' htmlFor='fNameInput'>First Name
                </label>
                <Field
                    className='input' 
                    type='text'
                    placeholder=''
                    id='fName'
                    name='fname'
                    />
            </div>
            <div className='form-input'>
                <label className='label' htmlFor='emailInput'>Email Address
                </label>
                <Field 
                    className='input' 
                    type='text'
                    placeholder=''
                    id='email'
                    name='email'
                    />
                </div>
            <div className='form-input'>
                <label className='label' htmlFor='passInput'>Password
                </label>
                <Field
                    className='input' 
                    type='text'
                    placeholder=''
                    id='pass'
                    name='pass'
                    />
                    
                </div>
            <Button buttonType='submit' buttonText='Sign Up'/>
        </Form>
        </div>
        
        </div>
    )
}


const FormikLoginForm = withFormik({

    mapPropsToValues(props){
        return {
            fName: props.fName || '',
            email: props.email || '',
            pass: props.pass || ''
        };
    },

    validationSchema: Yup.object().shape({
        fName: Yup.string().required(),
        email: Yup.string().required('Email is required.')
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('submitted', values);
        axios
        .post('https://reqres.in/api/users/', values)
        .then(res => {
            console.log('success', res);
            setStatus(res.data);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }
})(Login);

export default FormikLoginForm;