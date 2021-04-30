import React from 'react';
import '../../App.css';

function Button({buttonText, buttonType}){


return(
    <div className='button-box'>
        <button className='button' type={buttonType ? buttonType : null}>{buttonText}</button>
    </div>
)
}

export default Button;