import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from './reusableComponents/Button';
import '../App.css';
import { useHistory } from 'react-router-dom';

// Form validation - errors created if requirements not met
const SignupSchema = Yup.object().shape({
firstName: Yup.string()
    .required('First name required.'),
password: Yup.string()
    .min(2, 'Password must be 6 characters long.')
    .max(20, 'Password is too long. Max 20 characters.')
    .required('Password is required.'),
email: Yup.string().email('Valid email required.').required('Valid email required.'),
});

const Login = ({userInfo, setUserInfo}) => {

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
    initialValues={userInfo}
    validationSchema={SignupSchema}
    onSubmit={(values, actions) => {
        actions.setSubmitting(true)
        setUserInfo(values)
        history.push('/success')
    }}>

    {({ errors, touched }) => (
        <Form className='form'>
        <div className='form-input'>
        <label className='label' htmlFor='firstName'>{errors.firstName && touched.firstName ? <span className='errors'>{errors.firstName}</span> : 'First Name'}</label>
        {errors.firstName && touched.firstName ? <Field name='firstName' className='errors-input'/> : <Field name="firstName" className='input'/>}
        </div>
        <div className='form-input'>
        <label className='label' htmlFor='email'>{errors.email && touched.email ? <span className='errors'>{errors.email}</span>: 'Email'}</label>
        {errors.email && touched.email ? <Field name="email" type="email" className='errors-input'/> : <Field name="email" type="email" className='input'/>}
        </div>
        <div className='form-input'>
        <label className='label' htmlFor='password'>{errors.password && touched.password ? <span className='errors'>{errors.password}</span>: 'Password'}</label>
        {errors.password && touched.password ? <Field name="password" className='errors-input' type='password'/> : <Field name="password" className='input' type='password'/>}
        </div>
        <Button buttonType='submit' buttonText='Sign In'/>
        </Form>
    )}
    </Formik>
</div>
    )
};

export default Login;