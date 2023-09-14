import React from 'react';
import styles from './WeekShift.module.css'
import DayShifts from "../day-shifts/DayShifts";

function WeekShift(props) {

    return (
        <>
            <div className={`${styles['team-name']} ${props.colorClass}`}>{props.teamName}</div>
            <div className={styles['shifts']}>
                <div><DayShifts colorClass={props.colorClass}/></div>
                <div><DayShifts colorClass={props.colorClass}/></div>
                <div><DayShifts colorClass={props.colorClass}/></div>
                <div><DayShifts colorClass={props.colorClass}/></div>
                <div><DayShifts colorClass={props.colorClass}/></div>
                <div><DayShifts colorClass={props.colorClass}/></div>
                <div><DayShifts colorClass={props.colorClass}/></div>

            </div>
        </>
    );
}

export default WeekShift;
