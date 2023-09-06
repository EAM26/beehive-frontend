import React from 'react';
import './WeekPage.module.css'
import styles from './WeekPage.module.css'
import Button from "../button/Button";
import {CalendarBlank, CaretLeft, CaretRight} from "@phosphor-icons/react";


function WeekPage() {
    return (
        <div className={`outer-container ${styles["week-outer"]}`}>
            <div className={`inner-container ${styles["week-inner"]}`}>
                <section className={styles["options-bar-general"]}>
                    <div className={styles["options-bar-left"]}>
                        <p>Week 3</p>
                        <div className={styles["icon-box"]}>
                            <Button className={`${styles["car-left"]} ${styles["no_border_button"]}`}><CaretLeft
                                size={20}/></Button>
                            <Button className={`${styles["no_border_button"]}`}><CalendarBlank size={20}/></Button>
                            <Button className={`${styles["car-right"]} ${styles["no_border_button"]}`}><CaretRight
                                size={20}/></Button>
                        </div>
                        <Button text="VANDAAG"/>
                    </div>
                    <div className={styles["options-bar-right"]}>
                        <div className={styles.test}>
                            <Button className={`${styles["dag-but"]} ${styles["no_border_button"]}`} text="DAG"/>
                            <Button className={`${styles["week-but"]} ${styles["no_border_button"]}`} text="WEEK"/>
                        </div>
                        <Button className={styles.test} text="PUBLICEREN"/>
                    </div>

                </section>
                {/*<section>*/}
                {/*    /!*<div>BEDIENING</div>*!/*/}
                {/*</section>*/}
                {/*<section></section>*/}
                {/*<section></section>*/}
            </div>
        </div>
    );
}

export default WeekPage;