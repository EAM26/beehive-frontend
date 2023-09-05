import React, { useState, useEffect } from 'react';
import Hexagon from "../../components/hexagon/Hexagon";
import styles from './Home.module.css';

function Home() {

    const initialSentences = [
        "How doth the little busy bee",
        "Improve each shining hour,",
        "And gather honey all the day",
        "From every opening flower!",
        "How skilfully she builds her cell!",
        "How neat she spreads the wax!",
        "And labors hard to store it well",
        "With the sweet food she makes.",
        "In works of labor or of skill,",
        "I would be busy too;",
        "For Satan finds some mischief still",
        "For idle hands to do.",
        "In books, or work, or healthful play,",
        "Let my first years be passed,",
        "That I may give for every day",
        "Some good account at last."
    ];
    const [sentences, setSentences] = useState(initialSentences);
    function handleClick() {
        console.log("click");
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Move the last sentence to the front
            const updatedSentences = [...sentences.slice(1), sentences[0]];
            setSentences(updatedSentences);
        }, 2000);

        return () => {
            clearInterval(intervalId); // Clear the interval when the component unmounts
        };
    }, [sentences]);

    return (
        <div className={styles["home-container"]}>
            <div className={styles["text-container"]}>
                <div className={`${styles["text-poem"]} ${styles["text-up"]}`}>{sentences[0]}</div>
                <div className={`${styles["text-poem"]} ${styles["text-left"]}`}>{sentences[3]}</div>
                <div className={`${styles["text-poem"]} ${styles["text-right"]}`}>{sentences[1]}</div>
                <div className={styles["hexagon-row"]}>
                    <Hexagon text="Rooster" onClick={handleClick}/>
                    <Hexagon text="Kaart" onClick={handleClick}/>
                </div>
                <Hexagon text="Kantoor" onClick={handleClick} className={styles["third-hexagon"]}/>
                <div className={`${styles["text-poem"]} ${styles["text-bottom"]}`}>{sentences[2]}
                </div>
            </div>
        </div>
    );
}

export default Home;
