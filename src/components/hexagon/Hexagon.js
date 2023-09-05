import React from 'react';
import styles from './Hexagon.module.css';

function Hexagon({ type, text, onClick, className }) {
    return (
        <button className={`${styles.hexagonButton} ${className}`} type={type} onClick={onClick}>
            {text}
        </button>
    );
}

export default Hexagon;