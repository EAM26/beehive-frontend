import React from 'react';
import Shift from "../shift/Shift";

function DayShifts(props) {
    return (
        <ul>
            <Shift time={'09:00-17:00'} name={'Liesbeth'} colorClass={props.colorClass}/>
            <Shift time={'09:00-17:00'} name={'Jan'} colorClass={props.colorClass}/>
            <Shift time={'09:00-17:00'} name={'Liesbeth'} colorClass={props.colorClass}/>
            <Shift time={'09:00-17:00'} name={'Liesbeth'} colorClass={props.colorClass}/>
            <Shift time={'09:00-17:00'} name={'Liesbeth'} colorClass={props.colorClass}/>
            <Shift time={'09:00-17:00'} name={'Liesbeth'} colorClass={props.colorClass}/>
            <Shift time={'09:00-17:00'} name={'Liesbeth'} colorClass={props.colorClass}/>

        </ul>
    );
}

export default DayShifts;