import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import 'react-a11y-footnotes/dist/styles.css'
import './App.scss';


import { HomePage } from "./pages/Home.page";
import { EssayPage } from "./pages/Essay.page";
import { Nav } from "./components/Nav";
import { Tldr } from "./pages/Tldr.page";

export const App = () =>
    <>
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/read" exact element={<EssayPage />} />
                <Route path="/tldr" exact element={<Tldr />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Nav/>
        </Router>
    </>
