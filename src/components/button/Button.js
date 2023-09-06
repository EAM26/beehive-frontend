import React from 'react';

function Button({ type, text, onClick, className, children }) {
    return (
        <button type={type} className= { className} onClick={onClick}>
            {children}
            {text}
        </button>
    );
}

export default Button;