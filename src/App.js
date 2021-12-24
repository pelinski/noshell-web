import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './scss/App.scss';


import { HomePage } from "./pages/Home.page";
import { EssayPage } from "./pages/Essay.page";
import { Nav } from "./components/Nav";
import { Tldr } from "./pages/Tldr.page";
import { VideoPage } from "./pages/Video.page";
import { AboutMePage } from "./pages/AboutMe.page";
import { WindowSizeContext, WindowSizeReporter } from "./api/Media";


export const App = () => {
    [width, height] = WindowSizeReporter()
    return (
        <div id='wrapper'>
            <WindowSizeContext.Provider value={{ width, height }}>
                <Router>
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/read" exact element={<EssayPage />} />
                        <Route path="/tldr" exact element={<Tldr />} />
                        <Route path="/video" exact element={<VideoPage />} />
                        <Route path="/me" exact element={<AboutMePage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <Nav />
                </Router>
            </WindowSizeContext.Provider>
        </div>
    )
}