import React from 'react';

function Button({buttonText, buttonType}){


return(
    <button type={buttonType ? buttonType : null}>{buttonText}</button>
)
}

export default Button;