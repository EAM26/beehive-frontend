import React, {useContext, useState} from 'react';
import styles from './Login.module.css';
import Button from "../../components/button/Button";
import originalBee from '../../assets/original-bee.svg';
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";


function Login() {

    const {register, formState: {errors} ,handleSubmit,  reset} = useForm();
    const {login} = useContext(AuthContext);


    async function handleFormSubmit(data) {
        try {
            const response = await axios.post("http://localhost:8080/authenticate",
                {
                    username: data.name.trim(),
                    password: data.password
                })
            console.log(response.data.jwt)
            login(response.data.jwt, "/home")

        } catch (e) {
            console.error(e)
        }

    }

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <form className={styles["week-outer"]} onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className={styles['head-login']}>
                        <img src={originalBee} alt="original-bee"/>
                        <h2 className={styles['header-text']}>Bee Login</h2>
                    </div>
                    <div className={styles['form-field']}>
                        <p>Voer hieronder je gebruikersnaam en wachtwoord in om in te
                            loggen</p>
                        <label htmlFor="user-name">
                            <input
                                className={styles['input-field']}
                                type="text" id="user-name"
                                placeholder="Gebruikersnaam"
                                {...register("name")}/>
                        </label>
                        <label htmlFor="password">
                            <input
                                className={styles['input-field']}
                                type="password" id="password"
                                placeholder="Wachtwoord"
                                {...register("password")}/>
                        </label>
                        <a className={styles['login-a']} href="/week">Moeite met inloggen?</a>
                        <Button className={styles['login-button']}
                                type="submit"
                                text="Log in"/>
                    </div>
                </form>
            </div>
        </div>
    );

}

// function Login() {
//     function onFormSubmit(event) {
//         event.preventDefault();
//     }
//
//     return (
//         <div className='outer-container'>
//             <div className='inner-container'>
//                     <form className={styles["week-outer"]} onSubmit={onFormSubmit}>
//                             <div className={styles['head-login']}>
//                                 <img src={originalBee} alt="original-bee"/>
//                                 <h2 className={styles['header-text']}>Bee Login</h2>
//                             </div>
//                         <div className={styles['form-field']}><p>Voer hieronder je gebruikersnaam en wachtwoord in om in te loggen</p>
//                             <label htmlFor="user-name">
//                                 <input className={styles['input-field']} type="text" id="user-name" name="name" placeholder="Gebruikersnaam"/>
//                             </label>
//                             <label htmlFor="password">
//                                 <input className={styles['input-field']} type="password" id="password" name="password" placeholder="Wachtwoord"/>
//                             </label>
//                             <a className={styles['login-a']} href="/week">Moeite met inloggen?</a>
//                             <Button className={styles['login-button']} type="submit" text="Log in"/></div>
//                     </form>
//
//             </div>
//         </div>
//     );
// }

export default Login;