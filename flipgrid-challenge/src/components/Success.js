import React from 'react';
import '../App.css';

import Button from './reusableComponents/Button';

function Success({userInfo}){

    return(
        <div>
            <div className='header'>
            <h2>Welcome,</h2>
            <h1>{userInfo.firstName}</h1>
            </div>
            <div className='para-box'>
            <p className='success-para'>
                You have been registered for this awesome service. 
            Please check your email listed below for instructions.
            </p>
            
            
            </div>
            <h3>
                {userInfo.email}
            </h3>
            <Button buttonType='submit' alt='Sign In' buttonText='Sign In'/>
        </div>
    )
}
export default Success;