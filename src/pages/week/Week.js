import React from 'react';
import ButtonBar from "../../components/button_bar/ButtonBar";
import WeekRow from "../../components/week-row/WeekRow";
import WeekShift from "../../components/week-shifts/WeekShift";
import styles from './Week.module.css'
import {colorOptions, colorPicker} from "../../utils/utils";

function Week() {


    return (
        //TODO: Add plus icon
        <div className={'outer-container'}>
            <div className={'inner-container'}>
                <div className={styles['week-page']}>
                    <section className={styles['week-section']}><ButtonBar/></section>
                    <section className={styles['week-section']}><WeekRow/></section>
                    {/*TODO: Create helper function for colorpicker*/}
                    <section className={styles['week-section']}><WeekShift teamName={"Bediening"}
                                        colorClass={colorPicker(colorOptions)}/>
                    </section>
                    <section className={styles['week-section']}><WeekShift teamName={"Bar"}
                                        colorClass={colorPicker(colorOptions)}/>
                    </section>
                    <section className={styles['week-section']}><WeekShift teamName={"Keuken"}
                                        colorClass={colorPicker(colorOptions)}/>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Week;
