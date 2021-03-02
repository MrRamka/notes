import React from 'react';
import { darkTheme, lightTheme, ThemeFields, ThemeType } from './theme';

export const themes: ThemeType = {
    light: lightTheme,
    dark: darkTheme,
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
    setTheme: (theme: ThemeFields) => {},
    autoThemeChange: true,
});
