import React from "react"
import { Element } from 'react-scroll';

export const Screen = ({ id, elementsRefs, children }) => (
    < Element id={id} name={id} className="screen" ref={elementsRefs.ref(id)} >
        {children}
    </Element >)