import React, { useCallback, useState } from 'react';
import { MainPage } from './components/MainPage';
import { ThemeContext, themes } from './theme-context';

function App() {

    const [themeState, setThemeState] = useState(themes.light);

    const toggleThemeHandler = useCallback(() => {
        setThemeState(themeState === themes.light ? themes.dark : themes.light);
    }, [themeState]);

    return (
        <ThemeContext.Provider value={{ theme: themeState, toggleTheme: toggleThemeHandler}}>
                <MainPage />
        </ThemeContext.Provider>
    );
}

export default App;
