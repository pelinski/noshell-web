import React from "react";
import { Link } from "react-scroll";

export const ScrollButton = ({ scrollTo, flip = false }) =>
    <Link to={scrollTo} smooth={true} offset={0} duration={500} className={flip ? "button flip" : "button"}>
        _____<span>/\\\</span>________<span>/\\\</span>______<br />
        &nbsp;____<span>\/\\\</span>_______<span>\/\\\</span>______<br />
        &nbsp;&nbsp;____<span>\//\\\</span>______<span>/\\\</span>_______<br />
        &nbsp;&nbsp;&nbsp;_____<span>\//\\\</span>____<span>/\\\</span>________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;______<span>\//\\\</span>__<span>/\\\</span>_________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______<span>\//\\\/\\\</span>__________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________<span>\//\\\\\</span>___________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\//\\\</span>____________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___________<span>\///</span>_____________<br />
    </Link >

export const ScrollDownLargeButton = ({ scrollTo }) =>
    <Link to={scrollTo} smooth={true} offset={0} duration={500} className="button">
        __________<span>/\\\</span>_____________<br />
        &nbsp;_________<span>\/\\\</span>_____________<br />
        &nbsp;&nbsp;_________<span>\/\\\</span>_____________<br />
        &nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\/\\\</span>_____________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\///</span>______________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____<span>/\\\</span>________<span>/\\\</span>______<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<span>\/\\\</span>_______<span>\/\\\</span>______<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<span>\//\\\</span>______<span>/\\\</span>_______<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____<span>\//\\\</span>____<span>/\\\</span>________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______<span>\//\\\</span>__<span>/\\\</span>_________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______<span>\//\\\/\\\</span>__________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________<span>\//\\\\\</span>___________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\//\\\</span>____________<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________<span>\///</span>______________<br />
    </Link >


export const ScrollBasicButton = ({ scrollTo, flip }) =>
    <Link to={scrollTo} smooth={true} offset={0} duration={500} className={flip ? "button basic-button flip" : "button basic-button"}>
        | <br />
        | <br />
        | <br />
        | <br />
        v < br />
    </Link >