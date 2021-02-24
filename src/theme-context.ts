import React from 'react';
import { darkTheme, lightTheme, ThemeType } from './theme';

export const themes: ThemeType = {
    light: lightTheme,
    dark: darkTheme,
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {
    },
});
