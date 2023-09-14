import React from 'react';
import DayOfWeek from "../day-of-week/DayOfWeek";
import styles from './WeekRow.module.css'

function WeekRow() {
    return (
        <div>
            <ul className={styles['week-row']}>
            <DayOfWeek name={'ma'} date={'1/1/2021'}/>
            <DayOfWeek name={'di'} date={'1/1/2021'}/>
            <DayOfWeek name={'wo'} date={'1/1/2021'}/>
            <DayOfWeek name={'do'} date={'1/1/2021'}/>
            <DayOfWeek name={'vr'} date={'1/1/2021'}/>
            <DayOfWeek name={'za'} date={'1/1/2021'}/>
            <DayOfWeek name={'zo'} date={'1/1/2021'}/>

            </ul>
        </div>
    );
}

export default WeekRow;