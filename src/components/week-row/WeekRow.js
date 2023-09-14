import React from 'react';
import DayOfWeek from "../day-of-week/DayOfWeek";
import styles from './WeekRow.module.css'

function WeekRow() {
    return (
        <div>
            <ul className={styles['week-row']}>
            <DayOfWeek name={'ma'} date={'7/1/2021'}/>
            <DayOfWeek name={'di'} date={'8/1/2021'}/>
            <DayOfWeek name={'wo'} date={'9/1/2021'}/>
            <DayOfWeek name={'do'} date={'10/1/2021'}/>
            <DayOfWeek name={'vr'} date={'11/1/2021'}/>
            <DayOfWeek name={'za'} date={'12/1/2021'}/>
            <DayOfWeek name={'zo'} date={'13/1/2021'}/>

            </ul>
        </div>
    );
}

export default WeekRow;