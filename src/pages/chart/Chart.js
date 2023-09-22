import React from 'react';
import styles from './Chart.module.css';
import originalBee from '../../assets/original-bee.svg';

function Chart() {
    return (
        <div className={'outer-container'}>
            <div className={'inner-container'}>
                <div className={styles['chart-outer']}>
                    <div className={styles['chart-head']}>
                        <img src={originalBee} alt="bee-logo"/>
                        <h2 className={styles['chart-h2']}>CHART</h2>
                    </div>
                    <div className={styles['chart-content']}>
                        <div className={styles['chart-content-left']}>
                            <p>TEST</p>
                            <p>TEST</p>
                            <p>TEST</p>
                            <p>TEST</p>
                        </div>
                        <div className={styles['chart-content-right']}>
                            <p>TEST</p>
                            <p>TEST</p>
                            <p>TEST</p>
                            <p>TEST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart;