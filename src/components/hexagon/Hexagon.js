import React from 'react';
import styles from './Hexagon.module.css';

function Hexagon({ text, onClick, className }) {
    return (
        <button className={`${styles.hexagonButton} ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Hexagon;