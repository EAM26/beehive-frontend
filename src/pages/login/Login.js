import React from 'react';
import styles from './Login.module.css';
import Button from "../../components/button/Button";
// import {useForm} from "react-hook-form";

function Login() {
    function onFormSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='outer-container'>
            <div className='inner-container'>

                    <form className={styles["week-outer"]} onSubmit={onFormSubmit}>
                        <fieldset className={styles["week-outer"]}>
                            <legend>Login</legend>
                            <label htmlFor="user-name">
                                <input type="text" id="user-name" name="name" placeholder="   Gebruikersnaam"/>
                            </label>
                            <label htmlFor="password">
                                <input type="password" id="password" name="password" placeholder="   Wachtwoord"/>
                            </label>
                            <p><a className={styles['login-a']} href="/week">Moeite met inloggen?</a></p>
                            <Button className={styles['login-button']} type="submit" text="Log in"/>
                        </fieldset>
                    </form>

            </div>
        </div>
    );
}

export default Login;