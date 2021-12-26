import React from "react"
import { Element } from 'react-scroll';

export const Screen = ({ id, elementsRefs, onClick, children }) => (
    < Element {...{ id, name: id, ref: elementsRefs.ref(id), onClick, className: "screen" }}  >
        {children}
    </Element >)