import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Navigation from "./components/navigation/Navigation"
import Week from "./pages/week/Week";
import Chart from "./pages/chart/Chart";
import TempEmployees from "./pages/Temp/TempEmployees";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/week" element={<Week/>}/>
                <Route path="/chart" element={<Chart/>}/>
                <Route path="/temp_employees" element={<TempEmployees/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
