import React, { FC, useCallback, useContext } from 'react';
import { ColumnPaper } from './styles';
import { Link } from '@material-ui/core';
import { ColumnType } from '../../types';
import { Card } from '../Card';
import { ThemeContext } from '../../theme-context';
import { ThemeTypography } from '../ThemeTypography';
import { AddCard } from '../AddCard';

type Props = {
    column: ColumnType,
}

export const Column: FC<Props> = (props) => {

    const { id, title, cards } = props.column;

    const themeContext = useContext(ThemeContext);

    const handleAddColumnClick = useCallback(() => {

    }, []);

    return (
        <div style={{ margin: '0 1rem', width: 300, flexShrink: 0 }}>
            <ColumnPaper elevation={3} style={{ backgroundColor: themeContext.theme.column }}>
                <ThemeTypography styles={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{title}</ThemeTypography>

                {cards.map(card => (
                    <Card key={card.id} card={card} />),
                )}

                <AddCard columnId={id}/>
            </ColumnPaper>
        </div>

    );
};
