import React, {createContext} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();
    const data = null;

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;