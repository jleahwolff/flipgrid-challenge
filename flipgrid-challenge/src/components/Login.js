import React from 'react';
import '../App.css';
import Button from './reusableComponents/Button';
import { useHistory } from 'react-router-dom';



const Login = () => {
    const history = useHistory()

    const onSuccess = (e) => {
        e.preventDefault();
        history.push('/success')
        // alert('success');
    }

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
            <form onSubmit={onSuccess}>
            <div className='form-input'>
                <label className='label' htmlFor='fNameInput'>First Name</label>
                <input
                    className='input' 
                    type='text'
                    placeholder=''
                    id='fNameInput'
                    name='fname'
                    >
                    </input>
                </div>
            <div className='form-input'>
                <label className='label' htmlFor='emailInput'>Email Address</label>
                <input 
                    className='input' 
                    type='text'
                    placeholder=''
                    id='emailInput'
                    name='email'
                    >
                    </input>
                </div>
            <div className='form-input'>
                <label className='label' htmlFor='passInput'>Password</label>
                <input 
                    className='input' 
                    type='text'
                    placeholder=''
                    id='passInput'
                    name='pass'
                    >
                    </input>
                </div>
            <Button buttonType='submit' buttonText='Sign Up'/>

                </form>
        </div>
        

        </div>
    )
}

export default Login;