import React from 'react';
import styles from './Shift.module.css'

function Shift(props) {

    return (
        <li className={`${styles['list-styling']} ${props.colorClass}`}>
            <span className={styles['span-styling']}>{props.time}</span>
            <span className={styles['span-styling']}>{props.name}</span>
        </li>
    );
}

export default Shift;