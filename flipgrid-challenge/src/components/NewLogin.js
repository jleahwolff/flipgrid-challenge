import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from './reusableComponents/Button';
import '../App.css';
import { useHistory } from 'react-router-dom';

// Form validation - errors created if requirements not met
const SignupSchema = Yup.object().shape({
firstName: Yup.string()
    .min(1, 'Name must be at least 1 character long.')
    .required('First name required'),
password: Yup.string()
    .min(2, 'Password must be 6 characters long.')
    .max(20, 'Password is too long. Max 20 characters.')
    .required('Password is required'),
email: Yup.string().email('Please enter a valid email').required('Valid email required'),
});


// Pushes us to the Success Page after successful login
// const OnSuccess = (e) => {
    //     console.log('running');
    //     // e.preventDefault();
    //     const history = useHistory();
    //     history.push('/success')
    //     alert('success');
    // };
const HandleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    console.log(values)
    console.log(actions)
    // console.log(history, 'histroy');
    // history.push('/success')

}

const ValidationSchemaExample = () => {

    const history  = useHistory();

    return(
    <div className='login-box'>
    <div className='header'>
    <h2>Let's</h2>
    <h1>Signup</h1>
    </div>
    <div>
        <p>
            Use the form below to sign up for this super awesome service. You're only a few steps away!
        </p>
        </div>
    <Formik
    initialValues={{
        firstName: '',
        email: '',
        password: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, actions) => {
        HandleSubmit(values, actions)
        console.log('submitted');
        history.push('/success')
    }}>

    {({ errors, touched }) => (
        <Form className='form'>
        <div className='form-input'>
        <label className='label' htmlFor='firstName'>{errors.firstName && touched.firstName ? errors.firstName : 'First Name'}</label>
        <Field name="firstName" className='input'/>
        {/* {errors.firstName && touched.firstName ? (
            <div className='errors'>{errors.firstName}</div>
            ) : null} */}
        </div>
        <div className='form-input'>
        <label className='label' htmlFor='email'>Email</label>
        <Field name="email" type="email" className='input'/>
        {/* {errors.email && touched.email ? 
        <div className='errors'>{errors.email}</div> : null} */}
        </div>
        <div className='form-input'>
        <label className='label' htmlFor='password'>Password</label>
        <Field name="password" className='input' type='password'/>
        {/* {errors.password && touched.password ? (
            <div className='errors'>{errors.password}</div>
        ) : null} */}
        </div>
        <Button buttonType='submit' buttonText='Sign In'/>
        </Form>
    )}
    </Formik>
</div>
    )
};

export default ValidationSchemaExample;