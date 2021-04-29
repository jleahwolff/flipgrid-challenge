import React from 'react';
import '../App.css';

function Login(){
    return(
        <div>
        <div className='header'>
        <h2>Let's</h2>
        <h1>Sign Up</h1>
        <p>
            Use the form below to sign up for this super awesome service. You're only a few steps away!
        </p>
        <div className='form'>
            <form>
            <div className='form-input'>
                <label htmlFor='fNameInput'>First Name</label>
                <input
                    className='input' 
                    type='text'
                    placeholder=''
                    id='fNameInput'
                    name='fname'
                    >
                    </input>
                </div>
                <label htmlFor='emailInput'>Email Address</label>
            <input 
                type='text'
                placeholder=''
                id='emailInput'
                name='email'
                >
                </input>
                <label htmlFor='passInput'>Password</label>
            <input 
                type='text'
                placeholder=''
                id='passInput'
                name='pass'
                >
                </input>
            <button type='submit'>Submit</button>

                </form>
        </div>
        </div>

        </div>
    )
}

export default Login;