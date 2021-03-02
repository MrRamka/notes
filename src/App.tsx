import React, { useCallback, useState } from 'react';
import { MainPage } from './components/MainPage';
import { ThemeContext, themes } from './theme-context';
import { ThemeFields } from './theme';


function App() {

    const [themeState, setThemeState] = useState<ThemeFields>(themes.light);

    const toggleThemeHandler = useCallback(() => {
        setThemeState(themeState === themes.light ? themes.dark : themes.light);
    }, [themeState]);

    const setTheme = useCallback((theme: ThemeFields) => {
        setThemeState(theme)
    }, [])

    return (
        <ThemeContext.Provider value={{ theme: themeState, setTheme: setTheme, toggleTheme: toggleThemeHandler, autoThemeChange: true }}>
            <MainPage />
        </ThemeContext.Provider>
    );
}

export default App;
