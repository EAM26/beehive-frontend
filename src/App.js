import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
// import Navigation from "./components/navigation/Navigation";
import Login from "./pages/login/Login";
import MainMenu from "./pages/mainMenu/MainMenu";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <>
            {/*<Navigation/>*/}
            <Routes>
                <Route path="/" element={<MainMenu/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
