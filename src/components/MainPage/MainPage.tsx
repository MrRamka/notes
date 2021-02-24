import React, { FC, useContext } from 'react';
import { Header } from '../Header';
import { NotesContainer } from '../NotesContainer';
import { ThemeContext } from '../../theme-context';

export const MainPage: FC = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <>
            <Header />
            <div style={{
                backgroundColor: themeContext.theme.background,
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0,
                overflowX: 'auto'
            }}>
                <div style={{ marginTop: '6rem' }}>
                    <NotesContainer />
                </div>
            </div>

        </>
    );
};
