import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import './App.scss';


import { HomePage } from "./pages/Home.page.js";
import { EssayPage } from "./pages/Essay.page.js";
import { Nav } from "./components/Nav.js";
import { Tldr } from "./pages/Tldr.page.js";
import { VideoPage } from "./pages/Video.page.js";
import { AboutMePage } from "./pages/AboutMe.page.js";

export const App = () =>
    <>
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
    </>
