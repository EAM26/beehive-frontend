import React from 'react';
import beehiveLogo from '../../assets/beehive.svg'
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className={`outer-container ${styles["nav-outer"]}`}>
                <div className={styles["nav-left"]}>
                    <img src={beehiveLogo} alt="beehive-logo"/>
                    <h2>Beehive</h2>
                </div>
                <div>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </div>

            </div>


        </>
    );
}

export default Navigation;