import React from 'react';
import ButtonBar from "../../components/button_bar/ButtonBar";
import WeekRow from "../../components/week-row/WeekRow";

function Week() {
    return (
        //TODO: Add plus icon
        <div className={'outer-container'}>
            <div className={'inner-container'}>
                <section><ButtonBar/></section>
                <section><WeekRow/></section>
            </div>
        </div>
    );
}

export default Week;
