import React, { useContext, useState } from "react";
import { useWindowResize, useWindowScroll, useThrottledFn } from 'beautiful-react-hooks';

export const WindowContext = React.createContext();

// reporters 
export const WindowSizeReporter = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useWindowResize(useThrottledFn(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

    }));
    return [width, height]
};

export const WindowScrollReporter = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);

    useWindowScroll(useThrottledFn(() => {
        setScrollY(window.scrollY);
    }));
    return [scrollY];
};

// calls to context
export const isDesktopView = () => {
    const { width } = useContext(WindowContext) || {};
    return width > 812;
};

export const getScrollY = () => {
    const { scrollY } = useContext(WindowContext) || {};
    return scrollY;
}

export const isOnScreen = ({ multiRef, screenId }) => {
    const screenPosition = multiRef.map.get(screenId)?.childBindings.domNode.offsetTop
    return (screenPosition - window.innerHeight) <= getScrollY()
}