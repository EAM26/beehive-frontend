import React from 'react';
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
                        <Button className={`${styles['left-caret']} ${styles['bar-button']}`}>
                            <CaretLeft size={25} weight="bold"/>
                        </Button>
                        <Button className={`${styles['calender-icon']} ${styles['bar-button']}`}>
                            <CalendarBlank size={25} weight="bold"/>
                        </Button>
                        <Button className={`${styles['right-caret']} ${styles['bar-button']}`}>
                            <CaretRight size={25} weight="bold"/>
                        </Button>
                    </div>
                    <Button className={`${styles['today']} ${styles['bar-button']}`} text={"VANDAAG"}/>
                </div>

                <div className={styles['bar-right']}>
                    <div className={styles['view-mode']}>
                        <Button className={`${styles['dag']} ${styles['bar-button']}`} text='dag'/>
                        <Button className={`${styles['week']} ${styles['bar-button']}`} text='week'/>
                    </div>
                    <Button className={`${styles['publish-icon']} ${styles['bar-button']}`} spanClass={styles['publish-text-button']} text='publiceer'><ShareFat size={25} weight="fill"/></Button>
                </div>

            </div>
        </>
    );
}

export default ButtonBar;