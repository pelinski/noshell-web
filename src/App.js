import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import 'react-a11y-footnotes/dist/styles.css'
import './App.scss';


import { HomePage } from "./pages/Home.page";
import { EssayPage } from "./pages/Essay.page";

export const App = () =>
    <>
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/read" exact element={<EssayPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <nav> <Link to='/read'>read more</Link>  <Link to='/video'>a video in which i talk about this</Link> <Link to='/aboutme'>me</Link> <Link to='/'>thx for reading :-)</Link> </nav>

        </Router>
    </>
