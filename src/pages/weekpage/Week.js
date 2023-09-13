import React from 'react';
import Button from "../../components/button/Button";
import styles from './Week.module.css'
import {CalendarBlank, CaretLeft, CaretRight, ShareFat} from "@phosphor-icons/react";

function Week() {
    return (
        //TODO: Add plus icon
        <div className={'outer-container'}>
            <div className={'inner-container'}>
                <div className={styles['button-bar']}>
                    <div className={styles['bar-left']}>
                        <h3>WEEK 3</h3>
                        <div className={styles['icon-box']}>
                            <Button className={styles['left-caret']}>
                                <CaretLeft size={20}/>
                            </Button>
                            <Button className={styles['calender-icon']}>
                                <CalendarBlank size={20}/>
                            </Button>
                            <Button className={styles['right-caret']}>
                                <CaretRight size={20}/>
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
            </div>

        </div>
    );
}

export default Week;
