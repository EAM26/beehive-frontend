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
                    <form className={styles['chart-content']}>
                        <div className={styles['chart-content-left']}>
                            <label className={styles['chart-label']} htmlFor="first-name">Voornaam<input type="text"/></label>
                            <label className={styles['chart-label']} htmlFor="preposition">Tussenvoegsel<input type="text"/></label>
                            <label className={styles['chart-label']} htmlFor="last-name">Achternaam:<input type="text"/></label>
                            <label className={styles['chart-label']} htmlFor="email">Email:<input type="email"/></label>
                        </div>
                        <div className={styles['chart-content-right']}>
                            <label className={styles['chart-label']} htmlFor="first-name">Voornaam<input type="text"/></label>
                            <label className={styles['chart-label']} htmlFor="preposition">Tussenvoegsel<input type="text"/></label>
                            <label className={styles['chart-label']} htmlFor="last-name">Achternaam:<input type="text"/></label>
                            <label className={styles['chart-label']} htmlFor="email">Email:<input type="email"/></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chart;