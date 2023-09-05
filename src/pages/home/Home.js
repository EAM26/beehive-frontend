import React from 'react';
import Hexagon from "../../components/hexagon/Hexagon";
import styles from './Home.module.css';

function Home() {
    function handleClick() {
        console.log("click");
    }

    return (
        <div className={styles["home-container"]}>
            <div className={styles["text-container"]}>
                <div className={`${styles["text-poem"]} ${styles["text-up"]}`}>How doth the little busy bee
                </div>
                <div className={`${styles["text-poem"]} ${styles["text-left"]}`}>From every shining flower!</div>
                <div className={`${styles["text-poem"]} ${styles["text-right"]}`}>Improve each shining hour,</div>
                <div className={styles["hexagon-row"]}>
                    <Hexagon text="Rooster" onClick={handleClick}/>
                    <Hexagon text="Kaart" onClick={handleClick}/>
                </div>
                <Hexagon text="Kantoor" onClick={handleClick} className={styles["third-hexagon"]}/>
                <div className={`${styles["text-poem"]} ${styles["text-bottom"]}`}>And gather honey all the day
                </div>
            </div>
        </div>
    );
}

export default Home;
