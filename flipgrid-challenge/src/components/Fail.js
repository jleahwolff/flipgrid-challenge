// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import Button from './reusableComponents/Button';
// import { useHistory } from 'react-router-dom';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';


// const SignupSchema = Yup.object().shape({
//     fName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//     email: Yup.string()
//     .email('Invalid Email')
//     .required('Email is required.'),
//     pass: Yup.string()
//     .min(4, 'Password must be at least 4 characters long.')
// });


//     //     handleSubmit(values, {setStatus, resetForm}) {
//     //         console.log('submitted', values);
//     //         axios
//     //         .post('https://reqres.in/api/users/', values)
//     //         .then(res => {
//     //             console.log('success', res);
//     //             setStatus(res.data);
//     //             resetForm();
//     //         })
//     //         .catch(err => console.log(err.response));
//     //     }
//     // })(Login);
    

// export const Login = () => {
    
//     // console.log('values', values);
//     console.log('errors', errors);
//     // console.log('touched', touched);

// // Push the form to Success Page after form submit
//     // const history = useHistory()

//     // const onSuccess = (e) => {
//     //     e.preventDefault();
//     //     history.push('/success')
//     //     // alert('success');
//     // }

//     return(
//         <div className='login-box'>
//         <div className='header'>
//         <h2>Let's</h2>
//         <h1>Sign Up</h1>
//         </div>
//         <div>
//             <p>
//                 Use the form below to sign up for this super awesome service. You're only a few steps away!
//             </p>
//         </div>
//         <Formik
//             className='form'
//             initialValues={{
//                 fName: '',
//                 email: '',
//                 pass: ''
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {
//                 console.log(values);
//             }}
//             >
        
//             {/* <Form onSubmit={onSuccess}> */}
//             <Form>
//             <div className='form-input'>
//                 <label className='label' htmlFor='fNameInput'>First Name
//                 </label>
//                 <Field
//                     className='input' 
//                     type='text'
//                     placeholder=''
//                     id='fName'
//                     name='fName'
//                     />
//                 {touched.fName && errors.fName ? (
//                     <p className='errors'>{errors.fName}</p>
//                     ): null}
//             </div>
//             <div className='form-input'>
//                 <label className='label' htmlFor='emailInput'>Email Address
//                 </label>
//                 <Field 
//                     className='input' 
//                     type='text'
//                     placeholder=''
//                     id='email'
//                     name='email'
//                     />
//                 {touched.email && errors.email ? (
//                     <p className='errors'>{errors.email}</p>
//                     ) : null}
//                 </div>
//             <Button buttonType='submit' buttonText='Sign Up'/>
//         </Form>
//         </Formik>
        
//         {userLogin.map(user => {
//             return (
//                 <ul key={user.id}>
//                     <li>First Name: {user.fName}</li>
//                     <li>Email: {user.email}</li>
//                 </ul>
//             )
//         })}
//         </div>
//     )
// }

