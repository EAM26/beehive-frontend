import React from 'react';
import styles from './DayOfWeek.module.css'

function DayOfWeek(props) {
    return (
        <li className={styles['list-styling']}>
            <span className={styles['span-styling']}>{props.name}</span>
            <span className={styles['span-styling']}>{props.date}</span>
        </li>
    );
}

export default DayOfWeek;