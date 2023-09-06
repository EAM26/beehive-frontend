import React from 'react';
import './WeekPage.module.css'
import styles from './WeekPage.module.css'
import Button from "../button/Button";
import caret_left from '../../assets/caret-left.svg'
import caret_right from '../../assets/caret-right.svg'
import calendar from '../../assets/calendar.svg'



function WeekPage() {
    return (
        <div className={`outer-container ${styles["week-outer"]}`}>
            <div className={"inner-container"}>
                <section className={styles["options-bar"]}>
                    <p>Week 3</p>
                    <div className={styles["icon-box"]}>
                        <Button><img src={caret_left} alt="icon"/></Button>
                        <Button><img src={calendar} alt="icon"/></Button>
                        <Button><img src={caret_right} alt="icon"/></Button>
                    </div>
                    <Button text="VANDAAG"/>
                    <Button text="DAG"/>
                    <Button text="WEEK"/>
                    <Button text="PUBLICEREN"/>


                </section>
                <section></section>
                <section></section>
                <section></section>
            </div>
        </div>
    );
}

export default WeekPage;