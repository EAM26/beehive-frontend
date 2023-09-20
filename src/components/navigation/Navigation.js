import React from 'react';
import beehiveLogo from '../../assets/beehive.svg'
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className={`outer-container ${styles["nav-outer"]}`}>
                <NavLink to="/" className={styles['nav-style']}>
                    <div className={styles["nav-left"]}>
                        <img className={styles['nav-img']} src={beehiveLogo} alt="beehive-logo"/>
                        <h2 className={styles['nav-h2']}>Beehive</h2>
                    </div>
                </NavLink>
                <div>
                    <NavLink to="/login" className={styles['nav-text']}>
                        Login
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navigation;