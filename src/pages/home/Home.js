import React from 'react';
import Hexagon from "../../components/hexagon/Hexagon";
import styles from './Home.module.css'


function Home() {
    function handleClick() {
        console.log("click");
    }
    return (
        <div className={styles["home-container"]}>
            <div className={styles["hexagon-row"]}>
                <Hexagon text="Rooster" onClick={handleClick}/>
                <Hexagon text="Kaart" onClick={handleClick}/>
            </div>
            <Hexagon text="Kantoor" onClick={handleClick} className={styles["third-hexagon"]}/>
        </div>
    );
}

export default Home;