"use client"; // prettier-ignore

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';

export const ThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return <div className={theme}>{children}</div>;
};
