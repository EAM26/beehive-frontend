import React from 'react';
import styles from './Button.module.css';

function Button({type, text, onClick, className, children}) {
    return (
        <button  type={type} className={`${styles['general-button']} ${className}`} onClick={onClick}>
            {children}
            {text}
        </button>
    );
}

export default Button;