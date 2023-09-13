import React from 'react';
// import styles from "../../pages/weekpage/Week.module.css";
import Button from "../button/Button";
import styles from './ButtonBar.module.css';
import {CalendarBlank, CaretLeft, CaretRight, ShareFat} from "@phosphor-icons/react";

function ButtonBar() {
    return (
        <>
            <div className={styles['button-bar']}>
                <div className={styles['bar-left']}>
                    <h3>WEEK 3</h3>
                    <div className={styles['icon-box']}>
                        <Button className={styles['left-caret']}>
                            <CaretLeft size={25} weight="bold"/>
                        </Button>
                        <Button className={styles['calender-icon']}>
                            <CalendarBlank size={25} weight="bold"/>
                        </Button>
                        <Button className={styles['right-caret']}>
                            <CaretRight size={25} weight="bold"/>
                        </Button>
                    </div>
                    <Button className={styles['today']} text={"VANDAAG"}/>
                </div>

                <div className={styles['bar-right']}>
                    <div className={styles['view-mode']}>
                        <Button className={styles['dag']} text='dag'/>
                        <Button className={styles['week']} text='week'/>
                    </div>
                    <Button className={styles['publish-icon']} text='publiceer'><ShareFat size={20} weight="fill"/></Button>
                </div>

            </div>
        </>
    );
}

export default ButtonBar;