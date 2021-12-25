import React, { useContext, useState } from "react";
import { useWindowResize, useThrottledFn } from 'beautiful-react-hooks';

export const WindowSizeContext = React.createContext();

export const WindowSizeReporter = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useWindowResize(useThrottledFn((event) => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }));
    return [width, height]
};
export const isDesktopView = () => {
    const { width, _ } = useContext(WindowSizeContext) || { _, _ };
    return width > 812;
};
