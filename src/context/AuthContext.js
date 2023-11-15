import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: {},
    })
    const navigate = useNavigate();

    function login(user) {
        setAuth(
            {isAuth: true,
            user: null,
            }

        )
    }
    const data = null;



    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;