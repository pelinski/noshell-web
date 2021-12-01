import React from 'react'
import { useLocation, Link } from 'react-router-dom';

export const Nav = () => {
    const isHome = useLocation().pathname == "/";


    return (
        <nav>
            {isHome && <Link to='/read'>++read more--</Link>}
            <Link to='/video'>++a video in which i talk about this--</Link>
            <Link to='/aboutme'>++about me--</Link>
            <Link to='/'>++thx for reading :-)--</Link>
        </nav>)
}