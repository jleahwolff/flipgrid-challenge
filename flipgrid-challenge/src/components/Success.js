import React, { useState, useEffect } from 'react';
import '../App.css';

import Button from './reusableComponents/Button';

function Success(){
    return(
        <div>
            <div className='header'>
            <h2>Welcome,</h2>
            <h1>First Name</h1>
            </div>
            <p>
                You have been registered for this awesome service. 
                <br></br>Please check your email listed below for instructions.
            </p>
            <h3>
                Email
            </h3>
            <Button buttonType='signup' buttonText='Sign Up'/>
        </div>
    )
}
export default Success;