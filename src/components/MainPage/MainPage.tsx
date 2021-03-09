import React, { CSSProperties, FC, useContext, useEffect } from 'react';
import { Header } from '../Header';
import { NotesContainer } from '../NotesContainer';
import { ThemeContext, themes } from '../../theme-context';
import { Footer } from '../Footer';

const TIME_DELTA = 10 * 1000;
const NIGHT  = 18;
const DAY = 6

export const MainPage: FC = () => {

    const themeContext = useContext(ThemeContext);

    const wrapperStyles: CSSProperties  = {
        backgroundColor: themeContext.theme.background,
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        overflowX: 'auto',
    }
    const containerStyles: CSSProperties = {
        marginTop: '6rem'
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            //refactor
            if (themeContext.autoThemeChange){
                if (date.getHours() > NIGHT || date.getHours() < DAY) {
                    themeContext.setTheme(themes.dark);
                } else {
                    themeContext.setTheme(themes.light);
                }
            }
        }, TIME_DELTA);
    }, [themeContext]);


    return (
        <>
            <Header />
            <div style={wrapperStyles}>
                <div style={containerStyles}>
                    <NotesContainer />
                </div>
            </div>

                <Footer/>


        </>
    );
};
