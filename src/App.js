import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
// import Navigation from "./components/navigation/Navigation";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Navigation from "./components/navigation/Navigation"

function App() {
    return (
        <div className="app-container">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
