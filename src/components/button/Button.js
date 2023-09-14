import React from 'react';
import styles from './Button.module.css';

function Button({type, text, onClick, className, children, spanClass}) {
    return (
        <button  type={type} className={`${styles['general-button']} ${className}`} onClick={onClick}>
            {children}
            <span className={spanClass}>{text}</span>
        </button>
    );
}

export default Button;
