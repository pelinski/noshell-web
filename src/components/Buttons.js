import React from "react";
import { Link } from "react-scroll";
import { isDesktopView } from "../api/Media";

export const ScrollDownButton = ({ scrollTo }) =>
    <Link to={scrollTo} smooth={true} offset={isDesktopView() && -50} duration={500}>
        | <br />
        | <br />
        | <br />
        | <br />
        v < br />
    </Link >