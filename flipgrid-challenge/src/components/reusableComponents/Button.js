import React from 'react';

function Button({buttonText, buttonType}){


return(
    <button type={buttonType ? 'submit' : null}>{buttonText}</button>
)
}

export default Button;