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
            <label htmlFor='fNameInput'>First Name</label>
            <input 
                type='text'
                placeholder=''
                id='fNameInput'
                name='fname'
                >
                    
                </input>
                </form>
        </div>
        </div>

        </div>
    )
}

export default Login;