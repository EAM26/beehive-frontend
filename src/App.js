import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Navigation from "./components/navigation/Navigation"
import WeekPage from "./components/weekpage/WeekPage";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/week" element={<WeekPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
