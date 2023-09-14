import React from 'react';
import ButtonBar from "../../components/button_bar/ButtonBar";
import WeekRow from "../../components/week-row/WeekRow";
import WeekShift from "../../components/week-shifts/WeekShift";
import styles from './Week.module.css'

function Week() {

    const colorOptions = ['background-orange', 'background-turquoise', 'background-green', 'background-peach', 'background-mint',];
    return (
        //TODO: Add plus icon
        <div className={'outer-container'}>
            <div className={'inner-container'}>
                <div className={styles['week-page']}>
                    <section><ButtonBar/></section>
                    <section><WeekRow/></section>
                    {/*TODO: Create helper function for colorpicker*/}
                    <section><WeekShift teamName={"Bediening"}
                                        colorClass={colorOptions[Math.floor(Math.random() * colorOptions.length)]}/>
                    </section>
                    <section><WeekShift teamName={"Bar"}
                                        colorClass={colorOptions[Math.floor(Math.random() * colorOptions.length)]}/>
                    </section>
                    <section><WeekShift teamName={"Keuken"}
                                        colorClass={colorOptions[Math.floor(Math.random() * colorOptions.length)]}/>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Week;
