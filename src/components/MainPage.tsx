import React, { FC } from 'react';
import { Header } from './Header';
import { Container } from '@material-ui/core';
import { NotesContainer } from './NotesContainer';

export const MainPage: FC = () => {

    return (
        <div>
            <Header />
            <Container maxWidth={false}>
                <NotesContainer />
            </Container>
        </div>
    );
};
